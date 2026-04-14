<template>
  <button
    class="search-trigger"
    :aria-label="t('search.open')"
    @click="openModal"
  >
    <search :size="18" />
  </button>

  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="search-backdrop" @click.self="closeModal">
        <div class="search-modal" role="dialog" aria-modal="true">
          <div class="search-modal__header">
            <search :size="20" class="search-modal__icon" />
            <input
              ref="inputRef"
              v-model="query"
              class="search-modal__input"
              :placeholder="t('search.placeholder')"
              type="search"
              autocomplete="off"
            />
            <button
              class="search-modal__close"
              :aria-label="t('search.close')"
              @click="closeModal"
            >
              <x :size="18" />
            </button>
          </div>

          <div class="search-modal__body">
            <template v-if="trimmedQuery && displayResults.length">
              <div class="search-results-meta">
                {{ displayResults.length }}
                {{ t('search.resultsCount', displayResults.length) }}
              </div>
              <ul class="search-results">
                <NuxtLink
                  v-for="r in displayResults"
                  :key="r.item.id"
                  class="search-result"
                  :to="r.item.path"
                >
                  <span class="search-result__icon"
                    ><file-text :size="16"
                  /></span>
                  <div class="search-result__content">
                    <strong class="search-result__title">{{
                      r.item.title
                    }}</strong>
                    <p
                      v-if="r.firstSnippet"
                      class="search-result__snippet"
                      v-html="r.firstSnippet"
                    />
                  </div>
                  <chevron-right :size="16" class="search-result__arrow" />
                </NuxtLink>
              </ul>
            </template>

            <div v-else-if="trimmedQuery" class="search-empty">
              {{ t('search.hint', { query }) }}
            </div>

            <div v-else class="search-hint">
              {{ t('search.hint') }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import Fuse from 'fuse.js'
import { Search, X, FileText, ChevronRight } from 'lucide-vue-next'

const { locale, t } = useI18n()
const { pagesQuery } = usePages(locale)

const isOpen = ref(false)
const query = ref('')
const inputRef = ref(null)

const { data: posts } = await useAsyncData(
  `search-data-${locale.value}`,
  pagesQuery,
  { watch: [locale], server: false, lazy: true }
)

const fuse = computed(
  () =>
    new Fuse(posts.value ?? [], {
      keys: ['title', 'text'],
      includeMatches: true,
      minMatchCharLength: 3,
      threshold: 0.3,
      distance: 100,
      ignoreLocation: true
    })
)

const trimmedQuery = computed(() => query.value.trim())
const result = computed(() => fuse.value.search(toValue(query)))

const getHighlightedSnippets = (
  value,
  indices,
  padding = 80,
  minMatchLen = 3
) => {
  if (!value || !indices?.length) return []
  const meaningful = indices.filter(([s, e]) => e - s + 1 >= minMatchLen)
  if (!meaningful.length) return []

  const clusters = []
  let [cs, ce] = meaningful[0]
  for (const [s, e] of meaningful.slice(1)) {
    if (s <= ce + padding) {
      ce = Math.max(ce, e)
    } else {
      clusters.push([cs, ce])
      ;[cs, ce] = [s, e]
    }
  }
  clusters.push([cs, ce])

  return clusters.map(([matchStart, matchEnd]) => {
    const from = Math.max(0, matchStart - padding)
    const to = Math.min(value.length, matchEnd + padding + 1)

    let snippet = ''
    let cursor = from
    for (const [s, e] of meaningful) {
      if (e < from || s > to) continue
      const cs2 = Math.max(s, from)
      const ce2 = Math.min(e + 1, to)
      snippet += value.slice(cursor, cs2)
      snippet += `<mark>${value.slice(cs2, ce2)}</mark>`
      cursor = ce2
    }
    snippet += value.slice(cursor, to)

    snippet = snippet
      .replace(/<mark>/g, '%%MARK%%')
      .replace(/<\/mark>/g, '%%ENDMARK%%')
      .replace(/<[^>]*>/g, '')
      .replace(/%%MARK%%/g, '<mark>')
      .replace(/%%ENDMARK%%/g, '</mark>')

    const prefix = from > 0 ? '…' : ''
    const suffix = to < value.length ? '…' : ''
    return prefix + snippet + suffix
  })
}

const displayResults = computed(() =>
  result.value.flatMap(r => {
    for (const m of r.matches ?? []) {
      const [firstSnippet] = getHighlightedSnippets(
        m.value,
        m.indices,
        80,
        query.value.length
      )
      if (firstSnippet) return [{ item: r.item, firstSnippet }]
    }
    return []
  })
)

const openModal = () => {
  isOpen.value = true
  nextTick(() => inputRef.value?.focus())
}

const closeModal = () => {
  isOpen.value = false
  query.value = ''
}

onMounted(() => {
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal()
  })
})
</script>

<style scoped>
.search-trigger {
  align-items: center;
  border-radius: 8px;
  display: inline-flex;
  gap: 8px;
  padding: 8px 14px;
  background: transparent;
  border: none;
  color: var(--color-muted, #71717a);
  margin-top: 0.8em;
  height: 50px;
  width: 50px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    border-color 0.15s,
    background 0.15s;
}
.search-trigger:hover {
  background: #f4f4f4;
  border-color: var(--color-border-strong, #a1a1aa);
  color: var(--color-text, #18181b);
}
.search-trigger__label {
  flex: 1;
  text-align: left;
  white-space: nowrap;
}
.search-trigger__kbd {
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, #e4e4e7);
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: inherit;
  color: var(--color-muted, #71717a);
  line-height: 1.6;
}

/* ── Backdrop ── */
.search-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: clamp(48px, 10vh, 120px);
}

/* ── Modal ── */
.search-modal {
  width: min(640px, calc(100vw - 32px));
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, #e4e4e7);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 160px);
}

/* ── Modal header ── */
.search-modal__header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-border, #e4e4e7);
  flex-shrink: 0;
}
.search-modal__icon {
  color: var(--color-muted, #71717a);
  flex-shrink: 0;
}
.search-modal__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: var(--color-text, #18181b);
  line-height: 1.5;
  min-width: 0;
}
.search-modal__input::placeholder {
  color: var(--color-muted, #a1a1aa);
}
/* remove native search clear button */
.search-modal__input::-webkit-search-cancel-button {
  display: none;
}
.search-modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: 1px solid var(--color-border, #e4e4e7);
  border-radius: 6px;
  color: var(--color-muted, #71717a);
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  flex-shrink: 0;
}
.search-modal__close:hover {
  background: var(--color-surface, #f4f4f5);
  color: var(--color-text, #18181b);
}

/* ── Modal body ── */
.search-modal__body {
  overflow-y: auto;
  overscroll-behavior: contain;
}

/* ── Results list ── */
.search-results {
  list-style: none;
  margin: 0;
  padding: 6px;
}
.search-result {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.12s;
}
.search-result:hover {
  background: var(--color-surface, #f4f4f5);
}
.search-result__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-surface, #f4f4f5);
  border: 1px solid var(--color-border, #e4e4e7);
  border-radius: 6px;
  color: var(--color-muted, #71717a);
  flex-shrink: 0;
  margin-top: 1px;
}
.search-result__content {
  flex: 1;
  min-width: 0;
}
.search-result__title {
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text, #18181b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-result__snippet {
  margin: 4px 0 0;
  font-size: 0.8125rem;
  color: var(--color-muted, #71717a);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Fuse highlight marks */
.search-result__snippet :deep(mark) {
  background: transparent;
  color: var(--color-accent, #2563eb);
  font-weight: 600;
}
.search-result__arrow {
  color: var(--color-muted, #a1a1aa);
  flex-shrink: 0;
  margin-top: 3px;
  transition: transform 0.12s;
}
.search-result:hover .search-result__arrow {
  transform: translateX(2px);
  color: var(--color-text, #18181b);
}

/* ── Empty / hint states ── */
.search-empty,
.search-hint {
  padding: 32px 16px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-muted, #a1a1aa);
}

/* ── Modal transition ── */
.modal-enter-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.modal-leave-active {
  transition:
    opacity 0.14s ease,
    transform 0.14s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .search-modal {
  transform: translateY(-12px) scale(0.98);
}
.modal-leave-to .search-modal {
  transform: translateY(-8px) scale(0.99);
}

.search-results-meta {
  padding: 8px 18px 2px;
  font-size: 0.75rem;
  color: var(--color-muted, #a1a1aa);
  border-bottom: 1px solid var(--color-border, #e4e4e7);
  flex-shrink: 0;
}
</style>

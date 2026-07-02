<template>
  <Teleport v-if="variant === 'variant_b'" to="body">
    <Transition name="modal">
      <div
        v-if="visible"
        class="overlay"
        @click.self="close"
      >
        <div class="popup">
          <button
            class="close-btn"
            @click="close"
          >
            ×
          </button>

          <div class="content">
            <div class="left">
              <div class="badge">{{$t("exit-popup.badge")}}</div>

              <h2>{{$t("exit-popup.title")}}</h2>

              <p>{{$t("exit-popup.description")}}</p>

              <a
                    class="navbar-item signup"
                    :href="`https://account.cg-wire.com/signup?locale=${$i18n.locale}`"
                >
                    {{ $t('header sign up') }}
                </a>
            </div>

            <div class="right">
              <div class="illustration">
                <NuxtImg
                    src="/images/logo-kitsu.svg"
                    alt="CGWire"
                    width=150
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const variant = useABTest('exit_intent_popup_test', [
  { name: 'control', weight: 50 },
  { name: 'variant_b', weight: 50 },
])

const visible = ref(false);
const email = ref("");

function showPopup() {
  const alreadySeen = sessionStorage.getItem("exit-popup");

  if (!alreadySeen) {
    visible.value = true;
    sessionStorage.setItem("exit-popup", true);
  }
}

function close() {
  visible.value = false;
}

function submit() {
  console.log("Email:", email.value);

  close();
}

function handleMouseLeave(e) {
  if (
    e.clientY <= 0 &&
    !visible.value
  ) {
    showPopup();
  }
}

onMounted(() => {
  document.addEventListener(
    "mouseleave",
    handleMouseLeave
  );
});

onBeforeUnmount(() => {
  document.removeEventListener(
    "mouseleave",
    handleMouseLeave
  );
});
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(7, 11, 19, 0.82);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup {
  width: min(720px, 92vw);
  background: #171c28;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.45);
  position: relative;
}

.content {
  display: flex;
}

.left {
  flex: 1;
  padding: 42px;
}

.right {
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:
    linear-gradient(
      135deg,
      #2d4fff,
      #596fff
    );
}

.illustration {
  font-size: 72px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(89, 111, 255, 0.15);
  color: #8ea2ff;
  font-size: 13px;
  margin-bottom: 18px;
}

h2 {
  color: white;
  font-size: 34px;
  margin-bottom: 12px;
}

p {
  color: #b8c0d0;
  line-height: 1.6;
  margin-bottom: 24px;
}

form {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  border: none;
  border-radius: 12px;
  padding: 14px;
  background: #252b3b;
  color: white;
}

button[type="submit"] {
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  background: #4d66ff;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
  color: white;
  cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
  transition: all .25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .popup,
.modal-leave-to .popup {
  transform: scale(.95);
}

.popup {
  width: min(720px, 92vw);
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
}

.content {
  display: flex;
}

.left {
  flex: 1;
  padding: 42px;
  background: white;
}

.right {
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    #2ecc71,
    #27ae60
  );
}

.illustration {
  font-size: 72px;
  color: white;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(46, 204, 113, 0.12);
  color: #1f8f4a;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 18px;
}

h2 {
  color: #1f2937;
  font-size: 34px;
  margin-bottom: 12px;
}

p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;
}

.signup {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 12px;
  background: #2ecc71;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.signup:hover {
  background: #27ae60;
  transform: translateY(-1px);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f3f4f6;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #e5e7eb;
  color: #111827;
}
</style>
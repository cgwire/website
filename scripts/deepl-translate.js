#!/usr/bin/env node
/*
 * DeepL translation helper.
 *
 * Usage:
 *   node scripts/deepl-translate.js --to JA "text to translate"
 *   echo "text" | node scripts/deepl-translate.js --to JA
 *   node scripts/deepl-translate.js --to JA --from EN --html "<p>text</p>"
 *
 * Flags:
 *   --to        Target language code (required). e.g. JA, EN, FR, DE.
 *   --from      Source language code (optional). DeepL auto-detects otherwise.
 *   --html      Set tag_handling=html so HTML tags are preserved untouched.
 *   --formality DeepL formality setting: default | prefer_more | prefer_less |
 *               more | less. Only applies to supported targets
 *               (JA, DE, FR, ES, IT, PL, PT-PT, PT-BR, RU, NL).
 *
 * Environment:
 *   DEEPL_API_KEY  Required. Free-tier keys end with :fx and are routed to
 *                  api-free.deepl.com; paid keys go to api.deepl.com.
 *
 * The translated text is written to stdout. Errors go to stderr.
 */

const args = process.argv.slice(2)

function popFlag(name) {
  const i = args.indexOf(name)
  if (i === -1) return undefined
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}

function popBool(name) {
  const i = args.indexOf(name)
  if (i === -1) return false
  args.splice(i, 1)
  return true
}

const targetLang = popFlag('--to')
const sourceLang = popFlag('--from')
const formality = popFlag('--formality')
const html = popBool('--html')
const positional = args.join(' ').trim()

if (!targetLang) {
  process.stderr.write(
    'usage: deepl-translate.js --to <LANG> [--from <LANG>] [--html] ' +
      '[--formality default|prefer_more|prefer_less] [text]\n' +
      '       reads stdin if no text given\n'
  )
  process.exit(1)
}

const apiKey = process.env.DEEPL_API_KEY
if (!apiKey) {
  process.stderr.write('error: DEEPL_API_KEY env var is not set\n')
  process.exit(1)
}

const endpoint = apiKey.endsWith(':fx')
  ? 'https://api-free.deepl.com/v2/translate'
  : 'https://api.deepl.com/v2/translate'

async function readStdin() {
  return new Promise(resolve => {
    let data = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', chunk => (data += chunk))
    process.stdin.on('end', () => resolve(data))
  })
}

async function main() {
  const text = positional || (await readStdin())
  if (!text.trim()) {
    process.stderr.write('error: no text to translate\n')
    process.exit(1)
  }

  const body = new URLSearchParams()
  body.append('auth_key', apiKey)
  body.append('text', text)
  body.append('target_lang', targetLang.toUpperCase())
  if (sourceLang) body.append('source_lang', sourceLang.toUpperCase())
  if (html) body.append('tag_handling', 'html')
  if (formality) body.append('formality', formality)
  body.append('preserve_formatting', '1')

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })

  if (!res.ok) {
    const errText = await res.text()
    process.stderr.write(`deepl error ${res.status}: ${errText}\n`)
    process.exit(1)
  }

  const json = await res.json()
  if (!json.translations || !json.translations[0]) {
    process.stderr.write(`unexpected deepl response: ${JSON.stringify(json)}\n`)
    process.exit(1)
  }

  process.stdout.write(json.translations[0].text)
}

main().catch(err => {
  process.stderr.write(`error: ${err.message}\n`)
  process.exit(1)
})

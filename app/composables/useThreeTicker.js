/**
 * useThreeTicker
 *
 * A single shared requestAnimationFrame loop that all useImageScene
 * instances register/unregister a per-frame callback with. Without this,
 * a landing page with e.g. 12 <ImageScene> components would spin up 12
 * independent rAF loops doing effectively the same scheduling work.
 *
 * Module-scoped by design: every import of this file shares the same
 * `callbacks` set and `frameId`, regardless of how many components call
 * useThreeTicker().
 */

const callbacks = new Set()
let frameId = null

function tick() {
  frameId = requestAnimationFrame(tick)
  for (const cb of callbacks) cb()
}

export function useThreeTicker() {
  function add(cb) {
    callbacks.add(cb)
    if (frameId === null) tick()
  }

  function remove(cb) {
    callbacks.delete(cb)
    if (callbacks.size === 0 && frameId !== null) {
      cancelAnimationFrame(frameId)
      frameId = null
    }
  }

  return { add, remove }
}
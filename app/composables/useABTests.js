function pickWeightedVariant(variants) {
  const total = variants.reduce((sum, v) => sum + v.weight, 0)
  let r = Math.random() * total
  for (const v of variants) {
    if (r < v.weight) return v.name
    r -= v.weight
  }
  return variants[variants.length - 1].name
}

export function useABTest(testId, variants) {
  const cookie = useCookie(`ab_${testId}`, {
    maxAge: 60 * 60 * 24 * 90, // 90 days
    sameSite: 'lax',
  })

  if (!cookie.value) {
    cookie.value = pickWeightedVariant(variants)
  }


    if(import.meta.client && window._paq){
    window._paq.push(['setCustomDimension', 1, cookie.value])
    window._paq.push(['trackEvent', 'AB Test', '1', cookie.value])
    }

  return cookie // reactive ref, e.g. 'A' or 'B'
}
// Shared cookie / tracking consent state, persisted in localStorage under the
// 'cookie-consent' key ('true' = accepted, 'false' = declined, null = undecided).
// Crisp only starts once consent is accepted; the CookieConsent banner sets it.
export const useCookieConsent = () => {
  const consent = useState('cookie-consent', () => {
    if (import.meta.client) return localStorage.getItem('cookie-consent')
    return null
  })

  const accepted = computed(() => consent.value === 'true')
  const decided = computed(
    () => consent.value === 'true' || consent.value === 'false'
  )

  const set = value => {
    consent.value = value
    if (import.meta.client) localStorage.setItem('cookie-consent', value)
  }

  return {
    consent,
    accepted,
    decided,
    accept: () => set('true'),
    decline: () => set('false')
  }
}

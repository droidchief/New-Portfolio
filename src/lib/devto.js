const USERNAME = 'droidchief'
const CACHE_KEY = 'devto_articles_cache'
const CACHE_TTL_MS = 5 * 60 * 1000

export async function fetchArticles() {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      const { data, ts } = JSON.parse(cached)
      if (Date.now() - ts < CACHE_TTL_MS) return data
    }
  } catch {
    // ignore cache read errors
  }

  const res = await fetch(`https://dev.to/api/articles?username=${USERNAME}`)
  if (!res.ok) throw new Error(`Failed to fetch articles (${res.status})`)
  const data = await res.json()
  const sorted = [...data].sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  )

  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: sorted, ts: Date.now() }))
  } catch {
    // ignore cache write errors (e.g. storage full/disabled)
  }

  return sorted
}

export async function fetchArticle(slug) {
  const res = await fetch(`https://dev.to/api/articles/${USERNAME}/${slug}`)
  if (!res.ok) throw new Error(`Failed to fetch article (${res.status})`)
  return res.json()
}

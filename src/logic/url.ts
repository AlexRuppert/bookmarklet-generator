export function getParametersFromUrl() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  let defaults = {
    script: '',
    css: '',
    name: '',
  }
  return Object.assign(defaults, params)
}

export function setParametersToUrl(parameters: { [s: string]: string }) {
  const urlSearchParams = new URLSearchParams(window.location.search)
  Object.entries(parameters).forEach(([key, value]) => {
    urlSearchParams.set(key, value)
  })
  const url = new URL(window.location.href)
  url.search = urlSearchParams.toString()
  if (url.toString() !== window.location.toString())
    window.history.pushState(null, '', url.toString())
}

window.onload = () => {
  function debounce(fn, wait) {
    let timer
    return function () {
      const later = () => {
        timer = undefined
        fn()
      }
      clearTimeout(timer)
      timer = setTimeout(later, wait)
    }
  }

  const [
    nameInput,
    scriptInput,
    resultContainer,
    link,
    linkText,
    clear,
    share,
  ] = [
    '#input-name',
    'textarea',
    '#result',
    '#result a',
    '#result a span',
    '#clear',
    '#share',
  ].map((el) => document.querySelector(el))
  nameInput.focus()

  clear.addEventListener('click', () => {
    clearScript()
  })

  const createBookmarklet = () => {
    const value = scriptInput.value
    const name = nameInput.value
    link.href = `javascript:(()=>{${value}})()`
    linkText.innerText = name || 'Bookmark Me'
    const url = new URL(window.location.href)
    url.searchParams.set('script', value)
    url.searchParams.set('name', name)

    share.href = url
    toggleResults(value.trim().length > 0)
  }
  const setName = (value) => {
    if (value != null) {
      nameInput.value = value
      createBookmarklet()
    }
  }

  const setScript = (value) => {
    if (value != null) {
      scriptInput.value = value
      createBookmarklet()
    }
  }
  const clearScript = () => {
    setName('')
    setScript('')
    nameInput.focus()
  }

  const toggleResults = (isVisible) => {
    const action = isVisible ? 'remove' : 'add'
    resultContainer.classList[action]('opaque')
    share.classList[action]('opaque')
  }

  const updateFromUrl = () => {
    const url = new URL(window.location.href)
    setScript(url.searchParams.get('script'))
    setName(url.searchParams.get('name'))
  }

  ;[scriptInput, nameInput].forEach((el) =>
    el.addEventListener('input', debounce(createBookmarklet, 100)),
  )

  clearScript()
  updateFromUrl()
  window.addEventListener('locationchange', updateFromUrl)
}

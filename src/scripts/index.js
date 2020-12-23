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
    cssInput,
    resultContainer,
    link,
    linkText,
    clear,
    share,
    toggleAdvanced,
  ] = [
    '#input-name',
    '#input',
    '#css',
    '#result',
    '#result a',
    '#result a span',
    '#clear',
    '#share',
    '#toggle-advanced',
  ].map((el) => document.querySelector(el))
  nameInput.focus()

  clear.addEventListener('click', () => {
    clearScript()
  })

  toggleAdvanced.addEventListener('click', () => {
    cssInput.classList.toggle('hidden')
  })

  const createBookmarklet = () => {
    let script = scriptInput.value.trim()
    const css = cssInput.value.trim()
    const name = nameInput.value.trim()

    const url = new URL(window.location.href)
    url.searchParams.set('script', script)
    url.searchParams.set('css', css)
    url.searchParams.set('name', name)

    if (css.length > 0)
      script =
        `const style=document.createElement('style');style.textContent=\`${css}\`;document.head.append(style);` +
        script

    link.href = `javascript:(()=>{${script}})()`
    linkText.innerText = name || 'Bookmark Me'

    share.href = url
    toggleResults(script.length > 0)
  }

  const setInput = (input, value) => {
    if (value != null) {
      input.value = value
      createBookmarklet()
    }
  }

  const clearScript = () => {
    ;[nameInput, scriptInput, scriptInput].forEach((el) => setInput(el, ''))
    nameInput.focus()
  }

  const toggleResults = (isVisible) => {
    const action = isVisible ? 'remove' : 'add'
    ;[resultContainer, clear, share].forEach((el) =>
      el.classList[action]('opaque'),
    )
  }

  const updateFromUrl = () => {
    const url = new URL(window.location.href)
    const cssParam = url.searchParams.get('css')
    setInput(scriptInput, url.searchParams.get('script'))
    setInput(cssInput, cssParam)
    setInput(nameInput, url.searchParams.get('name'))

    if (cssParam && cssParam.trim().length) {
      cssInput.classList.remove('hidden')
    }
  }

  ;[scriptInput, nameInput, cssInput].forEach((el) =>
    el.addEventListener('input', debounce(createBookmarklet, 100)),
  )

  clearScript()
  updateFromUrl()
  window.addEventListener('locationchange', updateFromUrl)
}

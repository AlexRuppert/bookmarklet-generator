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

  const [inputName, input, link, linkText, clear, share] = [
    '#input-name',
    'textarea',
    '#result a',
    '#result a span',
    '#clear',
    '#share',
  ].map((el) => document.querySelector(el))
  inputName.focus()

  clear.addEventListener('click', () => {
    clearInput()
  })

  const createBookmarklet = () => {
    const value = input.value
    const name = inputName.value
    link.href = `javascript:(()=>(${value}))()`
    linkText.innerText = name || 'Bookmark Me'
    const url = new URL(window.location.href)
    url.searchParams.set('q', value)
    share.href = url
  }
  const setInputName = (value) => {
    if (value != null) {
      inputName.value = value
    }
  }
  const clearInput = () => {
    setInputName('')
    setInput('')
    inputName.focus()
  }
  const setInput = (value) => {
    if (value != null) {
      input.value = value
    }
  }

  const updateFromUrl = () => {
    setInput(new URL(window.location.href).searchParams.get('q'))
  }

  ;[input, inputName].forEach((el) =>
    el.addEventListener('input', debounce(createBookmarklet, 100)),
  )

  clearInput()
  updateFromUrl()
  window.addEventListener('locationchange', updateFromUrl)
}

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
  const input = document.querySelector('textarea')
  const link = document.querySelector('#result a')

  document.querySelector('#clear').addEventListener('click', () => {})

  const createBookmarklet = () => {
    const value = input.value
    link.href = `javascript:(()=>(${value}))()`
    new URL(window.location.href).searchParams.set('q', link.href)
  }
  const setInput = (value) => {
    if (value != null) {
      input.value = value
      input.focus()
    }
  }

  const updateFromUrl = () => {
    setInput(new URL(window.location.href).searchParams.get('q'))
  }

  input.addEventListener('input', debounce(createBookmarklet, 100))
  setInput('')
  updateFromUrl()
  window.addEventListener('locationchange', updateFromUrl)
}

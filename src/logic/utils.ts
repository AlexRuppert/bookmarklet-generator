export const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent)
const platform =
  (navigator as any)?.userAgentData?.platform ||
  navigator?.platform ||
  'unknown'
export const isMac = platform.indexOf('Mac') === 0

import { fromUint8Array, fromBase64, toUint8Array } from 'js-base64'
import { deflate, inflate } from 'pako'
export const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent)
const platform =
  (navigator as any)?.userAgentData?.platform ||
  navigator?.platform ||
  'unknown'
export const isMac = platform.indexOf('Mac') === 0
const textEncode = new TextEncoder()
export function serialize(obj: any) {
  return (
    'pako:' +
    fromUint8Array(
      deflate(textEncode.encode(JSON.stringify(obj)), { level: 9 })
    )
  )
}
export function deserialize(str) {
  const SERIALIZATION_TYPE = 'pako:'
  return JSON.parse(
    inflate(toUint8Array(str.slice(SERIALIZATION_TYPE.length)), {
      to: 'string',
    })
  )
}

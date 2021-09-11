const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  if (typeof window === 'undefined') return // no Next Server/Static não tem window

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {
  if (typeof window === 'undefined') return // no Next Server/Static não tem window

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}

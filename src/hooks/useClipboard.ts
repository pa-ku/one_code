import { useState, useCallback, useEffect } from 'react'

export function useClipboard(duration = 2000) {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isCopied, duration])

  function encodeToUrlFromLocalStorage() {
    const rawCode = localStorage.getItem('myCode')
    const encodedCode = encodeURIComponent(rawCode)
    const currentUrl = `${window.location.origin}${window.location.pathname}?code=${encodedCode}`
    return currentUrl
  }

  const copyToClipboard = useCallback(async (text: string) => {
    const code = encodeToUrlFromLocalStorage()
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }, [])

  return { isCopied, copyToClipboard }
}

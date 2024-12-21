import { decode, encode } from 'js-base64'
import { useConfig } from '../context/ConfigContext'
import { useCallback, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function useManageCode() {
  const [code, setCode] = useState('')
  const { saveCode } = useConfig()

  const replaceUrl = useCallback(
    (code) => {
      if (saveCode) {
        const hashedCode = encode(code)
        window.history.replaceState(null, '', `/${hashedCode}`)
      }
    },
    [saveCode]
  )

  const saveUrlOnLoad = useCallback(() => {
    const urlPath = window.location.pathname.slice(1)
    if (urlPath === 'undefined') {
      window.history.replaceState(null, '', `/`)
      localStorage.setItem('urlPath', '')
      return
    }
    if (!urlPath) {
      const localPath = localStorage.getItem('urlPath')
      window.history.replaceState(null, '', `/${localPath}`)
      const decodedCode = decode(localPath)
      setCode(decodedCode)
    } else {
      if (saveCode) {
        localStorage.setItem('urlPath', urlPath)
      }
      const decodedCode = decode(urlPath)
      setCode(decodedCode)
    }
  }, [])

  const saveCodeInLocal = useDebouncedCallback((value) => {
    if (saveCode) {
      const encodedData = encode(value)
      localStorage.setItem('urlPath', encodedData)
    }
  }, 700)

  useEffect(() => {
    if (saveCode) {
      saveCodeInLocal(code)
      return
    } else {
      localStorage.setItem('urlPath', '')
      return
    }
  }, [saveCode])

  useEffect(() => {
    saveUrlOnLoad()
  }, [])

  return { replaceUrl, saveCodeInLocal, setCode, code }
}
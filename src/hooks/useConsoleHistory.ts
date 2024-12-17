import { useState, useCallback } from 'react'

export function useConsoleHistory() {
  const [history, setHistory] = useState<string[]>([])

  const addToHistory = useCallback((message: string) => {
    setHistory((prev) => [...prev, message])
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  return {
    history,
    addToHistory,
    clearHistory,
  }
}

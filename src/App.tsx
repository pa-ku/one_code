import React, { useState, useCallback, useEffect } from 'react'
import { Console } from './components/Console'
import { Editor } from './components/Editor'
import { ResizeHandle } from './components/ResizeHandle'
import { createCustomConsole } from './utils/customConsole'
import { useDebounce } from './hooks/useDebounce'
import { useConsoleHistory } from './hooks/useConsoleHistory'
import { useConfig } from './context/ConfigContext'
import useLocalStorage from 'use-local-storage'

export default function App() {
  const [code, setCode] = useLocalStorage('code', '')
  const { history, addToHistory, clearHistory } = useConsoleHistory()
  const [leftPanelWidth, setLeftPanelWidth] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const debouncedCode = useDebounce(code, 300)
  const { autoRun, invertLayout } = useConfig()

  const executeCode = useCallback(
    (input: string) => {
      clearHistory()
      const customConsole = createCustomConsole(addToHistory)

      try {
        const wrappedCode = `
        return (function() {
          const console = arguments[0];
          ${input}
        })
      `

        new Function(wrappedCode)()(customConsole)
      } catch (error) {
        customConsole.error(error)
      }
    },
    [addToHistory, clearHistory]
  )

  const handleEditorExecution = useCallback(() => {
    executeCode(code)
  }, [code, executeCode])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    e.preventDefault()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const container = document.getElementById('panels-container')
      if (!container) return

      const containerRect = container.getBoundingClientRect()

      const newWith = invertLayout
        ? ((e.clientX - containerRect.left) / containerRect.width) * 100
        : ((containerRect.right - e.clientX) / containerRect.width) * 100

      const clampedWidth = Math.min(Math.max(newWith, 20), 65)
      setLeftPanelWidth(clampedWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  useEffect(() => {
    if (autoRun) {
      executeCode(debouncedCode)
    }
  }, [debouncedCode, autoRun, executeCode])

  return (
    <div className='h-screen w-screen relative  bg-gray-900 text-white overflow-hidden'>
      <div
        id='panels-container'
        className={`flex w-full h-full    select-none ${
          invertLayout ? 'flex-row' : 'flex-row-reverse'
        }`}
        style={{ userSelect: 'none' }}
      >
        <div
          className='bg-gray-800 overflow-hidden'
          style={{ width: `${leftPanelWidth}%` }}
        >
          <Console onExecute={executeCode} history={history} />
        </div>
        <ResizeHandle onMouseDown={handleMouseDown} />
        <div
          className='bg-gray-800 overflow-hidden'
          style={{ width: `${100 - leftPanelWidth}%` }}
        >
          <Editor
            value={code}
            onChange={(value) => setCode(value || '')}
            onExecute={handleEditorExecution}
          />
        </div>
      </div>
    </div>
  )
}

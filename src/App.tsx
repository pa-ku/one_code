import { useCallback, useEffect } from 'react'
import { Console } from './components/Console'
import { Editor } from './components/Editor'
import { ResizeHandle } from './components/ResizeHandle'
import { createCustomConsole } from './utils/customConsole'
import { useDebounce } from './hooks/useDebounce'
import { useConsoleHistory } from './hooks/useConsoleHistory'
import { useConfig } from './context/ConfigContext'
import useLocalStorage from 'use-local-storage'
import { usePanelResize } from './hooks/usePanelResize'
import { createExecutionContext, executeCode } from './utils/codeExecutor'

export default function App() {
  const [code, setCode] = useLocalStorage('code', '')
  const { history, addToHistory, clearHistory } = useConsoleHistory()
  const { leftPanelWidth, handleMouseDown } = usePanelResize()
  const { autoRun, invertLayout } = useConfig()
  const debouncedCode = useDebounce(code, 300)

  const handleExecution = useCallback(
    async (input: string) => {
      clearHistory()
      const customConsole = createCustomConsole(addToHistory)
      const context = createExecutionContext(customConsole)

      await executeCode(input, context)
    },
    [addToHistory, clearHistory]
  )

  const handleEditorExecution = useCallback(() => {
    handleExecution(code)
  }, [code, handleExecution])

  useEffect(() => {
    if (autoRun) {
      handleExecution(debouncedCode)
    }
  }, [debouncedCode, autoRun, handleExecution])

  useEffect(() => {
    if (autoRun) {
      handleExecution(debouncedCode)
    }
  }, [debouncedCode, autoRun, executeCode])

  return (
    <div className='h-screen w-screen relative   bg-gray-900 text-white overflow-hidden'>
      <div
        id='panels-container'
        className={`flex w-full h-full     select-none ${
          invertLayout ? 'flex-row' : 'flex-row-reverse'
        }`}
        style={{ userSelect: 'none' }}
      >
        <div
          className='bg-gray-800 overflow-hidden'
          style={{ width: `${leftPanelWidth}%` }}
        >
          <Console history={history} />
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

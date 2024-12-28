import { useCallback, useEffect } from 'react'
import { Console } from './components/Console'
import { Editor } from './components/Editor'
import { ResizeHandle } from './components/ResizeHandle'
import { createCustomConsole } from './utils/customConsole'
import { useDebounce } from './hooks/useDebounce'
import { useConsoleHistory } from './hooks/useConsoleHistory'
import { useConfig } from './context/ConfigContext'
import { usePanelResize } from './hooks/usePanelResize'
import { createExecutionContext, executeCode } from './utils/codeExecutor'

import useManageCode from './hooks/useManageCode'
import { EditorHeader } from './components/EditorHeader'

export default function App() {
  const { replaceUrl, saveCodeInLocal, setCode, code } = useManageCode()

  const { history, addToHistory, clearHistory } = useConsoleHistory()
  const { leftPanelWidth, handleMouseDown } = usePanelResize()
  const { autoRun, invertLayout, saveCode } = useConfig()
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
  const executeWithButton = useCallback(() => {
    handleExecution(code)
  }, [code, handleExecution])

  useEffect(() => {
    if (autoRun) {
      handleExecution(debouncedCode)
    }
    if (saveCode) {
      replaceUrl(debouncedCode)
      return
    }
    replaceUrl('/')
  }, [debouncedCode, saveCode])

  function handleEditorChange(value: string | undefined) {
    saveCodeInLocal(value)
    setCode(value || '')
  }

  return (
    <div className='h-screen w-screen relative   bg-gray-900 text-white overflow-hidden'>
      <div
        id='panels-container'
        className={`flex w-full h-full  pl-14   select-none ${
          invertLayout ? 'flex-row' : 'flex-row-reverse'
        }`}
        style={{ userSelect: 'none' }}
      >
        <EditorHeader onExecute={executeWithButton} />

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
            code={code}
            onChange={handleEditorChange}
            executeWithButton={executeWithButton}
          />
        </div>
      </div>
    </div>
  )
}

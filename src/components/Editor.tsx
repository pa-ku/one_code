import MonacoEditor from '@monaco-editor/react'
import { useConfig } from '../context/ConfigContext'
import { EditorHeader } from './EditorHeader'
import { PanelTopOpen } from 'lucide-react'
import { handleEditorMount } from '../utils/handleEditorMount'

interface EditorProps {
  code: string
  onChange: (value: string | undefined) => void
  executeWithButton: () => void
}

export function Editor({ code, onChange, executeWithButton }: EditorProps) {
  const { openConfig, openMenu, lineNum, formatOnSave, fontSize } = useConfig()

  return (
    <div className='h-full relative flex flex-col'>
      <button
        onClick={openMenu}
        className={`bg-primay-500  mr-2 rounded-lg text-primary-500 hover:bg-accentbg flex items-center justify-center absolute top-2 z-50 right-2 duration-300 ${
          openConfig ? 'scale-0' : ''
        }`}
      >
        <PanelTopOpen />
      </button>
      <EditorHeader onExecute={executeWithButton} />
      <div
        className={`${
          openConfig ? 'pt-12 ' : 'pt-0 '
        } h-screen flex w-full duration-500`}
      >
        <div className='flex-1 bg-background-400 duration-500'>
          <MonacoEditor
            height='100%'
            defaultLanguage='javascript'
            theme='mosqueta-dark'
            value={code}
            onChange={onChange}
            options={{
              minimap: { enabled: false },
              fontSize: fontSize,
              lineNumbers: lineNum ? 'on' : 'off',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: 'on',
              suggestOnTriggerCharacters: true,
              snippetSuggestions: 'top',
              tabSize: 2,
              autoIndent: 'full',
              formatOnPaste: formatOnSave,
              formatOnType: formatOnSave,
              padding: { top: 10, bottom: 10 },
            }}
            onMount={handleEditorMount}
          />
        </div>
      </div>
    </div>
  )
}

import MonacoEditor from '@monaco-editor/react'
import { useConfig } from '../context/ConfigContext'
import { EditorHeader } from './EditorHeader'
import { PanelBottomClose } from 'lucide-react'
import { handleEditorMount } from '../utils/handleEditorMount'

interface EditorProps {
  value: string
  onChange: (value: string | undefined) => void
  onExecute: () => void
}

export function Editor({ value, onChange, onExecute }: EditorProps) {
  const { openConfig, openMenu } = useConfig()

  return (
    <div className='h-full relative flex flex-col'>
      <button
        onClick={openMenu}
        className='bg-primay-500 p-1 mr-2 rounded-lg text-accent hover:bg-accentbg flex items-center justify-center absolute top-0 z-50 right-2'
      >
        <PanelBottomClose />
      </button>
      <EditorHeader onExecute={onExecute} />
      <div
        className={`flex-1 py-5  bg-background-400 duration-500 ${
          openConfig && 'pt-16 '
        }`}
      >
        <MonacoEditor
          height='100%'
          defaultLanguage='javascript'
          theme='mosqueta-dark'
          value={value}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
            fontSize: 18,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
          onMount={handleEditorMount}
        />
      </div>
    </div>
  )
}

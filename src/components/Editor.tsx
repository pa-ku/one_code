import { EditorHeader } from './EditorHeader'
import { PanelBottomClose } from 'lucide-react'
import MonacoEditor, { OnMount } from '@monaco-editor/react'
import { mosquetaDarkTheme } from '../utils/customThemes'
import { useConfig } from '../context/ConfigContext'

interface EditorProps {
  value: string
  onChange: (value: string | undefined) => void
  onExecute: () => void
  autoRun: boolean
}

export function Editor({ value, onChange, onExecute }: EditorProps) {
  const handleEditorMount: OnMount = (editor, monaco) => {
    // Registrar el tema personalizado
    monaco.editor.defineTheme('mosqueta-dark', mosquetaDarkTheme)
    // Aplicar el tema
    monaco.editor.setTheme('mosqueta-dark')
  }

  const { openConfig, openMenu } = useConfig()

  return (
    <div className='h-full relative flex flex-col'>
      <button
        onClick={openMenu}
        className='bg-primay-500 size-10 rounded-full text-primary-500 absolute top-0 z-50 right-2'
      >
        <PanelBottomClose />
      </button>
      <EditorHeader onExecute={onExecute} />
      <div
        className={`flex-1 py-5 bg-background-400 duration-500 ${
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

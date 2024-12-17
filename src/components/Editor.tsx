import MonacoEditor from '@monaco-editor/react'
import { useConfig } from '../context/ConfigContext'
import { EditorHeader } from './EditorHeader'
import { PanelTopOpen } from 'lucide-react'
import { handleEditorMount } from '../utils/handleEditorMount'

interface EditorProps {
  value: string
  onChange: (value: string | undefined) => void
  onExecute: () => void
}

export function Editor({ value, onChange, onExecute }: EditorProps) {
  const { openConfig, openMenu, lineNum } = useConfig()

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 18,
    lineNumbers: lineNum ? 'on' : 'off',
    roundedSelection: false,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    wordWrap: 'on',
    suggestOnTriggerCharacters: true,
    snippetSuggestions: 'on',
    tabSize: 2,
  }

  return (
    <div className='h-full relative flex flex-col'>
      <button
        onClick={openMenu}
        className={`bg-primay-500 p-1 mr-2 rounded-lg text-accent hover:bg-accentbg flex items-center justify-center absolute top-2 z-50 right-2 duration-300 ${
          openConfig ? 'scale-0' : ''
        }`}
      >
        <PanelTopOpen />
      </button>
      <EditorHeader onExecute={onExecute} />
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
            value={value}
            onChange={onChange}
            options={editorOptions}
            onMount={handleEditorMount}
          />
        </div>
      </div>
    </div>
  )
}

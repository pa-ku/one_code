import { OnMount } from '@monaco-editor/react'
import { mosquetaDarkTheme } from '../assets/themes/mosqueta.theme'
import { javascriptSnippets } from '../assets/snippets/javascript.snippets'

export const handleEditorMount: OnMount = (editor, monaco) => {
  monaco.editor.defineTheme('mosqueta-dark', mosquetaDarkTheme)
  monaco.editor.setTheme('mosqueta-dark')

  // Registrar snippets
  monaco.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems: () => {
      return {
        suggestions: javascriptSnippets(monaco),
      }
    },
  })
}

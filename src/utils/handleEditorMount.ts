import { OnMount } from "@monaco-editor/react";
import { jsSnippets } from "../assets/snippets/javascript.snippets";
import * as prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import estreeFormater from "prettier/plugins/estree";

//Configuración de monaco al iniciar
export const handleEditorMount: OnMount = (editor, monaco) => {
  monaco.editor.defineTheme("mosqueta-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "#8f9bc1", fontStyle: "italic" },
      { token: "keyword", foreground: "#e67cbe" },
      { token: "number", foreground: "#ffec80" },
      { token: "string", foreground: "#f8ff97" },
      { token: "storage", foreground: "#ffad66" },
    ],
    colors: {
      "editor.background": "#232935",
      "editor.lineHighlightBackground": "#232935",
    },
  });
  monaco.editor.setTheme("mosqueta-dark");

  // Snippets
  monaco.languages.registerCompletionItemProvider(
    ["javascript", "typescript"],
    {
      triggerCharacters: [" "], // Activa los snippets al escribir espacio
      provideCompletionItems: (model, position) => {
        const suggestions = jsSnippets.map((snippet) => ({
          label: snippet.key,
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: snippet.content,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: snippet.description,
          range: new monaco.Range(
            position.lineNumber,
            position.column - 1,
            position.lineNumber,
            position.column,
          ),
        }));

        return { suggestions };
      },
    },
  );

  //Format with CTRL + Q
  editor.addAction({
    id: "custom.formatDocument",
    label: "Format document",
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyQ],
    run: function (ed) {
      return ed.getAction("editor.action.formatDocument")?.run();
    },
  });

  // Typescript
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    lib: ["esnext"],
    strict: true,
  });

  // Prettier
  monaco.languages.registerDocumentFormattingEditProvider(
    ["javascript", "typescript"],
    {
      async provideDocumentFormattingEdits(model) {
        try {
          const text = await prettier.format(model.getValue(), {
            parser: "babel",
            plugins: [parserBabel, estreeFormater],
            semi: false,
            singleQuote: true,
          });

          return [{ text, range: model.getFullModelRange() }];
        } catch (error) {
          console.warn("Error de formateo:", error);
          return [];
        }
      },
    },
  );
};

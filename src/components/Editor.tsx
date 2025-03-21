import MonacoEditor from "@monaco-editor/react";
import { useConfig } from "../hooks/useConfig";
import { handleEditorMount } from "../utils/handleEditorMount.ts";

interface EditorProps {
  code: string;
  onChange: (value: string | undefined) => void;

}

export function Editor({ code, onChange }: EditorProps) {
  const { lineNum, fontSize } = useConfig();

  return (
    <div className="h-full relative flex flex-col">
      <div className={`h-screen flex w-full duration-500`}>
        <div className="flex-1 bg-background-400 duration-500">
          <MonacoEditor
            height="100%"
            defaultLanguage="javascript"
            theme="mosqueta-dark"
            value={code}
            onChange={onChange}
            options={{
              minimap: { enabled: false },
              fontSize: fontSize,
              lineNumbers: lineNum ? "on" : "off",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: "on",
              suggestOnTriggerCharacters: true,
              snippetSuggestions: "top",
              tabSize: 2,
              autoIndent: "full",
              padding: { top: 10, bottom: 10 },
            }}
            onMount={handleEditorMount}
          />
        </div>
      </div>
    </div>
  );
}

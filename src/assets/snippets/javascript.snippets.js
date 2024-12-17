

export const javascriptSnippets = (monaco) => [
    {
        label: "console.log",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "console.log('${1:mensaje}');",
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: "Inserta un console.log() para debuggear."
    },
    {
        label: "function",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "function ${1:nombreFuncion}(${2:}) {\n\t${3:}\n}",
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: "Crea una función."
    },
    {
        label: "mathrandom",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "const luckyNumber = Math.floor(Math.random())",
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: "crea una variable con un numero"
    },
    {
        label: "for",
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: "for (let index = 0; index < array.length; index++) {const element = array[index];}",
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: "crea una variable con un numero"
    }
];
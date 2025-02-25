const jsSnippets = [
  {
    key: 'clg',
    content: 'console.log(${1});',
    description: 'Insert a console.log() for debugging.',
  },

  {
    key: 'console',
    content: 'console.log(${1});',
    description: 'Insert a console.log() for debugging.',
  },

  {
    key: 'setTimeout',
    content: 'setTimeout(() => {\n\t${1}\n}, 2000);',
    description: 'Insert a setTimeout snippet.',
  },

  { key: 'alert', content: 'alert(${1});', description: 'Alert message.' },

  {
    key: 'function',
    content: 'function ${1:functionName}(${2:}) {\n\t${3}\n}',
    description: 'Function declaration.',
  },

  {
    key: 'mathrandom',
    content: 'const luckyNumber = Math.floor(Math.random() * ${1:max});',
    description: 'Generate a random number.',
  },

  {
    key: 'for',
    content:
      'for (let index = 0; index < ${1:array}.length; index++) {\n\tconst element = ${1:array}[index];\n\t${2}\n}',
    description: 'For loop.',
  },

  {
    key: 'fetchGET',
    content:
      'async function fetchGET(url) {\n\tconst response = await fetch(url);\n\tconst data = await response.json();\n\treturn data;\n}',
    description: 'Boilerplate for a fetch GET request.',
  },

  {
    key: 'fetchPost',
    content:
      "async function fetchPost(url, data) {\n\tconst response = await fetch(url, {\n\t\tmethod: 'POST',\n\t\theaders: {\n\t\t\t'Content-Type': 'application/json'\n\t\t},\n\t\tbody: JSON.stringify(data)\n\t});\n\tconst data = await response.json();\n\treturn data;\n}",
    description: 'Boilerplate for a fetch POST request.',
  },

  {
    key: 'groupBy',
    content:
      'const groupBy = (array, key) => {\n\treturn array.reduce((acc, item) => ({\n\t\t...acc,\n\t\t[item[key]]: [...(acc[item[key]] || []), item]\n\t}), {});\n};',
    description: 'Group an array of objects by a key.',
  },
]

export const javascriptSnippets = (monaco: any) =>
  jsSnippets.map(({ key, content, description }) => ({
    label: key,
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: content,
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: description,
    range: monaco.Range.fromPositions(monaco.Position.create(0, 0)),
  }))

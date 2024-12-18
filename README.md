# One Code Js Playground
The powerful, lightweight code editor for modern developers. with a built-in console for real-time code execution and debugging. Built with React, Monaco Editor, and TypeScript.

![screencapture-1code-vercel-app-2024-12-17-15_00_07](https://github.com/user-attachments/assets/a6afbe39-22d3-450f-908d-4eb1f08267a2)


## Features

### Code Editor
- **Monaco Editor Integration**: Full-featured code editor with syntax highlighting
- **Auto-run Mode**: Automatically executes code as you type
- **Manual Execution**: Run code on demand with the "Run" button
- **TypeScript Support**: Built-in TypeScript support for better development experience

### Interactive Console
- **Real-time Output**: See your code's output instantly
- **Error Handling**: Clear visualization of errors and stack traces
- **Network Requests**: Support for fetch API with proper response formatting

### UI Features
- **Resizable Panels**: Drag to resize editor and console panels
- **Dark Theme**: Eye-friendly dark theme for extended coding sessions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pa-ku/one_code.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Console/
│   │   ├── index.tsx
│   │   ├── ConsoleHeader.tsx
│   │   ├── ConsoleInput.tsx
│   │   └── ConsoleItem.tsx
│   ├── Editor/
│   │   ├── index.tsx
│   │   └── EditorHeader.tsx
│   └── ResizeHandle.tsx
├── hooks/
│   ├── useClipboard.ts
│   ├── useConsoleHistory.ts
│   ├── useDebounce.ts
│   └── usePanelResize.ts
├── utils/
│   ├── codeExecutor.ts
│   ├── consoleFormatter.ts
│   ├── customConsole.ts
│   └── secureFetch.ts
└── App.tsx
```

## Technical Details

### Built With
- React
- TypeScript
- Monaco Editor
- Tailwind CSS
- Lucide Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

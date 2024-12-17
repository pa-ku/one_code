interface ConsoleProps {
  history: string[]
}

export function Console({ history }: ConsoleProps) {
  return (
    <div className='h-full flex flex-col bg-background-500 text-white'>
      <div className='flex-1 p-4 font-mono  overflow-y-auto'>
        {history.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap mb-1 text-lg ${
              line.startsWith('❌') ? 'text-red-400' : 'text-primary-400'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

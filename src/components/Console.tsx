interface ConsoleProps {
  history: string[]
}

export function Console({ history }: ConsoleProps) {
  return (
    <div className='h-full flex flex-col bg-background-500 text-white'>
      <div className='flex-1 p-4 font-mono overflow-y-auto '>
        {history.length > 0 ? (
          history.map((line, i) => (
            <div
              key={i}
              className='first-line:whitespace-pre-wrap w mb-1 text-lg  text-sky-300 '
            >
              {line}
            </div>
          ))
        ) : (
          <div className=' size-full flex items-center justify-center'>
            <img
              draggable={false}
              width={300}
              height={300}
              className='opacity-20 aspect-square invert'
              src={'/onecode.webp'}
              alt=''
            />
          </div>
        )}
      </div>
    </div>
  )
}

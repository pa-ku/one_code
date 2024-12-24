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
          <div className='flex-col size-full flex items-center justify-center'>
            <img
              draggable={false}
              width={250}
              height={250}
              className=' aspect-square grayscale brightness-0'
              src={'/onecode.webp'}
              alt=''
            />
            <p className='text-zinc-400 mt-7'>
              Format code
              <b className='bg-black/30 ml-3 rounded-xl p-2'>SHIFT + ALT + F</b>
            </p>
            <p className='text-zinc-400 mt-7'>
              Remove brackets
              <b className='bg-black/30 ml-3 rounded-xl p-2'>
                CTRL + ALT + Backspace
              </b>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

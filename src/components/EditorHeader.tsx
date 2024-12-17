import { PanelTopClose, Play } from 'lucide-react'
import icon from '/onecode.webp'
import { useConfig } from '../context/ConfigContext'

interface EditorHeaderProps {
  onExecute: () => void
}

export function EditorHeader({ onExecute }: EditorHeaderProps) {
  const { autoRun, setAutoRun, openConfig, closeMenu } = useConfig()

  return (
    <div
      className={`absolute top-0 -translate-y-full duration-500 z-50 py-2 border-b bg-background-500 w-full border-gray-700 flex items-center justify-between ${
        openConfig && 'translate-y-0 '
      }`}
    >
      <p className='pl-3 h-full size-11 flex items-center justify-center font-bold'>
        <img src={icon} alt='' className='size-full object-contain' />
      </p>
      <div className=' flex items-center gap-4'>
        <label className='flex border-r px-2  border-accentbg items-center justify-center gap-2 flex-row-reverse cursor-pointer'>
          <input
            className='relative flex h-5 w-10 cursor-pointer appearance-none items-center rounded-xl bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-primary-500 before:duration-200 checked:bg-primary-500 checked:before:translate-x-5 checked:before:bg-white'
            type='checkbox'
            checked={autoRun}
            onChange={(e) => setAutoRun(e.target.checked)}
          />
          <p className='text-xs text-gray-300'>Auto-Run</p>
        </label>

        <button
          onClick={onExecute}
          className='flex items-center gap-2 px-3 py-0.5 bg-accentbg hover:bg-accentbghover rounded text-accent'
        >
          <Play size={16} />
          Run
        </button>
        <button
          onClick={closeMenu}
          className='bg-primay-500 size-10 rounded-full   top-0 z-50 right-0'
        >
          <PanelTopClose />
        </button>
      </div>
    </div>
  )
}

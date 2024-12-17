import { PanelTopClose, Play } from 'lucide-react'
import icon from '/onecode.webp'
import { useConfig } from '../context/ConfigContext'
import Checkbox from './Checkbox'

interface EditorHeaderProps {
  onExecute: () => void
}

export function EditorHeader({ onExecute }: EditorHeaderProps) {
  const { autoRun, saveCode, setSaveCode, setAutoRun, openConfig, closeMenu } =
    useConfig()

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
        <Checkbox
          checked={saveCode}
          onChange={(e) => setSaveCode(e.target.checked)}
        >
          Save in local
        </Checkbox>
        <Checkbox
          checked={autoRun}
          onChange={(e) => setAutoRun(e.target.checked)}
        >
          Auto-Run
        </Checkbox>
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

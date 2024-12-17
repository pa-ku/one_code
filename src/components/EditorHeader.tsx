import {
  PanelTopClose,
  Play,
  RefreshCcw,
  Cloud,
  ArrowLeftRight,
} from 'lucide-react'
import icon from '/onecode.webp'
import { useConfig } from '../context/ConfigContext'
import Checkbox from './Checkbox'

interface EditorHeaderProps {
  onExecute: () => void
}

export function EditorHeader({ onExecute }: EditorHeaderProps) {
  const {
    autoRun,
    saveCode,
    setSaveCode,
    setAutoRun,
    openConfig,
    closeMenu,
    setInvertLayout,
    invertLayout,
  } = useConfig()

  return (
    <div
      className={`absolute top-0 px-3 -translate-y-full duration-500 z-50 py-2 border-b bg-background-500 w-full border-gray-700 flex items-center justify-between ${
        openConfig && 'translate-y-0 '
      }`}
    >
      <p className=' h-full size-7 flex items-center justify-center font-bold'>
        <img src={icon} alt='' className='size-full object-contain' />
      </p>
      <div className=' flex items-center gap-4'>
        <Checkbox
          checked={invertLayout}
          onChange={(e) => setInvertLayout(e.target.checked)}
        >
          <ArrowLeftRight size={20}></ArrowLeftRight>
        </Checkbox>
        <Checkbox
          checked={saveCode}
          onChange={(e) => setSaveCode(e.target.checked)}
        >
          <Cloud size={20}></Cloud>
        </Checkbox>
        <Checkbox
          checked={autoRun}
          onChange={(e) => setAutoRun(e.target.checked)}
        >
          <RefreshCcw size={20} />
        </Checkbox>
        <button
          onClick={onExecute}
          className='flex items-center text-lg gap-2 px-3 py-0.5 bg-accentbg hover:bg-accentbghover rounded text-accent'
        >
          <Play size={16} />
          Run
        </button>
        <button
          onClick={closeMenu}
          className='flex items-center justify-center text-accent bg-accentbg p-1 hover:bg-accentbg rounded-lg   top-0 z-50 right-0'
        >
          <PanelTopClose />
        </button>
      </div>
    </div>
  )
}

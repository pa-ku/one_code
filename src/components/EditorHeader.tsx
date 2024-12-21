import {
  PanelTopClose,
  Play,
  RefreshCcw,
  Cloud,
  ArrowLeftRight,
  ListOrdered,
  Boxes,
  Share2,
} from 'lucide-react'
import icon from '/onecode.webp'
import { useConfig } from '../context/ConfigContext'
import Checkbox from './Checkbox'
import { useClipboard } from '../hooks/useClipboard'

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
    setLineNum,
    lineNum,
    invertLayout,
    formatOnSave,
    setFormatOnSave,
  } = useConfig()

  /*   const { shareCode } = useCodeSharing() */
  const { isCopied, copyToClipboard } = useClipboard()

  return (
    <div
      className={`absolute top-0 px-4 -translate-y-full duration-500 z-50 h-12 border-b bg-background-500 w-full border-gray-700 flex items-center justify-between ${
        openConfig && 'translate-y-0 '
      }`}
    >
      <p className=' h-full size-7 flex items-center justify-center font-bold'>
        <img src={icon} alt='' className='size-full object-contain' />
      </p>
      <div className=' flex items-center gap-4'>
        <p className='text-background-100 text-xs'>Layout</p>
        <Checkbox
          checked={invertLayout}
          onChange={(e) => setInvertLayout(e.target.checked)}
          onHover='Invert Layot'
        >
          <ArrowLeftRight size={20}></ArrowLeftRight>
        </Checkbox>
        <Checkbox
          checked={lineNum}
          onChange={(e) => setLineNum(e.target.checked)}
          onHover='Line Numbers'
        >
          <ListOrdered size={20}></ListOrdered>
        </Checkbox>
        <div className='h-full'></div>
        <Checkbox
          checked={formatOnSave}
          onChange={(e) => setFormatOnSave(e.target.checked)}
          onHover='Format on save'
        >
          <Boxes size={20}></Boxes>
        </Checkbox>

        <Checkbox
          checked={saveCode}
          onChange={(e) => setSaveCode(e.target.checked)}
          onHover='Save in url'
        >
          <Cloud size={20}></Cloud>
        </Checkbox>
        <Checkbox
          checked={autoRun}
          onChange={(e) => setAutoRun(e.target.checked)}
          onHover='Auto run'
        >
          <RefreshCcw size={20} />
        </Checkbox>
        <button
          onClick={copyToClipboard}
          className='flex items-center text-md gap-2 px-3 py-0.5 bg-accentbg rounded text-accent'
        >
          <Share2 size={20} />
          Share
          <p
            className={`${
              isCopied ? 'opacity-100' : ' opacity-0 '
            } pointer-events-none  duration-300 absolute -bottom-10  border-background-100 border w-max bg-black rounded-lg p-2 `}
          >
            Url copied
          </p>
        </button>
        <button
          onClick={onExecute}
          className='flex items-center text-md gap-2 px-3 py-0.5 bg-accentbg rounded text-accent'
        >
          <Play size={20} />
          Run
        </button>
        <button
          onClick={closeMenu}
          className='flex items-center justify-center text-primary-500 p-1 hover:bg-accentbg rounded-lg  top-0 z-50 right-0'
        >
          <PanelTopClose />
        </button>
      </div>
    </div>
  )
}

import {
  Play,
  RefreshCcw,
  Cloud,
  ListOrdered,
  Share2,
  Trash2,
} from 'lucide-react'
import { useConfig } from '../../hooks/useConfig'
import Checkbox from '../ui/Checkbox'
import { useClipboard } from '../../hooks/useClipboard'
import useManageCode from '../../hooks/useManageCode'
import Button from '../ui/Button'
import FontButton from './FontButton'
import DownloadBtn from './DownloadBtn'

interface EditorNavBarProps {
  onExecute: () => void
}

export default function EditorNavBar({ onExecute }: EditorNavBarProps) {
  const { autoRun, saveCode, setSaveCode, setAutoRun, setLineNum, lineNum } =
    useConfig()

  const { isCopied, copyToClipboard } = useClipboard()
  const { clearCode } = useManageCode()
  const isDesktop = window.__TAURI__ !== undefined
  return (
    <div
      className={`fixed   left-0 top-0 px-2 py-3  duration-500 z-50 h-screen bg-background-500  border-gray-700 flex items-center justify-start flex-col `}
    >
      <div className=' flex items-center h-full justify-between flex-col gap-4 '>
        <span className='flex items-center   flex-col gap-4'>
          <Button onClick={onExecute} msjOnHover='Run code'>
            <Play size={20} />
          </Button>

          <Button
            onClick={copyToClipboard}
            msjOnHover={`${isDesktop ? 'Share Code' : 'Copy url'}  `}
          >
            <Share2 size={20} />
            <p
              className={`${
                isCopied ? 'opacity-100' : ' opacity-0 '
              } pointer-events-none z-20  duration-300 absolute left-0 top-8 border-background-100 border w-max bg-black rounded-lg p-2 `}
            >
              Url copied
            </p>
          </Button>
          {!isDesktop && (
            <Button onClick={clearCode} msjOnHover='Clear editor'>
              <Trash2 size={20} />
            </Button>
          )}

          <Checkbox
            checked={autoRun}
            onChange={(e) => setAutoRun(e.target.checked)}
            onHover='Auto run'
          >
            <RefreshCcw size={20} />
          </Checkbox>
          {!isDesktop && (
            <Checkbox
              checked={saveCode}
              onChange={(e) => setSaveCode(e.target.checked)}
              onHover='Save in url'
            >
              <Cloud size={20}></Cloud>
            </Checkbox>
          )}

          <Checkbox
            checked={lineNum}
            onChange={(e) => setLineNum(e.target.checked)}
            onHover='Line Numbers'
          >
            <ListOrdered size={20}></ListOrdered>
          </Checkbox>

          <FontButton />
        </span>

        {!isDesktop && <DownloadBtn />}
      </div>
    </div>
  )
}

import { Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function DownloadBtn() {
  const [openDownload, setOpenDownload] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDownload(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [openDownload])

  return (
    <>
      <button
        className='text-slate-300'
        title='Download app'
        onClick={() => setOpenDownload(!openDownload)}
      >
        <Download />
        {openDownload && (
          <div
            ref={menuRef}
            className='flex absolute left-7 bottom-10 gap-2 z-10 flex-col rounded-lg bg-background-200 p-1'
          >
            <a
              target='_Blank'
              title='Download windows app'
              href={'./setup/onecode_windows_v1.exe'}
              download
              className='flex hover:bg-background-300 p-2 rounded-lg items-center gap-2'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='icon icon-tabler icons-tabler-filled icon-tabler-brand-windows'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M21 13v5c0 1.57 -1.248 2.832 -2.715 2.923l-.113 .003l-.042 .018a1 1 0 0 1 -.336 .056l-.118 -.008l-4.676 -.585v-7.407zm-10 0v7.157l-5.3 -.662c-1.514 -.151 -2.7 -1.383 -2.7 -2.895v-3.6zm0 -9.158v7.158h-8v-3.6c0 -1.454 1.096 -2.648 2.505 -2.87zm10 2.058v5.1h-8v-7.409l4.717 -.589c1.759 -.145 3.283 1.189 3.283 2.898' />
              </svg>
              Windows
            </a>
            <a
              target='_Blank'
              href={'./setup/onecode_linux_v1.deb'}
              download
              title='Download linux app'
              className='flex hover:bg-background-300 p-2 rounded-lg items-center gap-2'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='icon icon-tabler icons-tabler-outline icon-tabler-brand-debian'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M12 17c-2.397 -.943 -4 -3.153 -4 -5.635c0 -2.19 1.039 -3.14 1.604 -3.595c2.646 -2.133 6.396 -.27 6.396 3.23c0 2.5 -2.905 2.121 -3.5 1.5c-.595 -.621 -1 -1.5 -.5 -2.5' />
                <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
              </svg>
              Linux
            </a>
          </div>
        )}
      </button>
    </>
  )
}

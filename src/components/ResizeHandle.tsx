import React from 'react'

interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void
}

export function ResizeHandle({ onMouseDown }: ResizeHandleProps) {
  return (
    <div
      className='w-2 hover:bg-blue-500 hover:opacity-50 cursor-col-resize transition-colors'
      onMouseDown={onMouseDown}
    >
      <div className='h-full w-[1px] bg-gray-700 mx-auto' />
    </div>
  )
}

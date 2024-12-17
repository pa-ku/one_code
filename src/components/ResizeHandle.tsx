import React from 'react'

interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void
}

export function ResizeHandle({ onMouseDown }: ResizeHandleProps) {
  return (
    <div
      className='w-2 hover:bg-primary-500 hover:opacity-50 cursor-col-resize '
      onMouseDown={onMouseDown}
    >
      <div className='h-full w-[1px] bg-background-200 mx-auto' />
    </div>
  )
}

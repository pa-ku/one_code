import { ChangeEventHandler, ReactNode } from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  children: ReactNode
  onHover?: string
}

export default function Checkbox({
  checked,
  onChange,
  children,
  onHover,
}: CheckboxProps) {
  return (
    <>
      <div className='relative '>
        <input
          className='peer absolute h-full w-full cursor-pointer appearance-none'
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <p className='rounded-lg flex items-center justify-center gap-1 text-slate-400 bg-background-500 border border-background-200 px-1 py-1 peer-checked:bg-primary-800/40 peer-checked:text-gray-100'>
          {children}
        </p>
        {onHover && (
          <p className='z-10 pointer-events-none peer-hover:opacity-100 opacity-0 duration-300 absolute -bottom-12 border-background-100 border w-max bg-black rounded-lg p-2 '>
            {onHover}
          </p>
        )}
      </div>
    </>
  )
}

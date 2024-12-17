import { ChangeEventHandler, ReactNode } from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  children: ReactNode
}

export default function Checkbox({
  checked,
  onChange,
  children,
}: CheckboxProps) {
  return (
    <>
      <div className='relative'>
        <input
          className='peer absolute h-full w-full cursor-pointer appearance-none'
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <p className='rounded-lg flex items-center justify-center gap-1 text-slate-400 bg-background-500 border border-background-200 px-4 py-1 peer-checked:bg-background-100 peer-checked:text-gray-100'>
          {children}
        </p>
      </div>
    </>
  )
}

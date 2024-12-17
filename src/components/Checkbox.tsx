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
      <label className='flex border-r px-2  border-accentbg items-center justify-center gap-2 flex-row-reverse cursor-pointer'>
        <input
          className='relative flex h-5 w-10 cursor-pointer appearance-none items-center rounded-lg bg-white duration-200 before:pointer-events-none before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-md before:bg-primary-500 before:duration-200 checked:bg-primary-500 checked:before:translate-x-5 checked:before:bg-white'
          type='checkbox'
          checked={checked}
          onChange={onChange}
        />
        <p className='text-xs text-gray-300'>{children}</p>
      </label>
    </>
  )
}

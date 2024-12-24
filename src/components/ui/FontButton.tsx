import { useConfig } from '../../context/ConfigContext'

export default function FontButton() {
  const { fontSize, setFontSize } = useConfig() // Valor por defecto, puedes cambiarlo

  function handlePlus() {
    if (fontSize > 29) return
    else setFontSize((prev: number) => prev + 1)
  }

  function handleMinus() {
    if (fontSize < 11) return
    else setFontSize((prev) => prev - 1)
  }

  return (
    <div className='flex border h-8 border-background-200 rounded-lg'>
      <button
        onClick={handleMinus}
        className='bg-accentbg text-accent px-1 rounded-l-lg'
        aria-label='Disminuir tamaño de fuente'
      >
        {'<'}
      </button>
      <p className='w-8 text-accent h-full appearance-none bg-accentbg flex text-center items-center justify-center'>
        {fontSize}
      </p>

      <button
        onClick={handlePlus}
        className='bg-accentbg text-accent rounded-r-lg px-1'
        aria-label='Aumentar tamaño de fuente'
      >
        {'>'}
      </button>
    </div>
  )
}

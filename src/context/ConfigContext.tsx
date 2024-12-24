import { createContext, ReactNode, useContext, useMemo } from 'react'
import useLocalStorage from 'use-local-storage'

export const ConfigContext = createContext<ConfigContextType | undefined>(
  undefined
)

type ConfigContextType = {
  autoRun: boolean
  setAutoRun: (value: boolean) => void
  openMenu: () => void
  closeMenu: () => void
  openConfig: boolean
  setSaveCode: (value: boolean) => void
  setInvertLayout: (value: boolean) => void
  lineNum: boolean
  setLineNum: (value: boolean) => void
  invertLayout: boolean
  saveCode: boolean
  formatOnSave: boolean
  setFormatOnSave: (value: boolean) => void
  fontSize: number
  setFontSize: (value: number) => number
}

export function useConfig(): ConfigContextType {
  const context = useContext(ConfigContext)
  if (!context) {
    throw new Error('useConfigContext debe estar dentro de un provider')
  }
  return context
}

type ConfigProviderProps = {
  children: ReactNode
}

export function ConfigProvider({ children }: ConfigProviderProps) {
  const [openConfig, setOpenConfig] = useLocalStorage('configOpen', false)
  const [autoRun, setAutoRun] = useLocalStorage('autoRun', true)
  const [saveCode, setSaveCode] = useLocalStorage('saveCode', true)
  const [invertLayout, setInvertLayout] = useLocalStorage('layout', false)
  const [lineNum, setLineNum] = useLocalStorage('lineNum', true)
  const [formatOnSave, setFormatOnSave] = useLocalStorage('formatOnSave', true)
  const [fontSize, setFontSize] = useLocalStorage('formatOnSave', 18)

  const contextValue = useMemo(
    () => ({
      autoRun,
      setAutoRun,
      openMenu: () => setOpenConfig(true),
      closeMenu: () => setOpenConfig(false),
      openConfig,
      saveCode,
      setSaveCode,
      setInvertLayout,
      invertLayout,
      lineNum,
      setLineNum,
      setFormatOnSave,
      formatOnSave,
      setFontSize,
      fontSize,
    }),
    [autoRun, openConfig, saveCode, invertLayout, lineNum, formatOnSave]
  )

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  )
}

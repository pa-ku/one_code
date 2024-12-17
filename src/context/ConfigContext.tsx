import { createContext, ReactNode, useContext, useState } from 'react'
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
  saveCode: boolean
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
  const [openConfig, setOpenConfig] = useState(false)
  const [autoRun, setAutoRun] = useLocalStorage('autoRun', true)
  const [saveCode, setSaveCode] = useLocalStorage('saveCode', true)

  function closeMenu() {
    setOpenConfig(false)
  }

  function openMenu() {
    setOpenConfig(true)
  }

  return (
    <ConfigContext.Provider
      value={{
        autoRun,
        setAutoRun,
        openMenu,
        closeMenu,
        openConfig,
        saveCode,
        setSaveCode,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

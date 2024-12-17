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
  setInvertLayout: (value: boolean) => void
  invertLayout: boolean
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
  const [openConfig, setOpenConfig] = useLocalStorage('configOpen', false)
  const [autoRun, setAutoRun] = useLocalStorage('autoRun', true)
  const [saveCode, setSaveCode] = useLocalStorage('saveCode', true)
  const [invertLayout, setInvertLayout] = useLocalStorage('layout', false)

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
        setInvertLayout,
        invertLayout,
      }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

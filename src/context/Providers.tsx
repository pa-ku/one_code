import { ReactNode } from 'react'
import { ConfigProvider } from './ConfigContext'
import { ThemeProvider } from './ThemeContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ConfigProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ConfigProvider>
    </>
  )
}

import { MantineProvider } from '@mantine/core'
import '@/index.css'
import '@mantine/core/styles.css'
import type { ReactNode } from 'react'

export const BaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  )
}

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { ReactNode } from 'react'

export const BaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  )
}

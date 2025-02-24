import { MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'
import '@mantine/core/styles.css'
import dayjs from 'dayjs'
dayjs.locale('ja')

export const BaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MantineProvider>{children}</MantineProvider>
    </>
  )
}

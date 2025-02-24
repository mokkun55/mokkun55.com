import type { OutputType } from '@/types/OutputType'
import styles from './index.module.scss'
import { SiZenn } from 'react-icons/si'
import { RiSlideshowFill } from 'react-icons/ri'
import { FaLink } from 'react-icons/fa6'
import dayjs from 'dayjs'
import { Table, Tabs } from '@mantine/core'
import type React from 'react'

export const OutputTable = () => {
  // TODO 今はモック
  const outputList: OutputType[] = [
    { id: '1', type: 'zenn', date: new Date(), title: '記事タイトル1', url: 'https://example.com/' },
    { id: '2', type: 'slide', date: new Date(), title: '記事タイトル2', url: 'https://example.com/' },
    { id: '3', type: 'zenn', date: new Date(), title: '記事タイトル3', url: 'https://example.com/' },
    { id: '4', type: 'slide', date: new Date(), title: '記事タイトル4', url: 'https://example.com/' },
    { id: '5', type: 'zenn', date: new Date(), title: '記事タイトル5', url: 'https://example.com/' },
    { id: '6', type: 'slide', date: new Date(), title: '記事タイトル6', url: 'https://example.com/' },
    { id: '7', type: 'zenn', date: new Date(), title: '記事タイトル7', url: 'https://example.com/' },
    { id: '8', type: 'slide', date: new Date(), title: '記事タイトル8', url: 'https://example.com/' },
    { id: '9', type: 'zenn', date: new Date(), title: '記事タイトル9', url: 'https://example.com/' },
    { id: '10', type: 'slide', date: new Date(), title: '記事タイトル10', url: 'https://example.com/' },
  ]

  const rows = outputList.map((output: OutputType) => {
    let typeIcon: React.ReactNode
    switch (output.type) {
      case 'zenn':
        typeIcon = <SiZenn />
        break
      case 'slide':
        typeIcon = <RiSlideshowFill />
        break
      default:
        typeIcon = null
    }

    return (
      <Table.Tr key={output.id}>
        <Table.Td>{typeIcon}</Table.Td>
        <Table.Td>{output.title}</Table.Td>
        <Table.Td>
          <FaLink className={styles.linkIcon} />
          <a href={output.url} className={styles.link}>
            {output.url}
          </a>
        </Table.Td>
        <Table.Td>{dayjs(output.date).format('YYYY.MM.DD')}</Table.Td>
      </Table.Tr>
    )
  })

  return (
    <div className={styles.container}>
      <Tabs defaultValue="first" className={styles.tabs}>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="first">すべて</Tabs.Tab>
          <Tabs.Tab value="second">技術記事</Tabs.Tab>
          <Tabs.Tab value="third">スライド</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {/* TODO あとでsp対応する */}
      <Table className={styles.table}>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  )
}

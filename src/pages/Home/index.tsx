// メインページ (/)
// 自己紹介
// 作品一覧（サムネイル＋詳細ページへのリンク） (最新数件)
// 連絡先（フォーム or SNSリンク）
// LTスライド & 技術記事一覧 (最新数件)（カテゴリ分け）
// お知らせ（最新数件）

import { SectionTitle } from '@/components/SectionTitle'
import styles from './index.module.scss'
import { SimpleGrid } from '@mantine/core'
import type { WorkType } from '@/types/WorkType'
import { Work } from './components/Work'
import { OutputTable } from './components/OutputTable'
import { Contact } from './components/Contact'

export const Home = () => {
  // TODO 後で消す 作品一覧 モックデータ
  const works: WorkType[] = [
    {
      id: '0',
      date: new Date(),
      title: '作品1',
      description: '作品1の説明',
      image: '/imgs/mocks/mock1.png',
    },
    {
      id: '1',
      date: new Date(),
      title: '作品2',
      description: '作品2の説明',
      image: '/imgs/mocks/mock2.png',
    },
    {
      id: '2',
      date: new Date(),
      title: '作品3',
      description: '作品3の説明',
      image: '/imgs/mocks/mock3.png',
    },
    {
      id: '3',
      date: new Date(),
      title: '作品4',
      description: '作品4の説明',
      image: '/imgs/mocks/mock4.png',
    },
    {
      id: '4',
      date: new Date(),
      title: '作品5',
      description: '作品5の説明',
      image: '/imgs/mocks/mock1.png',
    },
    {
      id: '5',
      date: new Date(),
      title: '作品6',
      description: '作品6の説明',
      image: '/imgs/mocks/mock2.png',
    },
    {
      id: '6',
      date: new Date(),
      title: '作品7',
      description: '作品7の説明',
      image: '/imgs/mocks/mock3.png',
    },
    {
      id: '7',
      date: new Date(),
      title: '作品8',
      description: '作品8の説明',
      image: '/imgs/mocks/mock4.png',
    },
    {
      id: '8',
      date: new Date(),
      title: '作品9',
      description: '作品9の説明',
      image: '/imgs/mocks/mock1.png',
    },
    {
      id: '9',
      date: new Date(),
      title: '作品10',
      description: '作品10の説明',
      image: '/imgs/mocks/mock2.png',
    },
    {
      id: '10',
      date: new Date(),
      title: '作品11',
      description: '作品11の説明',
      image: '/imgs/mocks/mock3.png',
    },
    {
      id: '11',
      date: new Date(),
      title: '作品12',
      description: '作品12の説明',
      image: '/imgs/mocks/mock4.png',
    },
    {
      id: '12',
      date: new Date(),
      title: '作品13',
      description: '作品13の説明',
      image: '/imgs/mocks/mock1.png',
    },
    {
      id: '13',
      date: new Date(),
      title: '作品14',
      description: '作品14の説明',
      image: '/imgs/mocks/mock2.png',
    },
    {
      id: '14',
      date: new Date(),
      title: '作品15',
      description: '作品15の説明',
      image: '/imgs/mocks/mock3.png',
    },
    {
      id: '15',
      date: new Date(),
      title: '作品16',
      description: '作品16の説明',
      image: '/imgs/mocks/mock4.png',
    },
    {
      id: '16',
      date: new Date(),
      title: '作品17',
      description: '作品17の説明',
      image: '/imgs/mocks/mock1.png',
    },
    {
      id: '17',
      date: new Date(),
      title: '作品18',
      description: '作品18の説明',
      image: '/imgs/mocks/mock2.png',
    },
    {
      id: '18',
      date: new Date(),
      title: '作品19',
      description: '作品19の説明',
      image: '/imgs/mocks/mock3.png',
    },
    {
      id: '19',
      date: new Date(),
      title: '作品20',
      description: '作品20の説明',
      image: '/imgs/mocks/mock4.png',
    },
  ]

  // 直近6つの作品を表示
  const recentWorks = works.slice(-3)

  return (
    <div className={styles.container}>
      {/* 最初のmokkun */}
      <div className={styles.mokkun}>
        <img src="/imgs/icon.png" alt="mokkun" className={styles.icon} />
        <div className={styles.description}>
          <p className={styles.name}>mokkun</p>
          <p className={styles.hello}>Hello, World!</p>
        </div>
      </div>

      {/* 自己紹介文 */}
      <div className={styles.about} id="About">
        <SectionTitle title="ABOUT ME" />
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>Hi! I'm mokkun.</h2>
          <p className={styles.text}>
            はじめまして！ もっくんと申します。
            <br />
            サバゲー・ダーツ・麻雀・かわいいものが好きです。
            <br />
            現在近大高専(4年)で情シス・プログラミングを勉強中… & 学生寮で寮長やってます。
          </p>

          <h2 className={styles.subTitle}>{'{資格一覧}'}</h2>
          <ul className={styles.list}>
            <li>ITパスポート (2023.8 取得)</li>
            <li>第一種運転免許[AT限] (2024.3 取得)</li>
            <li>基本情報技術者試験 (取得に向け勉強中)</li>
          </ul>
        </div>
      </div>

      {/* TODO スキル一覧 */}

      {/* 作品一覧 */}
      <div className={styles.works} id="Works">
        <SectionTitle title="WORKS" />
        {/* TODO ブレイブポイント 要相談 */}
        <SimpleGrid
          cols={{
            xs: 1,
            sm: 2,
            lg: 3,
          }}
          className={styles.grid}
        >
          {recentWorks.map((work) => (
            <div key={work.id}>
              <Work {...work} />
            </div>
          ))}
        </SimpleGrid>
      </div>

      {/* スライド / 技術記事 */}
      <div className={styles.outputs}>
        <SectionTitle title="OUTPUTS" />
        <OutputTable />
      </div>

      {/* 連絡先 */}
      <div className={styles.contact}>
        <SectionTitle title="CONTACT" />
        <Contact />
      </div>
    </div>
  )
}

import type { ReactNode } from 'react'
import { ContactItem } from './components/ContactItem'
import { FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import styles from './index.module.scss'

export const Contact = (): ReactNode => {
  return (
    <div className={styles.container}>
      <ContactItem title="Twitter" text="@mokkundev" icon={<FaTwitter />} url="https://x.com/mokkun_dev" />
      <ContactItem title="Email" text="mokkunpc@gmail.com" icon={<MdEmail />} />
      <ContactItem title="GitHub" text="@mokkun55" icon={<FaGithub />} url="https://github.com/mokkun55" />
    </div>
  )
}

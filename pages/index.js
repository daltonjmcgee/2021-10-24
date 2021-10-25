import styles from '../styles/Home.module.scss'
import Directory from './blocks/directory'
import Editor from './blocks/editor'

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.style_1}`}>
      <Directory />
      <Editor />
    </main>
  )
}

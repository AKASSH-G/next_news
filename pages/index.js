import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Toolbar } from '@/components/toolbar';


export default function Home() {
  return (
    
    <div className='page-container'>
    <Toolbar />

      <div className={styles.main}>
        <h1>Akassh's news app</h1>
 
        <h3>Here is the app for the latest news article</h3>
      </div>
    </div>
  )
}

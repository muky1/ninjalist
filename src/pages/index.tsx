import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Head>
        <title>Ninja List - Home</title>       
      </Head>
      <h1 className={styles.title}>HOMEPAGE</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum rem illo nisi voluptatem ex alias! Praesentium, a repudiandae? Reprehenderit nihil, cupiditate doloremque beatae fuga natus facilis explicabo quidem esse nobis.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem saepe nostrum id a facilis ad repellat hic alias impedit expedita, in tempore totam at modi! Eum, sint. Consequatur, excepturi eum.</p>
      <Link href={"/ninjas"} className={styles.btn}>See Ninja Listing</Link>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'
import Divider from './component/Divider'
import styles from '../styles/Home.module.css'
import Gallary from './component/Gallary'
import Hero from './component/Hero'
import LatestPost from './component/LatestPost'
import Post from './component/Posts'
import Subscribe from './component/Subscribe'

export function getServerSideProps() {
  console.log(process.env.SECRET_VARIABLE)
  return{
  props: {}
  }
  }

export default function Home() {
  console.log(process.env.SECRET_VARIABLE, process.env.NEXT_PUBLIC_MYFIRST_BROWSERVARIABLE)
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <Hero />
      <Post />
      <Divider />
      <LatestPost />
      <Subscribe />
      <Gallary />
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

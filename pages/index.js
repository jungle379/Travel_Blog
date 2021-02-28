import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>サイト案内</h1>
        <p>
      旅行先で撮った写真とブログ形式でコメントをアップしていきます！
        </p>
      </section>
        <h3>
          <Link href="posts/mypage">自己紹介</Link>
        </h3>
        <h4>
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
        </h4>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  //const posts = await readContentFiles({ fs })

  return {
    props: {
      allPostsData
    }
  }
}
import Head from 'next/head'
import Link from 'next/link'


export default function FirstPost() {
  return (
    <>
    <Head>
      <title>投稿フォーム</title>
    </Head>
      <h1>ブログ投稿フォーム</h1>
      <h2>
        <Link href="/">
          <a>トップページへ</a>
        </Link>
      </h2>
    </>
  )
}
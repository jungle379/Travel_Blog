import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>自己紹介ページ</title>
    </Head>
      <h1>自己紹介</h1>
      <p>
      年１回は旅行に行くようにしています。遠くから全体を写す写真が多めですがご覧になってください！！
      </p>
      <div>
        <Link href="/">
          <a>トップページへ</a>
        </Link>
      </div>
    </>
  )
}
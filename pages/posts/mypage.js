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
      主に東京へ旅行しています。高いところと遠くから全体を写す写真が多めですがお楽しみください！！
      </p>
      <h2>
        <Link href="/">
          <a>トップページへ</a>
        </Link>
      </h2>
    </>
  )
}

// export const getStaticProps = async () => {
//   const key = {
//     headers: {'X-API-KEY': process.env.API_KEY},
//   };

//   const res = await fetch('https://travelblog.microcms.io/api/v1/news',key);

//   const data = await res.json();
//   return {
//     props: {
//       data: data.contents,
//     },
//   };
// };
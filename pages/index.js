import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main >
        {/*   side bar */}
        <Sidebar/>

        {/*   center */}
        </main>
        <div>
        {/*    Player */}
        </div>
    </div>
  )
}

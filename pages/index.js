import { getSession } from 'next-auth/react';
import Head from 'next/head'
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
        <main className='flex'>
          {/*   side bar */}
          <Sidebar/>

          {/*   center */}
          <Center />
        </main>

        <div>
        {/*    Player */}
        </div>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}

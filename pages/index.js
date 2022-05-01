import Head from 'next/head'
import Header from '../components/Header'
import HomeScreen from '../components/Home'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Class</title>
        <meta name="description" content="Created by Sagnik Sengupta" />
      </Head>
      <Header />
	    <HomeScreen />
    </div>
  )
}

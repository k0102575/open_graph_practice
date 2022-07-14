import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import OpenGraph from '../../component/OpenGraph'

const Home: NextPage = () => {

  const router = useRouter();


  return (
    <main>
      <OpenGraph></OpenGraph>
      Z-mini

      <button onClick={() => {
        router.push('/ad/z')
      }}>이동</button>
    </main>
  )
}

export default Home

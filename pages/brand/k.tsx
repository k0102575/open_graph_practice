import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import OpenGraph from '../../component/OpenGraph'

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <main>
      <OpenGraph></OpenGraph>
      K

      <button onClick={() => {
        router.push('/ad/z-mini')
      }}>이동</button>
    </main>
  )
}

export default Home

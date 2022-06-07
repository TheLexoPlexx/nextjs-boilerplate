import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Link href={"/elements"}>Elements</Link>
    </>
  )
}

export default Home
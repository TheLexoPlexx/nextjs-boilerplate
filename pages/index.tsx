import type { NextPage } from 'next'
import Link from 'next/link'
import { CSSProperties } from 'react'

const Home: NextPage = () => {
  let bodyStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  }
  
  return (
    <div style={bodyStyle}>
      <Link href={"/elements"}><h1>Elements</h1></Link>
    </div>
  )
}

export default Home
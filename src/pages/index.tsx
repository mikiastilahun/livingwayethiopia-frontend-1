import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div style={{
        width: "100vw",
        height: "350vh",
        display: 'flex',
        justifyContent: "center",

      }}>
        <p style={{ marginTop: 300, fontSize: 50, color: "#22c6db", fontFamily: "fantasy" }}>
          The Rest of the Code goes here
        </p>
      </div>
    </Layout>
  )
}

export default Home

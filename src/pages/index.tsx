import type { NextPage } from 'next'
import Layout from '../components/layout';
import Welcome from '../sections/welcome';

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
    </Layout>
  )
}

export default Home

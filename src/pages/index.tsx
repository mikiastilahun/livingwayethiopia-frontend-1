import type { NextPage } from 'next'
import Layout from '../components/layout';
import EventSection from '../sections/event';
import Vision from '../sections/vision';
import Welcome from '../sections/welcome';

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
      <Vision />
      <EventSection />
    </Layout>
  )
}

export default Home

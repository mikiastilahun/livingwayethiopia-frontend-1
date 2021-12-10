import type { NextPage } from 'next'
import Layout from '../components/layout';
import EventSection from '../sections/event';
import OurCurchSection from '../sections/ourChurch';
import ServiceSection from '../sections/service';
import Vision from '../sections/vision';
import Welcome from '../sections/welcome';

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
      <ServiceSection />
      <EventSection />
      <Vision />
      <OurCurchSection />
    </Layout>
  )
}

export default Home

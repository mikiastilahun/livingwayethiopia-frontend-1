import type { NextPage } from 'next'
import Layout from '../components/layout';
import Welcome from '../sections/home/welcome';
import ServiceSection from '../sections/home/service';
import EventSection from '../sections/home/event';
import Vision from '../sections/home/vision';
import OurCurchSection from '../sections/home/ourChurch';

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

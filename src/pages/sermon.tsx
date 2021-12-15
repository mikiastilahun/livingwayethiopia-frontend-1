import type { NextPage } from 'next'
import Layout from '../components/layout';
import SermonSection from '../sections/sermon';
import { theme } from '../styles/theme';
const Sermon: NextPage = () => {
    return (
        <Layout background={theme.colors.background_secondary} >
            <div style={{ height: 80, width: "100%" }} />
            <SermonSection />
        </Layout>
    )

}

export default Sermon

import type { NextPage } from 'next'
import Layout from '../../../components/layout'
import AudioData from '../../../sections/sermon/audio'
const Podcast: NextPage = () => {
    return (
        <Layout >
            <AudioData />
        </Layout>
    )
}

export default Podcast

import type { NextPage } from 'next'
import Layout from '../../../components/layout'
import SingleVideo from '../../../sections/sermon/video'
import { theme } from '../../../styles/theme'
import useSWR from 'swr'

const fetcher = (args: string) => fetch(args).then((res) => res.json())
const Video: NextPage = () => {
    const { data, error } = useSWR('https://www.googleapis.com/youtube/v3/playlists?channelId=UC7QcE6EYm7PCQjN3fVlRoXg&key=AIzaSyBUFjLlWimV88LGYorZjkzZLIlKxxfHRII&part=snippet&maxResults=10&part=contentDetails', fetcher)
    console.log(data, error)
    return (
        <Layout background={theme.colors.background} >
            <SingleVideo />
        </Layout>
    )
}

export default Video

import type { NextPage } from 'next'
import Layout from '../../components/layout'
import Article from '../../sections/articles/article'
import { theme } from '../../styles/theme'
const Articles: NextPage = () => {
    return (
        <Layout >
            <Article />
        </Layout>
    )
}

export default Articles

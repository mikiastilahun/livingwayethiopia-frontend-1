import type { NextPage } from 'next'
import Layout from '../components/layout';
import ArticleList from '../sections/articles/list';
import { theme } from '../styles/theme';
const Articles: NextPage = () => {
    return (
        <Layout background={theme.colors.background} >
            <div style={{ height: 80, width: "100%" }} />
            <ArticleList />
        </Layout>
    )
}

export default Articles

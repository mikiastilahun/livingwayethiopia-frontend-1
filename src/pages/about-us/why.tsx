import type { NextPage } from 'next'
import Layout from '../../components/layout';
import WhyContainer from '../../sections/about-us/why';
import { request, gql } from 'graphql-request';
import { AboutUsEntity } from '../../types/strapi';

const Why = ({ aboutUs }: { aboutUs: AboutUsEntity }) => {
    return (
        <Layout>
            <WhyContainer detail={aboutUs?.attributes?.churchCreation!} />
        </Layout>
    )
}

export default Why



export async function getStaticProps({ }) {
    const query = gql`
        query AboutUs($locale: I18NLocaleCode) {
            aboutUs(locale: $locale) {
                data {
                    attributes {
                        churchCreation
                    }
                }
            }
        }
    `
    const variables = {
        "locale": process.env.NEXT_PUBLIC_LANGUAGE,
    }
    const data = await request(
        process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT!, query, variables)
    return {
        props: {
            aboutUs: data.aboutUs.data,
        },
        revalidate: 3600,
    };
}

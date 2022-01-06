import type { NextPage } from 'next'
import Layout from '../../components/layout';
import { theme } from '../../styles/theme';
import { request, gql } from 'graphql-request';
import { AboutUsEntity } from '../../types/strapi';

const OurHistory = ({ aboutUs }: { aboutUs: AboutUsEntity }) => {
    return (
        <Layout>
            <div className="mt-16 relative " >
                <div className='absolute mt-24'>
                    <svg width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-172 26C227.616 279.912 710.993 307.392 1235 354C1620.5 405.5 1894.5 465.5 2166 735" stroke="#EF9410" strokeOpacity="0.3" strokeWidth="50" strokeLinecap="round" />
                    </svg>

                </div>
                <div className='absolute mt-40'>
                    <svg width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-172 26C227.616 279.912 710.993 307.392 1235 354C1620.5 405.5 1894.5 465.5 2166 735" stroke="#015B8F" strokeOpacity="0.3" strokeWidth="50" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto" style={{ color: theme.colors.text }}>
                                Our History
                            </h2>
                            <div className="z-10 max-w-xl mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12">

                                <p className="text-base  md:text-lg z-10 pb-28" style={{ color: theme.colors.text }}>
                                    {aboutUs.attributes?.history}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OurHistory



export async function getStaticProps({ }) {
    const query = gql`
        query AboutUs($locale: I18NLocaleCode) {
            aboutUs(locale: $locale) {
                data {
                    attributes {
                        history 
                    }
                }
            }
        }
    `
    const variables = {
        "locale": "en",
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


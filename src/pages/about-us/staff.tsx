import type { NextPage } from 'next'
import Layout from '../../components/layout';
import Members from '../../sections/about-us/members';
import { request, gql } from 'graphql-request';

const Staff = ({ members }: { members: { image: string, name: string, title: string }[] }) => {
    return (
        <Layout>
            <Members members={members} />
        </Layout>
    )
}

export default Staff



export async function getStaticProps({ }) {
    const query = gql`
        query AboutUs($locale: I18NLocaleCode) {
            aboutUs(locale: $locale) {
                data {
                    attributes {
                        churchStaff {
                            avatar {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            name
                            title
                        }
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
    let members: { image: string, name: string, title: string }[] = [];
    if (data?.aboutUs?.data?.attributes?.churchStaff! != null)
        for (let resData of data?.aboutUs?.data?.attributes?.churchStaff!) {
            members = [...members, {
                title: resData?.title,
                name: resData?.name,
                image: resData?.avatar?.data?.attributes?.url
            }
            ]
        }
    return {
        props: {
            members: members,
        },
        revalidate: 3600,
    };
}


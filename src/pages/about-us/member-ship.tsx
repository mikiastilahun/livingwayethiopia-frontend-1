import { useState } from 'react';
import Layout from '../../components/layout';
import { request, gql } from 'graphql-request';
import { AboutUsEntity } from '../../types/strapi';

const MemberShip = ({ aboutUs }: { aboutUs: AboutUsEntity }) => {

    return (
        <Layout>
            <div className="sm:mt-2 md:mt-9 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                        <h2 className="max-w-lg mb-6 font-sans text-4xl font-light leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-44 text-blue-gray-100 lg:w-32 lg:-ml-60 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                            </span>{' '}
                            Member Ship  Info
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {
                            aboutUs.attributes?.MembershipInfo?.map((data, index) => {
                                return <Item title={data?.question!} key={index}>
                                    {data?.answer!}
                                </Item>
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MemberShip

const Item = ({ title, children }: { title: string, children: string, }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-xl font-medium text-left">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="font-thin text-sm" style={{ color: "#343D48" }}>{children}</p>
                </div>
            )}
        </div>
    );
};



export async function getStaticProps({ }) {
    const query = gql`
        query AboutUs($locale: I18NLocaleCode) {
            aboutUs(locale: $locale) {
                data {
                    attributes {
                        MembershipInfo {
                            answer
                            question
                        }
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


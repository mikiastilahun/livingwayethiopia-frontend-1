import type { NextPage } from 'next'
import Layout from '../../components/layout';
import { theme } from '../../styles/theme';
const OurHistory: NextPage = () => {
    return (
        <Layout>
            <div className="mt-16 relative" >
                <div className='absolute mt-24'>
                    <svg width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-172 26C227.616 279.912 710.993 307.392 1235 354C1620.5 405.5 1894.5 465.5 2166 735" stroke="#EF9410" stroke-opacity="0.3" stroke-width="50" stroke-linecap="round" />
                    </svg>

                </div>
                <div className='absolute mt-40'>
                    <svg width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-172 26C227.616 279.912 710.993 307.392 1235 354C1620.5 405.5 1894.5 465.5 2166 735" stroke="#015B8F" stroke-opacity="0.3" stroke-width="50" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto" style={{ color: theme.colors.text }}>
                                Our History
                            </h2>
                            <div className="z-10 max-w-xl mb-10 md:mx-auto sm:text-left lg:max-w-2xl md:mb-12">

                                <p className="text-base  md:text-lg z-10" style={{ color: theme.colors.text }}>
                                    The standard Lorem Ipsum passage, used since the 1500s
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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

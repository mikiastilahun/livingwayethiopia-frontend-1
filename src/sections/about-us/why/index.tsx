
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import { theme } from '../../../styles/theme';


const WhyContainer = () => {
    const image = "https://images.unsplash.com/photo-1640273837947-ea830d50c191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80";
    const detail = `The standard Lorem Ipsum passage, used since the 1500s
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.z Sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    return (
        <Container >

            <div className="grid sm:grid-cols-1 md:grid-cols-2 md:grid-flow-col sm:grid-flow-row-dense  mt-5 relative  ">

                <div className="sm:col-start-1 md:col-start-2 grid grid-flow-row items-end justify-center " style={{ color: theme.colors.text }}>
                    <h2 className="font-thin text-3xl">
                        Why This{"  "}
                        <span className="inline-block " style={{ color: theme.colors.primary }}>
                            Church
                        </span> {" "}was Created
                    </h2>
                    <svg className='w-max ' viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M248.276 389.655H400V134.483L248.276 10.3447V389.655Z" fill="#ECF0F1" />
                        <path d="M275.862 182.759H310.345L310.221 141.379H337.931V182.759H372.414V210.469L337.931 210.345V313.793L310.221 314.104V210.469L275.862 210.345V182.759Z" fill="#7D6599" />
                        <path d="M-0.0004673 389.655H248.275V127.586L-0.0004673 203.448V389.655Z" fill="#CCD2E2" />
                        <path d="M179.31 265.517H213.793V389.655H179.31V265.517Z" fill="#556080" />
                        <path d="M103.448 224.138H137.931V389.655H103.448V224.138Z" fill="#556080" />
                        <path d="M34.4831 265.517H62.0693V389.655H34.4831V265.517Z" fill="#556080" />
                    </svg>

                </div>
                <div className='mt-4 self-start '>
                    <p className="text-base text-gray-700 md:text-lg mr-4 sm:col-start-2 md:col-start-1">
                        {detail}
                    </p>
                </div>
            </div>
        </Container >
    );
}

export default WhyContainer;





import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer, SliderContainer } from './style';
import { theme } from '../../../styles/theme';

interface backgroundType { image: string, text: string, }
const BackgroundInfo = () => {

    const background: backgroundType = {
        image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
    };

    return (
        <Container >

            <div className="relative ">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="lg:col-start-1 ">
                        <p className='text-3xl py-3 font-thin' style={{ color: theme.colors.text }}>
                            Background Info
                        </p>
                        <p className="mt-2 text-sm font-thin" style={{ color: theme.colors.text }}>
                            {background.text}
                        </p>
                    </div>
                    <div className="mt-10 relative lg:mt-0 lg:col-start-2" style={{ width: "100%", height: "100%", minHeight: 350 }}>
                        <ImageContainer
                            loading='lazy'
                            placeholder="blur"
                            blurDataURL={background.image}
                            layout='fill'
                            alt="background image data"
                            quality={100}
                            src={background.image}
                        />
                    </div>
                </div>
            </div>

        </Container >
    );
}

export default BackgroundInfo;

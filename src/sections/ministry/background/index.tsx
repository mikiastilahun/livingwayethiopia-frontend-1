



import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer, SliderContainer } from './style';
import { theme } from '../../../styles/theme';

interface backgroundType { image: string, text: string, }
const BackgroundInfo = ({ background }: { background: backgroundType }) => {

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

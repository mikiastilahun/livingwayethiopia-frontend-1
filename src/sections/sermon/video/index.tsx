
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import Navigation from '../../../components/navigation';



const SingleVideo = () => {
    return (
        <Container className='mt-20' >
            <Navigation />
            <div className="videoVisual">
                <div className='background'>
                    {/* <div>
                        <ImageContainer
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL={`https://img.youtube.com/vi/${currentVideo}/hqdefault.jpg`}
                            src={`https://img.youtube.com/vi/${currentVideo}/hqdefault.jpg`}
                            layout='fill'
                            quality={100}
                            alt='video-Image'

                        />

                    </div> */}
                </div>
                data
                {/* <iframe
                    id="ytplayer"
                    src={`https://www.youtube.com/embed/${currentVideo}?rel=0`}
                    frameBorder="0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    placeholder="blur"
                /> */}
            </div>
        </Container>
    );
}

export default SingleVideo 

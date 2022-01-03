import React from "react";
import Image from "next/image";
import { AudioCardContainer, } from './style';

const AudioCard = () => {
    return <AudioCardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL='https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                src="https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                layout='fill'
                alt="audio-Image"
            />
        </div>
        <div className='audioCardBottom'>
            <p className='audioTitle'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='audioDescription'>
                Lorem ipsum dolor sit amet, consec
            </p>
        </div>
    </AudioCardContainer>


}

export default AudioCard;
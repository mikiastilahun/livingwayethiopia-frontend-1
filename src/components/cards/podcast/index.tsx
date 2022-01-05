import React from "react";
import Image from "next/image";
import { PodcastCardContainer, } from './style';
import DateComponent from '../../dateComponent';

const PodcastCard = () => {
    return <PodcastCardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL='https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                src="https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                layout='fill'
                alt="podcast-Image"
            />

        </div>
        <div className='bottom'>
            <p className='podcastTitle'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='podcastDescription'>
                Lorem ipsum dolor sit amet, consec
            </p>
            <DateComponent date={`${new Date().toISOString}`} />
        </div>
    </PodcastCardContainer>


}

export default PodcastCard;
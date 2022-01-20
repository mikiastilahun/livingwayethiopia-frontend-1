import React from "react";
import Image from "next/image";
import { PodcastCardContainer, } from './style';
import DateComponent from '../../dateComponent';
import ReactHtmlParser from 'react-html-parser';

const PodcastCard = ({ image, description, title, date }: { image?: string, description: string, title: string, date: string, }) => {
    let detail = description?.slice(0, 100) + (description?.length > 100 ? "..." : "");
    return <PodcastCardContainer className='relative pb-7'>
        {image &&
            <img
                src={image}
                className="imageData"
                loading="lazy"
                placeholder="blur"
                alt="podcast-Image"
            />}
        <div className='bottom'>
            <p className='podcastTitle'>
                {ReactHtmlParser(title)}
            </p>
            <div className='podcastDescription mb-1'>
                {ReactHtmlParser(detail)}
            </div>
            <div className='absolute bottom-2'>
                <DateComponent date={date} />
            </div>
        </div>
    </PodcastCardContainer>


}

export default PodcastCard;
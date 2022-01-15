import React from "react";
import Image from "next/image";
import { PodcastCardContainer, } from './style';
import DateComponent from '../../dateComponent';
import ReactHtmlParser from 'react-html-parser';

const PodcastCard = ({ image, description, title, date }: { image?: string, description: string, title: string, date: string, }) => {
    let detail = description.slice(0, 100) + (description.length > 100 ? "..." : "");
    return <PodcastCardContainer className='relative pb-7'>
        {image && <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL={image}
                src={image}
                layout='fill'
                alt="podcast-Image"
            />

        </div>}
        <div className='bottom'>
            <p className='podcastTitle'>
                {ReactHtmlParser(title)}
            </p>
            <p className='podcastDescription'>
                {ReactHtmlParser(detail)}
            </p>
            <div className='absolute bottom-2'>
                <DateComponent date={date} />

            </div>
        </div>
    </PodcastCardContainer>


}

export default PodcastCard;
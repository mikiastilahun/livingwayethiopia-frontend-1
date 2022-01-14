import React from "react";
import Image from "next/image";
import { VideoCardContainer, } from './style';
import DateComponent from '../../dateComponent';

const VideoCard = ({ data }: { data: { image: string, title: string, description: string, count: number } }) => {
    return <VideoCardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL={data.image}
                src={data.image}
                layout='fill'
                alt="video-Image"
            />
            <div className='videoSide'>
                {data.count} Videos
            </div>
        </div>
        <div className='videoCardBottom'>
            <p className='videoTitle'>
                {data.title}
            </p>
            <p className='videoDescription'>
                {data.description.slice(0, 50)}{data.description.length > 50 && '...'}
            </p>
        </div>
    </VideoCardContainer>


}

export default VideoCard;
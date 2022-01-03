import React from "react";
import Image from "next/image";
import { VideoCardContainer, } from './style';
import DateComponent from '../../dateComponent';

const VideoCard = () => {
    return <VideoCardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL='https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                src="https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                layout='fill'
                alt="video-Image"
            />
            <div className='videoSide'>
                10 Videos
            </div>
        </div>
        <div className='videoCardBottom'>
            <p className='videoTitle'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='videoDescription'>
                Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ips
            </p>
        </div>
    </VideoCardContainer>


}

export default VideoCard;

import React, { useState } from 'react';
import Image from "next/image";
import { HeaderImage, VideoListContainer } from './style';
import VideoCard from '../../../components/cards/video';



const VideoList = () => {
    const [videos, setVideos] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
    return (
        <VideoListContainer >
            <div className='topImage'>
                <HeaderImage loading="lazy" blurDataURL='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" layout='fill' />
                <div className='background' />
            </div>
            <div className='videoListBottom'>
                {videos.map((data, index) => {
                    return <div key={index} className='videoCard'>
                        <VideoCard />
                    </div>
                })}
            </div>
        </VideoListContainer>
    );
}

export default VideoList;

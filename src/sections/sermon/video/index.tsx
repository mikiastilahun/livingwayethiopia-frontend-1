
import React, { useState } from 'react';
import Image from "next/image";
import { VideoListContainer } from './style';



const VideoList = () => {
    const [videos, setVideos] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    return (
        <VideoListContainer >
            {videos.map((data, index) => {
                return <div key={index} className='articleCard'>
                    videos
                </div>
            })}
        </VideoListContainer>
    );
}

export default VideoList;

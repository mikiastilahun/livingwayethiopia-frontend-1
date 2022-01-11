
import React, { useState } from 'react';
import Image from "next/image";
import { HeaderImage, ImageContainer, VideoListContainer } from './style';
import VideoCard from '../../../components/cards/video';



const VideoList = () => {
    const [videos, setVideos] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
    const [currentVideo, setCurrentVideo] = useState<string>("DOIWQddRD5M");

    const loading = () => {
        return <div className="flex justify-center items-center">
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <VideoListContainer >
            {/* <div className='topImage'>
                <HeaderImage loading="lazy" blurDataURL='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" layout='fill' />
                <div className='background' />
            </div> */}
            <div className='videoListBottom'>
                <div className="videoVisual">
                    <div className='background'>
                        <div>
                            <ImageContainer
                                loading='lazy'
                                placeholder='blur'
                                blurDataURL={`https://img.youtube.com/vi/${currentVideo}/hqdefault.jpg`}
                                src={`https://img.youtube.com/vi/${currentVideo}/hqdefault.jpg`}
                                layout='fill'
                                quality={100}
                                alt='video-Image'

                            />

                        </div>
                    </div>
                    <iframe
                        id="ytplayer"
                        src={`https://www.youtube.com/embed/${currentVideo}?rel=0`}
                        frameBorder="0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        placeholder="blur"
                    />
                </div>
                {videos.map((data, index) => {
                    return <div key={index} className='videoCard' onClick={() => {
                        setCurrentVideo("Sxxw3qtb3_g");
                    }}>
                        <VideoCard />
                    </div>
                })}
            </div>
        </VideoListContainer>
    );
}

export default VideoList;

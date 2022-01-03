
import React, { useState } from 'react';
import Image from "next/image";
import { HeaderImage, AudioListContainer } from './style';
import VideoCard from '../../../components/cards/audio';



const AudioList = () => {
    const [audios, setVideos] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
    return (
        <AudioListContainer >
            <div className='topImage'>
                <HeaderImage loading="lazy" blurDataURL='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" layout='fill' />
                <div className='background' />
            </div>
            <div className='audioListBottom'>
                {audios.map((data, index) => {
                    return <div key={index} className='audioCard'>
                        <VideoCard />
                    </div>
                })}
            </div>
        </AudioListContainer>
    );
}

export default AudioList;

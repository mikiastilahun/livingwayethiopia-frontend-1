
import React, { useState } from 'react';
import Image from "next/image";
import { AudioListContainer } from './style';



const AudioList = () => {
    const [audios, setAudios] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    return (
        <AudioListContainer >
            {audios.map((data, index) => {
                return <div key={index} className='articleCard'>
                    AudioList
                </div>
            })}
        </AudioListContainer>
    );
}

export default AudioList;

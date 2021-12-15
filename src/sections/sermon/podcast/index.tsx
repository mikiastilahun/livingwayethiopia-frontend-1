
import React, { useState } from 'react';
import Image from "next/image";
import { PodcastListContainer, SearchBox, SearchContainer, SearchFormInput } from './style';
import PodcastCard from '../../../components/cards/podcast';



const PodcastList = () => {
    const [podcasts, setPodcasts] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    return (
        <PodcastListContainer >
            <SearchContainer>

                <div className="searchBox">
                    <SearchFormInput placeholder='Search Podcast' type="text" />
                    <SearchBox>
                        <Image className='image' src="/icons/search.svg" width={32.5} height={32.5} loading='eager' quality={100} />
                    </SearchBox>
                </div>
            </SearchContainer>
            {podcasts.map((data, index) => {
                return <div key={index} className='podcastCard'>
                    <PodcastCard />
                </div>
            })}
        </PodcastListContainer>
    );
}

export default PodcastList;

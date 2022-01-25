
import React, { useEffect, useState } from 'react';
import { PodcastListContainer } from './style';
import PodcastCard from '../../../components/cards/podcast';
import Loading from '../../../components/loading';
import ErrorPage from '../../../components/error';
import Parser from 'rss-parser';
import { useRouter } from 'next/router';
import { EpisodeType } from '../../../types/custom';

let parser = new Parser();

const PodcastList = ({ episodes }: { episodes: EpisodeType[] }) => {
    const router = useRouter();
    return (
        <PodcastListContainer >
            {/* <SearchContainer>

                <div className="searchBox">
                    <SearchFormInput placeholder='Search Podcast' type="text" />
                    <SearchBox>
                        <Image className='image' src="/icons/search.svg" width={32.5} height={32.5} loading='eager' quality={100} />
                    </SearchBox>
                </div>
            </SearchContainer> */}
            {episodes?.map((data, index) => {
                return <div key={index} className='podcastCard' onClick={async () => {
                    router.push(
                        `/sermon/podcast/${data.guid}`,
                        undefined,
                        {
                            shallow: true,
                        },
                    );
                }}>
                    <PodcastCard date={data?.pubDate} title={data?.title} description={data?.itunes?.summary} image={data?.itunes?.image} />
                </div>
            })}
        </PodcastListContainer>
    );
}

export default PodcastList;

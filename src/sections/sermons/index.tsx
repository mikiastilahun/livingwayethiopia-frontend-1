
import React, { useState } from 'react';
import Image from "next/image";
import { SermonContainer, TabContainer } from './style';
import AudioList from './audio';
import PodcastList from './podcast';
import VideoList from './video';
import { useGeneralData } from '../../contexts/data';

enum ActiveTabData {
    Podcasts,
    Videos,
    Audios,
}


const SermonSection = () => {
    const { sermon, updateSermon } = useGeneralData()
    return (
        <SermonContainer >
            <div className='topPart'>
                <div className='tabs'>
                    <TabContainer active={ActiveTabData.Podcasts === sermon} onClick={() => {
                        updateSermon(ActiveTabData.Podcasts)
                    }}>
                        <p>
                            Podcast
                        </p>
                    </TabContainer>
                    <TabContainer active={ActiveTabData.Videos === sermon} onClick={() => {
                        updateSermon(ActiveTabData.Videos)
                    }}>
                        <p>
                            Videos
                        </p>
                    </TabContainer>
                    {/* <TabContainer active={ActiveTabData.Audios === sermon} onClick={() => {
                        updateSermon(ActiveTabData.Audios)
                    }}>
                        <p>
                            Audio
                        </p>
                    </TabContainer> */}
                </div>
                <div className='divider' />
            </div>
            <div className='sermonBottom'>
                {/* {ActiveTabData.Audios === sermon && <AudioList />} */}
                {ActiveTabData.Videos === sermon && <VideoList />}
                {ActiveTabData.Podcasts === sermon && <PodcastList />}
            </div>
        </SermonContainer>
    );
}

export default SermonSection;


import React, { useState } from 'react';
import Image from "next/image";
import { SermonContainer, TabContainer } from './style';
import AudioList from './audio';
import PodcastList from './podcast';
import VideoList from './video';

enum ActiveTabData {
    Podcasts,
    Videos,
    Audios,
}


const SermonSection = () => {
    const [activeTab, setActiveTab] = useState<ActiveTabData>(ActiveTabData.Podcasts);
    return (
        <SermonContainer >
            <div className='tabs'>
                <TabContainer active={ActiveTabData.Podcasts === activeTab} onClick={() => {
                    setActiveTab(ActiveTabData.Podcasts)
                }}>
                    <p>
                        Podcast
                    </p>
                </TabContainer>
                <TabContainer active={ActiveTabData.Videos === activeTab} onClick={() => {
                    setActiveTab(ActiveTabData.Videos)
                }}>
                    <p>
                        Videos
                    </p>
                </TabContainer>
                <TabContainer active={ActiveTabData.Audios === activeTab} onClick={() => {
                    setActiveTab(ActiveTabData.Audios)
                }}>
                    <p>
                        Audio
                    </p>
                </TabContainer>
            </div>
            <div className='divider' />
            {ActiveTabData.Audios === activeTab && <AudioList />}
            {ActiveTabData.Videos === activeTab && <VideoList />}
            {ActiveTabData.Podcasts === activeTab && <PodcastList />}
        </SermonContainer>
    );
}

export default SermonSection;

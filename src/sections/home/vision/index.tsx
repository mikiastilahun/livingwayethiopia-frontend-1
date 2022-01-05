
import React from 'react';
import { BottomPart, TopImage, TopPart, VisionContainer, } from './style';



const Vision = ({ vision, mission }: { vision: string, mission: string }) => {
    return (
        <VisionContainer >
            <TopPart>
                <TopImage
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    layout='fill'
                    alt="vision"
                    quality={100}
                />
                <div className="coverColor" />
                <p>
                    OUR VISION & VALUES
                </p>
            </TopPart>
            <BottomPart left={false}>
                <p className='title'>
                    OUR VISION
                </p>
                <p className='subText'>
                    {vision}
                </p>
            </BottomPart>
            <BottomPart left={true}>
                <p className='title'>
                    OUR MISSION
                </p>
                <p className='subText'>
                    {mission}
                </p>
            </BottomPart>
        </VisionContainer>
    );
}

export default Vision;

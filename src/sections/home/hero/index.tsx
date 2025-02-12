
import React from 'react';
import { theme } from '../../../styles/theme';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';


const Welcome = ({ hero }: { hero: string }) => {
    let images = process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + hero;
    if (hero == null)
        images = "/images/header.webp";
    return (
        <WelcomeContainer >
            <BackGroundImage
                loading="lazy"
                placeholder="blur"
                blurDataURL={images}
                src={images}
                layout='fill'
                alt="hero-image"
                className='z-10'
            />
            <LeftContainer className='z-20'>
                <p className='title'>
                    Lorem ipsum dolor sit
                </p>
                <p className='midText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </p>
                <div className="buttonContainer ">
                    <ButtonContainer onClick={() => {

                    }}>
                        <p>
                            Subscribe
                        </p>
                    </ButtonContainer>
                    <HallowButton onClick={() => {

                    }}>
                        <p>
                            Read More
                        </p>
                    </HallowButton>
                </div>
            </LeftContainer>
            <div className='absolute  z-10' style={{ width: "100%", height: "100%", background: `${theme.colors.third}66` }} />
        </WelcomeContainer>
    );
}

export default Welcome;

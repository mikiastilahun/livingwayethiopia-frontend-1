
import React from 'react';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';


const Welcome = () => {
    return (
        <WelcomeContainer >
            <BackGroundImage
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/header.webp"
                src="/images/header.webp"
                layout='fill'
                alt="banner-image"
            />
            <LeftContainer>
                <p className='title'>
                    Lorem ipsum dolor sit
                </p>
                <p className='midText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </p>
                <div className="buttonContainer">
                    <ButtonContainer>
                        <p>
                            Subscribe
                        </p>
                    </ButtonContainer>
                    <HallowButton>
                        <p>
                            Read More
                        </p>
                    </HallowButton>
                </div>
            </LeftContainer>
        </WelcomeContainer>
    );
}

export default Welcome;

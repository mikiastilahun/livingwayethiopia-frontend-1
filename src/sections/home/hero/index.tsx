
import React from 'react';
import { theme } from '../../../styles/theme';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';


const Welcome = ({ hero }: { hero: string }) => {
    return (
        <WelcomeContainer >
            <div className='absolute  z-10 ' style={{ width: "100%", height: "100%", background: `${theme.colors.secondary}33` }} />
            <BackGroundImage
                loading="lazy"
                placeholder="blur"
                blurDataURL={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + hero}
                src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + hero}
                layout='fill'
                alt="hero-image"
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

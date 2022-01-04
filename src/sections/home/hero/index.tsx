
import React from 'react';
import { theme } from '../../../styles/theme';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';


const Welcome = () => {
    return (
        <WelcomeContainer >
            <div className='absolute  z-10 ' style={{ width: "100%", height: "100%", background: `${theme.colors.secondary}33` }} />
            <BackGroundImage
                loading="lazy"
                placeholder="blur"
                blurDataURL="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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

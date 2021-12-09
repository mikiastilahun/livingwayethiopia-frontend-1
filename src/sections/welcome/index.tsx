
import React from 'react';
import { BackGroundImage, ButtonContainer, HallowButton, LeftContainer, WelcomeContainer, } from './style';
import { useNavBar } from '../../contexts/navbar';
import Image from "next/image";



const Welcome = () => {
    const navbar = useNavBar();
    return (
        <WelcomeContainer >
            <BackGroundImage src="/images/header.webp" layout='fill' alt="banner-image" />

            <LeftContainer>
                <p className='title'>
                    Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className='midText'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="buttonContainer">
                    <ButtonContainer>
                        <p>
                            Subscribe
                        </p>
                    </ButtonContainer>
                    <HallowButton>
                        <p>
                            About Us
                        </p>
                    </HallowButton>
                </div>
            </LeftContainer>
        </WelcomeContainer>
    );
}

export default Welcome;

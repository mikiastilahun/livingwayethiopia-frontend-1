
import React from 'react';
import { BackgroundImage, SubscriptionFormButton, SubscriptionFormInput, SubscriptionBox, SubscriptionContainer } from './style';
import Image from "next/image";
const Subscription = () => {
    return (
        <SubscriptionContainer>
            <BackgroundImage>
                <Image width={200} height={200} src="/icons/books.svg" />
            </BackgroundImage>
            <SubscriptionBox>
                <span className='title'>
                    Subscribe to get notified about update
                </span>
                <span className='subText'>
                    By subscribing with your mail, <br /> You will get updates about things to come.
                </span>
                <div className='form'>
                    <SubscriptionFormInput placeholder='Enter your email' type="email" />
                    <SubscriptionFormButton >
                        <p>
                            Subscribe
                        </p>
                    </SubscriptionFormButton>
                </div>

            </SubscriptionBox>
        </SubscriptionContainer>
    );
}

export default Subscription;

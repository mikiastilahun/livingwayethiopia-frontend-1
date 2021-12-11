
import React from 'react';
import { Title } from '../event/style';
import Image from "next/image";
import { BottomContainer, OurCurchContainer, SmallImage, TopContainer, } from './style';


const OurCurchSection = () => {
    return (
        <OurCurchContainer >
            <Title>
                Our Church
            </Title>
            <TopContainer>
                <div className='firstContainer'>
                    <div>
                        <SmallImage
                            quality={100}
                            loading='eager'
                            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="church image"
                            layout='fill'
                        />
                    </div>
                    <div>
                        <SmallImage
                            quality={100}
                            loading='eager'
                            src="https://images.unsplash.com/photo-1508985307703-52d13b2b06b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="church image"
                            layout='fill'
                        />
                    </div>
                </div>
                <div className='secondContainer'>
                    <SmallImage
                        quality={100}
                        loading='eager'
                        src="https://images.unsplash.com/photo-1521915062729-2969ce9b7a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                        alt="church image"
                        layout='fill'
                    />
                </div>
                <div className='thirdContainer'>
                    <SmallImage
                        quality={100}
                        loading='eager'
                        src="https://images.unsplash.com/photo-1546472466-081e1113893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="church image"
                        layout='fill'
                    />
                </div>
            </TopContainer>
            <BottomContainer>
                <div className='firstContainer'>
                    <SmallImage
                        quality={100}
                        loading='eager'
                        src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="church image"
                        layout='fill'
                    />
                </div>
                <div className='secondContainer'>
                    <SmallImage
                        quality={100}
                        loading='eager'
                        src="https://images.unsplash.com/photo-1521915062729-2969ce9b7a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                        alt="church image"
                        layout='fill'
                    />
                </div>
                <div className='thirdContainer'>
                    <SmallImage
                        quality={100}
                        loading='eager'
                        src="https://images.unsplash.com/photo-1546472466-081e1113893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="church image"
                        layout='fill'
                    />
                </div>
            </BottomContainer>
        </OurCurchContainer>
    );
}

export default OurCurchSection;

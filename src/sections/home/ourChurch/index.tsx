
import React from 'react';
import { Title } from '../event/style';
import Image from "next/image";
import { BottomContainer, OurCurchContainer, SmallImage, TopContainer, } from './style';


const OurCurchSection = () => {
    const images = [
        "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1508985307703-52d13b2b06b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1521915062729-2969ce9b7a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        "https://images.unsplash.com/photo-1546472466-081e1113893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
        "https://images.unsplash.com/photo-1579652541186-9ee4c6c002a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1623096939009-cb651b7700f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    ]

    return (
        <OurCurchContainer >
            <Title>
                Our Church
            </Title>
            <TopContainer>
                <div className='firstContainer'>
                    <div>
                        {images[0] && <SmallImage
                            quality={100}
                            loading="lazy"
                            blurDataURL={images[0]}
                            placeholder="blur"
                            src={images[0]}
                            alt="church image"
                            layout='fill'
                        />}
                    </div>
                    <div>
                        {images[1] && <SmallImage
                            quality={100}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={images[1]}
                            src={images[1]}
                            alt="church image"
                            layout='fill'
                        />}
                    </div>
                </div>
                {images[2] && <div className='secondContainer'>
                    <SmallImage
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={images[2]}
                        src={images[2]}
                        alt="church image"
                        layout='fill'
                    />
                </div>}
                {images[3] && <div className='thirdContainer'>
                    <SmallImage
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={images[3]}
                        src={images[3]}
                        alt="church image"
                        layout='fill'
                    />
                </div>}
            </TopContainer>
            {images.length > 4 && <BottomContainer>
                {images[4] && <div className='firstContainer'>
                    <SmallImage
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={images[4]}
                        src={images[4]}
                        alt="church image"
                        layout='fill'
                    />
                </div>}
                <div className='secondContainer'>
                    {images[5] && <SmallImage
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={images[5]}
                        src={images[5]}
                        alt="church image"
                        layout='fill'
                    />}
                </div>
                <div className='thirdContainer'>
                    {images[6] && <SmallImage
                        quality={100}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={images[6]}
                        src={images[6]}
                        alt="church image"
                        layout='fill'
                    />}
                </div>
            </BottomContainer>}
        </OurCurchContainer>
    );
}

export default OurCurchSection;

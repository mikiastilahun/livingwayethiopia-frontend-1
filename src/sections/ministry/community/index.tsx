
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageBoxContainer, ImageContainer, BiggerImageBoxContainer } from './style';
import { theme } from '../../../styles/theme';


const Community = ({ communityOutReach }: { communityOutReach: { image: string, title: string }[] }) => {
    return (
        <Container >
            <p className='text-3xl py-3 font-thin' style={{ color: theme.colors.text }}>
                Community Out Reach
            </p>
            <div className="rounded-lg grid items-start sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                <div className="rounded-lg grid grid-rows-2 gap-4 ">
                    {communityOutReach[0] && <div className="flex-col flex justify-start items-start py-1 " >
                        <ImageBoxContainer className="relative overflow-hidden rounded-md " >
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={communityOutReach[0].image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={communityOutReach[0].image}
                            />
                        </ImageBoxContainer>
                        <div className="mt-2 text-start flex flex-col">
                            <span className="text-md font-light" style={{ color: theme.colors.text }}>
                                {communityOutReach[0].title}
                            </span>
                        </div>
                    </div>}
                    {communityOutReach[1] && <div className="flex-col flex justify-start items-start py-1 " >
                        <ImageBoxContainer className="relative overflow-hidden rounded-md " >
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={communityOutReach[1].image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={communityOutReach[1].image}
                            />
                        </ImageBoxContainer>
                        <div className="mt-2 text-start flex flex-col ">
                            <span className="text-md font-light" style={{ color: theme.colors.text }}>
                                {communityOutReach[1].title}
                            </span>
                        </div>
                    </div>}
                </div>
                {communityOutReach[2] && <div className="flex-col flex justify-start items-start py-1 " >
                    <BiggerImageBoxContainer className="relative overflow-hidden rounded-md " >
                        <ImageContainer
                            loading='lazy'
                            placeholder="blur"
                            blurDataURL={communityOutReach[2].image}
                            layout='fill'
                            alt="profile"
                            quality={100}
                            src={communityOutReach[2].image}
                        />
                    </BiggerImageBoxContainer>
                    <div className="mt-2 text-start flex flex-col py-2">
                        <span className="text-md font-light" style={{ color: theme.colors.text }}>
                            {communityOutReach[2].title}
                        </span>
                    </div>
                </div>}
                {communityOutReach.length > 3 && <div className="rounded-lg grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 ">
                    {communityOutReach[3] && <div className="flex-col flex justify-start items-start py-1 " >
                        <ImageBoxContainer className="relative overflow-hidden rounded-md " >
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={communityOutReach[3].image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={communityOutReach[3].image}
                            />
                        </ImageBoxContainer>
                        <div className="mt-2 text-start flex flex-col">
                            <span className="text-md font-light" style={{ color: theme.colors.text }}>
                                {communityOutReach[3].title}
                            </span>
                        </div>
                    </div>}
                    {communityOutReach[4] && <div className="flex-col flex justify-start items-start py-1 " >
                        <ImageBoxContainer className="relative overflow-hidden rounded-md " >
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={communityOutReach[4].image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={communityOutReach[4].image}
                            />
                        </ImageBoxContainer>
                        <div className="mt-2 text-start flex flex-col ">
                            <span className="text-md font-light" style={{ color: theme.colors.text }}>
                                {communityOutReach[4].title}
                            </span>
                        </div>
                    </div>}
                </div>}


            </div>

        </Container>
    );
}

export default Community;
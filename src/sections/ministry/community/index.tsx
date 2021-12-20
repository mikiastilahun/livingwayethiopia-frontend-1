
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageBoxContainer, ImageContainer, BiggerImageBoxContainer } from './style';
import { theme } from '../../../styles/theme';


const Community = () => {

    const communityOutReach: { image: string, title: string }[] = [
        {
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            title: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis n",
        }, {
            image: "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            title: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis n",
        }, {
            image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
            title: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis n",
        }, {
            image: "https://images.unsplash.com/photo-1483428400520-675ef69a3bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
            title: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis n",
        }, {
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            title: "labore et dolore magna aliqua. Ut enim ad minim veniam, quis n",
        },


    ]
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
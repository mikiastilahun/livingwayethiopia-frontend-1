
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import { theme } from '../../../styles/theme';


const Members = () => {

    const members: { image: string, name: string, title: string }[] = [
        {
            image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
            title: "Leader",
            name: "Leader"

        },
        {
            image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            title: "Leader",
            name: "Leader"
        },
        {
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
            title: "Leader",
            name: "Leader"
        }, {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            title: "Leader",
            name: "Leader"

        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            title: "Leader",
            name: "Leader"
        },
    ]
    return (
        <Container >
            <p className='sm:mt-2 md:mt-9 text-5xl py-3 font-sans font-thin tracking-widest text-center mb-10' style={{ color: "#EA3A60" }}>
                Main Church  Staff
                <br />
                And leaders
            </p>
            <div className="rounded-lg grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3  gap-4 py-2">
                {members.map((data, index) => {
                    return <div className="flex-col flex justify-center items-center py-3 hover:bg-slate-50 hover:shadow-md rounded-lg " key={index}>
                        <div className="relative rounded-full h-36 w-36 overflow-hidden border-2 " style={{ borderColor: theme.colors.text }}>
                            <ImageContainer
                                loading='lazy'
                                placeholder="blur"
                                blurDataURL={data.image}
                                layout='fill'
                                alt="profile"
                                quality={100}
                                src={data.image}
                            />
                        </div>
                        <div className="mt-2 text-center flex flex-col">
                            <span className=" text-lg font-bold" style={{ color: theme.colors.text }}>
                                {data.name}
                            </span>
                            <span className="text-xs" style={{ color: "#343D48" }}>
                                {data.title}
                            </span>
                        </div>
                    </div>
                })}

            </div>

        </Container >
    );
}

export default Members;
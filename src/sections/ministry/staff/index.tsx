
import React, { useState } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import { theme } from '../../../styles/theme';


const StaffMember = ({ staff }: { staff: { image: string, name: string, title: string }[] }) => {
    return (
        <Container >
            <p className='text-3xl py-3 font-thin' style={{ color: theme.colors.text }}>
                Staff Members
            </p>
            <div className="rounded-lg grid grid-cols-2 2xl:grid-cols-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 py-2">
                {staff.map((data, index) => {
                    return <div className="flex-col flex justify-center items-center py-1 " key={index}>
                        <div className="relative rounded-full h-24 w-24 overflow-hidden border-2 " style={{ borderColor: theme.colors.text }}>
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

        </Container>
    );
}

export default StaffMember;
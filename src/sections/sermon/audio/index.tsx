
import React from 'react';
import Image from "next/image";
import { AudioContainer } from './style';
import Navigation from '../../../components/navigation';
import dayjs from "dayjs";
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { theme } from '../../../styles/theme';
dayjs.extend(LocalizedFormat)



const AudioData = () => {
    const data = {
        title: "Title",
        date: new Date(),
        image: "https://images.unsplash.com/photo-1641176313810-da6228b716e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        detail: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the mm ipsum dolor sit amet.., comes from a line in section 1.10.32 ",
        audio: "https://anchor.fm/abel-lamesgen/episodes/title-e1d0f5q"
    };
    return (
        <AudioContainer className='mt-20' >
            <Navigation routeData='/sermon' />
            <div className='px-0 md:px-10'>

                <p className='text-4xl font-extrabold mt-4'>
                    {data.title}
                </p>
                <p className='text-sm font-extralight font-sans mt-2 mb-4'>
                    Published on {" "}
                    <span className='underline underline-offset-1 '> {dayjs(data.date).format('LL')}
                    </span>, by The Church
                </p>
                <div className='w-auto mx-0 lg:mx-20'>
                    <div className='relative overflow-hidden imageData' style={{ width: "100%", background: theme.colors.background, borderTopLeftRadius: 9, borderTopRightRadius: 9 }}>
                        <Image
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={data.image}
                            src={data.image}
                            layout='fill'
                            alt="podcast-Image"
                        />
                    </div>
                    <div className='w-auto py-5 px-0 sm:px-2' style={{ background: theme.colors.background, borderBottomLeftRadius: 9, borderBottomRightRadius: 9 }}>
                        <audio controls style={{ width: "100%", borderRadius: 0, }}>
                            <source src={data.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
                <p className='text-lg font-extralight font-sans mb-4 px-3 md:px-5 bodyText mt-5'  >
                    {data.detail}
                </p>
            </div>
        </AudioContainer>
    );
}

export default AudioData; 

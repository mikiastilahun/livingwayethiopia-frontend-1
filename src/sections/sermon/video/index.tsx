
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Container, ImageContainer } from './style';
import Navigation from '../../../components/navigation';
import axios from 'axios'
import { useRouter } from 'next/router'
import ErrorPage from '../../../components/error';
import Loading from '../../../components/loading';
import DateComponent from '../../../components/dateComponent';
import YoutubeVideoCard from '../../../components/cards/youtubeVideo';
import { theme } from '../../../styles/theme';


interface dataType {
    snippet: {
        publishedAt: string,
        channelId: string,
        channelTitle: string,
        description: string,
        playlistId: string,
        resourceId: { kind: string, videoId: string },
        thumbnails: {
            default: {
                url: string
            }, medium: {
                url: string
            }, high: {
                url: string
            },
        },
        title: string,
        videoOwnerChannelId: string,
        videoOwnerChannelTitle: string
    }
}

const SingleVideo = () => {

    const router = useRouter();
    const [videos, setVideos] = useState<dataType[]>([]);
    const [video, setVideo] = useState<dataType>();
    const [nextToken, setNextToken] = useState<string>("");
    const [backToken, setBackToken] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        getData({ token: '', update: true });
        return () => {
        }
    }, [])

    let maxAmount = 6;

    const getData = async ({ token, update = false }: { token: string, update?: boolean }) => {
        setLoading(true);
        try {
            const res = await axios({
                method: 'get',
                url: `https://www.googleapis.com/youtube/v3/playlistItems?&playlistId=${router.asPath.split("?playlist=")[1]}&key=${process.env.NEXT_PUBLIC_YOUTUBEAPIKEY}&maxResults=${maxAmount}&part=snippet${token ? '&pageToken=' + token : ''}`,
            });
            if (res.status === 200) {
                setVideos(res.data.items);
                if (res.data.items && res.data.items.length && update)
                    setVideo(res.data.items[0]);
                setNextToken(res.data.nextPageToken);
                setBackToken(res.data.prevPageToken);
                setLoading(false);
            } else { throw new Error() }
        }
        catch (e) {
            console.log(e)
            setError(true);
            setLoading(false);
        }
    }
    return (
        <Container style={{ paddingTop: 80 }} >
            <Navigation routeData='/sermon' />

            <div className="videoVisual mt-5 shadow-sm relative">
                {video &&
                    <>
                        <p className='mb-2 text-xl'>
                            {video.snippet.title}
                        </p>
                        <DateComponent date={video.snippet.publishedAt} />
                        <div className='mb-3' />
                        <div className='background'>
                            <div>
                                <ImageContainer
                                    loading='lazy'
                                    placeholder='blur'
                                    blurDataURL={`${video.snippet.thumbnails.high?.url}`}
                                    src={`${video.snippet.thumbnails.high?.url}`}
                                    layout='fill'
                                    quality={100}
                                    alt='video-Image'
                                />
                            </div>
                        </div>
                        <iframe
                            id="ytplayer"
                            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?rel=0`}
                            frameBorder="0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            placeholder="blur"
                        />
                    </>
                }
            </div>

            {video && <div className='w-full py-10 description '>
                <p className='mb-2 text-lg'>
                    Description
                </p>
                <p className='mb-2 text-base'>
                    {video.snippet.description}
                </p>
            </div>}
            <div className=' shadow-sm ' style={{ background: theme.colors.background }}>
                <p className='text-2xl pl-5 pt-3'>
                    Related Videos
                </p>
                <div className='w-full py-5  flex flex-wrap ' >
                    {videos.map((item, index) => {
                        return <div key={index} className='w-full sm:w-1/2 md:w-1/3 px-3 mb-5 ' onClick={() => {
                            setVideo(item);
                        }} >
                            <YoutubeVideoCard
                                data={{
                                    description: item.snippet.description,
                                    title: item.snippet.title,
                                    image: item.snippet.thumbnails.medium.url,
                                    playing: video?.snippet.resourceId.videoId === item?.snippet.resourceId.videoId
                                }} />
                        </div>
                    })}
                </div>

                <div className=" px-4 py-3 flex items-center justify-end border-gray-200 ">
                    {backToken &&
                        <div
                            onClick={() => {
                                getData({ token: backToken });
                            }}
                            className=" cursor-pointer relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Previous
                        </div>
                    }
                    <div className=' w-full h-10'>

                    </div>
                    {nextToken && <div
                        onClick={() => {
                            getData({ token: nextToken });
                        }}
                        className=" cursor-pointer ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </div>}
                </div>
            </div>
        </Container>
    );
}

export default SingleVideo 

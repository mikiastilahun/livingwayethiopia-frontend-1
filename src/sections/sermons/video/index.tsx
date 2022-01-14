
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { HeaderImage, ImageContainer, VideoListContainer } from './style';
import VideoCard from '../../../components/cards/video';
import useSWR from 'swr'
import Loading from '../../../components/loading';
import ErrorPage from '../../../components/error';
import axios from "axios";


interface dataType {
    id: string,
    snippet: {
        channelTitle: string,
        description: string,
        thumbnails: {
            default: {
                url: string
            }
            high: {
                url: string
            }
            medium: {
                url: string
            }
        },
        title: string,
        localized: {
            description: string,
            title: string,
        }
    },
    contentDetails: { itemCount: number },
}

const VideoList = () => {

    const [videos, setVideos] = useState<dataType[]>();
    const [nextToken, setNextToken] = useState<string>("");
    const [backToken, setBackToken] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        getData({ token: "" });
        return () => {
        }
    }, [])

    let maxAmount = 10;

    const getData = async ({ token }: { token: string }) => {
        setLoading(true);
        try {
            const res = await axios({
                method: 'get',
                url: `https://www.googleapis.com/youtube/v3/playlists?channelId=${process.env.NEXT_PUBLIC_YOUTUBECHANNELID}&key=${process.env.NEXT_PUBLIC_YOUTUBEAPIKEY}&part=snippet&maxResults=${maxAmount}&part=contentDetails&pageToken=${token}`,
            });
            if (res.status === 200) {
                setVideos(res.data.items);
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



    if (loading)
        return <div className='h-screen flex justify-center items-center w-screen' style={{ height: 500 }}><Loading /> </div>;
    else if (error) return (
        <ErrorPage />)
    else
        return (
            <VideoListContainer >
                {/* <div className='topImage'>
                <HeaderImage loading="lazy" blurDataURL='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" layout='fill' />
                <div className='background' />
            </div> */}
                <div className='videoListBottom '>
                    {videos?.map((item: dataType, index: number) => {
                        return <div key={index} className='videoCard'>
                            <VideoCard data={{
                                image: item.snippet.thumbnails.high.url,
                                title: item.snippet.localized.title,
                                description: item.snippet.localized.description,
                                count: item.contentDetails.itemCount
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
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md  text-gray-700 bg-white hover:bg-gray-50"
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
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                        Next
                    </div>}
                </div>
            </VideoListContainer >
        );
}

export default VideoList;


import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { PodcastListContainer, SearchBox, SearchContainer, SearchFormInput } from './style';
import PodcastCard from '../../../components/cards/podcast';
import { useRouter } from 'next/router';
import Loading from '../../../components/loading';
import ErrorPage from '../../../components/error';
import axios from 'axios';
import { XMLParser } from "fast-xml-parser"

const parser = new XMLParser();

const PodcastList = () => {
    const router = useRouter();
    const [podcasts, setPodcasts] = useState<[]>();
    const [defaultImage, setDefaultImage] = useState<string>("");
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
                url:
                    `https://anchor.fm/s/7d811104/podcast/rss`,
                // "https://anchor.fm/s/7dee6420/podcast/rss"
            });
            if (res.status === 200) {
                ;
                let data = parser.parse(res.data);
                console.log(data)
                let podcasts: any = [data.rss.channel.item];
                if (Array.isArray(data.rss.channel.item)) podcasts = data.rss.channel.item;
                setPodcasts(podcasts);
                setDefaultImage(data.rss.channel.image.url)
                // setNextToken(res.data.nextPageToken);
                // setBackToken(res.data.prevPageToken);
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
            <PodcastListContainer >
                {/* <SearchContainer>

                <div className="searchBox">
                    <SearchFormInput placeholder='Search Podcast' type="text" />
                    <SearchBox>
                        <Image className='image' src="/icons/search.svg" width={32.5} height={32.5} loading='eager' quality={100} />
                    </SearchBox>
                </div>
            </SearchContainer> */}
                {podcasts?.map((data: any, index) => {
                    return <div key={index} className='podcastCard'>
                        <PodcastCard date={data.pubDate} title={data.title} description={data.description}
                            image={defaultImage}
                        />
                    </div>
                })}
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
            </PodcastListContainer>
        );
}

export default PodcastList;

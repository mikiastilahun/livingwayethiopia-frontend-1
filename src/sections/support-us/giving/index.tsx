
import React from 'react';
import { theme } from '../../../styles/theme';
import { ImageContainer } from './style';

const GivingComponent = () => {
    const loop = [1, 2, 3, 4, 5, 6];
    const data = {
        loop: loop,
        image: "https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    }
    return (

        <div className="relative mt-12 ">
            <div className="relative h-96 w-auto overflow-hidden ">
                <ImageContainer
                    loading='lazy'
                    placeholder="blur"
                    blurDataURL="https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    layout='fill'
                    alt="giving"
                    quality={100}
                    src="https://images.unsplash.com/photo-1569437061233-5befcf96ee45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />
            </div>
            <h4 className="text-5xl mt-10 leading-10 font-extrabold text-gray-900  tracking-tight sm:leading-9 text-center">
                Why We Give
            </h4>
            <p className='text-center text-lg md:text-xl mt-10'>
                Giving is an act of worship that indicates what we value most. When we give to the church, we partner with God to see changes happen and lives transformed, both here and abroad.
            </p>
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mt-5">
                {data.loop.map((data: any, index) => {
                    return <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4  mt-6  shadow-lg rounded-lg " style={{ background: `${theme.colors.primary}55` }}>
                        <div className="flex-shrink-0">
                            <div className="flex relative rou items-center mx-auto justify-center h-12 w-12 rounded-md ">
                                <ImageContainer
                                    loading='lazy'
                                    placeholder="blur"
                                    blurDataURL="https://images.unsplash.com/photo-1569437061241-a848be43cc82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    layout='fill'
                                    alt="giving"
                                    quality={100}
                                    src="https://images.unsplash.com/photo-1569437061233-5befcf96ee45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-xl text-white font-semibold  my-2">
                            Bank Name
                        </h3>
                        <p className="text-sm text-white ">
                            Bank related detail's
                        </p>
                    </div>
                })}
            </div>
        </div>

    );
}

export default GivingComponent;
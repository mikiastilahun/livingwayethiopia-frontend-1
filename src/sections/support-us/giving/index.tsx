
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
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {data.loop.map((data: any, index) => {
                    return <div className="shadow-md rounded-2xl w-80 p-4 " style={{ background: `${theme.colors.background}` }}>
                        <div className="flex flex-row items-start gap-4">
                            <div className='relative rounded-md overflow-hidden' style={{ width: 100, height: 75 }} >
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
                            <div className=" w-full flex flex-col justify-between">
                                <div>
                                    <p className=" text-xl font-medium">
                                        Bank Name
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        Bank Details Lorem ipsum dolor sit amet, consec Lorem ipsum dolor sit amet, consec Lorem ipsum dolor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>

    );
}

export default GivingComponent;
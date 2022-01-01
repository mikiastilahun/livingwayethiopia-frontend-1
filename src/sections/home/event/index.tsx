
import React from 'react';
import { Arrow, EventContainer, IconImage, SliderContainer, Title, } from './style';
import Image from "next/image";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"



const EventSection = () => {


    const images = [
        "https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
        "https://images.unsplash.com/photo-1534267933751-06d5943f27f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1558172475-3e1101f862f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1572700433483-3959fb6ece38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
        "https://images.unsplash.com/photo-1604367285428-a1d3e0731a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
        "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    ]

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        breakpoints: {
            "(min-width: 560px)": {
                slides: { perView: images.length >= 2 ? 2 : images.length, spacing: 10 },
            },
            "(min-width: 700px)": {
                slides: { perView: images.length >= 3 ? 3 : images.length, spacing: 15 },
            },
            "(min-width: 1000px)": {
                slides: { perView: images.length >= 4 ? 4 : images.length, spacing: 15 },
            },
            "(min-width: 1600px)": {
                slides: { perView: images.length >= 6 ? 6 : images.length, spacing: 15 },
            },
            "(min-width: 2100px)": {
                slides: { perView: images.length >= 8 ? 8 : images.length, spacing: 15 },
            },
        },
        slides: { perView: 1 },
    })
    return (
        <>
            <EventContainer >
                <Title className="mb-10 mt-14">
                    Events
                </Title>
            </EventContainer>
            <SliderContainer>
                <div ref={ref} className="keen-slider">
                    {images.map((data, index) => {
                        return <div className="keen-slider__slide customSlider" key={index} >
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={data}
                                src={data}
                                alt="event"
                                layout='fill'
                            />
                        </div>
                    })}
                </div>
                <Arrow left={true}
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }>
                    <Image loading="eager" src="/icons/leftArrow.svg" alt="event" width={25} height={25} />
                </Arrow>
                <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }>
                    <Image loading="eager" src="/icons/arrowRight.svg" alt="event" width={25} height={25} />
                </Arrow>
            </SliderContainer>

        </>
    );
}

export default EventSection;

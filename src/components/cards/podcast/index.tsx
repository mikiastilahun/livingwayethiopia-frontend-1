import React from "react";
import Image from "next/image";
import { PodcastCardContainer, } from './style';
import DateComponent from '../../dateComponent';

const PodcastCard = () => {
    return <PodcastCardContainer>
        <div className='imageContainer'>
            <Image src="https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" layout='fill' />
        </div>
        <div className='bottom'>
            <p className='articleTitle'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='articleDescription'>
                Lorem ipsum dolor sit amet, consec
            </p>
            <DateComponent />
        </div>
    </PodcastCardContainer>


}

export default PodcastCard;
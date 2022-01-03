import React from "react";
import Image from "next/image";
import { CardContainer, } from './style';
import DateComponent from '../../dateComponent';

const ArticleCard = () => {
    return <CardContainer>
        <div className='imageContainer'>
            <Image
                loading="lazy"
                placeholder="blur"
                blurDataURL='https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
                src="https://images.unsplash.com/photo-1508161773455-3ada8ed2bbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                layout='fill'
                alt="article-Image"
            />
        </div>
        <p className='articleTitle'>
            Lorem ipsum dolor sit amet, consectetur
        </p>
        <DateComponent />
        <p className='articleDescription'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi x
        </p>
    </CardContainer>


}

export default ArticleCard;
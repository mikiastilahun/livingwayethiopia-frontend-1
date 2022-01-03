
import React, { useState } from 'react';
import Image from "next/image";
import { ArticleContainer } from './style';
import Navigation from '../../../components/navigation';



const Article = () => {
    return (
        <ArticleContainer className='mt-20' >
            <Navigation />
        </ArticleContainer>
    );
}

export default Article 

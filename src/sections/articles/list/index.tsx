
import React, { useState } from 'react';
import Image from "next/image";
import { ArticleListContainer } from './style';
import ArticleCard from '../../../components/cards/articles';
import { ArticleEntity } from '../../../types/strapi';


const ArticleList = ({ articles }: { articles: ArticleEntity[] }) => {
    return (
        <ArticleListContainer >
            {articles.map((data, index) => {
                return <div key={index} className='articleCard'>
                    <ArticleCard article={data} />
                </div>
            })}
        </ArticleListContainer>
    );
}

export default ArticleList;

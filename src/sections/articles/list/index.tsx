
import React, { useState } from 'react';
import Image from "next/image";
import { ArticleListContainer } from './style';
import ArticleCard from '../../../components/articlesCard/card';



const ArticleList = () => {
    const [articles, setArticles] = useState<number[]>([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
    return (
        <ArticleListContainer >
            {articles.map((data, index) => {

                return <div key={index} className='articleCard'>
                    <ArticleCard />
                </div>
            })}
        </ArticleListContainer>
    );
}

export default ArticleList;

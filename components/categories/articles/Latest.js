import React from 'react';
import Blogs from '@/api/articles/articles';
import Link from 'next/link';


const LatestArticles = () => {
    const name = 'featured';
   const latestArticles = Blogs.filter(blog => blog.categories.includes(name));
    

    return (
        <div className="container">
            <div className="row">
            <h1 className="text-center"><span className="green">Featured</span> News</h1>
            {latestArticles.map(article => (

                <div key={article.id} className="latest_article_column col-sm-12 col-md-4 col-lg-4">
                    <Link href={`/article/${article.slug}`}>

                    <div className="article_thumbnail">
                        <img src={article.imagepath} width={300} height={300}></img>
                    </div>
                    <div className="article_body">
                    <h3>{article.title}</h3>
        
                    </div>
                    </Link>
                </div>
                
            ))}
        </div>
        </div>
    );
}

export default LatestArticles;

import React from 'react';
import { useRouter } from 'next/router';
import Articles from '@/api/articles/articles'
import Image from 'next/image';
import Link from 'next/link';

const MainLayout = () => {
  const router = useRouter();
  const { category } = router.query;
  const categoryBlogs = Articles.filter(article => article.categories.includes(category));

   
  return (
    <section className="category_page">
       <div className='category_pages_banner'>
    
    <h2 className="capitalize text-center">{category}</h2>
       </div>
       <section className="section">
    <div className="container">
      <div className="row">
        {categoryBlogs.map(item => (
          <div key={item.id} className="article_column col-sm-12 col-lg-4 col-md-4">
            <Link href={`/article/${item.slug}`}>
              <div className="blog_image">
                <Image src={`/${item.imagepath}`} width={300} height={300} alt="blog_image" />
              </div>
              <div className="article_body">
                <h3>{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
    </section>
  );
};


export default MainLayout;

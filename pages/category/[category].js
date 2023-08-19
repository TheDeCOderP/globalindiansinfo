import React from 'react';
import { useRouter } from 'next/router';
import Blogs from '@/api/categories/categories'
import Image from 'next/image';
import Link from 'next/link';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryBlogs = Blogs.filter(blog => blog.categories.includes(category));

  return (
    <section classname="category_page">
  
      
    <div className="container">
     
      <div className="row">
        {categoryBlogs.map(item => (
          <div key={item.id} className="col-sm-12 col-lg-4 col-md-4">
            <Link href={`/blogs/${item.slug}`}>
              <div className="blog_image">
                <Image src={`/${item.imagepath}`} width={300} height={300} alt="blog_image" />
              </div>
              <div className="blog_body">
                <h4>{item.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

CategoryPage.layout = "category";


export default CategoryPage;

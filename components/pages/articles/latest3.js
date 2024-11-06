
import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
const port = globalConfig.port;

const  Articles = () =>{
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    console.log("Fetching articles...");
    // Fetch articles from your Express API
    fetch(`${port}/api/articles/latest`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data); // Log the fetched data
        setArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error); // Log any errors
      });
  }, []);

  console.log("Rendering Articles component with articles:", articles); // Log the articles data

  return (
    <div className="mt-5">
      <div className="row">
        {articles.slice(0, 3).map((article) => (
          <div key={article.id} className="col-sm-12 col-md-4 col-lg-4 ">
            <Link href={`/articles/${article.slug}`}>
              {article.imagepath && (
                <img
                  src={`${port}/uploads/articles/${article.imagepath}`}
                  alt={article.title}
                  className="aspect-ratio"
                />
              )}
              <div className="blog_body latest-articles ">
                <h3 className="text-center mb-2">{article.title}</h3>
                {/* <div dangerouslySetInnerHTML={{ __html: article.description }} /> */}
              <div className='text-center'>
                <button className="button rounded text-center">Read More</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/articles"><button className="button primary">View All Articles</button></Link>
      </div>
    </div>
  );
}
 export default Articles;

import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
const port = globalConfig.port;

const  EventsArticles = () =>{
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    console.log("Fetching articles...");
    // Fetch articles from your Express API
    fetch(`${port}/api/articles/news`)
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
    <>
  
      <div className="row mt-2">
        {articles.slice(0, 60).map((article) => (
          <div key={article.id} className="col-sm-12 col-md-4 col-lg-4">
            <Link href={`/articles/${article.slug}`}>
              {article.imagepath && (
                <img
                  src={`${port}/uploads/articles/${article.imagepath}`}
                  alt={article.title}
                  className="aspect-ratio"
                />
              )}
              <div className="blog_body latest-articles">
                <h3 className="text-center mb-2">{article.title}</h3>
                {/* <div dangerouslySetInnerHTML={{ __html: article.description }} /> */}
                <button className="button ">Read More</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
 export default EventsArticles;
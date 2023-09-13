
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
    <div className="mt-2 row ">
    <h1 className="text-center"><span className="green">Related</span> News</h1>
     <div class="book col-sm-12 col-md-3">
        <img class="book-image" src="/uploads/images/jobs/book.jpeg" alt="Image Alt Text" width={400} height={300}  />
        <h2 class="book-title">Bharat- Mother of Democracy</h2>
        <a class="book-button" href="https://ebook.g20.org/ebook/bharatmod/index.html" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  
  
      <div className="row mt-5">
      <h1 className="text-center"><span className="green">Related</span> Articles</h1>
        {articles.slice(0, 6).map((article) => (
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
                <button className="button">Read More</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 export default EventsArticles;
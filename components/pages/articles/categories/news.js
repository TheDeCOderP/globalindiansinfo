
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
    <div className="row mt-2">
    <h1 className="text-center"><span className="green">Latest</span> News</h1>
     <div className="book col-sm-12 col-md-4 col-lg-4 mb-4 pb-2 ">
        <img className="book-image aspect-ratio" src="/uploads/images/news/book.jpg" alt="Image Alt Text"   />
        <div className="books_box">
        <h2 className="book-title">Bharat- Mother of Democracy</h2>
        <a className="book-button text-dark bg-light" href="https://ebook.g20.org/ebook/bharatmod/index.html" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
    </div>
    <div className="book col-sm-12 col-md-4 col-lg-4  mb-4 pb-2">
        <img className="book-image aspect-ratio" src="/uploads/images/jobs/uk.jpg" alt="Image Alt Text" />
        <div className="books_box">
        <h2 className="book-title">Big steps forward in capital markets  
</h2>
        <a className="book-button text-dark bg-light" href="https://hmtreasury-newsroom.prgloo.com/news/big-steps-forward-in-capital-markets-cooperation-with-india" target="_blank" rel="noopener noreferrer">Read More</a>
    </div></div>
  
  
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
                <button className="button ">Read More</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
 export default EventsArticles;
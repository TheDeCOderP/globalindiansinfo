import { useEffect, useState } from 'react';
import Link from 'next/link';
import globalConfig from '@/config';
const port = globalConfig.port;

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch blogs from your Express API
    fetch(`${port}/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="section mt-5">
        <div className="row">
      
        {articles.map((article) => (

          <div key={article.id} className="col-sm-12 col-md-4 col-lg-4">
          <Link href={`/articles/${article.slug}`}> {article.imagepath && (
              <img
                src={`${port}/uploads/images/articles/${article.imagepath}`}
                alt={article.title}
                className="aspect-ratio"
              />
            )}
            <div className="blog_body">
            <h3 className="text-center mb-2">{article.title}</h3><br></br>
            <button className="button">Read More</button>
            </div>
            </Link> 
            
          </div>
        ))}
      
    </div>
    </div>
  );
}



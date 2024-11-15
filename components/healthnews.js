import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleArticles, setVisibleArticles] = useState(6); // Number of articles to show initially

  const placeholderImage = "/uploads/news-placeholder.jpg";

  // Function to fetch news articles
  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsdata.io/api/1/news', {
        params: {
          apiKey: 'pub_51999cabee9bdc5232af8b708e27c961fee0b', // Replace with your Newsdata.io API key
          q: 'healthcare,fitness,nutrition',
          country: 'us',
          language: 'en'
        }
      });
      setArticles(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchNews();
  }, []);

  // Function to load more articles
  const loadMore = () => {
    setVisibleArticles(prev => prev + 9); // Increase the number of visible articles by 9
  };

  return (
    <div className="container mt-4 mb-4">
      
      {/* Loader Spinner */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="row">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow" style={{ maxHeight: '400px' }}>
                <img
                  src={article.image_url || placeholderImage} // Use placeholder if image is missing
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: '250px', objectFit: 'cover' }} // Consistent height and image fit
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {article.title}
                  </h5>
                </div>
                <div className="card-footer">
                  <a href={article.link} className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {articles.length > visibleArticles && (
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsComponent;

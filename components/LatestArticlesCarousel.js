import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import globalConfig from '@/config';

const port = globalConfig.port;

const BannerSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch the latest 5 articles from the API
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${port}/api/articles?limit=5`);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching latest articles:', error);
      }
    };
    fetchArticles();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {articles.map((article) => (
          <div
            key={article.id}
            className="slider-item"
            style={{
              backgroundImage: `url(${port}/uploads/articles/${article.image_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              color: '#fff',
              position: 'relative',
            }}
          >
            <div className="overlay" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></div>
            <div className="content" style={{
              position: 'relative',
              zIndex: 2,
              padding: '20px',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <h2>{article.title}</h2>
              <p>{article.categories}</p>
              <p>{new Date(article.uploaded_at).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;

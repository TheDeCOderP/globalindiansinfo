import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import globalConfig from '@/config';

const port = globalConfig.port;
const MAX_CATEGORIES = 3;

const SearchResultsPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      // Fetch data from the API
      fetch(`${port}/api/articles/`)
        .then((response) => response.json())
        .then((data) => {
          // Filter the data based on your search query
          const filteredResults = data.filter((item) => {
            const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
            const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase());
           // Check if item.categories is an array before using some
          const categoryMatch = Array.isArray(item.categories) && item.categories.some((category) =>
          category.toLowerCase().includes(query.toLowerCase())
        ); 
            return titleMatch || categoryMatch || descriptionMatch;
          });
          setSearchResults(filteredResults);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [query]);

  return (
    <section className="section search-results">
      <div className="container text-center">
        <div className="row text-center">
          <h2 className="text-center">Search Results for "{query}"</h2>

          {searchResults.map((result) => (
            <div className="col-sm-12 col-lg-4 col-md-4 mt-4" key={result.id}>
              <div className="articles_data">
                <Link href={`/articles/${result.slug}`}>
                  <img
                    className="search_results_images"
                    width={1600}
                    height={500}
                    src={`${port}/uploads/articles/${result.imagepath}`}
                    alt={`image${result.id}`}
                  />
                  <div className="article_body">
                    <h3 className="article-body">{result.title}</h3>
                    <p className="text-center">
                    {Array.isArray(result.categories) && result.categories.length > 0 ? (
  result.categories
    .slice(0, MAX_CATEGORIES)
    .map((category) => (
      <Link
        href={`/category/${category.toLowerCase()}`}
        key={category}
      >
        <a className="categories capitalize">{category}</a>
      </Link>
    ))
) : (
 <></>
)}

                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResultsPage;

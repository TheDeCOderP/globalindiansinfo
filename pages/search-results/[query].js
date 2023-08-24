// pages/search-results/[query].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import siteContent from '@/api/articles/articles'; // Adjust the path as needed
import Link from 'next/link';
import Image from 'next/image';

const MAX_CATEGORIES = 3; // Set the maximum number of categories to display

const SearchResultsPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredResults = siteContent.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query.toLowerCase());
        const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase());
        const categoryMatch = item.categories.some((category) =>
          category.toLowerCase().includes(query.toLowerCase())
        );
        return titleMatch || categoryMatch || descriptionMatch;
      });
      setSearchResults(filteredResults);
    }
   
  }, [query]);

  return (
    <div className="container text-center py-4">
      <div className="row text-center">
        <h2 className="py-4">Search Results for "{query}"</h2>

        {searchResults.map((result) => (
          <div className="col-sm-12 col-lg-4 col-md-4 py-2" key={result.id}>
            <Link href={result.slug} as={`/article/${result.slug}`}>
              <Image
                className="search_results_images"
                width={300}
                height={300}
                src={`/${result.imagepath}`}
                alt={`image${result.id}`}
              />
              <div className="article_body">
              <h3 className="article-body">{result.title}</h3>
              <p className="text-center">
                {result.categories
                  .slice(0, MAX_CATEGORIES)
                  .map((category) => (
                    <Link legacyBehavior
                      href={`/category/${category.toLowerCase()}`}
                      key={category}
                    >
                      <a className="categories capitalize">{category}</a>
                    </Link>
                  ))}
              </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SearchResultsPage;

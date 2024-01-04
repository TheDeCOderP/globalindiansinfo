// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;

export default function Home() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await axios.get(`${port}/api/all-page-data`);
        setPageData(response.data);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    // Fetch initial page data
    fetchPageData();

    // Set up an interval to fetch page data periodically (every 5 minutes in this example)
    const intervalId = setInterval(() => {
      fetchPageData();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>All Page Data</h1>
      <ul>
        {pageData.map((page) => (
          <li key={page.page_name}>
            <strong>{page.page_name}</strong>: {page.views} views | Total Views: {page.total_views}
          </li>
        ))}
      </ul>
    </div>
  );
}

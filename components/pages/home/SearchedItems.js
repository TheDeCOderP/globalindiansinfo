import React, { useEffect, useState } from 'react';
import globalConfig from '@/config';
import Link from 'next/link';

const port = globalConfig.port;

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${port}/api/top-searches`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="searched_data">
       <div className="">
        {data.map((item, index) => (
          
          < Link href={`/search-results/${item}`}  key={index}>
          <div    className="search-results_body">
           
            <span className="searched_result">{item}</span>
             
            
            
           
            
            </div>
            </Link>
           
        ))}
      </div>
      </div>
    
  );
};

export default YourComponent;

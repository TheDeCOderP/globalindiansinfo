import Link from "next/link";
import React, { useEffect, useState } from 'react';
import globalConfig from '@/config';
const port = globalConfig.port;

const AdminPage = () => {
  const data  = [
    {
      "id" : 1 ,
      "name":"Articles",
      "slug":"/pcsadmin/articles"

 },
    {
      "id" : 2 ,
      "name":"Blogs",
      "slug":"/pcsadmin/blogs"
 },
    {
      "id" : 3 ,
      "name":"Business Listings",
      "slug":"/pcsadmin/business/listings"
 },
  ]

  const [numberOfColumns, setNumberOfColumns] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  

    
    try {
      const response = await fetch(`${port}/api/articles`);
      const jsonData = await response.json();
      // Assuming jsonData is an array of articles
      if (jsonData.length > 0) {
        // Get the keys (properties) of the first article
        const firstArticleKeys = Object.keys(jsonData[0]);
       
        
        // Count the number of columns
        const numberOfColumns = firstArticleKeys.length;
        setNumberOfColumns(numberOfColumns); 
        
        // Print the number of columns
        console.log('Number of columns:', numberOfColumns);
    } else {
        console.log('No data found.');
    }
     
    //  setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };







 
  return (
    
    <div className="pt-3 pb-3">
     <div className="row">
      {data.map((items) => (
        <div className="col-sm-12 col-md-4 col-lg-4" key={items.id}>
          
          <Link href={items.slug}>
        <div className="data box-shadow p-3 text-center">
       {/*  <h5>No of Articles : {numberOfColumns}</h5> */}
         <h4>{items.name}</h4>
         <button className="mt-3 button">View All {items.name}</button>
        </div>
       
        </Link>
      </div>

      )
        )}
      
     </div>
    </div>
  )
  };
AdminPage.layout = "admin";

export default AdminPage;
;

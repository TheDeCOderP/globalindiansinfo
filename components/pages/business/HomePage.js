// components/BusinessList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from "next/link";
const BusinessList = () => {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${port}/api/business`)
      .then((response) => {
        // Filter data where status is equal to 1
        const filteredData = response.data.filter((item) => item.status === 1);
        setBusinessData(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="">
    
    <div className="row">
      {businessData.slice(0,4).map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
          <div className="p-4 box-shadow">
            <div className="card-body">
              <Link href={`/listed-business/${item.id}`}>
                <img src={`${port}/uploads/business/${item.logoimage}`}
                  alt={item.name} className='contain w-200 '/></Link>
              <h5 className="card-title mt-4 mb-4">{item.name}</h5>
              <Link href={`/listed-business/${item.id}`} className="button">
               Know More </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-3">
        <Link href="/listed-business" className="button">View All Listed Businesses</Link>
        </div>
    </div>
  );
};


export default BusinessList;

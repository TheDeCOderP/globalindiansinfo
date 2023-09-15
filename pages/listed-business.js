// components/BusinessList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;

const BusinessList = () => {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${port}/api/business`)
      .then((response) => {
        setBusinessData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="section">
    <div className="row">
      {businessData.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default BusinessList;

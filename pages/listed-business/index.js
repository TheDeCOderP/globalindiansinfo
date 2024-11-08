// components/BusinessList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;
import { FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import Head from 'next/head';
import Link from "next/link";
import { Nav } from 'react-bootstrap';
import Banner from '../../components/Banner'

const BusinessList = () => {
  const [businessData, setBusinessData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [businessTypes, setBusinessTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    // Fetch data from the API
    axios.get(`${port}/api/business`)
      .then((response) => {
        // Filter data where status is equal to 1
        const activeBusinesses = response.data.filter((item) => item.status === 1);
        setBusinessData(activeBusinesses);

        // Extract unique types
        const types = [...new Set(activeBusinesses.map((item) => item.type))];
        setBusinessTypes(types);
        setFilteredData(activeBusinesses); // Set default to show all active businesses
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTabClick = (type) => {
    setSelectedType(type);
    if (type === 'all') {
      setFilteredData(businessData);
    } else {
      setFilteredData(businessData.filter((item) => item.type === type));
    }
  };

  return (
    <>
      <Head>
        <title>Listed Business - Global Indians Info</title>
      </Head>
      <Banner 
                title="🌟 Explore Our Listed Businesses 🌟" 
                description="🌐 Discover a diverse range of businesses, from trusted local services to innovative global enterprises. 🤝 Connect with quality-driven organizations across various industries, 📈 grow your network, and unlock new opportunities with ease. Let us help you find the right partner for success.

" />
      <div className="section container text-center">
        
        {/* Header with List Your Business button */}
     <div className='text-center flex justify-content-center'>
     <Link href="/list-your-business" className='fixedbutton text-center '>
  <button className="btn primary-bg text-white d-flex align-items-center">
    <FaPlus className="me-2" />
    <span>List Your Business Now</span>
  </button>
</Link>
     </div>
        

        

        {/* Tabs for business types */}
        <Nav variant="tabs" defaultActiveKey="all" className="flex justify-content-center mb-2 nav-tabs-scrollable">
          <Nav.Item>
            <Nav.Link
              eventKey="all"
              onClick={() => handleTabClick('all')}
              className={`px-3 ${selectedType === 'all' ? 'primary-bg white-text' : 'primary-text'}`}
            >
              All
            </Nav.Link>
          </Nav.Item>
          {businessTypes.map((type) => (
            <Nav.Item key={type}>
              <Nav.Link
                eventKey={type}
                onClick={() => handleTabClick(type)}
                className={`px-3 ${selectedType === type ? 'primary-bg white-text' : 'primary-text'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Business cards */}
        <div className="row">
          {filteredData.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="p-4 box-shadow">
                <div className="card-body">
                  <Link href={`/listed-business/${item.id}`}>
                    <img src={`${port}/uploads/business/${item.logoimage}`}
                      alt={item.name} className='contain ap4_2 '/>
                  </Link>
                  <h5 className="card-title mt-4 mb-4">{item.name}</h5>
                  <Link href={`/listed-business/${item.id}`} className="button">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessList;

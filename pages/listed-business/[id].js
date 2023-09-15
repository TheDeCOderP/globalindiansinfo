// pages/business/[id].js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';





const BusinessDetails = () => {
  const [business, setBusiness] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Fetch data for the specified business ID
      axios.get(`${port}/api/business/${id}`)
        .then((response) => {
          setBusiness(response.data);
        })
        .catch((error) => {
          console.error('Error fetching business details:', error);
        });
    }
  }, [id]);

  return (
    <div className="section">
    <div className="row d-flex p-4 justify-content-center ">
        <div className="col-sm-12 col-md-10 p-4 box-shadow">
        <div className="col-sm-12 col-md-3">
        <img src={`${port}/uploads/business/${business.imagepath}`} alt={business.name}  className=" contain"/>
        </div>
      <h3>{business.name}</h3>
      <p> Email:<Link href={`mailto:${business.email}`} >{business.email}</Link></p>
      <p> Mobile: <Link href={`tel:${business.mobile}`} >{business.mobile}</Link></p>
      <p> Type: {business.type}</p>
      <p><FaMapMarkerAlt className="p-2" /> Location: {business.location}</p>
      
      {/* Add more details as needed */}
    </div>
    </div>
    </div>
  );
};

export default BusinessDetails;

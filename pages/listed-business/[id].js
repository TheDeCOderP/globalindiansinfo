// pages/business/[id].js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';





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
        <div className="col-3">
        <img src={`${port}/uploads/business/${business.imagepath}`} alt={business.name}  className=" contain"/>
        </div>
      <h3>{business.name}</h3>
      <p>Email: </p><Link href={`mailto:${business.email}`} ><p>{business.email}</p></Link>
     <p>Mobile: </p> <Link href={`tel:${business.mobile}`} >{business.mobile}</Link>
      <p>Type: {business.type}</p>
      <p>Location: {business.location}</p>
      
      {/* Add more details as needed */}
    </div>
    </div>
    </div>
  );
};

export default BusinessDetails;

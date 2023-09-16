// pages/business/[id].js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';
import { FaAddressBook, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaMobile, FaNetworkWired } from 'react-icons/fa';





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
    <div className="section business_listings_single">
    <div className="row d-flex p-4 justify-content-center  ">
        <div className="col-sm-12 col-md-10 p-4 box-shadow d-flex mobile_column">
        <div className="col-sm-12 col-md-6">
        <img src={`${port}/uploads/business/${business.imagepath}`} alt={business.name}  className=" contain"/>
        </div>
        <div className="col-sm-12 col-md-6">
      
      <h3 className="mt-3 mb-3">{business.name}</h3>
      <div className="website_button mb-4 mt-4">  <a href={business.website} className="button mb-4 text-light" target="_blank"><FaGlobe color={'white'} className="mb-2 "/> Visit Official Website</a></div>
    

      <p><FaEnvelope className="mr-2 " /> <b>Email :</b> <Link href={`mailto:${business.email}`} > {business.email}</Link></p>
      <p><FaMobile className="mr-2 " /> <b>Mobile:</b> <Link href={`tel:${business.mobile}`}  > {business.mobile}</Link></p>
      <p> <FaNetworkWired className="mr-2 " /> <b>Business Type :</b> {business.type}</p>
      <p> <FaMapMarkerAlt className="mr-2 " /> <b>Location :</b>  {business.location}</p>
     
      </div>
      {/* Add more details as needed */}
    </div>
    </div>
    </div>
  );
};

export default BusinessDetails;

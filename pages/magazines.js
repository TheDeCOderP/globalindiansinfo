import { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';

const MagazineList = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `${port}/api/magazines`; // Replace with your actual API endpoint

    // Fetch data using Axios
    axios.get(apiUrl)
      .then(response => {
        setMagazines(response.data); // Assuming the API returns an array of magazines
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="container mt-5">
      <div className="row">
        {magazines.map((magazine, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Link href={magazine.flipbook_link} target="_blank">
            <div className="card cards">
              <img src={`${port}/uploads/magazines/${magazine.image}`}  className="contain magazines_images" alt={magazine.title} />
              <div className="card-body">
                <h5 className="card-title">{magazine.title}</h5>
                
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineList;

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
    <div className="">
      <div className="row">
        {magazines.slice(0,2).map((magazine, index) => (
          <div key={index} className="col-md-6 mb-4">
            <Link href={magazine.flipbook_link} target="_blank">
            <div className="card">
              <img src={`${port}/uploads/magazines/${magazine.image}`}  className="card-img-top home_magazine" alt={magazine.title} />
              <div className="card-body">
                <h5 className="card-title">{magazine.title}</h5>
                
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='mt-3' > <Link href="/magazines" className='button'>View All Magazines
        </Link>
        </div>
    </div>
  );
};

export default MagazineList;

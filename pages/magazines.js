import { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';

const MagazineList = () => {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    const apiUrl = `${port}/api/magazines`;
    axios.get(apiUrl)
      .then(response => {
        setMagazines(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Main Content - 75% width on desktop */}
        <div className="col-md-9 mb-4">
          <div className="row">
            {magazines.map((magazine, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <Link href={magazine.flipbook_link} target="_blank">
                  <div className="magazine-card">
                    <img
                      src={`${port}/uploads/magazines/${magazine.image}`}
                      className="magazine-image"
                      alt={magazine.title}
                    />
                    <div className="card-body mt-2">
                      <h5 className="card-title">{magazine.title}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar - 25% width on desktop */}
        <div className="col-md-3 mb-4">
          <div className="sidebar-ads fixed">
          <img src="/uploads/images/adbanners/dm.png" alt="Ad 1" className="sidebar-ad mb-4" />
          <img src="/uploads/images/adbanners/web.jpg" alt="Ad 2" className="sidebar-ad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineList;

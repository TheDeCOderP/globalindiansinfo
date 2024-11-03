/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;
import Link from 'next/link';
import Head from 'next-head';

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
      <Head>
        <title>GII Magazines</title>
      </Head>
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
                    <div className="card-body mt-2 pt-2 pb-3">
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
          <div className="sidebar-adding sticky-top">
            <img src="/uploads/images/adbanners/dm.png" alt="Ad 1" className="sidebar-ad mb-4 img-fluid" />
            <img src="/uploads/images/adbanners/seo.png" alt="Ad 2" className="sidebar-ad img-fluid" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .magazine-card {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          cursor: pointer;
        }
        
        .magazine-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .magazine-image {
          width: 100%;
          height: auto;
          aspect-ratio:3/4;
          transition: transform 0.3s;
        }

        .magazine-card:hover .magazine-image {
          transform: rotateY(-20deg);
        }

        .magazine-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to right, transparent 75%, rgba(255, 255, 255, 0.8) 100%);
          clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 0 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .magazine-card:hover::before {
          opacity: 1;
        }

        .sticky-top {
          position: sticky;
        }

        .sidebar-ad {
          max-width: 100%;
      object-fit:contain;
      height:400px;
      
        }
      `}</style>
    </div>
  );
};

export default MagazineList;

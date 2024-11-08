import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
import Head from 'next/head';
import Banner from '../components/Banner';
const port = globalConfig.port;


const ImportantLinks = () => {
    const [links, setLinks] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetchCountries();
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${port}/api/important-links`);
            setLinks(response.data);
        } catch (error) {
            console.error('Error fetching links:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCountries = async () => {
        try {
            const response = await axios.get(`${port}/api/important-links/countries`);
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const filteredLinks = selectedCountry
        ? links.filter(link => link.country === selectedCountry)
        : links;

    return (
        <>
        
        <Banner 
                title="Welcome to Our Website" 
                description="Discover insightful content and services tailored for you." 
            />
        <div className="container my-5">
            <Head>
                <title>Important Links</title>
            </Head>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <h4 className="mb-4">Filter by Country</h4>
                    <ul className="list-group">
                        <li
                            className={`list-group-item ${!selectedCountry ? 'primary-bg active text-white' : ''}`}
                            onClick={() => setSelectedCountry('')}
                            style={{ cursor: 'pointer' }}
                        >
                            All Countries
                        </li>
                        {countries.map(country => (
                            <li
                                key={country}
                                className={`list-group-item ${selectedCountry === country ? 'primary-bg active text-white' : ''}`}
                                onClick={() => setSelectedCountry(country)}
                                style={{ cursor: 'pointer' }}
                            >
                                {country}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-md-9">
                    {loading && (
                        <div className="text-center">
                            <div className="spinner-border" role="status"></div>
                        </div>
                    )}
                    {message && (
                        <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'} my-3`}>
                            {message}
                        </div>
                    )}
                    <h4 className="mb-4 text-center">
                        {selectedCountry ? `Important Links for ${selectedCountry}` : 'All Important Links'}
                    </h4>
                    <div className="row">
                        {filteredLinks.length > 0 ? (
                            filteredLinks.map(link => (
                                <div key={link.id} className="col-12 col-sm-6 col-md-4 mb-3">
                                    <div className="card shadow-sm h-100">
                                        <div className="p-2 pt-3 text-center d-flex flex-column justify-content-between">
                                          
                                                <h5 className="card-title font-weight-bold">{link.title}</h5>
                                                <p className="text-center card-text text-muted">{link.country}</p>
                                            </div>
                                            <a
                                                href={link.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-center button pt-1 pb-1 "
                                            >
                                                Visit Website
                                            </a>
                                    
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <div className="alert alert-warning text-center">No links available for this country.</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ImportantLinks;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
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

    // Fetch all links
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

    // Fetch unique countries from API
    const fetchCountries = async () => {
        try {
            const response = await axios.get(`${port}/api/important-links/countries`);
            setCountries(response.data); // Assume response.data is an array of country names
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    // Filter links based on selected country
    const filteredLinks = selectedCountry
        ? links.filter(link => link.country === selectedCountry)
        : links;

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-3">
                    <h5 className='mb-3'>Filter by Country</h5>
                    <ul className="list-group">
                        <li
                            className={`list-group-item ${!selectedCountry ? 'primary-bg active' : ''}`}
                            onClick={() => setSelectedCountry('')}
                            style={{ cursor: 'pointer' }}
                        >
                            All Countries
                        </li>
                        {countries.map(country => (
                            <li
                                key={country}  // Assuming country is a simple string
                                className={`list-group-item ${selectedCountry === country ? 'primary-bg active' : ''}`}
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
                        <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'} my-2`}>
                            {message}
                        </div>
                    )}
                    <h5 className="mb-3">
                        {selectedCountry ? `Links for ${selectedCountry}` : 'All Important Links'}
                    </h5>
                    <ul className="list-group">
                        {filteredLinks.length > 0 ? (
                            filteredLinks.map(link => (
                                <li key={link.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{link.title}</strong> ({link.country})
                                        <a href={link.link} target="_blank" rel="noopener noreferrer" className="ms-2">
                                            Visit
                                        </a>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No links available for this country.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImportantLinks;

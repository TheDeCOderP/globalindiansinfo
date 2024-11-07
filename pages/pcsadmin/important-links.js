import React, { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;

const ImportantLinks = () => {
    const [links, setLinks] = useState([]);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [country, setCountry] = useState(''); // Dropdown selection
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [editingId, setEditingId] = useState(null);

    // Fetch links on mount
    useEffect(() => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, link, country };
        
        try {
            if (editingId) {
                await axios.put(`${port}/api/important-links/${editingId}`, data);
                setMessage('Link updated successfully');
            } else {
                await axios.post(`${port}/api/important-links`, data);
                setMessage('Link added successfully');
            }
            setTitle('');
            setLink('');
            setCountry('');
            setEditingId(null);
            fetchLinks();
        } catch (error) {
            console.error('Error saving link:', error);
            setMessage('Failed to save link');
        }
    };

    const handleEdit = (link) => {
        setEditingId(link.id);
        setTitle(link.title);
        setLink(link.link);
        setCountry(link.country);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this link?')) {
            try {
                await axios.delete(`${port}/api/important-links/${id}`);
                setMessage('Link deleted successfully');
                fetchLinks();
            } catch (error) {
                console.error('Error deleting link:', error);
                setMessage('Failed to delete link');
            }
        }
    };

    return (
        <div className="container my-4">
            {loading && <div className="text-center"><div className="spinner-border" role="status"></div></div>}
            {message && <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'} my-2`}>{message}</div>}
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Link Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Link Title"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input
                        type="url"
                        className="form-control"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <select
                        className="form-select"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="UK">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="France">France</option>
                       
            
                    </select>
                </div>
                <button type="submit" className="button">
                    {editingId ? 'Update Link' : 'Add Link'}
                </button>
            </form>

            <ul className="list-group">
                {links.map((link) => (
                    <li key={link.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{link.title}</strong> ({link.country})
                            <a href={link.link} target="_blank" rel="noopener noreferrer" className="ms-2">Visit</a>
                        </div>
                        <div>
                            <button className="btn btn-secondary btn-sm me-2" onClick={() => handleEdit(link)}>Edit</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(link.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ImportantLinks.layout = "admin";

export default ImportantLinks;

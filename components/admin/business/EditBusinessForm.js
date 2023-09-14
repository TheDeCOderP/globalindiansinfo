import React, { useState, useEffect } from 'react';
import axios from 'axios';
import globalConfig from '@/config';

const port = globalConfig.port;

const EditBusinessForm = ({ isOpen, onRequestClose, businessId, onUpdate }) => {
  const [businessData, setBusinessData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchBusinessData();
    }
  }, [isOpen]);

  const fetchBusinessData = () => {
    axios
      .get(`${port}/api/business/${businessId}`)
      .then((response) => {
        setBusinessData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching business data:', error);
      });
  };

  const handleUpdate = () => {
    // Create a FormData object to handle file uploads (if a file is selected)
    const formData = new FormData();
    formData.append('name', businessData.name);
    formData.append('type', businessData.type);
    formData.append('location', businessData.location);
    formData.append('status', businessData.status);

    // Check if a file is selected
    if (businessData.selectedFile) {
      formData.append('image', businessData.selectedFile);
    }

    // Make an Axios PUT request to update the business data
    axios
      .put(`${port}/api/businessedit/${businessId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file uploads
        },
      })
      .then(() => {
        console.log('Business data updated successfully.');
        onRequestClose(); // Close the modal
        onUpdate(); // Trigger data refresh in the parent component
      })
      .catch((error) => {
        console.error('Error updating business data:', error);
      });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBusinessData({ ...businessData, selectedFile: file });
  };

  return (
    <div>
      <h2>Edit Business</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={businessData.name}
                onChange={(e) =>
                  setBusinessData({ ...businessData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input
                type="text"
                className="form-control"
                value={businessData.type}
                onChange={(e) =>
                  setBusinessData({ ...businessData, type: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                className="form-control"
                value={businessData.location}
                onChange={(e) =>
                  setBusinessData({ ...businessData, location: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input
                type="number"
                className="form-control"
                value={businessData.status}
                onChange={(e) =>
                  setBusinessData({ ...businessData, status: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input
                type="file"
                accept="image/*"
                className="form-control-file"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={onRequestClose}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditBusinessForm;

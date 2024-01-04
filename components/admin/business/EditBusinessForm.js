import React, { useState, useEffect } from 'react';
import axios from 'axios';
import globalConfig from '@/config';

const port = globalConfig.port;

const EditBusinessForm = ({ isOpen, onRequestClose, businessId, onUpdate }) => {
  const [businessData, setBusinessData] = useState({});
  const [loading, setLoading] = useState(true);

  // Separate state for selected image and banner
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

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
    formData.append('email', businessData.email);
    formData.append('mobile', businessData.mobile);
    formData.append('website', businessData.website);

    // Check if a new image is selected and update it if necessary
    if (selectedImage) {
      formData.append('image', selectedImage);
    } else {
      // If no new image is selected, use the old image data
      formData.append('image', businessData.image);
    }

    // Check if a new banner image is selected and update it if necessary
    if (selectedBanner) {
      formData.append('banner', selectedBanner);
    } else {
      // If no new banner image is selected, use the old banner image data
      formData.append('banner', businessData.banner);
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

  // Handle file input change for image and banner
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setSelectedBanner(file);
  };

  return (
    <div>
      <h2>Edit Business</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <form onSubmit={handleUpdate}>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Business Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.name}
                  onChange={(e) =>
                    setBusinessData({ ...businessData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="mobile" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.mobile}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      mobile: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.email}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="website" className="form-label">
                  Business Website Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.website}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      website: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="type" className="form-label">
                  Business Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={businessData.type}
                  onChange={(e) =>
                    setBusinessData({ ...businessData, type: e.target.value })
                  }
                  className="form-select"
                >
                   <option>Select Your Industry</option>
     <option value="Accountancy & Accounting">Accountancy & Accounting</option>
     <option value="Admin & Administration">Admin & Administration</option>
     <option value="Automotive">Automotive</option>
     <option value="Aviation">Aviation</option>
     <option value="Banking">Banking</option>
     <option value="Charity & Volunteer">Charity & Volunteer</option>
     <option value="Cleaning">Cleaning</option>
     <option value="Customer Services">Customer Services</option>
     <option value="Design">Design</option>
     <option value="Education">Education</option>
     <option value="Engineering">Engineering</option>
     <option value="Environmental">Environmental</option>
     <option value="Finance">Finance</option>
     <option value="Healthcare">Healthcare</option>
     <option value="Hospitality">Hospitality</option>
     <option value="IT">IT</option>
     <option value="Legal">Legal</option>
     <option value="Leisure & Sports">Leisure & Sports</option>
     <option value="Logistics, Transport & Distribution">Logistics, Transport & Distribution</option>
     <option value="Managerial">Managerial</option>
     <option value="Manufacturing">Manufacturing</option>
     <option value="Marketing">Marketing</option>
     <option value="Multilingual">Multilingual</option>
     <option value="NHS">NHS</option>
     <option value="Procurement">Procurement</option>
     <option value="Public Sector">Public Sector</option>
     <option value="Recruitment">Recruitment</option>
     <option value="Retail">Retail</option>
     <option value="Sales">Sales</option>
     <option value="Science">Science</option>
     <option value="Security & Emergency">Security & Emergency</option>
     <option value="Travel & Tourism">Travel & Tourism</option>
     <option value="Warehouse">Warehouse</option>
     <option value="Work from Home">Work from Home</option> 
  </select>
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.location}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      location: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="image" className="form-label">
                  Business Logo Image{' '}
                  <span className="red">
                    ( Exact Size : 250*250 ( in pixels ) )
                  </span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control-file"
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="bannerimage" className="form-label">
                  Business Banner Image{' '}
                  <span className="red">
                    ( Exact Size : 1600*400 ( in pixels ) )
                  </span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control-file"
                  onChange={handleBannerChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label>Status:</label>
                <input
                  type="text"
                  className="form-control"
                  value={businessData.status}
                  onChange={(e) =>
                    setBusinessData({
                      ...businessData,
                      status: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
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
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditBusinessForm;

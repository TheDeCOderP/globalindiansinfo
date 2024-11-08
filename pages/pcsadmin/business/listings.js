import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaCheck, FaTimes, FaSave, FaBan } from 'react-icons/fa';
import globalConfig from '@/config';

const port = globalConfig.port;

const BusinessListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editedBusiness, setEditedBusiness] = useState({});
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("Fetching data from the server...");
    axios
      .get(`${port}/api/business`)
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (businessId) => {
    if (window.confirm('Do you want to delete this business listing?')) {
      console.log(`Deleting business with ID: ${businessId}`);
      axios
        .delete(`${port}/api/business/${businessId}`)
        .then(() => {
          console.log("Business deleted successfully");
          fetchData();
        })
        .catch((error) => console.error('Error deleting item:', error));
    }
  };

  const handleTogglePublish = (itemId, currentStatus) => {
    const newStatus = currentStatus === 0 ? 1 : 0;
    console.log(`Toggling publish status for item ID: ${itemId}, new status: ${newStatus}`);
    axios
      .put(`${port}/api/business/${itemId}`, { status: newStatus })
      .then(() => {
        console.log("Publish status updated successfully");
        fetchData();
      })
      .catch((error) => console.error('Error toggling publish status:', error));
  };

  const handleEditClick = (business) => {
    console.log("Editing business:", business);
    setEditId(business.id);
    setEditedBusiness({ ...business });
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append('name', editedBusiness.name);
    formData.append('type', editedBusiness.type);
    formData.append('status', editedBusiness.status);
  
    if (newImage) {
      formData.append('logoimage', newImage);
    }
  
    console.log("Preparing to send the following data in FormData:");
    formData.forEach((value, key) => console.log(`${key}: ${value}`)); // Log each form data key-value pair
  
    try {
      const response = await axios.put(`${port}/api/business/${editId}`, formData);
      console.log("Update response:", response.data);
      setEditId(null);
      setNewImage(null);
      fetchData();
    } catch (error) {
      console.error('Error updating business:', error);
  
      if (error.response) {
        console.error("Response data:", error.response.data); // Logs backend error message if available
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };
  

  const handleCancelEdit = () => {
    console.log("Canceling edit");
    setEditId(null);
    setNewImage(null);
  };

  const handleFieldChange = (field, value) => {
    console.log(`Field changed: ${field}, Value: ${value}`);
    setEditedBusiness((prev) => ({
      ...prev,
      [field]: value || prev[field], // Keep original value if field is not changed
    }));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
    console.log("New image selected:", e.target.files[0]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <h2 className="text-center mb-4">Business Listings</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 mb-3 text-center">
            <div className="business_card box-shadow">
              <div className="business_logo">
                <img
                  src={`${port}/uploads/business/${item.logoimage}`}
                  alt={item.name}
                  className="contain ap4_2"
                />
              </div>
              <div className="business_card_body">
                {editId === item.id ? (
                  <>
                    <input
                      type="text"
                      value={editedBusiness.name || ''}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      className="form-control mb-2"
                      placeholder="Business Name"
                    />
                    <select
                      value={editedBusiness.type || ''}
                      onChange={(e) => handleFieldChange('type', e.target.value)}
                      className="form-control mb-2"
                    >
                      <option value="">Select Type</option>
                      <option value="Retail">Retail</option>
                      <option value="Service">Service</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Technology">Technology</option>
                    </select>
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="form-control mb-2"
                    />
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-success" onClick={handleSaveChanges}>
                        <FaSave /> Save
                      </button>
                      <button className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                        <FaBan /> Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{item.name}</h5>
                    <span className="card-text">{item.type}</span>
                    <div className="buttons d-flex justify-content-around mt-3">
                      <FaTrash
                        className="icon text-danger"
                        onClick={() => handleDelete(item.id)}
                      />
                      <span
                        className={item.status === 0 ? 'text-success' : 'text-warning'}
                        onClick={() => handleTogglePublish(item.id, item.status)}
                      >
                        {item.status === 0 ? <FaCheck /> : <FaTimes />}
                      </span>
                      <FaEdit
                        className="icon text-primary"
                        onClick={() => handleEditClick(item)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

BusinessListing.layout = 'admin';

export default BusinessListing;

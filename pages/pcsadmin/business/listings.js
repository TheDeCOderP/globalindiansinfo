import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal'; // Import the react-modal library
import globalConfig from '@/config';
import EditBusinessForm from '@/components/admin/business/EditBusinessForm'

const port = globalConfig.port;

const BusinessListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedBusinessId, setSelectedBusinessId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${port}/api/business`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (businessId) => {
    if (window.confirm('Do you want to delete it?')) {
      axios
        .delete(`${port}/api/business/${businessId}`)
        .then(() => {
          fetchData();
        })
        .catch((error) => {
          console.error('Error deleting item:', error);
        });
    }
  };

  const handleTogglePublish = (itemId, currentStatus) => {
    const newStatus = currentStatus === 0 ? 1 : 0;
    axios
      .put(`${port}/api/business/${itemId}`, { status: newStatus })
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error toggling publish status:', error);
      });
  };

  const handleEdit = (itemId) => {
    setSelectedBusinessId(itemId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedBusinessId(null);
    setEditModalOpen(false);
    fetchData(); // Refresh data after editing
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <h2 className="text-center mb-4">Business Listings</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-3 text-center">
            <div className="business_card box-shadow">
              <div className="business_logo">
                <img
                  src={`${port}/uploads/business/${item.logoimage}`}
                  alt={item.name}
                ></img>
              </div>
              <div className="business_card_body">
                <h5 className="card-title">{item.name}</h5>
                <span className="card-text">{item.type}</span>
                <div className="buttons d-flex justify-content-around mt-3">
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={
                      item.status === 0
                        ? 'btn btn-success'
                        : 'btn btn-warning'
                    }
                    onClick={() => handleTogglePublish(item.id, item.status)}
                  >
                    {item.status === 0 ? 'Publish' : 'Unpublish'}
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Business Modal"
      >
        <EditBusinessForm
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
          businessId={selectedBusinessId}
          onUpdate={fetchData}
        />
      </Modal>
    </div>
  );
};
BusinessListing.layout = "admin";

export default BusinessListing;

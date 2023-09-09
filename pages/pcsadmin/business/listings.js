import { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;

const BusinessListing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${port}/api/business`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (itemId) => {
    axios.delete(`${port}/api/business/${itemId}`)
      .then(() => {
        window.confirm('do you want to delete it?')
        fetchData(); // Fetch data again to update the list after deletion.
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const handlePublish = (itemId) => {
    axios.put(`${port}/api/business/${itemId}`, { status: 1 })
      .then(() => {
        window.confirm('want to show this listing on website pages')
        fetchData(); // Fetch data again to update the list after changing the status.
      })
      .catch((error) => {
        console.error('Error publishing item:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      <h2>Business Listings</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                {item.status === 0 ? (
                  <button
                    className="btn btn-success"
                    onClick={() => handlePublish(item.id)}
                  >
                    Publish
                  </button>
                ) : (
                  <span className="text-success">Published</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessListing;

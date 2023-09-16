import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Head from "next/head";
import globalConfig from '@/config';
const port = globalConfig.port;

export default function Business() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    type: '',
    location: '',
    website: '',
    image: null,
  });

  const [businessListings, setBusinessListings] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('mobile', formData.mobile);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('type', formData.type);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('website', formData.website);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(`${port}/api/business`, formDataToSend);

      if (response.status === 201) {
        console.log('Business listing uploaded successfully');
        // Reset the form
        setFormData({
          name: '',
          mobile:'',
          email:'',
          type: '',
          location: '',
          website: '',
          image: null,
        });

      // Display success toast after the database request is complete
      toast.success('Listing Added SuccessFully , Our Team will review it and contact you Soon', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      if (typeof onAddBlog === 'function') {
        onAddArticle();
      }
    } else {
      // Display an error message if the status code is not 201
      toast.error('Error adding Listing', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    console.error('Error:', error); // Log the error
    toast.error('An error occurred', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

  return (
<>
    <Head>
       <title> List Your Business Now</title>
    
    </Head>
    <div className="section row d-flex justify-content-center mt-4 mb-4 ">
    <div className="col-sm-12 col-md-10 box-shadow  p-4 ">
      <h1 className="mb-4 text-center">Business Listing Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="name" className="form-label">
            Business Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        </div>
        <div className="row">
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder=""
            required
          />
        </div>
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="website" className="form-label">
            Business Website Link
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="form-control"
            placeholder=""
            required
          />
        </div>
        </div>
        <div className="row">
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="type" className="form-label">
            Business Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3 col-sm-12 col-md-6">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="form-control"

          />
        </div>
        </div>
        <div className="row">
        <div className="mb-3 col-sm-12 col-md-12">
          <label htmlFor="image" className="form-label">
            Business Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>
        </div>
        <div className="row">
        <div className="mb-3 col-sm-12 col-md-12">
        <button type="submit " className="button">
          Submit
        </button>
        </div></div>
      </form>
      <hr />
     
      </div>
    </div>
    </>
  );
}

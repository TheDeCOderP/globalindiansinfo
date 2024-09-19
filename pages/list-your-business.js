import { useState } from 'react';
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
    bannerimage: null,
  });

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

  const handleBannerImageChange = (e) => {
    setFormData({
      ...formData,
      bannerimage: e.target.files[0],
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
      formDataToSend.append('bannerimage', formData.bannerimage);

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
          bannerimage: null,
        });

        // Display success toast after the database request is complete
        toast.success('Listing Added Successfully, Our Team will review it and contact you Soon', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
        <title>List Your Business Now</title>
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
  <select
    id="type"
    name="type"
    value={formData.type}
    onChange={handleInputChange}
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
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            </div>
            <div className="row">
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="image" className="form-label">
                Business Logo Image <span className="red"> ( Exact Size : 250*250 ( in pixels )  )</span>
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
         
            <div className="mb-3 col-sm-12 col-md-6">
              <label htmlFor="bannerimage" className="form-label">
                Business Banner Image  <span className="red"> ( Exact Size : 1600*400 ( in pixels ) ) </span>
              </label>
              <input
                type="file"
                id="bannerimage"
                name="bannerimage"
                accept="image/*"
                onChange={handleBannerImageChange}
                className="form-control"
              />
            </div>
            </div>
            <div className="row">
            <div className="mb-3">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </>
  );
}

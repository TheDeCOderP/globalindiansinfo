// pages/index.js
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import globalConfig from '@/config';
const port = globalConfig.port;

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    category: '',
    title: '',
    image: null,
    description: '',
    consent: null,
  });

  const handleFileChange = (e) => {
    setFormData({ ...formData, articleImage: e.target.files[0] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConsentChange = (e) => {
    setFormData({ ...formData, consent: e.target.value === 'yes' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      await axios.post(`${port}/api/articlesupload`, formDataToSend);

      // Show success message using SweetAlert
      Swal.fire('Success!', 'Article submitted successfully!', 'success');

      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        date: '',
        category: '',
        title: '',
        image: null,
        description: '',
        consent: null,
      });
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire('Error!', 'An error occurred while submitting the article.', 'error');
    }
  };

  return (
    <>
    <div className="container mt-4 flex justify-content-center">
        <div className='row '>
        <div className='col-md-10'>
      <form onSubmit={handleSubmit} className='box-shadow p-4'>
        <div className="row mb-3 ">
          <div className="col-md-6 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category <span className="forminator-required">*</span>
          </label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="Inspiring people">Inspiring people</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Legal">Legal</option>
            <option value="Politics">Politics</option>
            <option value="Environment">Environment</option>
            <option value="Autism">Autism</option>
            <option value="Editor’s choice">Editor’s choice</option>
            <option value="Community-Spirituality-Travel">Community</option>
            <option value="Spirituality">Spirituality</option>
            <option value="Travel">Travel</option>
            <option value="Mental-health">Mental health</option>
            <option value="Awareness-Science-and-Technology-Entertainment-Sports">Awareness</option>
            <option value="Science-and-Technology">Science and Technology</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter the title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="articleImage"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Enter the article description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Do you have consent? <span className="forminator-required">*</span></label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="consent"
              id="consentYes"
              value="yes"
              checked={formData.consent === true}
              onChange={handleConsentChange}
              required
            />
            <label className="form-check-label" htmlFor="consentYes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="consent"
              id="consentNo"
              value="no"
              checked={formData.consent === false}
              onChange={handleConsentChange}
              required
            />
            <label className="form-check-label" htmlFor="consentNo">
              No
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};



export default ArticleForm;

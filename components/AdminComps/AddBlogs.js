import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; // Import axios for HTTP requests

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const categories = [
  { label: 'Technology', value: 'technology' },
  { label: 'Travel', value: 'travel' },
  { label: 'Food', value: 'food' },
  // Add more categories as needed
];

function BlogForm({ onAddBlog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    if (selectedCategories.includes(categoryValue)) {
      // If category is already selected, remove it
      setSelectedCategories(selectedCategories.filter((category) => category !== categoryValue));
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, categoryValue]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);
    formData.append('categories', JSON.stringify(selectedCategories)); // Convert to JSON string

    try {
      // Send the form data to the backend API (replace with your actual API endpoint)
      const response = await axios.post('https://server.globalindiansinfo.com/api/blogs', formData);

      console.log('Response:', response); // Log the response

      if (response.status === 201) { // Check for status code 201 for successful creation
        setTitle('');
        setContent('');
        setImage(null);
        setSelectedCategories([]);

        // Display success toast after the database request is complete
        toast.success('Blog post added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (typeof onAddBlog === 'function') {
          onAddBlog();
        }
      } else {
        // Display an error message if the status code is not 201
        toast.error('Error adding blog post', {
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
    <div>
      <h2 className="text-center">Add a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categories</label>
          <div>
            {categories.map((category) => (
              <div key={category.value} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={category.value}
                  value={category.value}
                  checked={selectedCategories.includes(category.value)}
                  onChange={handleCategoryChange}
                />
                <label className="form-check-label" htmlFor={category.value}>
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Blog Post
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default BlogForm;

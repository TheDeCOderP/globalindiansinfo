import { useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';

const port = globalConfig.port;

export default function AddMagazine() {
  const [title, setTitle] = useState('');
  const [flipbookLink, setFlipbookLink] = useState('');
  const [magazineImage, setMagazineImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state

  const handleImageChange = (e) => {
    setMagazineImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader

    const formData = new FormData();
    formData.append('title', title);
    formData.append('flipbookLink', flipbookLink);
    formData.append('magazineImage', magazineImage);

    try {
      const response = await axios.post(`${port}/api/magazines`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // If successful, reset the form fields and provide feedback
        setTitle('');
        setFlipbookLink('');
        setMagazineImage(null);
        alert('Magazine Uploaded Successfully!');
      } else {
        // Handle unexpected response codes
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Error uploading magazine: ', error);
      alert('Error Uploading Magazine. Please try again later.');
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Add New Magazine</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="flipbookLink" className="form-label">
            Flipbook Link:
          </label>
          <input
            type="text"
            className="form-control"
            id="flipbookLink"
            value={flipbookLink}
            onChange={(e) => setFlipbookLink(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="magazineImage" className="form-label">
            Magazine Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="magazineImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Upload Magazine'}
        </button>
      </form>
    </div>
  );
}

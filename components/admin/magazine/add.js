import { useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


const port = globalConfig.port;

export default function AddMagazine() {
  const [title, setTitle] = useState('');
  const [flipbookLink, setFlipbookLink] = useState('');
  const [magazineImage, setMagazineImage] = useState(null);

  const handleImageChange = (e) => {
    setMagazineImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('flipbookLink', flipbookLink);
    formData.append('magazineImage', magazineImage);

    try {
      await axios.post(`${port}/api/magazines`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Magazine uploaded successfully');

      // Use SweetAlert2 for a success message
      Swal.fire({
        icon: 'success',
        title: 'Magazine Uploaded Successfully',
        showConfirmButton: false,
        timer: 1500,
      });

      // Add any additional logic or UI updates here
    } catch (error) {
      console.error('Error uploading magazine: ', error);

      // Use SweetAlert2 for an error message
      Swal.fire({
        icon: 'error',
        title: 'Error Uploading Magazine',
        text: 'Please try again later.',
      });

      // Handle error, show error message, etc.
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
            />
          
        </div>
        <button type="submit" className="button">
          Upload Magazine
        </button>
      </form>
    </div>
  );
}

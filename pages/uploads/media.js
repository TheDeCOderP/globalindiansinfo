import React, { useState, useEffect } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
import 'react-image-lightbox/style.css'; // Import the CSS for react-image-lightbox
import Lightbox from 'react-image-lightbox'; // Import the Lightbox component

const port = globalConfig.port;


function MediaUpload() {
  const [file, setFile] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const response = await axios.get(`${port}/api/media`);
        setMediaFiles(response.data);
      } catch (error) {
        console.error('Error fetching media files', error);
      }
    }

    fetchMedia();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post(`${port}/api/media`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // After successful upload, fetch the updated media list
      const response = await axios.get(`${port}/api/media`);
      setMediaFiles(response.data);

      alert('Media file uploaded successfully');
    } catch (error) {
      console.error('Error uploading media file', error);
      alert('Error uploading media file');
    }
  };

  const copyLinkToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    alert('Image link copied to clipboard');
  };

  const handleDelete = async (mediaPath) => {
    try {
      await axios.delete(`${port}/api/media/${mediaPath}`);
      // After successful delete, fetch the updated media list
      const response = await axios.get(`${port}/api/media`);
      setMediaFiles(response.data);
      alert('Media file deleted successfully');
    } catch (error) {
      console.error('Error deleting media file', error);
      alert('Error deleting media file');
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Media Upload and Display</h1>
      <div className="mt-4 mb-3">
        <input type="file" accept="image/*" onChange={handleFileChange} className="form-control-file" />
        <button onClick={handleUpload} className="btn btn-primary mt-3">
          Upload
        </button>
      </div>

      <div className="row">
        {mediaFiles.map((mediaPath, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`${port}/uploads/media/${mediaPath}`}
                alt={`Media ${index}`}
                className="card-img-top"
                onClick={() => openLightbox(index)} // Open the Lightbox on image click
                style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
              />
              <div className="card-body">
                <button onClick={() => copyLinkToClipboard(`${port}/uploads/media/${mediaPath}`)} className="btn btn-primary mr-2">
                  Copy Link
                </button>
                <button onClick={() => handleDelete(mediaPath)} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox component */}
      {isOpen && (
        <Lightbox
          mainSrc={`${port}/uploads/media/${mediaFiles[lightboxIndex]}`}
          nextSrc={`${port}/uploads/media/${mediaFiles[(lightboxIndex + 1) % mediaFiles.length]}`}
          prevSrc={`${port}/uploads/media/${mediaFiles[(lightboxIndex + mediaFiles.length - 1) % mediaFiles.length]}`}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + mediaFiles.length - 1) % mediaFiles.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % mediaFiles.length)}
        />
      )}
    </div>
  );
}

export default MediaUpload;
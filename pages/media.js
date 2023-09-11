import { useState, useEffect } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap'; // Import Bootstrap components

const port = globalConfig.port;

function MediaUpload() {
  const [file, setFile] = useState(null);
  const [mediaFiles, setMediaFiles] = useState([]);

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

  return (
    <Container>
      <h1 className="mt-5">Media Upload and Display</h1>
      <Row className="mt-4">
        <Col>
          <Form>
            <Form.Group>
              <Form.File
                id="mediaFile"
                label="Choose an image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        {mediaFiles.map((mediaPath, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img src={`${port}/uploads/media/${mediaPath}`} alt={`Media ${index}`} />
              <Card.Body>
                <Button
                  variant="secondary"
                  onClick={() => copyLinkToClipboard(`${port}/uploads/media/${mediaPath}`)}
                >
                  Copy Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MediaUpload;

// pages/reset-password.js

import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import globalConfig from '@/config';
import Swal from 'sweetalert2';
const port = globalConfig.port;

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${port}/api/get-reset-token`, { email });

      if (response.data.success) {
        setEmail('');
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.message
        });
      } else {
        if (response.data.errorCode === 'EMAIL_NOT_FOUND') {
          setErrorMessage('Email not found in the database. Please check your email address.');
        } else {
          setErrorMessage(response.data.message);
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage
        });
      }
    } catch (error) {
      console.error('Error sending reset token:', error);
      setErrorMessage('Failed to send reset token. Please try again later.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to send reset token. Please try again later.'
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5 mb-5 text-center">
        <Col md="6">
          <h2 className="mb-4">Reset Password</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
    
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="bg-primary mt-2 w-100 p-2" type="submit">
              Send Reset Token
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


export default ResetPasswordPage;

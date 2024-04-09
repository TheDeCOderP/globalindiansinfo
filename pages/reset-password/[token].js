// pages/reset-password/[token].js

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import globalConfig from '@/config';
const port = globalConfig.port;

const ResetPasswordPage = () => {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${port}/api/reset-password`, {
        token,
        newPassword: password,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('Failed to reset password. Please try again later.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Reset Password</h2>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

ResetPasswordPage.layout = "blank"

export default ResetPasswordPage;

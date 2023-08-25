import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post('http://localhost:5000/submit', { name, email, phone, message });
      setSuccessMessage('Form submitted successfully');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => {
        setSuccessMessage('');
        // Redirect to home page after 3 seconds
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      console.error('Submit error:', error);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <h4>Fill Below Form to Hear from us</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="button text-light mt-3 p-2" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {successMessage && (
        <div className="popup">
          <p>{successMessage}</p>
        </div>
      )}
      <style jsx>{`
        /* Add your CSS styling here */
        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Form;

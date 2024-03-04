import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { parseCookies } from 'nookies';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import globalConfig from '@/config'; // Assuming you have a proper path for your config file
import { useRouter } from 'next/router';

const AddQuestionForm = () => {
  const [user, setUser] = useState(null);
  const [question, setQuestion] = useState('');
  const router = useRouter();
  const port = globalConfig.port;
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const cookies = parseCookies();
    const storedUserData = cookies.gii;

    if (!cookies.gii || !storedUserData) {
      setUser(null);
      router.push('/');
    } else {
      // Parse the JSON string to get the complete user details
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      // Handle case where user information is not available
      return;
    }

    const { name, id } = user;

    try {
      await axios.post(`${port}/api/add-question`, {
        name,
        id,
        question
      });
      MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Question added successfully',
      });
      setQuestion('');
    } catch (error) {
      console.error('Error adding question:', error);
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add question',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Your Question:</label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default AddQuestionForm;

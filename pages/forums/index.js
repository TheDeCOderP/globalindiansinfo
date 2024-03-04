import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import withReactContent from 'sweetalert2-react-content';
import globalConfig from '@/config'; // Assuming you have a proper path for your config file
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies'; // Import parseCookies function from nookies

const QuestionList = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [newAnswers, setNewAnswers] = useState({});
  const [answerModalOpen, setAnswerModalOpen] = useState(false);
  const [showAnswersModalOpen, setShowAnswersModalOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [answers, setAnswers] = useState([]); // State to hold the answers for the selected question
  const router = useRouter();
  const port = globalConfig.port;
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${port}/api/questions`);
        console.log('Fetched questions:', response.data); // Log the fetched questions
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    const cookies = parseCookies();
    const storedUserData = cookies.gii;
    const router = useRouter();
  
    if (!storedUserData) {
      setUser(null);
      router.push('/');
    } else {
      // Parse the JSON string to get the complete user details
      const userData = JSON.parse(storedUserData);
      setUser(userData);
      fetchQuestions(); // Call fetchQuestions when user data is available
    }
  }, [router]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${port}/api/questions`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerChange = (questionId, e) => {
    const { value } = e.target;
    setNewAnswers({
      ...newAnswers,
      [questionId]: value
    });
  };

  const handleSubmitAnswer = async () => {
    const answer = newAnswers[selectedQuestionId];
    if (!answer) {
      return;
    }

    try {
      await axios.post(`${port}/api/questions/${selectedQuestionId}/answers`, {
        name: user.name, // Retrieve name from user object
        id: user.id,     // Retrieve id from user object
        answer
      });
      MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Answer added successfully',
      });
      // Clear the answer field after successful submission
      setNewAnswers({
        ...newAnswers,
        [selectedQuestionId]: ''
      });
      // Refresh the question list
      fetchQuestions();
      // Close the modal
      setAnswerModalOpen(false);
    } catch (error) {
      console.error('Error submitting answer:', error);
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit answer',
      });
    }
  };

  const handleShowAnswers = async (questionId) => {
    try {
      // Fetch answers for the selected question
      const response = await axios.get(`${port}/api/questions/${questionId}/answers`);
      setAnswers(response.data);
      setSelectedQuestionId(questionId);
      setShowAnswersModalOpen(true);
    } catch (error) {
      console.error('Error fetching answers:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {questions.map((question) => (
          <div key={question.id} className="col-md-6 mb-4">
            <div className="box-shadow p-3">
              <div className="card-body">
                <h5 className="card-title">User: {question.user_name}</h5>
                <p className="card-text">Question: {question.question}</p>
                <div className="input-group">
                  
                  <div className="input-group-append">
                    <button className="btn btn-primary" onClick={() => { setSelectedQuestionId(question.id); setAnswerModalOpen(true); }}>Submit Answer</button>
                    <button className="btn btn-secondary ml-2" onClick={() => handleShowAnswers(question.id)}>Show Answers</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Submitting Answer */}
      <div className={`modal ${answerModalOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ display: answerModalOpen ? 'block' : 'none' }} onClick={() => setAnswerModalOpen(false)}>
  <div className="modal-dialog" role="document" onClick={(e) => e.stopPropagation()}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Submit Answer</h5>
        <button type="button" className="close" onClick={() => setAnswerModalOpen(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input
          type="text"
          className="form-control"
          placeholder="Your Answer"
          value={newAnswers[selectedQuestionId] || ''}
          onChange={(e) => handleAnswerChange(selectedQuestionId, e)}
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => setAnswerModalOpen(false)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmitAnswer}>Submit</button>
      </div>
    </div>
  </div>
</div>


      {/* Modal for Showing Answers */}
      <div className={`modal ${showAnswersModalOpen ? 'show w-100' : ''}`} tabIndex="-1" role="dialog" style={{ display: showAnswersModalOpen ? 'block' : 'none' }} onClick={() => setShowAnswersModalOpen(false)}>
  <div className="modal-dialog modal-dialog-centered modal-full" role="document" onClick={(e) => e.stopPropagation()}>
    <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Answers</h5>
              <button type="button" className="close" onClick={() => setShowAnswersModalOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

<div className="modal-body">
  <h5>Answers:</h5>
  {answers.map((answer) => (
    <div key={answer.id}>
      <p>User: {answer.user_name}</p>
      <p>Answer: {answer.answer}</p>
      <p>Created At: {answer.created_at}</p>
    </div>
  ))}
</div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowAnswersModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;

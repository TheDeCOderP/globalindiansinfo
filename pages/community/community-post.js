import { useEffect, useState } from 'react';
import axios from 'axios';
import globalConfig from '@/config';
import { useCookies } from 'react-cookie';
import { generateText } from '@/services/openaiService';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { destroyCookie } from 'nookies';
import { parseCookies } from 'nookies';

const port = globalConfig.port;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [user_id, setUserId] = useState('');
  const [titleprompt, setTitlePrompt] = useState('');
  const [contentPrompt, setContentPrompt] = useState('');
  const [cookie] = useCookies(['prabishaemail']);
  const [tags, setTags] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [grammarErrors, setGrammarErrors] = useState([]);
  const [textType, setTextType] = useState(''); // New state to track which text (title or content) is being checked


  const [user, setUser] = useState(null);


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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  const handleGetUserData = async (useremail) => {
    try {
      let res = await axios.get(`${port}/getuseremail?email=${useremail}`);
      setUserId(res.data.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUserData(cookie.prabishaemail);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      title: title,
      content: content,
      user_name: user.name || 'Unknown user',
      image: image,
      tags: tags,
    };
    try {
      let res = await axios.post(`${port}/community-post`, payload);
      console.log(res);
      alert('Post posted');
    } catch (error) {
      console.log(error);
      alert('Facing error');
    }
    setTitle('');
    setContent('');
    setTags('');
  };

  const handleGenerateTitle = async (prompt) => {
    setLoading(true);
    try {
      const generatedTitle = await generateText(prompt);
      setTitle(generatedTitle);
      setLoading(false);
      closeModal();
    } catch (error) {
      console.error('Error generating title:', error);
      setLoading(false);
    }
  };

  const handleGenerateContent = async (prompt) => {
    setLoading(true);
    try {
      const generatedContent = await generateText(prompt);
      setContent(generatedContent);
      setLoading(false);
      closeModal2();
    } catch (error) {
      console.error('Error generating content:', error);
      setLoading(false);
    }
  };

  const handleGrammarCheck = async (text, type) => {
    try {
      setTextType(type); // Store whether we're checking the title or content
      const response = await axios.post(`${port}/api/grammar-check`, { text: text, language: 'en-US' });
      // console.log(response,"resss")
      setGrammarErrors(response.data.matches);
    } catch (error) {
      console.error('Error checking grammar:', error);
    }
  };

  const handleReplaceWord = (offset, length, replacement) => {
    if (textType === 'title') {
      const correctedTitle = title.substring(0, offset) + replacement + title.substring(offset + length);
      setTitle(correctedTitle);
    } else if (textType === 'content') {
      const correctedContent = content.substring(0, offset) + replacement + content.substring(offset + length);
      setContent(correctedContent);
    }
  };

  return (
    <div className=" my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg">
            <div className="card-body-comunity-post p-5 ">
              <h1 className="card-title text-center mb-4 ">Create a New Post</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" >Title</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Enter the title of your post"
                    spellCheck="true"
                    required
                  />
                  <div className='flex gap-4'>
                  <button
                    type="button"
                    onClick={openModal}
                    className="btn btn-warning mt-2 mr-2 "
                  >
                    Generate Title
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Generate Title Modal"
                  >
                    <div className='flex justify-content-between gap-5'>
                      <h2>AI Title Generation</h2>
                      <button onClick={closeModal}>X</button>
                    </div>
                    <form>
                      <label>Enter Title Prompt Here</label><br />
                      <input className='px-2 py-2 border rounded mt-2' placeholder='Enter Prompt Here..' onChange={(e) => setTitlePrompt(e.target.value)} /><br />
                      <Button onClick={() => handleGenerateTitle(titleprompt)}>{loading ? 'Loading...' : 'Generate'}</Button>
                    </form>
                  </Modal>
                  <Button className="btn btn-primary mt-2 mr-2 " onClick={() => handleGrammarCheck(title, 'title')}>Check Grammar</Button>
                  </div>
                </div>

                {grammarErrors.length > 0 && (
                  <div className="alert alert-warning mt-2">
                    <h5>Grammar Suggestions:</h5>
                    {grammarErrors.map((error, index) => (
                      <div key={index}>
                        <p>{error.message}</p>
                        <ul>
                          {error.replacements.map((replacement, idx) => (
                            <li key={idx}>
                              <button
                                className="btn btn-link"
                                onClick={() => handleReplaceWord(error.offset, error.length, replacement.value)}
                              >
                                {replacement.value}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                    placeholder="Write your content here..."
                    rows="6"
                    spellCheck="true"
                    required
                  ></textarea>
                  <div className='flex gap-4'>
                  <button
                    type="button"
                    onClick={openModal2}
                    className="btn btn-warning mr-2 mt-2"
                  >
                    Generate Content
                  </button>
                  <Button className="btn btn-primary mr-2 mt-2" onClick={() => handleGrammarCheck(content, 'content')}>Check Grammar</Button>
                  </div>
                  <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Generate Content Modal"
                  >
                    <div className='flex justify-content-between gap-5'>
                      <h2>AI Content Generation</h2>
                      <button onClick={closeModal2}>X</button>
                    </div>
                    <form>
                      <label>Enter Content Prompt Here</label><br />
                      <input className='px-2 py-2 border rounded mt-2' placeholder='Enter Prompt Here..' onChange={(e) => setContentPrompt(e.target.value)} /><br />
                      <Button onClick={() => handleGenerateContent(contentPrompt)}>{loading ? 'Loading...' : 'Generate'}</Button>
                    </form>
                  </Modal>
                </div>

                <div className="mb-3">
                  <label htmlFor="imagelink" className="form-label">Image Link</label>
                  <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="form-control"
                    placeholder="Enter the Image URL (optional)"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="form-control"
                    placeholder="Enter Tags Separated by Comma"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">Submit Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// import React, { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import 'quill/dist/quill.snow.css';
// import axios from 'axios';
// import globalConfig from '@/config';
// const port=globalConfig.port

// export default function CreatePost() {
//   const quillRef = useRef(null);
//   const [editor, setEditor] = useState(null);
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     // Dynamically import Quill only on the client side
//     async function loadQuill() {
//       if (typeof window !== 'undefined' && quillRef.current) {
//         const Quill = (await import('quill')).default;

//         const quillEditor = new Quill(quillRef.current, {
//           theme: 'snow',
//         });
//         setEditor(quillEditor);

//         quillEditor.on('text-change', () => {
//           setContent(quillEditor.root.innerHTML);
//         });
//       }
//     }

//     loadQuill();
//   }, []);

//   const handleGrammarCheck = async () => {
//     try {
//       const response = await axios.post(`${port}/api/grammar-check`, { text: content, language: 'en-US' });
//       console.log('Grammar check response:', response.data.matches);
//     } catch (error) {
//       console.error('Error checking grammar:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle submission with content state
//   };

//   return (
//     <div className="container my-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8 col-md-10 col-sm-12">
//           <div className="card shadow-lg">
//             <div className="card-body p-5">
//               <h1 className="card-title text-center mb-4">Create a New Post</h1>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="title" className="form-label">Title</label>
//                   <input
//                     type="text"
//                     id="title"
//                     className="form-control"
//                     placeholder="Enter your title here"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Content</label>
//                   <div ref={quillRef} />
//                 </div>
//                 <button type="button" className="btn btn-secondary" onClick={handleGrammarCheck}>
//                   Check Grammar
//                 </button>
//                 <div className="text-center mt-4">
//                   <button type="submit" className="btn btn-primary">Post</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
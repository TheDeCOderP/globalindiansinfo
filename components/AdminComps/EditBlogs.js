import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditBlog = ({ blog, updateBlogs, onCancelEdit }) => {
  const [title, setTitle] = useState(blog?.title || '');
  const [content, setContent] = useState(blog?.content || '');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlogs = {
      id: blog.id,
      title,
      content,
    };
    updateBlogs(updatedBlogs);
  };

  return (
    <Modal show={true} onHide={onCancelEdit} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Content:</Form.Label>
            <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </Form.Group>
         
          <Button variant="dark" type="submit">
            Update
          </Button>
          <Button variant="secondary" onClick={onCancelEdit}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditBlog;

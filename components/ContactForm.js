import { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import axios from "axios";
import Link from "next/link";
import { FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to your backend endpoint for saving the data to the database
        axios.post('http://localhost:5000/contact', formData)
            .then((response) => {
                console.log(response.data); // Handle success or display a success message
                setFormSubmitted(true);
            })
            .catch((error) => {
                console.error(error); // Handle error or display an error message
            });

        // Send an email to the admin using your preferred email sending method/library
        // Example: axios.post('/api/send-email', formData)
    };


    if (formSubmitted) {
        return (
            <div>
                <h3>Form Submitted Successfully!</h3>
                <p>Thank you for your submission.</p>
                <Link href="/">Go to Home Page</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-6">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="success" className="mt-3" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6">
                    <Card className="contact_cards">

                        <Card.Body >
                            <FaEnvelope size={30} color={'var(--primary)'} />
                            <Card.Title>info@prabisha.com</Card.Title>


                            <Link href="mailto:info@prabisha.com"><Button className="global_buttons">Mail Now</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card className="contact_cards">

                        <Card.Body  >
                            <FaMobile size={30} color={'var(--primary)'} />
                            <Card.Title>+44-7867090363</Card.Title>

                            <Link href="tel:+44-7867090363">   <Button className="global_buttons">Call Now</Button></Link>
                        </Card.Body>
                    </Card>


                </div>
            </div>
        </div>
    );
}

export default ContactForm;

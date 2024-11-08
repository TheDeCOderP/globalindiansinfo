import { useState, useRef } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import globalConfig from '@/config';
const port = globalConfig.port;

function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        from_number: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const form = useRef();

    async function sendEmail(e) {
        e.preventDefault();

        const payload = {
            "name": formData.from_name,
            "email": formData.reply_to,
            "phone": formData.from_number,
            "message": formData.message
        }

        if (formData.from_name && formData.reply_to && formData.from_number && formData.message) {
            try {
                let res = await axios.post(`${port}/contactus`, payload);
                toast.success("Thanks for contacting us", {
                    position: toast.POSITION.TOP_CENTER,
                });
                setFormSubmitted(true);
            } catch (error) {
                toast.error("Sorry! Form not sent", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        } else {
            toast.error("Please fill all the fields!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }

    if (formSubmitted) {
        return (
            <div className="form-submitted">
                <h3>Form Submitted Successfully!</h3>
                <p>Thank you for your submission.</p>
                <Link href="/">Go to Home Page</Link>
            </div>
        );
    }

    return (
        <div className="contact-form-container text-start">
            
            <div className="form-wrapper">
                <Form onSubmit={sendEmail} ref={form}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="reply_to"
                            value={formData.reply_to}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="tel"
                            name="from_number"
                            value={formData.from_number}
                            onChange={handleChange}
                            required
                            className="input-field"
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
                            className="input-field textarea-field"
                        />
                    </Form.Group>

                    <Button className="primary-bg submit-button" type="submit">
                        Submit Now
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default ContactForm;

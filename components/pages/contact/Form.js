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
        e.preventDefault(); // Prevent the default form submission behavior

        const payload = {
            "name": formData.from_name,
            "email": formData.reply_to,
            "phone": formData.from_number,
            "message": formData.message
        }

        if (formData.from_name && formData.reply_to && formData.from_number && formData.message) {
            try {
                let res = await axios.post(`${port}/contactus`, payload)
                console.log(res, "res")

                toast.success("Thanks for contacting us", {
                    position: toast.POSITION.TOP_CENTER,
                })

                setFormSubmitted(true); // Mark the form as submitted
            } catch (error) {
                console.log("Error", error);
                toast.error("Sorry! Form Not sent", {
                    position: toast.POSITION.TOP_CENTER,
                })
            }
        } else {
            toast.error("Please fill all the fields!", {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }

    if (formSubmitted) {
        return (
            <div style={{ textAlign: "center" }}>
                <h3>Form Submitted Successfully!</h3>
                <p>Thank you for your submission.</p>
                <Link href="/">Go to Home Page</Link>
            </div>
        );
    }

    return (
        <div>
            <div className="contact_banner"></div>
            <h2 style={{ textAlign: "center", marginTop: "30px" }}>Contact Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-12 col-md-12">
                        <Form onSubmit={sendEmail} ref={form}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="from_name"
                                    onChange={handleChange}
                                    required
                                    className="input_resume"
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="reply_to"
                                    onChange={handleChange}
                                    required
                                    className="input_resume"
                                />
                            </Form.Group>

                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="from_number"
                                    onChange={handleChange}
                                    required
                                    className="input_resume"
                                />
                            </Form.Group>

                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    className="input_resume"
                                />
                            </Form.Group>

                            <Button variant="success" className="mt-3 submitform" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;

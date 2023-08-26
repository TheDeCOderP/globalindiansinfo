import { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';
import Link from "next/link";
import { FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';
import ContactForm from '../contact/Form';

const Contact =() => {
      

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-6">
                 <ContactForm/>  
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

export default Contact;

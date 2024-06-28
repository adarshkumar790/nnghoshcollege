import React, { useRef } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_87911vl', 'template_6djdx4j', form.current, {
        publicKey: 'rxRMEO4oVrVEj_O-b',
      })
      .then(
        () => {
          toast.success('Your data has been sent successfully!', {
            position: "top-center"
          });
        },
        (error) => {
          toast.error(`Failed to send data: ${error.text}`, {
            position: "top-center"
          });
        },
      );
  };

  return (
    <div className='contact-page'>
      <ToastContainer />
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Get In Touch</h1>
          <p className='text-center w-75 mb-5'>For any inquiries or assistance, please don't hesitate to contact us; our dedicated team is here to help you with all your needs.</p>
        </div>
      </header>

      <div className='container my-5 d-flex justify-content-center'>
        <Form ref={form} onSubmit={sendEmail} id='contact-form'>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='Name' name="name" />
            </Col>
            {/* <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Last name'  />
            </Col> */}
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' name="email" />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='Your address' name="address" />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Mobile No</Form.Label>
            <Form.Control placeholder='Your mobile' name="mobile" />
          </Form.Group>

          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Location</Form.Label>
              <Form.Select defaultValue="Ranchi" name="location">
                <option>Pithoria</option>
                <option>Ranchi</option>
                <option>Bukru</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder='Postcode' name="postcode" />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" />
          </Form.Group>

          <Button variant="danger btn-lg" type='submit'>Submit</Button>
        </Form>
      </div>

      {/* <div className='bg-dark text-light p-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>Our Locations</h2>
          <div className='row g-4'>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={LondonLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>London</h3>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={ManchesterLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>Manchester</h3>
            </div>
            <div className='col-lg-4 d-flex flex-column align-items-center'>
              <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
              <h3 className='text-center mt-3'>Liverpool</h3>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;

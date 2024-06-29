import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/addmissions.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/nng3.JPG';
import Blog2Img from '../../utils/images/nng2.JPG';
import Blog3Img from '../../utils/images/nng1.JPG';

const blogs = [
    
    {
        id: 1,
        img: [Blog2Img],
    //      title: 'Welcome ceremony',
    //    description: "Hon'ble Secretary Vinoy Kr Pandey with Shri Ajay Michyari, Ex-chief General Manager, RBI."
    },
    {
        id: 2,
        img: [Blog1Img],
        title: 'Health Checkup Camp', 
        description: 'Identifying & addressing health issues to the participants.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Durga - Puja Celebration',
        description: "Little Lord Rama and Mata Sita offering card to the respected Director, Mrs. Swapna Pandey."
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h4 className='text-center fw-semibold'>N.N.GHOSH SANATAN TEACHERS TRAINING COLLEGE</h4>
                <h5 className='text-center fw-semibold'>SANATAN ROAD, JAMUARY, KANKE, RANCHI-834006(JHARKHAND)</h5>
                <h5 className='text-center text-color-red fw-semibold'>Achieving Excellence Together</h5>
                <h5 className='text-center fw-semibold'>Email:-principalnngsttc@gmail.com</h5>
                <h5 className='text-center fw-semibold'>Mob:- 8651038210, 8709574088</h5>
                <h5>Mangaed by</h5>
                <h5>RISHIKUL SHAIKSHANIK SANSTHAN</h5>
                <h5>(Resgistration No.118/2006-07)</h5>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    {/* <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'></button>
                    </Link> */}
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize fw-semibold'>Admission Start</h2>
                        <p>Admissions for the upcoming academic year have officially commenced, offering prospective students the opportunity to embark on an enriching educational journey with us.</p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Enquiry</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the gallery</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/gallery" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    {/* <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text> */}
                                    {/* </Card.Body> */}
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/gallery">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More gallery</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;
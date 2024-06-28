import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/Sanatan.jpeg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>The school gallery showcases a vibrant tapestry of student life, capturing memorable moments, achievements, and creative endeavors within our educational community.</p>
                </div>
            </header>

            <div className='container my-5'>
                <div className="row">
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                        <p className='w-150'>
                            Sanatan Vidya Niketan (Pvt) was established in 2012 and is managed by Rishikul Shaikshanik Sansthan. It is located in the rural area of Jamuary, Kanke, Ranchi district, Jharkhand. The school consists of Grades 1 to 8. It is a co-educational institution with an attached pre-primary section. The school is privately run and does not operate as a shift-school. English is the medium of instruction. The academic session starts in April.
                        </p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <ChooseSection />
            </div>

            {/* <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <h2 className='text-center mb-5'>Our Winners</h2>
                    <div className='row g-4'>
                        {persons.map((person) => (
                            <div key={person.id} className='col-md-4'>
                                <img src={person.img} className='img-fluid' alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About;

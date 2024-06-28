import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/appli.jpg';
import affliation2 from '../../utils/images/aff1.jpg';
import affliation1 from '../../utils/images/aff2.jpg';
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
import Modal from '../../components/Modal';

const persons = [
    {
        id: 1,
        img: [Person1],
        name: 'Person 1'
    },
    {
        id: 2,
        img: [Person2],
        name: 'Person 2'
    },
    {
        id: 3,
        img: [Person3],
        name: 'Person 3'
    },
    {
        id: 4,
        img: [Person4],
        name: 'Person 4'
    },
    {
        id: 5,
        img: [Person5],
        name: 'Person 5'
    },
    {
        id: 6,
        img: [Person6],
        name: 'Person 6'
    },
    {
        id: 7,
        img: [Person7],
        name: 'Person 7'
    },
    {
        id: 8,
        img: [Person8],
        name: 'Person 8'
    },
    {
        id: 9,
        img: [Person9],
        name: 'Person 9'
    },
];

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImgSrc, setModalImgSrc] = useState('');

    const openModal = (imgSrc) => {
        setModalImgSrc(imgSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImgSrc('');
    };

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
                    <div className=' d-flex flex-column justify-content-center mb-2 mb-lg-0'>
                        <h2 className='mb-2 mb-lg-5'>History of the Institution</h2>
                        <p>
                            N.N.Ghosh Sanatan Teachers Training College is the 3rd venture of Rishikul Shaikshanik Sansthan (Reg. No.118/2006-07, Dated 31.05.2016), the brain child of a group of educationists and eminent personalities of the locality were the college is located.The college was started in 2013 after getting due recognition from The Eastern Regional Committee of National Council for Teacher Education, vide letter No.ERC/7-151.6.9/NCTE/B.Ed. 2013/16578, dated 02.03.2013 and affiliated to Ranchi University which is the torch bearer for colleges in Jharkhand.In 1st batch (2013-14) 100 students were admitted and 100 students appeared for examination. It is praiseworthy to mention that all the students appeared in the annual examination were passed with distinction.In 2nd batch (2014-15) 100 students were admitted. 101 students appeared for examination. 94 students passed with distinction and 07 students in first division.
                        </p>
                        <h2>Visions and Objectives</h2>
                        <p>
                            1. Rishikul Shaikshanik Sansthan through N.N Ghosh Sanatan Teachers Training College will strive hard to bridge the gap between rich and poor by providing quality education which in the coming years enables the students to face the serious challenges of the world.
                            <br /> 2. To prepare the young generation to meet the challenges of the new world and so as to make the distribution of opportunities equal in a cross cultural and diverse society.
                            <br /> 3. To inculcate human values and promote human resources, by nursing and teaching the neglected community of Jharkhand so as to discharge the national obligation of the mother land.
                        </p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <hr className='mt-2'/>
                    <h4 className='mt-4'>Affiliation letters</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        
                        <div className='d-flex'>          
                                              
                            <div className='col-lg-4 d-flex flex-column justify-content-center mt-2'>
                                
                                <img src={affliation1} className='img-fluid w-75' alt="" onClick={() => openModal(affliation1)} />
                            </div>
                            <div className='col-lg-4 d-flex flex-column justify-content-center mt-2'>
                                
                                <img src={affliation2} className='img-fluid w-75' alt="" onClick={() => openModal(affliation2)} />
                            </div>
                            <div className='col-lg-4 d-flex flex-column justify-content-center mt-2'>
                                {/* <h3>Heading 3</h3> */}
                                <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" onClick={() => openModal(AboutUsSectionImg)} />
                            </div>
                            {/* <div className='col-lg-3 d-flex flex-column justify-content-center mt-2'>
                                <h3>Heading 4</h3>
                                <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" onClick={() => openModal(AboutUsSectionImg)} />
                            </div> */}
                        </div>
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
                            <div key={person.id} className='col-md-4 d-flex flex-column align-items-center'>
                                <h4>{person.name}</h4>
                                <img src={person.img} className='img-fluid' alt="" onClick={() => openModal(person.img)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            
            <Modal isOpen={isModalOpen} onClose={closeModal} imgSrc={modalImgSrc} />
        </div>
    );
}

export default About;

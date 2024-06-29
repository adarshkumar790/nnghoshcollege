import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/appli.jpg';
import BTC from '../../utils/images/btc.jpeg';
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
import FaqAccordion from '../../components/FaqQuestion/FaqAccordion';

const persons = [
    {
        id: 1,
        img: Person1,
        name: 'Person 1'
    },
    {
        id: 2,
        img: Person2,
        name: 'Person 2'
    },
    {
        id: 3,
        img: Person3,
        name: 'Person 3'
    },
    {
        id: 4,
        img: Person4,
        name: 'Person 4'
    },
    {
        id: 5,
        img: Person5,
        name: 'Person 5'
    },
    {
        id: 6,
        img: Person6,
        name: 'Person 6'
    },
    {
        id: 7,
        img: Person7,
        name: 'Person 7'
    },
    {
        id: 8,
        img: Person8,
        name: 'Person 8'
    },
    {
        id: 9,
        img: Person9,
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
                    <div className='d-flex flex-column justify-content-center mb-2 mb-lg-0'>
                        <h2 className='mb-2 text-primary mb-lg-5'>History of the Institution</h2>
                        <p>
                            N.N.Ghosh Sanatan Teachers Training College is the 3rd venture of Rishikul Shaikshanik Sansthan (Reg. No.118/2006-07, Dated 31.05.2016), the brain child of a group of educationists and eminent personalities of the locality where the college is located. The college was started in 2013 after getting due recognition from The Eastern Regional Committee of National Council for Teacher Education, vide letter No.ERC/7-151.6.9/NCTE/B.Ed. 2013/16578, dated 02.03.2013 and affiliated to Ranchi University which is the torch bearer for colleges in Jharkhand. In the 1st batch (2013-14) 100 students were admitted and 100 students appeared for examination. It is praiseworthy to mention that all the students appeared in the annual examination were passed with distinction. In the 2nd batch (2014-15) 100 students were admitted. 101 students appeared for examination. 94 students passed with distinction and 07 students in the first division.
                        </p>
                        <h2 className='text-primary'>Visions and Objectives</h2>
                        <p>
                            1. Rishikul Shaikshanik Sansthan through N.N Ghosh Sanatan Teachers Training College will strive hard to bridge the gap between rich and poor by providing quality education which in the coming years enables the students to face the serious challenges of the world.
                            <br /> 2. To prepare the young generation to meet the challenges of the new world and so as to make the distribution of opportunities equal in a cross-cultural and diverse society.
                            <br /> 3. To inculcate human values and promote human resources, by nursing and teaching the neglected community of Jharkhand so as to discharge the national obligation of the motherland.
                        </p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                        </Link>
                    </div>
                    <hr className='mt-2'/>
                    <h4 className='mt-4 text-primary'>Affiliation letters</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex'>
                            <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center mt-2'>
                                <div className="img-container mb-2">
                                    <img src={affliation1} className='img-fluid' alt="" onClick={() => openModal(affliation1)} />
                                </div>
                                <button className='btn btn-dark mt-2 w-75' onClick={() => openModal(affliation1)}>View Large</button>
                            </div>
                            <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center mt-2 mx-3'>
                                <div className="img-container mb-2">
                                    <img src={affliation2} className='img-fluid' alt="" onClick={() => openModal(affliation2)} />
                                </div>
                                <button className='btn btn-dark mt-2 w-75' onClick={() => openModal(affliation2)}>View Large</button>
                            </div>
                            <div className='col-lg-4 d-flex flex-column justify-content-center align-items-center mt-2'>
                                <div className="img-container mb-2">
                                    <img src={AboutUsSectionImg} className='img-fluid' alt="" onClick={() => openModal(AboutUsSectionImg)} />
                                </div>
                                <button className='btn btn-dark mt-2 w-75' onClick={() => openModal(AboutUsSectionImg)}>View Large</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className='text-primary'>Chairman's Message (Dr.S.B. Bhattacharya)</h2>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flex: '1' }}>
                            <p className='w-100'>
                                On behalf of the N.N.Ghosh Sanatan Teachers Training College, Jamuary, Kanke, Ranchi, Jharkhand. I extend a warm and cordial welcome to all aspirants for professional education in their chosen field of Education. The management of the College is committed to provide the best education in the most stimulating environment.
                                It is widely and firmly believed that the quality of teachers in educational institutions determines the future quality of education. The role of colleges of education in preparing high quality teachers is, therefore, imperative. The teachers for the 21st century should have the ability to ensure all round development of the students and create in them a value system, nationalistic and secular traditions and scientific temper. It is demanding task and cannot be completed without high quality teacher educators. The professional development of teacher education is, therefore, the need of the hour. We at the Sanatan B.Ed. College commit ourselves to develop multifarious skills among the trainee teachers as well as the teacher educators. The College has taken notable cares in the direction of empowering stakeholders in employability skills. To be precise, the College brings you a credible and caring faculty in Educational opportunity that will launch you on a productive and satisfying professional career. We look forward to having you as a student on our campus. I am of the firm belief that the launching of the College would go a long way in ushering the long pending quality teacher education in the tribal dominated area of Jharkhand.
                                Let the light of knowledge prevail!
                                Our College
                                <br />
                                <br />
                                <h5 text-black>With Best Wishes
                                Dr. S.B. Bhattacharya</h5>
                            </p>
                        </div>
                        <img src={BTC} alt="Chairman" style={{ width: '200px', height: 'auto', marginLeft: '1rem' }} />                        
                    </div>
                </div>
               
                <div className='mt-4'>
                <h2 className='text-primary'>Choice of Subjects for Method</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: '1' }}>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>English</td>
                        <td>Hindi</td>
                    </tr>
                    <tr>
                        <td>Other Languages (Urdu, Sanskrit, Bangla, TL)</td>
                        <td>Civics</td>
                    </tr>
                    <tr>
                        <td>Geography</td>
                        <td>History</td>
                    </tr>
                    <tr>
                        <td>Economics</td>
                        <td>Maths</td>
                    </tr>
                    <tr>
                        <td>Chemistry</td>
                        <td>Physics</td>
                    </tr>
                    <tr>
                        <td>Biology</td>
                        <td>Commerce</td>
                    </tr>
                    <tr>
                        <td>Home Science</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <img src="path-to-image.jpg" alt="Chairman" style={{ width: '200px', height: 'auto', marginLeft: '1rem' }} /> */}
    </div>
    <div className='mt-4'>
    <h2 className='text-primary'>Fee Details</h2>
    <div className="table-responsive">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Fee Type</th>
                    <th>1st Year (Rs.)</th>
                    <th>2nd Year (Rs.)</th>
                    <th>Total (Rs.)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Admission Fee</td>
                    <td>10,000.00</td>
                    <td>-</td>
                    <td>10,000.00</td>
                </tr>
                <tr>
                    <td>Development Fee</td>
                    <td>10,000.00</td>
                    <td>-</td>
                    <td>10,000.00</td>
                </tr>
                <tr>
                    <td>Tuition Fee</td>
                    <td>60,000.00</td>
                    <td>60,000.00</td>
                    <td>1,20,000.00</td>
                </tr>
                <tr>
                    <td>Library Fee</td>
                    <td>2,500.00</td>
                    <td>2,500.00</td>
                    <td>5,000.00</td>
                </tr>
                <tr>
                    <td>Laboratory Fee</td>
                    <td>2,500.00</td>
                    <td>2,500.00</td>
                    <td>5,000.00</td>
                </tr>
                <tr>
                    <td>Computer Laboratory Fee</td>
                    <td>2,500.00</td>
                    <td>2,500.00</td>
                    <td>5,000.00</td>
                </tr>
                <tr>
                    <td>Game Fee</td>
                    <td>2,500.00</td>
                    <td>2,500.00</td>
                    <td>5,000.00</td>
                </tr>
                <tr>
                    <td>Issue of CLC, Character Certificate etc. from college</td>
                    <td>-</td>
                    <td>1,200.00</td>
                    <td>,200.00</td>
                </tr>
               
                <tr>
                    <td>Total</td>
                    <td>90,000.00</td>
                    <td>71,200.00</td>
                    <td>1,61,200.00</td>
                </tr>
            </tbody>
        </table>
        <h6>
        Grand Total (1st Year + 2nd Year) = Rs. 1,61,200.00 (One lack sixty one thousand two hundred only).
        <br/> 1. All payment must be either through Demand draft drawn in favour of Rishikul Shaikshanik Sansthan or by electronic transfer to College account (Account details are mentioned below).
        <br/> 2. Receipt must be obtained from college office after producing the transaction references.
        <br/> 3. All payments must be made at the counter only.
        </h6>
    </div>
</div>

</div>
<FaqAccordion className='mt-4' />

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
                                <div className="img-container mb-2">
                                    <img src={person.img} className='img-fluid' alt="" onClick={() => openModal(person.img)} />
                                </div>
                                <button className='btn btn-primary mt-2 w-75' onClick={() => openModal(person.img)}>View Large</button>
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

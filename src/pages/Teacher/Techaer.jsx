import React from 'react';
import "./Techer.css"
import Blog1Img from '../../utils/images/Amrendra.jpg';
import Blog2Img from '../../utils/images/sanjayyadav.jpg';
import Blog3Img from '../../utils/images/ambrish.jpg';
import Blog4Img from '../../utils/images/sunilkrroy.jpg';
import Blog5Img from '../../utils/images/nitu.jpg';
import Blog6Img from '../../utils/images/akanksh.jpg';
import Blog7Img from '../../utils/images/Archna.jpg';
import Blog8Img from '../../utils/images/Narsingh.jpg';
import Blog9Img from '../../utils/images/karmveer.jpg';
import Blog10Img from '../../utils/images/Manoj.jpg';
import Blog11Img from '../../utils/images/Priti.jpg';
import Blog12Img from '../../utils/images/Principal.jpg';
import Blog15Img from '../../utils/images/SK Dubey.jpg';
import Blog16Img from '../../utils/images/Ajay Tiwari.jpg';

const testimonials = [
  {
    name: 'Dr. SACHCHIDANAND PATHAK',
    position: 'Principal/HOD',
    image: [Blog12Img], 
    testimonial: 'B.Ed, M.Ed, M.A, Ph.D',
    experience: '17 years',
    joining:'21-01-2020',
    bankaccount: '38218771023SBI'
  },
  {
    name: 'MANOJ KUMAR MISHRA',
    position: 'Assistant Professor',
    image: [Blog10Img], 
    testimonial: 'B.Ed, M.Ed, Ph.D',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3863562671CBI'
  },
  {
    name: 'AMRENDRA KUMAR ',
    position: 'Assistant Professor',
    image: [Blog1Img], 
    testimonial: 'B.Ed, M.Ed, NET Qualifyed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3862911455CBI'
  },
  {
    name: 'SANJAY KUMAR YADAV',
    position: 'Assistant Professor',
    image: [Blog2Img], 
    testimonial: 'B.Ed, M.Ed, M.A, NET Qualifyed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3804333763CBI'
  },
  {
    name: 'DR. AMBRISH KUMAR DUBEY',
    position: 'Assistant Professor',
    image: [Blog3Img], 
    testimonial: 'B.Ed, M.Ed, Ph.D (ENGLISH)',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3804309366CBI'
  },
  {
    name: 'SUNIL KUMAY ROY',
    position: 'Assistant Professor',
    image: [Blog4Img],
    testimonial: 'B.Ed, M.Ed, NET Qualifyed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3804328958CBI'
  },
  {
    name: 'NEETU RAI',
    position: 'Assistant Professor',
    image: [Blog5Img], 
    testimonial: 'B.Ed, M.Ed, NET Qualifyed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3862735965CBI'
  },
  {
    name: 'AKANKSHA GOSWAMI',
    position: 'Assistant Professor',
    image: [Blog6Img], 
    testimonial: 'B.Ed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3708604373CBI'
  },
  {
    name: 'ARCHANA KUMARI',
    position: 'Assistant Professor',
    image: [Blog7Img], 
    testimonial: 'B.Ed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '39661784392CBI'
  },
  {
    name: 'NARSINGH KUMAR SINGH',
    position: 'Assistant Professor',
    image: [Blog8Img],
    testimonial: 'BFA, MFA',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3708202312CBI'
  },
  {
    name: 'KARNAVIR V.P KUSHWAHA',
    position: 'Assistant Professor',
    image: [Blog9Img], 
    testimonial: 'B.P., M.P.ED.',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3709248710CBI'
  },
  {
    name: 'PREETY AGRAWAL',
    position: 'Assistant Professor',
    image: [Blog11Img], 
    testimonial: 'B.Ed',
    experience: '',
    joining: '21-01-2020',
    bankaccount: '3667935402CBI'
  },
  {
    name: 'SANTOSH KUMAR DUBEY',
    position: 'Computer instructor cum & Administrative officer',
    image: [Blog15Img],
    testimonial: 'MCA, M.A (Eng)',
    experience: '',
    joining: '07-11-2017',
    bankaccount: '10587057385'
  },
  {
    name: 'AJAY TIWARI',
    position: 'Care Tacker',
    image: [Blog16Img],
    // testimonial: 'MCA, M.A (Eng)',
    experience: '',
    joining: '07-11-2017',
    bankaccount: '10587057385'
  },
  

];

const TeacherTestimonials = () => {
  return (
    <div className="testimonials-container">
         <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Teacher</h1>
                <p className='text-center w-75 mb-5'>Teachers are the guiding lights in our lives, imparting knowledge, fostering critical thinking, and shaping the future by nurturing young minds with patience, dedication, and passion.</p>
            </div>
        </header>
      <h2 className="testimonials-title">Teacher Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="card-header">
              <img
                className="profile-image"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h5 className="name">{testimonial.name}</h5>
                <h6 className="position">{testimonial.position}</h6>
              </div>
            </div>
            <p className="testimonial">Qualification:- {testimonial.testimonial}</p>
            <p className="experience">Experience:- {testimonial.experience}</p>
            <p className="joining">Joining:- {testimonial.joining}</p>
            <p className="bank">Bank Account Number:- {testimonial.bankaccount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTestimonials;

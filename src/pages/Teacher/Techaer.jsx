import React from 'react';
import "./Techer.css";
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
    si: 'A',
    name: 'Dr. SACHCHIDANAND PATHAK (01-04-1974)',
    image: Blog12Img,
    category: 'GEN',
    position: 'Principal/HOD',
    bead: 'Yes, 64%',
    mead: 'Yes, 60.28%',
    ma: 'No',
    master: 'Yes, ANC History',
    subject: 'ANC History',
    phd: 'Yes',
    ugc: 'Yes',
    experience: '17 years',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '1',
    name: 'Manoj Kumar Mishra (10-07-1968)',
    image: Blog10Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 72.2%',
    mead: 'Yes, 65.4%',
    ma: 'No',
    master: 'Yes, Science',
    subject: 'Education',
    phd: 'No',
    ugc: 'No',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '2',
    name: 'Amrendra Kumar (15-11-1968)',
    image: Blog1Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 86.60%%',
    mead: 'Yes, 58.71%',
    ma: 'No',
    master: 'Yes, Math',
    subject: 'Math',
    phd: 'No',
    ugc: 'Yes, NET',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '3',
    name: 'Sanjay Kumar Yadav (06-12-1990)',
    image: Blog2Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 66.60%',
    mead: 'Yes, 68.76%',
    ma: 'Yes',
    master: 'No',
    subject: 'Foundation',
    phd: 'No',
    ugc: 'Yes, NET',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '4',
    name: 'Dr. Ambrish Kumar Dubey (18-01-1982)',
    image: Blog3Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 75.30%',
    mead: 'Yes, 63.85%',
    ma: 'No',
    master: 'Yes, English',
    subject: 'English, ',
    phd: 'Yes, English',
    ugc: 'No',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '5',
    name: 'Sunil Kumar Roy (01-07-1973)',
    image: Blog4Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 66%',
    mead: 'Yes, 62.50%',
    ma: 'No',
    master: 'Yes, History',
    subject: 'History',
    phd: 'No',
    ugc: 'Yes, NET',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '6',
    name: 'Neetu Rai (05-07-1983)',
    image: Blog5Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 63.10%',
    mead: 'Yes, 61.40%',
    ma: 'No',
    master: 'Yes, Hindi',
    subject: 'Hindi',
    phd: 'No',
    ugc: 'Yes, NET',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '7',
    name: 'Akanksha Goswami (22-03-1992)',
    image: Blog6Img,
    category: 'GEN',
    position: 'Principal/HOD',
    bead: 'Yes, 64%',
    mead: 'Yes, 60.28%',
    ma: 'No',
    master: 'Yes, ANC History',
    subject: 'ANC History',
    phd: 'Yes',
    ugc: 'Yes',
    experience: '17 years',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '8',
    name: 'Archana Kumari (06-06-1981)',
    image: Blog7Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'Yes, 81%',
    mead: 'No',
    ma: 'No',
    master: 'Yes, Education 69%',
    subject: 'Education',
    phd: 'No',
    ugc: 'No',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '9',
    name: 'Nursingh Kumar Singh (01-04-1974)',
    image: Blog8Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'BFA, 74%',
    mead: 'MFA, 74%',
    ma: 'No',
    master: 'Yes, MFA',
    subject: 'Fine Arts',
    phd: 'No',
    ugc: 'No',
    experience: 'No',
    di: '25-09-2018',
    joining: '21-01-2018',
    salary: ''
  },
  {
    si: '10',
    name: 'Karnvir V.P.Kushwaha (15-01-1985)',
    image: Blog9Img,
    category: 'GEN',
    position: 'Asst Professor',
    bead: 'B.P, 72%',
    mead: 'M.P.E.D, 58%',
    ma: 'No',
    master: 'Yes, M.P.E.D 58%',
    subject: 'Physical Education',
    phd: 'No',
    ugc: 'No',
    experience: 'No',
    di: '25-09-2018',
    joining: '01-10-2018',
    salary: ''
  },
  {
    si: '11',
    name: 'Preety Agrawal (05-12-1981)',
    image: Blog10Img,
    category: 'GEN',
    position: 'Principal/HOD',
    bead: 'Yes, 64%',
    mead: 'Yes, 60.28%',
    ma: 'No',
    master: 'Yes, ANC History',
    subject: 'ANC History',
    phd: 'Yes',
    ugc: 'Yes',
    experience: '17 years',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '12',
    name: 'Santosh Dubey (07-11-2017)',
    image: Blog15Img,
    category: 'GEN',
    position: 'Administrativr Officer',
    bead: 'No',
    mead: 'No',
    ma: 'Yes',
    master: 'Yes, M.C.A',
    subject: '',
    phd: 'No',
    ugc: 'No',
    experience: '',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
  },
  {
    si: '13',
    name: 'Ajay Tiwari (01-04-1974)',
    image: Blog16Img,
    category: 'GEN',
    position: 'Care Taker',
    bead: 'Yes, 64%',
    mead: 'Yes, 60.28%',
    ma: 'No',
    master: 'Yes, ANC History',
    subject: 'ANC History',
    phd: 'Yes',
    ugc: 'Yes',
    experience: '17 years',
    di: '25-09-2018',
    joining: '21-01-2020',
    salary: ''
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
      {/* <h2 className="testimonials-title">Teacher Testimonials</h2> */}
      <table className="testimonials-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name and DOB</th>
            <th>Photograph</th>
            <th>Category</th>
            <th>Desination</th>
            <th>B.Ed</th>
            <th>M.Ed</th>
            <th>M.A</th>
            <th>Master's Degree</th>
            <th>Subject of Teaching</th>
            <th>Ph.D</th>
            <th>UGC NET</th>
            <th>Exp</th>
            <th>D_of_Intial</th>
            <th>Joining_Date</th>
            {/* <th>Salary</th> */}
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial, index) => (
            <tr key={index}>
              <td>{testimonial.si}</td>
              <td>{testimonial.name}</td>
              <td><img className="profile-image" src={testimonial.image} alt={testimonial.name} /></td>
              <td>{testimonial.category}</td>
              <td>{testimonial.position}</td>
              <td>{testimonial.bead}</td>
              <td>{testimonial.mead}</td>
              <td>{testimonial.ma}</td>
              <td>{testimonial.master}</td>
              <td>{testimonial.subject}</td>
              <td>{testimonial.phd}</td>
              <td>{testimonial.ugc}</td>
              <td>{testimonial.experience}</td>
              <td>{testimonial.di}</td>
              <td>{testimonial.joining}</td>
              {/* <td>{testimonial.salary}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTestimonials;

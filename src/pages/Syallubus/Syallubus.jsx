import React from 'react';
import './Syallubus.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import Accordion from 'react-bootstrap/Accordion';
import Course from '../../components/Course1/Course';
import Course1 from '../../components/Course2/course';

// const courses = [
//     {
//         id: 1,
//         img: [ArtCourseImg],
//         title: 'Art Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 2,
//         img: [BusinessCourseImg],
//         title: 'Business Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 3,
//         img: [ComputerScienceCourseImg],
//         title: 'Computer Science Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 4,
//         img: [EducationCourseImg],
//         title: 'Education Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 5,
//         img: [HealthcareCourseImg],
//         title: 'Healthcare Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 6,
//         img: [LawCourseImg],
//         title: 'Law Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 7,
//         img: [MusicCourseImg],
//         title: 'Music Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
//     {
//         id: 8,
//         img: [SportCourseImg],
//         title: 'Sport Course',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
//     },
// ];

function Syallubus() {
    const data = [
        { paperNo: 'Course 1', title: 'Childhood and Growing Up', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 2', title: 'Contemporary India and Education', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 3', title: 'Learning and Teaching', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 4', title: 'Language Across the Curriculum (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 5', title: 'Understanding Disciplines and Subjects (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 6', title: 'Gender, School and Society (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 7a', title: 'Pedagogy of a School Subject-Part I (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC1', title: 'Reading and Reflecting on Text (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC2', title: 'Drama and Art in Education (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC3', title: 'Critical Understanding of ICT (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: '', title: 'Total', course: '', marks: 650 }
      ];

      const data1 = [
        { paperNo: 'Course 1', title: 'Childhood and Growing Up', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 2', title: 'Contemporary India and Education', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 3', title: 'Learning and Teaching', course: 'YEAR I', marks: 100 },
        { paperNo: 'Course 4', title: 'Language Across the Curriculum (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 5', title: 'Understanding Disciplines and Subjects (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 6', title: 'Gender, School and Society (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'Course 7a', title: 'Pedagogy of a School Subject-Part I (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC1', title: 'Reading and Reflecting on Text (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC2', title: 'Drama and Art in Education (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: 'EPC3', title: 'Critical Understanding of ICT (1/2)', course: 'YEAR I', marks: 50 },
        { paperNo: '', title: 'Total', course: '', marks: 650 }
      ]
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
               
                <h1 className='text-center fw-semibold'>Our Syllabus</h1>

                <p className='text-center w-75 mb-5'>A syllabus serves as a comprehensive roadmap for a course, outlining the objectives, expectations, materials, schedule, and assessment methods to guide both students and instructors toward successful learning outcomes.</p>
            </div>
        </header>
 
        <div className='container py-5 w-200'>
        <table className="styled-table">
      <thead>
        <tr>
          <th>Paper No.</th>
          <th>Title of Paper</th>
          <th>Course</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.paperNo}</td>
            <td>{item.title}</td>
            <td>{item.course}</td>
            <td>{item.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
           
          <hr className='mt-4'/>
          <Course/>
        </div>

        <div className='container py-5 w-200'>
        <table className="styled-table">
      <thead>
        <tr>
          <th>Paper No.</th>
          <th>Title of Paper</th>
          <th>Course</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((item, index) => (
          <tr key={index}>
            <td>{item.paperNo}</td>
            <td>{item.title}</td>
            <td>{item.course}</td>
            <td>{item.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
           
          <hr className='mt-4'/>
          <Course1/>
        </div>
    </div>
  )
}

export default Syallubus;
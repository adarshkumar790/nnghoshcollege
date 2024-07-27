import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/n1.jpeg';
import Blog2Img from '../../utils/images/n2.jpeg';
import Blog3Img from '../../utils/images/n3.jpeg';
import Blog4Img from '../../utils/images/n4.jpeg';
import Blog5Img from '../../utils/images/n5.jpeg';
import Blog6Img from '../../utils/images/n6.jpeg';
import Blog7Img from '../../utils/images/n7.jpeg';
import Blog8Img from '../../utils/images/n8.jpeg';
import Blog9Img from '../../utils/images/n9.jpeg';
import Blog10Img from '../../utils/images/n10.jpeg';
import Blog11Img from '../../utils/images/n11.jpeg';
import Blog12Img from '../../utils/images/n12.jpeg';
import Blog13Img from '../../utils/images/n13.jpeg';
import Blog14Img from '../../utils/images/n14.jpeg';
import Blog15Img from '../../utils/images/n15.jpeg';
import Blog16Img from '../../utils/images/n16.jpeg';
import Blog17Img from '../../utils/images/n17.jpeg';
import Blog18Img from '../../utils/images/n18.jpeg';
import Blog19Img from '../../utils/images/n19.jpeg';
import Blog20Img from '../../utils/images/n20.jpeg';
import Blog21Img from '../../utils/images/n21.jpeg';
import Blog22Img from '../../utils/images/n22.jpg';
import Blog23Img from '../../utils/images/n23.jpg';
import Blog24Img from '../../utils/images/n24.jpg';
import Blog25Img from '../../utils/images/n25.jpg';
import Blog26Img from '../../utils/images/n26.jpg';
import Blog27Img from '../../utils/images/n27.jpg';
import Blog28Img from '../../utils/images/gallery28.jpeg';
import Blog29Img from '../../utils/images/gallery29.jpeg';


const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Rangoli',
        description: 'Outshining in the creative skill and team work bring laurels to the school',
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Sports Day',
        description: 'Students participating in various track and field events showcasing their athleticism and team work.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Independence Day Celebration',
        description: 'Addressing the national spirit to take pride in being an Indian.'},
    {
        id: 4,
        img: [Blog4Img],
        title: 'Gyan Baan-Awareness through archery',
        description: 'Prize distribution ceremony for archery competition at BNR Chanakya with Komlika Bari.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Rangoli Competition',
        description: 'Meticulously crafted rangoli designs that adorned every corner of the premises and radiated festive cheer.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Trophy distribution',
        description: 'Trophies awarded to  the champions and cheers of encourgement and appreciation echo thorughout the campus',
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Health Campaign',
        description: 'Health campaign to identify various minor ailments among students.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Navratri Celebration',
        description: 'A distinct form of the goddess is venerated, symbolizing, knowledge courage and purity.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Navratri Celebration',
        description: 'Offering prayers to Goddess Navdurga and seeking blessings to protect everyone from evil.'
    },
    {
        id: 10,
        img: [Blog10Img],
        title: '',
        description: 'A glimpse of our culture and tradition introducing us to Jharkhand.'
    },
    {
        id: 11,
        img: [Blog11Img],
        title: 'A company of archers',
        description: 'A unified battalion of skilled individuals, who are prepared to shoot their arrows with precision.'
    },
    {
        id: 12,
        img: [Blog26Img],
        title: 'Student with Certificates',
        description: 'A resounding success of sports day filled with excitement and camaraderie'
    },
    {
        id: 13,
        img: [Blog13Img],
        title: 'Prize distribution ceremony',
        description: 'The most powerful and meaningful event in the life of the school - the prize distribution'
    },
    {
        id: 14,
        img: [Blog14Img],
        title: 'Welcome to the new session',
        description: '"Smile brightly on your way, school has started just today".'
    },
    {
        id: 15,
        img: [Blog15Img],
        title: 'The unfathomable power',
        description: 'The drama covers the killing of the demon Mahishasura by Goddess Durga',
    },
    {
        id: 16,
        img: [Blog16Img],
        title: 'Sports Day',
        description: 'The cheers and war cries reaching the ears as one stood on the field'
    },
    {
        id: 17,
        img: [Blog17Img],
        title: 'Malaria Awareness Programme',
        description: 'Students conducting a mass rally in the village to spread awareness regarding malaria and its prevention.'
    },
    {
        id: 18,
        img: [Blog18Img],
        title: 'Welcome of our Chief guest',
        description: 'Inaugral function of Shri Ajay Michyari. Chief general manager, Reserve Bank of India.'
    },
    {
        id: 19,
        img: [Blog19Img],
        title: 'Yogasan',
        description: 'Recitation of shanti mantra with students.'
    },
    {
        id: 20,
        img: [Blog20Img],
        title: 'Ramnavami Celebration',
        description: 'The tiny tots came dressed up beautifully to celebrate the birth of Lord Rama, an embodiment of righteousness and virtue.'
    },
    {
        id: 21,
        img: [Blog21Img],
        title: 'Malaria Awareness $ Distrubuition',
        description: 'The camp successfully educating participants about the significance of community involvement in controlling the spread of malaria.'
    },
    {
        id: 22,
        img: [Blog22Img],
        title: 'Health Camp',
        description: 'Qualified medical professionals and technicians supervising the camp and offering valuable health advice to participants.'
    },
    {
        id: 23,
        img: [Blog23Img],
        title: 'Smart Class',
        description: 'Efficient utilization of smart class room to teach students'
    },
    {
        id: 24,
        img: [Blog24Img],
        title: 'Friends and Comrades',
        description: 'Football has a unique and irreplaceable capacity to unite people, goining for beyond ethical, religious or social differences.'
    },
    {
        id: 25,
        img: [Blog25Img],
        title: 'International yoga day ',
        description: 'The School organised a  plethora of activities for students of all ages ranging from "Asanas, Pranayam to Suryanamaskar"'
    },
    {
        id: 26,
        img: [Blog12Img],
        title: 'Archery Competition',
        description: 'Loosed arrow whistling through the air and hitting its target'
    },{
        id: 27,
        img: [Blog27Img],
        title: 'Navratri',
        description: 'A vivid reminder of diverse cultural heritage of India.'
    },{
        id: 28,
        img: [Blog28Img],
        title: 'Water Play day',
        description: 'Students splashing about and happily frolicking in the water.'
    },
    //     id: 29,
    //     img: [Blog29Img],
    //     title: 'Rangoli Competition',
    //     description: 'Meticulously crafted rangoli designs that adorned every corner of the premises and radiated festive cheer.'
    // },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Gallery</h1>
                <p className='text-center w-75 mb-5'>The school gallery showcases a vibrant tapestry of student life, capturing memorable moments, achievements, and creative endeavors within our educational community..</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/gallery" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        {/* <Card.Title className='fs-2 mb-4 text-center'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
import React from 'react';
 import './Bus.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/bus1.jpeg';
import Blog2Img from '../../utils/images/bus2.jpeg';
import Blog3Img from '../../utils/images/bus3.jpeg';
import Blog4Img from '../../utils/images/bus4.jpeg';
import Blog5Img from '../../utils/images/bus5.jpeg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';
import Bus1 from "../../utils/images/svnschool.jpeg";


const blogs = [
    {
        id: 1,
        img: [Blog4Img],
        description: 'Arival Time :- Hindustani Dhaba-5:50AM 2.Rinpass-5:55AM 3.Choubey khatanga-6:15AM 4.Role-6:20AM 5.Kannadu-6:20AM 6.Balu-6:25AM 7.Dalabarchock-6:30AM 8.Kokodoro-6:35AM 9.SiliconValley-6:40AM 10.Vastuvihar-6:40AM 11.Shardaglobal-6:40AM 12.Bukru-6:45AM 13.Nagri-6:50AM 14.School-7:05AM b). Departure timing Class - P.G to U.K.G 1.School-10:00AM 2.Nagri-10:10AM 3.Shardaglobal-10:20AM 4.Vastuvihar-10:20AM 5.SiliconValley-10:22AM 6.Choubeykhatanga-10:30AM 7.Role-10:35',
        descriptions: ''
    },
    {
        id: 2,
        img: [Blog2Img],
        description: 'a).Arrival time - 1.Soso-5:30AM  2.Bundu-5:35AM  3.Zara-4:45AM  4.Okhargarha-6:30AM   5.Dahutoli-6:15AM  6.Nawadih-6:20AM  7.Barhu-6:40AM  8.BarwaToli-6:45AM. b).Departure timing - 1.School - 11:30AM 2.Dahutoli-11:35AM 3.Nawadih-11:45AM 4.Okhargarha-11:55AM 5.Zara-12:00AM 6.Bundu-12:10AM 7.Soso-12:15AM c)Departure timing - 1.School-10:00AM 2.Barhu-10:05AM 3.Barwatoli-10:10AM 4.Kumhartoli-0:25AM  5.Dahutoli-10:30AM 6.Mansarovar-10:35AM 7.Bazaartand-10:40AM 8.Okhargarha-10:50AM 9.Zara-11:00AM 10.Soso-11:10AM.',
        descriptions: '',
    },
    {
        id: 3,
        img: [Blog3Img],
        description: 'Arrival  timing-Trip-1-Sangrampur  -5:40am 2.Husir -5:50am 3.School-6:15am. Trip-2-School-6:20AM 2.Bherigarha-6:35AM 3.Patagai-6:40AM 4.Chama-6:50AM 5.School-7:00AM 6.Departure timing-PG to UKG 1.School-10:00AM 2.Chama-10:20AM 3.Patagai-10:30AM 4.Bherigarha-10:35AM 5.Sangrampur-10:55AM 6.Rinpas-11:15AM 7.Hindustani dhaba-11:25AM',
        descriptions: ''
    },
    {
        id: 4,
        img: [Blog5Img],
        description: 'Bus - 1 Arrival timing 1.Baraudi-6:05AM 2.Basti-6:10AM 3.Marwa-6:20AM 4.Zidu-6:25AM 5.Bangalihotel-6:35AM 6.BazaarTand-6:37AM 7.Pithoriyachock-6:40AM 8.Kisanchock-6:40AM 9.Sutiyambey-6:45AM 10.Mansarovar-6:50AM 11.KumharToli-6:55AM 12.KelaBagan-6:55AM 13.School-7:00AM b). Departure timing  PG to UKG 1.School-10:00AM 2.Barhu-10:05AM 3.Barwatoli-10:10AM 4.Kumhartoli-10:25AM 5.Dahutoli-10:30AM 6.Mansarovar-10:35AM 7.Bazaartand-10:40AM 8.Okhargarha-10:50AM 9.Zara-11:00AM 10.Soso-11:10AM 12.',
        descriptions: '',
    },
    // {
    //     id: 5,
    //     img: [Blog5Img],
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 6,
    //     img: [Blog6Img],
    //     title: 'Blog 6',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 7,
    //     img: [Blog7Img],
    //     title: 'Blog 7',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 8,
    //     img: [Blog8Img],
    //     title: 'Blog 8',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 9,
    //     img: [Blog9Img],
    //     title: 'Blog 9',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
];

function Bus() {
  return (
    <div className='bus-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Bus Facilities</h1>
                {/* <p className='text-center w-75'>Table</p>
                <p className='text-center w-75 mb-5'>Time</p> */}
           
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/bus" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        {/* <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title> */}
                                        <h3 className='text-center '>Morning Time</h3>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                        <h3 className='text-center'>Day Time</h3>
                                        <Card.Text className='text-center'>{blog.descriptions}</Card.Text>
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

export default Bus;
import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h1 className='text-center text-capitalize mb-5 text-primary'>Prospectus</h1>
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>The Campus</Accordion.Header>
                    <Accordion.Body>
                    N.N.Ghosh Sanatan Teachers Training College is located at Jamuary, Kanke, Ranchi, Jharkhand and is run by Rishikul Shaikshanik Sansthan having Registration No. 118/2006-07. The College has been set up in the year 2013.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Vision & Mission</Accordion.Header>
                    <Accordion.Body>
                     1. Promote and achieve all round development of society. <br/>
                     2. Prepare teachers for quality teaching. <br/>
                     3. Provide opportunities to enhance the competence of teaching faculty. <br/>
                     4. Inculcate the traditional and cultural values in teaching. <br/>
                     5. Inspire the teachers for making it a place of teaching and learning. <br/>
                     6. Create an egalitarian society.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Affiliation</Accordion.Header>
                    <Accordion.Body>
                    The College is recognized by National Council for Teacher Education an University, Ranchi, Jharkhand.
                    <h6> Annual intake - 100.</h6>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Duration</Accordion.Header>
                    <Accordion.Body>
                    The Course is for two years duration from the academic year 2015-16 onwards. All the rules for practical and theory classes will be as per NCTE Regulation 2014.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Infrastructure</Accordion.Header>
                    <Accordion.Body>
                    The college has excellent infrastructure to provide quality education with modern amenities for smooth and efficient learning and teaching process.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Laboratories</Accordion.Header>
                    <Accordion.Body>
                    <h3>Science & Mathematics</h3>
                    Equipped with adequate number / quantity of instruments, equipments and chemicals for each student.
                    Spacious and well ventilated laboratory for carrying out scientific experiments in Mathematics, Physics, Chemistry, Botany and Zoology.
                    <br/>
                    <h3>Psychology</h3>
                    Equipped with psychological apparatuses, puzzles, games and portraits of great personalities, to carry out various psychological tests and experiments.
                   <br/>
                    <h3>Computer</h3>
                     Well equipped computer lab with more than 30 computes for the students to practice computer operation which is a pre requisite for slte for employment these days. Art & 
                     <br/>
                     <h3>Craft</h3>
                     Equipped with sewing machines, carpentry tools, musical instruments, drawing and painting materials etc. for artistic and creative experiment and works of the students.
                     <h3>Language Laboratory</h3> 
                     Language lab with master controlling system and individual audio equipments for 12 students for audio and phonetics lessons.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>Library</Accordion.Header>
                    <Accordion.Body>
                    Library with a collection of more than 5200 books including a large number of reference books in all subjects, encyclopedia, news papers, magazines and educational journals. A spacious reading room with capacity of around 75 people is adjacent to the library.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>Multi Purpose Hall</Accordion.Header>
                    <Accordion.Body>
                    Seating capacity of approximately 250 with an elevated stage and attached dressing room and wash room for functions and other gatherings.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>Seminar Hall</Accordion.Header>
                    <Accordion.Body>
                    Seating capacity of about 75 for conferences, seminars, tutorials etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>Uniform</Accordion.Header>
                    <Accordion.Body>
                    Men: Dark Blue Trousers & Sky Blue Sleeve Shirt, Black Shoes (with lace) & White Socks, Red Blazer (in winter)
                    <br/> Women: Sari same as displayed in college, Black Shoes & White Socks, Red Blazer (in winter)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                    <Accordion.Header>Eligibility</Accordion.Header>
                    <Accordion.Body>
                    Bachelor / Master Degree in Arts / Science / Commerce with a minimum 50% marks from any UGC recognized university. For Professional Course like Engineering 55% Relaxation of Marks for reserved categories will be as per the rules of the government / university.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='11'>
                    <Accordion.Header>Reservation</Accordion.Header>
                    <Accordion.Body>
                    As per the existing rules of the government.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='12'>
                    <Accordion.Header>Application</Accordion.Header>
                    <Accordion.Body>
                     Application can be obtained on payment of Rs. 1000/- in Cash form:
                     <br/>1. College office Contact No.: 8709574088, 7985729380 Between 10:00 am to 4:00 pm. on all working days.
                     <br/> 2. Application and prospectus can also be downloaded form our website: rushikul.org.in. A Demand Draft for Rs. 1000/- Drawn in favour of Rishikul Shaikshanik Sansthan payable at State Bank Of India, SPLPBB Kanke Road, Ranchi must accompany the downloaded applications, towards the cost of application and prospectus.
                     <h3>Documents to be Enclosed with the Application</h3>
                      No Original Certificate / Documents may be submitted with the application. Self attested photocopies of the following documents must to be attached with duly filled in application.
                      <br/>1.Matriculation/AISE (CBSE) / ICSE Certificate to confirm date of birth or equvalent.
                      <br/> 2.Mark Sheet of Matriculation / AISSE (CBSE) / ICSE.
                      <br/>3.Pass Certificate of Intermediate / Plus 2 or Equivalent.
                      <br/> 4.Mark Sheet of Intermediate / Plus 2
                      <br/> 5.Degree Certificate.
                      <br/> 6.Mark Sheet of Graduation
                      <br/> 7.College Leaving Certificate / Migration Certificate.
                      <br/> 8.Medical Certificate of Fitness form a Registered Medical Practioner.
                      <br/> 9.Mark Sheet of M.A. / M. Sc. / M.Com.
                      <br/> 10.Certificate of M.A/M. Sc./ M.Com.
                      <br/> 11.Caste Certificate from Competent Civil Authority.
                      <br/> 12.Residential Certificate from Competent Civil Authority.
                      <br/> 13.Income Certificate form Competent Authority.
                      <br/> Note:- Sl. No. 1 to 8 of the above mentioned documents are compulsory and without which the application will be rejected.
                      <br/>
                     <h3> Original Documents to be produced at the time of admission </h3>
                      1. Originals of all photocopies submitted with the application.
                     <br/> 2. Recent passport size photographs (5 nos.)
                     <br/> 3. Two Sets photocopies of all certificates and documents.
                     <br/> 4. Five Self addressed stamped (Rs. 30.00 each) envelopes (9"x4.5")
                     <br/> 5. Affidavit (attached with the application form) duly filled and signed by
                     the candidate and Father/ Guardian.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='13'>
                    <Accordion.Header>Faculty</Accordion.Header>
                    <Accordion.Body>
                    The college has well qualified and experienced full time faculty in all subjects and part time faculty for arts & craft and Physical Education.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='14'>
                    <Accordion.Header>Medium of Instruction</Accordion.Header>
                    <Accordion.Body>
                    Medium of instruction is both Hindi and English. Students are allowed to prepare and write the university examinations in either English or Hindi except for the languages which will be as per the rules of the University.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='15'>
                    <Accordion.Header>Bank Details</Accordion.Header>
                    <Accordion.Body>
                    Our Bank : State Bank Of India, Kanke Road, Ranchi. <br/>
                    Name of Account Holder: Rishikul Shikshanik Sanshtan. <br/>
                    Account Number : 38205422827. <br/>
                    IFSC : SBIN0016090.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='16'>
                    <Accordion.Header>Miscellaneous</Accordion.Header>
                    <Accordion.Body>
                    1. Candidates appearing for the Final Examination will have to produce a certificate from the Principal stating that he / she has attended the required number of lessons both in theory and practical as per the regulations of the University. <br/>
                    2. All dues and outstanding must be cleared before the issue of the above mentioned certificate.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='17'>
                    <Accordion.Header>Rules & Regulations</Accordion.Header>
                    <Accordion.Body>
                    1.Students are expected to show proper respect to the faculty, all members of the staff and the managing staff of the college.<br/>
                   <br/> 2.Students must attend all demonstration classes as well as his/ her scheduled practice training period during the course. He/ She is expected to teach in any school assigned to him/her by the college.<br/>
                   <br/> 3.Students who secure admission on the basis of false certificate / mark sheet or on the basis of any misrepresentation of facts or illegal means shall be summarily cancelled and all fees paid by him / her shall be forfeited. Legal action may also be taken against him/her. <br/>
                   <br/> 4.Students shall take proper care of the college property. Students will be appropriately charged the amount of damage caused to the college property.
                   <br/> 5.Chewing of Paan / Gutka /Intake of any sort of intoxications substance is strictly prohibited in the College premises.
                   <br/> 6.The College Identity Card should be worn in the campus.
                   <br/> 7. Ragging is strictly prohibited.
                   <br/> 8. All students must attend class in proper uniform.
                   <br/> 9. The College holds right to introduce or amend any or all rules from time to time if necessary.
                   <br/> 10.Ranchi court will have exclusive jurisdiction for any/all legal matters/disputes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
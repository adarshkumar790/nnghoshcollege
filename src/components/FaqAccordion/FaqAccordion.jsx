import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is the eligibility for a B.Ed degree?</Accordion.Header>
                    <Accordion.Body>
                    Eligibility for a B.Ed degree typically includes a bachelor’s degree with 50% marks in any discipline from a recognized college or university.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header> What job opportunities are available after a B.Ed degree?</Accordion.Header>
                    <Accordion.Body>
                    Job opportunities include teaching at various levels, school administration, educational consulting, and more.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What subjects can I teach with a B.Ed degree?</Accordion.Header>
                    <Accordion.Body>
                    You can teach various subjects depending on your specialization in the B.Ed program.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How to take addmission in B.Ed?</Accordion.Header>
                    <Accordion.Body>
                       The Jharkhand B.Ed Exam is conducted by the Jharkhand Combined Entrance Competitive Examination Board (J.C.E.C.E.B) annually for admission to a 2-year B.Ed course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Does your College have transport facility?</Accordion.Header>
                    <Accordion.Body>
                       Yes, there is transport facility available in the College.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>What are the documents required for admission ?</Accordion.Header>
                    <Accordion.Body>
                        1. Adhar Card (Two copies). <br/>
                        2. Xth Marksheet (Two copies). <br/>
                        3. Xth Passin Certificate (Two copies). <br/>
                        4. Xth Admit Card (Two copies). <br/>
                        5. XII Marksheet (Two copies). <br/>
                        6. XII Passing Certificate (Two copies). <br/>
                        7. XII Admit Card (Two copies). <br/>
                        8. Graduation Marksheet (Two copies). <br/>
                        9. Graduation Passing Certificate (Two copies). <br/>
                        10. Others Certificate, (like PG, Eng. etc)(Two copies). <br/>
                        11. Cast Certificate (Two copies). <br/>
                        12. EWS Certificate (Two copies). <br/>
                        13. Anti-ragging Certificate (Affidavit) (Two copies). <br/>
                        14. Medical Certicate (Two copies). <br/>
                        15. 08 Passport size photo (Two copies). <br/>
                        16. Migration (Other university)/CLC (Two copies). <br/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>How many installment for fee payment?</Accordion.Header>
                    <Accordion.Body>
                    There are four installments for fee payment.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
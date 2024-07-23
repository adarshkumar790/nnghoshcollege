import React from 'react';
import './course.css';
import Accordion from 'react-bootstrap/Accordion';
// import Course from '../Course2/Course';

function Course1() {
    
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
        
            {/* <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2> */}
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <h3 className='text-black'>Course 8 : KNOWLEDGE AND CURRICULUM</h3>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>UNIT I : Curriculum, Aims and Objectives</Accordion.Header>
                    <Accordion.Body>
                    • What is curriculum, syallubus/text-book? <br/>
                    • Aim and objective of curriculum. <br/>
                    • Principles and procedure of curriculum construction. <br/>
                    • Relationship between curriculum and syallubus.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>UNIT II : Designing of Curriculum</Accordion.Header>
                    <Accordion.Body>
                    • Role of state and school in designing curriculum  with refrence to its activities, rules,
                      disciplines and time-table.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>UNIT III : Epistemological Bases of Education</Accordion.Header>
                    <Accordion.Body>
                    • Epistemological Bases : Differencies between : <br/>
                    * Knowledge and school. <br/>
                    * Teaching and training. <br/>
                    * Knowledge and Information <br/>
                    * Reason and belief. <br/>
                    • Child centre education : Activity, discovery, dialogue with reference to philosophy of Gandhi and 
                    Tagore, Dewey, and plato 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>UNIT IV : </Accordion.Header>
                    <Accordion.Body>
                    • Concept of: Nationalism, Universalisation, Secularism and their
                      interrelationship with education with reference to Tagore and Krishamurti. <br/> 
                    • Criteria for their selection.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>UNIT V : Philosophical Basis of Education Indian and Western Thinkers</Accordion.Header>
                    <Accordion.Body>
                    • Indian thinkers: Gandhi, Tagore, Vivekananda, Aurbindo <br/>
                    • Western thinkers: Rousseau, Froebel, Pestalozzi, John Dewey.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>UNIT VI : Social Bases of Education</Accordion.Header>
                    <Accordion.Body>
                    • Social bass of education in the context of society, culture and modernity. • Historical changes introduced by Industralisation, Democracy, ideas of individual     autonomy. <br/>
                    • Education in relation to modern values: <br/>
                    Ø Equity and equality <br/>
                    Ø Individual opportunity and social justice and dignity with reference to Ambedkar. <br/>
                    -----------नुमोदित पुस्तकें--------<br/>
                    1. Knowledge and Curriculum  ------Ram Kishore Singh <br/>
                    2. Knowledge and Curriculum  -----N.R.S. Saxena, Munendra Kumar <br/>
                    3. ज्ञान, भाषा एवं पाठ्यचर्या        -----डॉ० संगीता श्रीवास्तव <br/>
                    4. ज्ञान, भाषा एवं पाठ्यक्रम        -----डॉ० गिरीश पचौरी <br/>
                    5. ज्ञान, भाषा एवं पाठ्यक्रम        -----डॉ० शिवपाल सिंह, डॉ० रुपम जैन <br/>
                    6. ज्ञान भाषा एवं पाठ्यक्रम         -----डॉ० ए०बी० भटनागर
                    </Accordion.Body>
                </Accordion.Item>
                <h3>Course 9: ASSESSMENT OF LEARNING</h3>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>UNIT I : Significance of Evaluation in Teaching Learning Process </Accordion.Header>
                    <Accordion.Body>
                   • Definition and meaning of evaluation, differences among measureinent, assessment and evaluation.<br/>
                   • Scales of measurement: normal scale, ordinal scale, interval scale and ratio scale. <br/>
                   • Approaches of evaluation: Formative and summative criterion references and norm referenced evaluation, internal and external evaluation. <br/>
                   • Instructional objectives and their specification in behaviour terms. • Bloom's and Anderson's taxonomy of educational objectives in cognitive, affective and psychomotor domain. <br/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>UNIT II: Techniques and Tools of Evaluation</Accordion.Header>
                    <Accordion.Body>
                    • Meaning of testing and interpretation of test results. <br/>
                    • Techniques of Evaluation Self-Reporting, Observation, Peer Rating and Sociogram. <br/>
                    • Tools of Testing: Rating Scales, Inventories, Anecdotal Record, Interview Schedules and Cumulative Record Cards.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>UNIT II: Techniques and Tools of Evaluation</Accordion.Header>
                    <Accordion.Body>
                    • Meaning of testing and interpretation of test results. <br/>
                    • Techniques of Evaluation Self-Reporting, Observation, Peer Rating and Sociogram. <br/>
                    • Tools of Testing: Rating Scales, Inventories, Anecdotal Record, Interview Schedules and Cumulative Record Cards.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>UNIT III: Learner Evaluation Process</Accordion.Header>
                    <Accordion.Body>
                    • Construction of Teacher Made Achievement Test: Design, blue print, preparing the questions paper and making scheme, steps in standardizing and achievement test. <br/>
                    • Different types of questions.
                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                    <Accordion.Header>UNIT IV: Statistics : Interpretation and Significance</Accordion.Header>
                    <Accordion.Body>
                    • Concept and types of statistics. <br/>
                    • Utility of statistics in teaching-learning process. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='11'>
                    <Accordion.Header>UNIT V: Tabulation of Data its Graphical Representation</Accordion.Header>
                    <Accordion.Body>
                    • Classification and tabulation of un-grouped and grouped data. <br/>
                    • Graphical representation of data: Histogram, frequency polygon, cumulative frequency curve, pie chart and ogive.
                   <br/> • Application of various graphical representation of data.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='12'>
                    <Accordion.Header>UNIT VI: Measures of Central Tendency</Accordion.Header>
                    <Accordion.Body>
                    • Mean, Median and Mode: Correlation co-efficient and nature and characteristics. <br/>
                    • Methods of calculation and their application to test scores.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='13'>
                    <Accordion.Header>UNIT VII: Measure of Dispersion</Accordion.Header>
                    <Accordion.Body>
                    • Range, quartiles, deviation, mean deviation and standard deviation, nature and significance. <br/>
                    • Methods of calculation and their application to test graphical.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='14'>
                    <Accordion.Header>UNIT VIII: Measures of Relative Position</Accordion.Header>
                    <Accordion.Body>
                    • Percentiles and Quartiles: Nature and significance. <br/>
                    • Methods of calculation: Statistical and graphical. <br/>
                     --------------------अनुमोदित पुस्तकें------------------------------------- <br/>
                    1. Assessment of Learning  ----Dr. A.B. Bhatnagar, Anurag Bhatnagar <br/>
                    2. Assessment of Learning  ----Dr. Jas Raj Kuar, Dr. Ritu Bist <br/>
                    3. Assessment of Learning  ----Dr. Amar Jeet Singh Parihar <br/>
                    4. अधिगम के लिए आंकलन      ---- डॉ० मोहनलाल आर्य <br/>
                    5. अधिगम का आंकलन         ---- डॉ० ए०बी० भटनागर, डॉ० मीनाक्षी भटनागर, डॉ० अनुराग भटनागर <br/>
                    6. अधिगम का आंकलन         ----डॉ० रमन बिहारी लाल, सुनीता पलोड <br/>
                    7. अधिगम का आंकलन        ----डॉ० जसराज कौर, डॉ० रितु बिस्ट
                    </Accordion.Body>
                </Accordion.Item>
                <h3>Course 10: CREATING AND INCLUSIVE SCHOOL (1/2)</h3>
                <Accordion.Item eventKey='15'>
                    <Accordion.Header>UNIT I: Meaning, Nature and Scope of Inclusive Education</Accordion.Header>
                    <Accordion.Body>
                    • Meaning and scope of Inclusive Education/Special Education.  <br/>
                    • Inclusive Education in different perspectives: <br/>
                    Ø Historical perspective. <br/>
                    Ø Meaning of normality.  <br/>
                    Ø Meaning of exceptionality: <br/>
                    - Quantitative concept    ---Qualitative concept  <br/>
                    - Statistical concept     ---Medical concept <br/>
                    • Aims/Objectives of creating an inclusive school.  <br/>
                    • Definition of "disability" and "inclusive" within the education framework (NPE 1986, UNESCO 1989, RTE Act 2009) <br/>
                    • Need and importance of Inclusive education.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='16'>
                    <Accordion.Header>UNIT II: Learning Disabilities and Educational Adaptation</Accordion.Header>
                    <Accordion.Body>
                    • Historical background and definitions of learning disabilities. <br/>
                    • Characteristics of learning disabled children. <br/>
                    Ø Cognitive  Ø Educational <br/>
                    Ø Physical   Ø Behavioural <br/>
                    Ø Communication <br/>
                    • Types of learning disabilities <br/>
                    • Teaching of learning disabilities <br/>
                    • Treatment of learning disabilities: 
                    Ø Behaviour guidance method <br/>
                    Ø Cognitive behaviour modification  <br/>
                    • Adaptation teaching methods <br/>
                    Ø Improving basic skills <br/>
                    Ø Improving social Procedure <br/>
                    Ø Improving classroom behaviour <br/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='17'>
                    <Accordion.Header>UNIT III: Instructional and Assessment Procedure</Accordion.Header>
                    <Accordion.Body>
                    • Components of effective instruction. <br/>
                    • Individualized education programs. <br/>
                    • Special teaching method. <br/>
                    • Special instruction adaptation. <br/>
                    • Special procedure in special education. <br/>
                    • Technique of assessment in special education.  <br/>
                    • Behaviour assessment in special education. <br/>
                     --------------अनुमोदित पुस्तकें--------- <br/>
                    1. Creating and Inclusive Education --Dr. K.P. Singh <br/>
                    2. Inclusive Education         ----Nisha Singh Dr. K.P. Singh, Chandrajeet Singh <br/>
                    3. समावेशी शिक्षण                ----डॉ० ए०बी० भटनागर <br/>
                    4. समावेशी शिक्षण                ----मदन सिंह
                    </Accordion.Body>
                </Accordion.Item>
</Accordion>
</div>
</div>
)
}

export default Course1;
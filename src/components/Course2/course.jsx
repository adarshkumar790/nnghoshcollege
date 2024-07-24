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
                <h3>OPTIONAL COURSES (1/2) : GARDENING</h3>
                <Accordion.Item eventKey='18'>
                    <Accordion.Header>UNIT 1: Gardening</Accordion.Header>
                    <Accordion.Body>
                    • Concept, need and importance of work experience with special emphasis
                     on Gardening. <br/>
                    • Objective of teaching gardening in schools. <br/>
                    • Method of teaching. <br/>
                    • Evaluating student work.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='19'>
                    <Accordion.Header>UNIT II: Materials and Tools</Accordion.Header>
                    <Accordion.Body>
                    • Seeds, cutting and grasses: Types, uses and resources.<br/>
                    • Pots, types, uses and resources. <br/>
                    • Manure and fertilisers: Types, sources and importance. <br/>
                    • Tools and equipments: Sources, function and uses. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='20'>
                    <Accordion.Header>UNIT III: Content Enrichment</Accordion.Header>
                    <Accordion.Body>
                    • Soil classification texture and structure. <br/>
                    • Methods of preparations: <br/>
                   (a) Sexual and Vegetative <br/>
                   (b) Cutting, lying, grafting and budding.<br/>
                   (c) Ornamental Gardening <br/>
                    Ø Ornamental Plants: types and their classification. <br/>
                    Ø Techniques of growing vegetables. <br/>
                    (d) Kitchen Gardening <br/>
                    Ø Vegetables: Types, (seasonal and perennial)  <br/>
                    Ø Techniques of growing vegetables
                    </Accordion.Body>
                </Accordion.Item>
                <h3>BASIC OF COMPUTER</h3>
                <Accordion.Item eventKey='21'>
                    <Accordion.Header>UNIT 1: Fundamental of Computers</Accordion.Header>
                    <Accordion.Body>
                    1. Introduction, characteristics of computers  <br/>
                    2. Essential components of computer <br/>
                    • Input unit <br/>
                    • Central processing unit <br/>
                    • Output devices <br/>
                    3. Types of memory, storage devices. <br/>
                    4. Computer languages (assembly, machine, high level).  <br/>
                    5. Uses and applications of computer
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='22'>
                    <Accordion.Header>UNIT II: Introduction to Operating System</Accordion.Header>
                    <Accordion.Body>
                    1. Computer and types of operating system. <br/>
                    2. Basics of MS Windows <br/>
                    3. Components of Windows <br/>
                    4. Advantages of Windows
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='23'>
                    <Accordion.Header>UNIT III: Introduction to MS-Office</Accordion.Header>
                    <Accordion.Body>
                    1. Microsoft Word <br/>
                    • Introduction, components of word documents, basics of Word Processing. Saving/opening new documents/files in different locations (drives)
              <br/> • Text editing, spell check, insert picture, word art. <br/>
                    • Text printing, mail merge. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='24'>
                    <Accordion.Header>2. Microsoft Excel</Accordion.Header>
                    <Accordion.Body>
                    • Introduction, components of excel. <br/>
                    • Enter and edit data in excel work sheet. <br/>
                    • Statistical application. <br/>
                    • Function. <br/>
                    • Graphical representation, how to create/draw graphs. <br/>
                    • Standard statistical function.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='25'>
                    <Accordion.Header>3. Microsoft Power Point</Accordion.Header>
                    <Accordion.Body>
                    • Introduction, application. presentation. <br/>
                    • Clip art. <br/>
                    • Creating and viewing <br/>
                    • Slide show <br/>
                    • Editing the presentation <br/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='26'>
                    <Accordion.Header>UNIT IV : Introduction to Internet and E-mail.</Accordion.Header>
                    <Accordion.Body>
                    1. Interent, history and working, characteristics of internet. <br/>
                    2. Electronic mail. <br/>
                    3. Browsing internet. <br/>
                    4. World Wide Wed (WWW). <br/>
                    5. Advantage of Interent. <br/>
                    6. Educational Websites. 
                    </Accordion.Body>
                </Accordion.Item>
                <h3>FINE ARTS</h3>
                <Accordion.Item eventKey='26'>
                    <Accordion.Header>Contents:</Accordion.Header>
                    <Accordion.Body>
                    1. Definition of arts. <br/>
                    2. Aims and objectives of teaching art and craft in schools. <br/>
                    3. A brief history of Indian Art: Pre-historic period to Modern Indian Art. <br/>
                    4. A brief history of Western Art: Pre-historic period to Modern times.<br/>
                    5. The Art Teacher: Role, area of activities viz. environment, participation in life, excursion of the place of Art. <br/>
                    6. Technique of Drawing and Painting: Colour Theory. <br/>
                    7. Theory of perspective. <br/>
                    8. Aesthetics.
                    </Accordion.Body>
                </Accordion.Item>
                <h3>TAILORING</h3>
                <Accordion.Item eventKey='25'>
                    <Accordion.Header>UNIT I: Testile and Clothing</Accordion.Header>
                    <Accordion.Body>
                    • History of textile and clothing. <br/>
                    • Textile clothing of the body. <br/>
                    • Classification of textile and clothing. <br/>
                    • The laundry of the clothing.  <br/>
                    • Characteristics, importance of textile and clothing.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='25'>
                    <Accordion.Header>UNIT II: History of Sewing Machine</Accordion.Header>
                    <Accordion.Body>
                    • Types of Sewing Machine <br/>
                    • Machine faults and their remedies.  <br/>
                    • Precautions in drafting and sewing. <br/>
                    • Parts and tools of Sewing Machine. <br/>
                    • Pattern making and cutting.   <br/>
                    • Maintenance of sewing machine.
                    </Accordion.Body>
                </Accordion.Item>
            <h3>EPC 4: UNDERSTANDING THE SELF</h3>
            <Accordion.Item eventKey='26'>
                    <Accordion.Header>UNIT 1: Holistic and Integrated Understanding of Human Self and Personality</Accordion.Header>
                    <Accordion.Body>
                    • Who Am I? <br/>
                    • Individual in society with different identities: Gender, relational, cultural. <br/>
                    • Beliefs: Stereotypes and prejudices. <br/>
                    • Relationship with self, others, family, society. <br/>
                    • "I"- A teacher. Who a teacher is? Role of a teacher, qualities and functions. <br/>
                    • Communication skill including the ability to listen and observe.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='27'>
                    <Accordion.Header>UNIT II: Personality Development</Accordion.Header>
                    <Accordion.Body>
                    • Self exploration: Knowing ones strengths and weaknesses, positive strokes and negative strokes etc. <br/>
                    • Spiritual/Character Development. <br/>
                    • Self-esteem. • Emotions : <br/>
                    (a) The power of emotion in human behaviour.<br/> 
                    (b) Understanding of the emotions.<br/>
                    (c) Growth toward emotional maturity.  <br/>
                    (d) Stages of emotional growth. <br/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='28'>
                    <Accordion.Header>UNIT III: Philosophy of Yoga</Accordion.Header>
                    <Accordion.Body>
                    • Meaning of Yoga.
                    • Yoga as a way of Healthy and Integrated Living. <br/>
                    • Characteristics of the practitioners of Yoga. <br/>
                    • Utility of yoga in different contexts. (Exercise Mediation, Pranayam). <br/>
                    -----अनुमोदि त पुस्तकें----------<br/>
                    1. Understanding the Self  ----Shivani Jain <br/> 
                    2. Understanding the Self  ----Seema Sharma <br/>
                    3. स्वयं की समझ              ----पूजा अग्रवाल, राजकुमार गोयल  <br/>
                    4. शिक्षा दर्शन और आत्म-विकास की अवधारणाएँ ---- पूजा अग्रवाल, राजकुमार गोयल <br/>
                    5. आत्म-बोध ---- पूजा अग्रवाल, राजकुमार गोयल  -डॉ० राजकुमार गोयल, डॉ० मीरा अग्रवाल -शिवपाल सिंह, राकेश कुमार केशरी <br/>
                    </Accordion.Body>
                </Accordion.Item>

</Accordion> 
</div>
</div>
)
}

export default Course1;
import React from 'react';
import './Course.css';
import Accordion from 'react-bootstrap/Accordion';

function Course() {
    
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
        
            {/* <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2> */}
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
                <h3 className='text-black'>CHILDHOOD AND GROWING UP (COURSE-1)</h3>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>UNIT I : Growth and Development </Accordion.Header>
                    <Accordion.Body>
                    • Meaning, nature and principal of growth and development. <br/>
                    • Stages of growth and development with respect to physical, motor, social, emotional and cognitive development with reference to:
                    <br/> (i) Infancy, (ii) Early Childhood, (iii) Childhood  <br/> Adolescence with special reference to the:
                   <br/> (i) Needs and problems of the adolescent.
                    <br/> (ii) Aspects of growth and development during adolescence (physical, emotional, social and mental.)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>UNIT II : Heredity and Environment</Accordion.Header>
                    <Accordion.Body>
                     • Meaning, importance and role of heredity and environment. <br/> 
                     • Educational implications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>UNIT III : Individual Difference</Accordion.Header>
                    <Accordion.Body>
                     • Meaning, nature, areas, causes. <br/>
                     • Influence of individual differences on learning. <br/>
                     • Educational implications.
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>UNIT IV : Intelligence and Creativity Intelligence</Accordion.Header>
                    <Accordion.Body>
                    • Nature of intelligence, emotional intelligence. <br/>
                    • Theories of intelligence. <br/>
                    • Distribution of intelligence: (i) Gifted, (ii) Backward-slow learner, (iii) Mentally challenged. <br/>
                    Creativity: <br/>
                      • Meaning and characteristics. <br/>
                      • Process of creativity. <br/>
                      • Role of teachers in enhancing creativity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>UNIT V : Personality</Accordion.Header>
                    <Accordion.Body>
                    • Definition, nature, factors, types, theories. <br/>
                    • Mental Hygiene: Meaning, causes of maladjustment, educational programs to promote mental hygiene and defence mechanism.
                    <br/>--------------अनुमोदित पुस्तकें-------------------<br/>
                    1. Childhood and Growing Up    ---- Dr. Girish Pachauri <br/>
                    2. Childhood and Growing Up    ---- Suresh Bhatnagar, Shivani Nigam, <br/>
                                                   ---- Imtiyaj Mansoori, Yeasmin Sultan. <br/>
                    3. बाल्यावस्था और विकास              ---- प्रो० रमन बिहारी लाल, श्रीमति सुनीता पलोड. <br/>
                    4. बाल्यावस्था एवं विकास              ---- डॉ० गिरीश पचौरी. 
                    </Accordion.Body>
                </Accordion.Item>
                <h3>CONTEMPORARY INDIA AND EDUCATION (COURSE-2)</h3>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>UNIT 1</Accordion.Header>
                    <Accordion.Body>
                    Meaning and aims of education, scope, nature and function of education, factors, influencing aims of education.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>UNIT II : Indian Constitutional Basis of Education</Accordion.Header>
                    <Accordion.Body>
                    •  Concept of diversity: At the level of individual, of religions, castes, tribes, etc. <br/>
                    •  Equity, inequaltiy, discrimination and marginalisation in the way of Universalisation of education. <br/>
                    •  Critical understanding of the constitutional values related to the aims of educational in context of: <br/>
                       Ø Preamble. <br/>
                       Ø Fundamental rights and duties of citizens. <br/>
                       Ø Directive principle of state policy.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>UNIT III : Background of P8/olicy of Education in British India</Accordion.Header>
                    <Accordion.Body>
                    • Brief history of policies between 1947-64, 1964-86, 1986 and after.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>UNIT IV : Policy Framework for Public Education in India</Accordion.Header>
                    <Accordion.Body>
                    • Right to education: Sarva Shiksha Abhiyan and the thrust towards enrolling and retaining hitherto marginalised children, Role and agency of teachers in the context of universal and inclusive education. <br/>
                    • Earlier policies for Universal Elementary Education; Nayee Taleem to integrate life, Work and Education in context of community participation and development, The response of diverse social group of India to the spread of modern education in the colonial and post-independence periods. <br/>
                    • Education for marginalised group; woken, dalits and tribal people, nationalist critique of colonial education and experiments. <br/>
                    • Liberalisation and Globalisation of Indian Economy, Pedagogic and curricular shift of 1990s and 2000s, Mid Day Meal Programme and the role of Legislative action to ensure nutrition and public space where children eat together. <br/>
                    • Current concerns: Plebianisation, Privatisation, Stratification of education.
                    --------अनुमोदित पुस्तकें-----------<br/>
                    1. Contemporary India and Education -Prof. Raman Behari Lal, Dr. Krishna Kan <br/>
                    2. Contemporary India and Education -Pradeep Singh Dehal, Dr. Vinod Kumar <br/>
                    3. Contemporary India and Education -Dr. Soti Shivendra Chandra, Dr. Amit Sharma, Dr R. K. Singh Singh. <br/>
                    4. Contemporary India and Education -Satish Gill, Madan Singh. <br/>
                    5. समकालीन भारत और शिक्षा  ---प्रतिभा त्रिपाठी <br/>
                    6. समकालीन भारत और शिक्षा --- Pro Grish pachouri.
                    </Accordion.Body>
                </Accordion.Item>
                <h3>LEARNING AND TEACHING (COURSE-3)</h3>
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>UNIT I : Learning Process</Accordion.Header>
                    <Accordion.Body>
                    • Definition, meaning, characteristics, factors affecting learning curve. <br/>
                    • Theories of learning. <br/>
                    • Classical conditioning. <br/>
                    • Operant conditioning. <br/>
                    • Trial and error. <br/>
                    • Insight learning. <br/>
                    • Transfer of learning: definition, meaning, types, theories educational
                      implications. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                    <Accordion.Header>UNIT II : Memory</Accordion.Header>
                    <Accordion.Body>
                    • Concept, factors, aids to develop memory. <br/>
                    • Technique to motivate children in the classroom.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='11'>
                    <Accordion.Header>UNIT III : Motivation</Accordion.Header>
                    <Accordion.Body>
                    • Concept, types and Maslow's theory. <br/>
                    • Techniques to motivate children in classroom.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='12'>
                    <Accordion.Header>UNIT IV : Guidance and Counselling</Accordion.Header>
                    <Accordion.Body>
                    • Definition and meaning, difference between guidance and counselling. <br/>
                    • Types of guidance-personal, educational, vocational: Aims, needs a techniques. <br/>
                    • Role of the teacher and school in guidance and counselling.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='13'>
                    <Accordion.Header>UNIT V : Learning and Special Children</Accordion.Header>
                    <Accordion.Body>
                    • Concept and meaning of special children. <br/>
                    • Identification of children with (i) Dyslexia, (ii) Autism, (iii) Attention Deficient disorders.<br/> 
                    • Mainstreaming of special children with normal children. <br/>
                    • Special education programme for these children. <br/>
                    -----------------------------अनुमोदित पुस्तकें-------------------<br/>
                    1. Teaching and Learning  -Dr. Girish Pachauri <br/>
                    2. अधिगम एवं शिक्षण  --डॉ. गिरीश पचौरी <br/>
                    3. अधिगम एवं शिक्षण    --मोहन लाल आर्य
                    </Accordion.Body>
                </Accordion.Item>
                <h3>LANGUAGE ACROSS THE CURRICULUM (COURSE-4)</h3>
                <Accordion.Item eventKey='14'>
                    <Accordion.Header>UNIT I : Language Policies </Accordion.Header>
                    <Accordion.Body>
                    • Three language formula. <br/>
                    • Constitutional provisions. <br/>
                    • Colonial debates on school language policies.
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey='15'>
                    <Accordion.Header>UNIT II: Strategies for Developing Language Competencies (Listening, Speaking and Writing).</Accordion.Header>
                    <Accordion.Body>
                    • Listening: Pronunciation, expression, phonetic, stress and intonation. <br/>
                    • Speaking: Conversation and dialogues, controlled and guided oral work, free oral reproduction, rhythm and jingles, word and sentence stress, drill. <br/>
                    • Reading: Mechanics of reading, method of teaching reading, (Alphabetical method, word method, sentences method), kinds of reading (loud and silent reading) types    of     reading (intensive and extensive reading). <br/>
                    • Writing: Mechanics of writing, good handwriting, teaching and spellings.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='11'>
                    <Accordion.Header>UNIT III : Aspects of Language Teaching</Accordion.Header>
                    <Accordion.Body>
                    • Techniques: Discussion, notation, questioning. <br/>
                    • Methods: Storytelling, dramatisation, simulation, recitation, song/action, appreciation, comprehension, summarising.
                    <br/>----------------अनुमोदित पुस्तकें--------------------<br/>
                    1.Language Across the Curriculum --Ranjana Pandey <br/>
                    2.Language across the Curriculum --Amit Dangwal <br/>
                    3.पाठ्यक्रम में भाषा --रामकिशोर सिंह, रंजना पाण्डेय, पी०के० गुप्ता <br/>
                    4.पाठ्यक्रम में भाषा --पूजा अग्रवाल.
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </div>
    </div>
  )
}

export default Course;
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
                <Accordion.Item eventKey='15'>
                    <Accordion.Header>UNIT II: Strategies for Developing Language Competencies (Listening, Speaking and Writing).</Accordion.Header>
                    <Accordion.Body>
                    • Listening: Pronunciation, expression, phonetic, stress and intonation. <br/>
                    • Speaking: Conversation and dialogues, controlled and guided oral work, free oral reproduction, rhythm and jingles, word and sentence stress, drill. <br/>
                    • Reading: Mechanics of reading, method of teaching reading, (Alphabetical method, word method, sentences method), kinds of reading (loud and silent reading) types    of     reading (intensive and extensive reading). <br/>
                    • Writing: Mechanics of writing, good handwriting, teaching and spellings.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='16'>
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
                </Accordion.Item>
                <h3>UNDERSTANDING DISCIPLINE AND SUBJECTS</h3>
                <Accordion.Item eventKey='17'>
                    <Accordion.Header>UNIT I : Philosophical Aspects of Education</Accordion.Header>
                    <Accordion.Body>
                    1. Western Thinkers <br/>
                    • John Dewey <br/>
                    • Rousseau   <br/>
                    2. Indian Thinker <br/>
                    • Swami Vivekanand <br/>
                    • Ravindra Nath Tagore
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='18'>
                    <Accordion.Header>UNIT II</Accordion.Header>
                    <Accordion.Body>
                    • Concept and scope of curriculum. <br/>
                    • Importance, need and utility of curriculum. <br/>
                    • Approaches and methods of organising different pedagogical subjects.  <br/>
                    • Principle of designing curriculum in pedagogical subject at different stages in school. <br/>
                    • Current discourses on school curricula (e.g. Purely discipline oriented, not learner-oriented).
                      Suggestions/Guidelines for selection of material for curriculum (e.g. Work related subjects like horticulture or hospitality, need to be creatively developed etc.)
                    <br/>
                    ------------------------अनुमोदित पुस्तकें--------------------<br/>
                    1. Understanding Disciplines and Subjects  -----Dr. Premlata Maisnam, Dr. S.K. Lenka, A.K. Gandhi. <br/>
                    2. Understanding Disciplines and Subjects  -----Sharat Sharma <br/>
                    3. अनुशासन और विषयों की समझ            -----श्रद्धा शर्मा <br/>
                    4. पाठ्यक्रम और विषयों की समझ              ----- रामकिशोर सिंह
                    </Accordion.Body>
                </Accordion.Item>
                <h3>GENDER, SCHOOL AND SOCIETY (1/2)(COURSE-6)</h3>
                <Accordion.Item eventKey='19'>
                    <Accordion.Header>UNIT I</Accordion.Header>
                    <Accordion.Body>
                        • Meaning of Gender, Gender bias and its indicators. <br/>
                        • Role of women, measure for the uplift of women and removing gender bias with reference to Indian constitution.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='20'>
                    <Accordion.Header>UNIT II</Accordion.Header>
                    <Accordion.Body>
                    • Sociological basis of education. <br/>
                    • Relation between society and education with special reference to aims of
                      education, method of teaching curriculum. <br/>
                    • Gendered roles of agencies in education : Family, community, school, mass
                      media, caste, religion, culture and popular culture, law and state in challenging gender inequalities or reinforcing gender parity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='21'>
                    <Accordion.Header>UNIT III</Accordion.Header>
                    <Accordion.Body>
                    • The role of teachers in formulating of positive notions of sexuality among young people. <br/>
                    • Its impact and issues: Perceptions of safety at school, home and beyond, identification of sexual abuse/violence and its verbalisation, combating the dominant societal outlook of objectification of female body.
                    <br/>
                    ------------------------अनुमोदित पुस्तकें--------------------<br/>
                    1. Gender, School and Society --Girish Pacahuri <br/>
                    2. Gender, School and Society --Deepti Johari <br/>
                    3. लिंग, विद्यालय और समाज  --सुधीर कुमार मिश्रा, अपर्णा शर्मा <br/>
                    4. लिंग, विद्यालय और समाज ---राजकुमार गोयल, मीरा अग्रवाल <br/>
                    5. जेन्डर, स्कूल तथा समाज ---डॉ० दीप्ति जौहरी
                    </Accordion.Body>
                </Accordion.Item>
                <h3>PEDAGOGY OF A SCHOOL SUBJECT (Course 7a/7b : ENGLISH)</h3>
                <Accordion.Item eventKey='22'>
                    <Accordion.Header>UNIT I : Place of English in India and its Aims </Accordion.Header>
                    <Accordion.Body>
                    • Place of English in India colonial and post colonial perspective. <br/>
                    • English as a library language, a link language, a language for communication in a globalized economy, a window to the world, a world language to foster international brotherhood. <br/>
                    • Aims and objectives of teaching English as a second language at higher/ lower level. <br/>
                    • The theories and principles of language learning based on the Piaget, Vygotsky, Bruner and Chomsky.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='23'>
                    <Accordion.Header>UNIT II : A Method and Approach of Teaching English</Accordion.Header>
                    <Accordion.Body>
                    • Grammar cum translation method vs. direct method. <br/>
                    • Dr. West's new method and bilingual method. <br/>
                    • Structural approach vs. functional communicative approach. <br/>
                    • Situational language teaching. <br/>
                    • Skills of introducing, questioning, probing, explaining, illustrating.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='24'>
                    <Accordion.Header>UNIT III</Accordion.Header>
                    <Accordion.Body>
                    • Teaching of prose, poetry, grammar, composition. <br/>
                    • Difference between prose and poetry. <br/>
                    • Important components of lesson plan. <br/>
                    • Lesson plan of prose, poetry, grammar and composition. <br/>
                    • Different literary and poetic devices: Rhyme, Rhythm, Simile, Metaphor, Alliteration, Pun Repetition...etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='25'>
                    <Accordion.Header>UNIT IV : Audio-Visual Aids in the Teaching of English</Accordion.Header>
                    <Accordion.Body>
                    • Need and importance of Audio-Visual Aids.<br/>
                    • Types of Audio-Visual aids and its appropriate uses.<br/>
                    • Language laboratory.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='26'>
                    <Accordion.Header>UNIT III : Teaching of Grammar</Accordion.Header>
                    <Accordion.Body>
                    • Nature of Grammar. <br/>
                    • Types: .<br/>
                    • Methods: Inductive and Deductive. <br/>
                    • Importance Aspects of English Grammar : Prefixes, Suffixes(Infectional and Derivational)Stress, Intonation, juncture.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='27'>
                    <Accordion.Header>UNIT VI : </Accordion.Header>
                    <Accordion.Body>
                    • Teaching of Vocabulary.<br/>
                    • Selection and Gradation of English Vocabulary for Teaching.
                    • Vocalbulary Games.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='28'>
                    <Accordion.Header>UNIT VII : Spoken English</Accordion.Header>
                    <Accordion.Body>
                    • Phonoloyg: Definition, organs of speech, vowels, Consonants, Diphthongs. <br/>
                    • Stress and intonation: <br/>
                    • Practical work: Use of pronouncing dictionary, pronunciation drill, reading phonetic description,
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='29'>
                    <Accordion.Header>UNIT VIII : Evaluation in English</Accordion.Header>
                    <Accordion.Body>
                    • Concept of evaluation. <br/>
                    • Essentials of a good test. <br/> 
                    • Tools of evolution--Oral, Written, Types of questions. <br/>
                    • Importance of test and examinations. <br/>
                    -----------अनुमोदित पुस्तकें-------------- <br/>
                    1. Pedagogy of School Subject English. ---R.A. Mittal, S.K. Lenka, Pujan Pandey <br/>
                    2. Pedagogy of School Subject English  ---R.A. Sharma, Shika Chaturvedi. <br/>
                    3. Pedagogy of School Subject English  ---A.B. Bhatnagar 
               </Accordion.Body>
                </Accordion.Item>
                <h3 className='mt-4'>HINDI (COURSE-7A/7B)</h3>
                <Accordion.Item eventKey='30'>
                    <Accordion.Header>इकाई 1 : हिन्दी शिक्षण : सैद्धान्तिक पक्ष</Accordion.Header>
                    <Accordion.Body>
                    • भाषा की प्रकृति, महत्त्व एवं अधिगम प्रक्रिया। <br/>
                    • हिन्दी शिक्षण के उद्देश्य. <br/>
                    • विद्यालयी स्तर पर भाषा.<br/>
                    •  हिन्दी भाषा एवं साहित्य शिक्षण की विधियाँ.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='31'>
                    <Accordion.Header>इकाई 2 : भाषिक योग्यता का विकास</Accordion.Header>
                    <Accordion.Body>
                    • श्रवण, दृश्य एवं मौखिक अभिव्यक्ति कौशल का विकास। <br/>
                    • पठन योग्यता का विकास, पठन शिक्षण की विधियाँ-सस्वर पठा, मौन पठन, समकालिक पठन, सूक्ष्म पठन एवं विस्तृत पठन।  <br/>
                    •  लिखित अभिव्यक्ति क्षमता का विकास।
                      </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='32'>
                    <Accordion.Header>इकाई 3 : साहित्यिक विधाआ-एवं व्याकरण शिक्षण</Accordion.Header>
                    <Accordion.Body>
                    • कविता शिक्षण <br/>
                    •  गद्य तथा गद्य की विभिन्न विधाआ-का शिक्षण-उपन्यास, नाटक, निबन्ध कहानी।  <br/>
                    • -व्याकरण शिक्षण।
                      </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='33'>
                    <Accordion.Header>इकाई 4 : मूल्यांकन, क्रियात्मक शोध तथा समुन्नयन कार्य गणड़ाडी</Accordion.Header>
                    <Accordion.Body>
                    • हिन्दी पाठ्यपुस्तक समीक्षा। <br/>
                    • भाषा संप्राप्ति मूल्यांकन। <br/>
                    • निदानात्मक एवं उपचारात्मक कार्य।  <br/>
                    • क्रियात्मक शोध । <br/>
                    • समुन्नयन कार्य । <br/>
                    -----------अनुमोदित पुस्तकें-------------- <br/>
                    1. हिन्दी शिक्षण --Ram Bihari lal <br/>
                    2. हिन्दी शिक्षण --शिखा चतुर्वेदी <br/>
                    3. हिन्दी शिक्षण शास्त्र --शिखा अग्रवाल
                      </Accordion.Body>
                </Accordion.Item>
                <h3>Course 7a/7b : URDU</h3>
                <Accordion.Item eventKey='34'>
                    <Accordion.Header>UNIT I : LANGUAGE </Accordion.Header>
                    <Accordion.Body>
                    • Origin and development of Urdu language in India. <br/>
                    • Position of Urdu language in the post-independent India. <br/>
                    • Various formats (Asnaf) of Urdu language and literature. <br/>
                    • Aims of teaching language (Psychological and Linguistic approach of Language teaching.)
                   <br/> • Aims and objectives of teaching Urdu language. <br/>
                    • Importance of Mother Tongue in school subject. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='35'>
                    <Accordion.Header>UNIT II : METHODOLOGY</Accordion.Header>
                    <Accordion.Body>
                    • Pronunciation in Urdu, skill in questioning, example and explanation. <br/>
                    • Technique of Urdu teaching. <br/>
                    • Teaching Urdu prose, poetry, ghazal, grammar, essay and letter writing.  <br/>
                    • Examination and evaluation. <br/>
                    • Importance of homework in Urdu. <br/>
                    • Lesson Planning: (Meaning, importance and structure), planning of prose, poetry, grammar and essay.
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='36'>
                    <Accordion.Header>UNIT III : MATERIAL</Accordion.Header>
                    <Accordion.Body>
                    • Urdu Text-Book (Evaluation of existing curriculum). <br/>
                    • Teaching and reading material (silent, loud, simultaneous, extensive and intensive reading). <br/>
                    • Audio-visual Aids in Urdu teaching. <br/>
                    • Personality of Urdu Teachers. <br/>
                    • Co-curricular activities (Practical activities) in Urdu. <br/>
                    • Urdu Library.
                    </Accordion.Body>
                    </Accordion.Item>
                    <h3>Course 7a/7b : SANSKRIT</h3>
                    <Accordion.Item eventKey='37'>
                        <Accordion.Header>UNIT I : Aims and Objectives of Teaching Learning </Accordion.Header>
                        <Accordion.Body>
                        • Importance of Sanskrit as language and its status. <br/>
                        • The position of Sanskrit in India. <br/>
                        • The place of Sanskrit in the School Curriculum.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='38'>
                            <Accordion.Header>UNIT II : Methods of Teaching Techniques </Accordion.Header>
                            <Accordion.Body>
                            • Prose: Discussion, narration, questioning.<br/>
                            • Methods: Story telling, dramatisation, simulation. <br/>
                            • Poetry Methods: Recitation, song / action, dramatization, discussion, appreciation. <br/>
                            • Grammar Methods: Inductive, deductive, play way, interactive. <br/>
                            • Composition: Guided, free, creative, correction of composition. 
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='39'>
                                <Accordion.Header>UNIT III :Strategies of Developing Language Competencies  </Accordion.Header>
                                <Accordion.Body>
                                • Listening: Pronunciation, expressive, phonetics, stress on intonation. Speaking: Loud, silent, chorus, expressive, speed. <br/>
                                • Writing: Hand writing skill, poetic and non-poetic.
                                • Extra-curricular Activities of Sanskrit.
                                </Accordion.Body>
                                </Accordion.Item>
                              <Accordion.Item eventKey='40'>
                                <Accordion.Header>UNIT IV : Teacher and Text-book</Accordion.Header>
                                <Accordion.Body>
                                • Teacher: Qualities, role and responsibilities, professional growth, diagnostic testing and remedial teaching.
                               <br/> • Textbook: Characteristics of a text-book, critical analysis of a text-book.
                                </Accordion.Body>
                                </Accordion.Item>
                            <Accordion.Item eventKey='41'>
                                <Accordion.Header>UNIT V : Material of Instruction or Language Teaching</Accordion.Header>
                                <Accordion.Body>
                                • Language Practice: Assignment, games, club, language club. <br/>
                                • Use of Technology: Multimedia centre, OHP, video, tape recorder, computer assisted instruction. <br/>
                                • Use of Media: TV, Newspaper, Advertisement. <br/>
                                • Use of Library: Koshas, Dictionaries. <br/>
                                • Language: Lab. <br/>
                                ---------------अनुमोदित पुस्तकें------------------<br/>
                               1. संस्कृत शिक्षण  ---सन्त कुमार मिश्रा <br/>
                               2. संस्कृत शिक्षण  ---डॉ० सन्तोष मित्तल  <br/>
                               3. संस्कृत शिक्षण  --- रेनू सिंह 
                                </Accordion.Body>
                                </Accordion.Item>
                                <h3>COURSE 7a/7b : PHYSICAL SCIENCE</h3>
                            <Accordion.Item eventKey='42'>
                        <Accordion.Header>UNIT I : The Nature and Scope of Physical Science</Accordion.Header>
                        <Accordion.Body>
                        • Nature and scope of science. <br/>
                        • Structure of science, substantive structure, empirical knowledge, theoretical knowledge (facts, concepts, hypothesis, theory, principle, law, syntactic structure of science, scientific enquiry, process of science, attitude of inquiry).
                        </Accordion.Body>
                         </Accordion.Item>
                       <Accordion.Item eventKey='43'>
                        <Accordion.Header>UNIT II : Aims, Values and Objectives of Teaching Physical Science</Accordion.Header>
                        <Accordion.Body>
                        • Aims and objectives of teaching physical science. <br/>
                        •  Importance of physical science in school curriculum.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='44'>
                         <Accordion.Header>UNIT III : Science Curriculum</Accordion.Header>
                         <Accordion.Body>
                         • Definition of curriculum. <br/>
                         • Principles of curriculum organisation. <br/>
                         • Qualities of a good Science text-book state and CBSE. <br/>
                         • Critical review of Physical science text-book.
                         </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey='45'>
                         <Accordion.Header>UNIT IV : Strategies of teaching Physical Science</Accordion.Header>
                         <Accordion.Body>
                         • Science Teaching: Concepts and meaning of approaches methods and techniques. <br/>
                         • Approaches: Inductive, deductive and heuristic. <br/>
                         • Methods: Lecture, demonstration, lecture cum demonstration, scientific problem-solving, team teaching. <br/>
                         • Modern Techniques of Science Teaching: Brain storming, quiz, seminars, discussion, scenario building.
                         </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey='46'>
                         <Accordion.Header>UNIT V : Instruction Planning</Accordion.Header>
                         <Accordion.Body>
                         • Importance and use of teaching aids.
                         Visual: Projected aids, slides, film strips, transparencies.
                         Audiovisual: TV, radio, film projector, computed (multimedia) Audio: Radio, tape recorder.
                         Non-projected: Charts, models. <br/>
                         • Maintenance of register in the lab.<br/>
                         • Lab work and safety procedures. <br/>
                         • Collection, improvisation and preservation of apparatus.
                         </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey='47'>
                        <Accordion.Header>UNIT VI : Strengthening.Science Teaching</Accordion.Header>
                        <Accordion.Body>
                        • Science Clubs, Eco-clubs, Museum and Science Fairs. <br/>
                        • Role of Govt. and Non-Govt. organisation in popularizing science.  
                        </Accordion.Body>    
                        </Accordion.Item>      
                        <Accordion.Item eventKey='48'>
                        <Accordion.Header>UNIT VII : Evaluation</Accordion.Header>
                        <Accordion.Body>
                        • Concept, type and importance of evaluation.<br/>
                        • Tools of evaluation.<br/>
                        • Construction of unit test.<br/>
                        • Construction of a questions bank. <br/>
                        -------------अनुमोदित पुस्तकें---------<br/>
                        1. Pedagogy of School Subject Physical Science  --S.P. Kulshrestha, Gaya Singh. <br/>
                        2. Pedagogy of School Subject Science --A.B. Bhatnagar, S.S. Bhatnagar. <br/>
                        3. Pedagogy of School Subject Science --S.P. Kulshrestha, K.P. Singh. <br/>
                        4.   विज्ञान शिक्षणशास्त्र        ---डॉ० ए०बी० भटनागर <br/>
                        5. विज्ञान शिक्षण (फिजिकल साइंस)  -- ए०के० कुलश्रेष्ठ, एन० के० कुलश्रेष्ठ
                        </Accordion.Body>
                        </Accordion.Item>
                        <h3>Course 7a/7b : LIFE SCIENCE</h3>
                      <Accordion.Item eventKey='49'>
                      <Accordion.Header>UNIT I : The Nature and Scope of Life Science</Accordion.Header>
                      <Accordion.Body>
                      • Meaning, nature and scope of life science.<br/>
                      • Importance of life science in school curriculum. <br/> 
                      • Aims and objectives of teaching life science. <br/>
                      • Specifying instructional objectives in es in behavioural terms.
                       </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey='50'>
                        <Accordion.Header>UNIT II : Development of Instructional Material.</Accordion.Header>
                        <Accordion.Body>
                        • Meaning of unit planning in life science. <br/>
                        • Step involved in development of teaching unit, determination of teaching points.  <br/>
                        • Unit plan, lesson plan.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='51'>
                            <Accordion.Header>UNIT III : Aids to science teaching</Accordion.Header>
                            <Accordion.Body>
                            • Classification of teaching aids. <br/>
                            • Importance of teaching aids in teaching life science.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='52'>
                        <Accordion.Header>UNIT IV : Science, Curriculum, Science library and text-books</Accordion.Header>
                        <Accordion.Body>
                        • Concept, scope and principles of curriculum constructions in life science. <br/>
                        • Significance of good science library and selecting of books.<br/>
                        • Characteristics of good science book. <br/>
                        • Evaluation of the text book.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='53'>
                         <Accordion.Header>UNIT V : Approaches and Methods of Teaching Life Science</Accordion.Header>
                         <Accordion.Body>
                         Enquiry, problem-solving, lecture-cum demonstration, laboratory, project, assignment, team-teaching, workshops.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='54'>
                            <Accordion.Header>UNIT VI : Planning and organising laboratory for practical and teaching of life science.</Accordion.Header>
                            <Accordion.Body>
                                       • Planning and organising laboratory for practical and teaching of life science.<br/>
                                       • Safety in bio-laboratory.<br/>
                                       • Devising and adopting assessments procedure.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='55'>
                            <Accordion.Header>UNIT VII : Evaluation of teaching learning process in life science</Accordion.Header>
                            <Accordion.Body>
                            • Concept of evaluation. <br/>
                            • Steps in construction of objective based test. <br/>
                            • Devising and adopting assessments procedure.<br/>
                            --------------अनुमोदित पुस्तकें--------<br/>
                            1. Pedagogy of Biologica! Science. -- S.P. Kulshrestha, A.K. Kulshrestha. <br/>
                            2. Pedagogy of School Subject Biological Science --Sudha Pahuja, Ravi Kant. <br/>
                            3. Pedagogy of School Subject Life Science --Munendra Kumar. <br/>
                            5. जैविक विज्ञान शिक्षण की प्रक्रिया --डॉ० उन्नति बिश्नोई <br/>
                            6. जैविक विज्ञान शिक्षण --एस०पी० कुलश्रेष्ठ, धर्मेन्द्र तोमर, एस०के० गिल.
                            </Accordion.Body>
                            </Accordion.Item>
                               <h3>Course 7a / 7b : MATHEMATICAL SCIENCE</h3>
                            <Accordion.Item eventKey='56'>
                            <Accordion.Header>UNIT I : Nature of Mathematics.</Accordion.Header>
                            <Accordion.Body>
                            • Understanding the nature of Mathematics, specially the role of Axioms, hypothesis, postulates and operations. <br/>
                            • Contribution of any two mathematics (Aryabhatta, Ramanuja, Euclid, Pythagoras). <br/>
                            • Importance of Mathematics in life. <br/>
                            • Maths across the curriculum-its relation with other disciplines.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='57'>
                            <Accordion.Header>UNIT II :</Accordion.Header>
                            <Accordion.Body>
                            • Aims and objectives of Mathematics. <br/>
                            • Methods/techniques of teaching Maths-inductive, deductive, analytic, synthetic, problem-solving, lecture-cum-demonstration, drill, assignments, graded presentation.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='58'>
                            <Accordion.Header>UNIT III : </Accordion.Header>
                            <Accordion.Body>
                            • Special programme and motivational schemes for gifted children. <br/> 
                            • Diagnosis causes and remedies of backwardness in mathematics.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='59'>
                            <Accordion.Header>UNIT IV: Mathematics Teacher</Accordion.Header>
                            <Accordion.Body>
                            • Qualities and Qualifications. <br/>
                            • Professional growth. <br/>
                            • Difficulties faced by the teachers and suggestive measures to overcome them.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='60'>
                            <Accordion.Header>UNIT V : Curriculum and Text-Book of Mathematics </Accordion.Header>
                            <Accordion.Body>
                            • Critical study of syllabus of deferent stages in accordance with the theoretical principles of curriculum construction.
                            Organisation of content on the basis of topical and concentric approaches. <br/>
                            • Characteristics of a good text-book of Mathematics. <br/>
                            • Evaluation of text-book (std V to XII).
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='61'>
                            <Accordion.Header>UNIT VI :</Accordion.Header>
                            <Accordion.Body>
                            • Mathematics room and its equipments, Maths Laboratory. <br/>
                            • Co-curricular activities: Games, Quiz, Puzzles, Visits, Talks. <br/>
                            • Organisation and importance of Maths Club.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='62'>
                            <Accordion.Header>UNIT VII : Instructional Material</Accordion.Header>
                            <Accordion.Body>
                            • Type, importance, uses with special reference and following visual aids.  <br/>
                            • Projected aids : Slides, transparencies. <br/>
                            • Non-projected: Charts, models, boards, calculators. <br/>
                            • Audio-visual: T.V. Video.
                            </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item eventKey='63'>
                             <Accordion.Header>UNIT VIII :</Accordion.Header>
                             <Accordion.Body>
                             • Making a lesson plan and construction of an achievement test in mathematics. <br/>
                             • Designing of some experimental projects in Maths.
                             </Accordion.Body>
                             </Accordion.Item>
                             <Accordion.Item eventKey='64'>
                             <Accordion.Header>UNIT IX :</Accordion.Header>
                             <Accordion.Body>
                             Popularising mathematics. <br/>
                             ----------------अनुमोदित पुस्तकें-------- <br/>
                             1. Pedagogy of School Subject Mathematics ---A.K. Kulshreshtha <br/>
                             2. गणित शिक्षण ---अरुण कुमार कुलश्रेष्ठ <br/>
                             3. गणित शिक्षण --- ए०बी० भटनागर <br/>
                             4. गणित शिक्षण --- उन्नति बिश्नोई
                             </Accordion.Body>
                             </Accordion.Item>
                             <h3>Course 7a / 7b : HOME SCIENCE</h3>
                             <Accordion.Item eventKey='65'>
                             <Accordion.Header>UNIT I :Meaning and Scope of Home Science</Accordion.Header>
                             <Accordion.Body>
                             • Meaning, nature of Home Science and its place in the secondary school. <br/>
                             • Aims and objectives of teaching Home Science at senior secondary level.  <br/>
                             • Importance and scope of Home Science.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='66'>
                            <Accordion.Header>UNIT II : Methods and Approaches of Teaching Home Science</Accordion.Header>
                            <Accordion.Body>
                            • Discussion method. <br/>
                            • Lecture and question and answer method. <br/>
                            • Project method. <br/>
                            • Problem-solving method. <br/>
                            • Demonstration method. <br/>
                            • Laboratory method. <br/>
                            • Dramatization and field trips.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='67'>
                        <Accordion.Header>UNIT III :Teaching Learning Process in Home Science</Accordion.Header>
                        <Accordion.Body>
                        • Teaching of child development. <br/>
                        • Teaching of food, health and nutrition. <br/>
                        • Teaching of textile and clothing. <br/>
                        • Teaching of home management.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='68'>      
                        <Accordion.Header>UNIT IV :Audio Visual Aids in Teaching Home Science</Accordion.Header>
                        <Accordion.Body>    
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='69'>
                       <Accordion.Header>UNIT V : Home Science Teacher</Accordion.Header>
                       <Accordion.Body>
                       • Qualities of good Home Science teacher. <br/>
                       • Role of Home Science teacher.
                       </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey='70'>
                        <Accordion.Header>UNIT VI : Curriculum Contentions</Accordion.Header>
                        <Accordion.Body>
                        • Concept, principle, basis and measures. <br/>
                        • Curriculum for secondary school stage. <br/>
                        • Unit planning: meaning, importance, steps, advantages.
                       </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey='71'>
                        <Accordion.Header>UNIT VII :Lesson Planning</Accordion.Header>
                        <Accordion.Body>
                        • Concept of Planning for Home Science teaching. <br/>
                        • Various steps of lesson planning.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='72'>
                        <Accordion.Header>UNIT VIII :Evaluation in Home Science Teaching</Accordion.Header>
                        <Accordion.Body>
                        • Concept of measurement and evaluation. <br/>
                        • Criteria of good evaluation. <br/>
                        • Preparation of blue print in evaluation.
                        -------------अनुमोदित पुस्तकें-------------<br/>
                        1. Pedagogy of School Subject Home Science ---B.L. Sharma, B.M. Saxena <br/>
                        2. गृह विज्ञान शिक्षण --- सुरक्षा बंसल <br/>
                        3. गृह विज्ञान शिक्षण ---डॉ० महिमा गुप्ता
                        </Accordion.Body>
                        </Accordion.Item>
                        <h3>Course 7a / 7b : HISTORY METHOD</h3>
                        <Accordion.Item eventKey='73'>
                        <Accordion.Header>UNIT I : Concept Of History</Accordion.Header>
                        <Accordion.Body>
                        • Concept of History, aim and objectives of teaching history, place and importance of teaching the subject at secondary and higher secondary level of education.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='74'>
                        <Accordion.Header>UNIT II: Methods</Accordion.Header>
                        <Accordion.Body>
                        • Methods of teaching: Story telling, dramatization and role play, lecture, discussion, sources, question and answer, project, self-study, assignment, bodiam yiotsiods) supervised study.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='75'>
                        <Accordion.Header>UNIT III : Co-relation with other Subjects</Accordion.Header>
                        <Accordion.Body>
                        • Co-relation with other school subjects, Geography, Literature, Philosophy, Science, Economics, Political Science, (Civics). <br/>
                        • Scientific approach to teaching the subject. <br/>
                        Ø Concept based teaching. <br/>
                        Ø Generalisation based teaching. <br/>
                        Ø Maxims of teaching-known to unknown, simple to complex, concrete to abstract. 
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='76'>
                        <Accordion.Header>UNIT IV : Co-curricular Activities</Accordion.Header>
                        <Accordion.Body>
                        • Importance and organisation of co-curricular activities, clubs, visits, Моя celebration of days of National importance and festivals. <br/>
                        • Knowing History through Excursion, Museum. <br/>
                        • History room needs, equipments, maintenance.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='77'>
                        <Accordion.Header>UNIT V : Qualities of Teacher</Accordion.Header>
                        <Accordion.Body>
                        • Qualities and qualification of a good History teacher, Challenges faced by the History teacher in the present day context.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='78'>
                        <Accordion.Header>UNIT VI : Instructional Materials and Teaching Aids-Types and Importance</Accordion.Header>
                        <Accordion.Body>
                        • Visual-CB, charts, pictures, graph, maps, globes, models, flannel board. <br/>
                        • Auditory-Radio, gramophone, phonograph records. <br/>
                        • Audio Visual-T.V. Motion picture, films. <br/>
                        • Miscellaneous-Booklets, Newspaper, Magazine, computer assisted instructions.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='79'>
                        <Accordion.Header>UNIT VII : Examination and Evaluation of History</Accordion.Header>
                        <Accordion.Body>
                        • Planning of History Lesson. <br/>
                        • Unit Planning. <br/>
                        ----------अनुमोदित पुस्तकें------------- <br/>
                        1. Pedagogy of School Subject History ----Dr. Rampal Singh, Dr. Dharmendra Kumal <br/>
                        2. इतिहास शिक्षण --- राम पाल सिंह, राजकुमार <br/>
                        </Accordion.Body>
                        </Accordion.Item>
                
                        <Accordion.Item eventKey='80'>
                        <Accordion.Header>Course 7a / 7b : CIVICS METHOD</Accordion.Header>
                        <Accordion.Body>
                        Unit - I:: Meaning and scope of Civics/political science.<br/>
                        Unit - II: Aims and objectives of teaching Civics at various states of education.<br/>
                        Unit III: Relation of Civics with other Social Sciences.<br/>
                        Unit - IV: Curriculum of Civics in school, meaning, definition, principles, curriculum principle of selection and organisation of curriculum. <br/>
                        Unit - V: Methods of teaching: Unit Method, Source Method, Discussion Method, Problem Method, Project Method, Socialised Recitation Method. <br/>
                        Unit - VI:Audio Visual Aids in Civics. <br/>
                        Unit - VII: Civics Room, Museum and Club. <br/>
                        Unit - VIII: Textbook and Reference book in Civics, <br/>
                        Unit - IX: Civics Teacher. <br/>
                        Unit-X : Examination and Evaluation in Civics.<br/>
                        Unit - XI: Practical activities in Civics (Youth Parliament, UNO etc.) <br/>
                        Unit - XII: Planning of Civics lesson. <br/>
                        Unit - XIII: Concept of citizenship of its important on present day social order. <br/>
                          ------------------------अनुमोदित पुस्तकें--------------------<br/>
                        1. Pedagogy of School Subject Civics ----Rampal Singh, Dharmendra Kumar. <br/>
                        4. नागरिक शास्त्र शिक्षण          ---रामपाल सिंह, राजकुमार.
                        </Accordion.Body>
                        </Accordion.Item>
                        <h3>Course 7a / 7b : ECONOMIC METHOD</h3>
                        <Accordion.Item eventKey='81'>
                        <Accordion.Header>UNIT I : Economic and its Aims</Accordion.Header>
                        <Accordion.Body>
                        • Nature, scope, importance of economics, aims and objectives of teaching at secondary and higher secondary level. <br/>
                        • Co-relation of economic and mathematics, history, geography, science and language.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='82'>
                        <Accordion.Header>UNIT II : Approaches to Teaching Economics Methods
                        (Importance, Procedure, Advantage and Limitations)</Accordion.Header>   
                        <Accordion.Body>
                        • Lecture-cum-discussion method. • Project method. <br/>
                        • Problem-solving method.        • Self-learning. <br/>
                        • Self-learning.                 • Dramatization. 
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='83'>
                         <Accordion.Header>UNIT III : Pedagogical Analysis (in relation to core elements given in NPE
                            1986)</Accordion.Header>
                         <Accordion.Body>
                         • Unit Analysis. <br/>
                         • Instructional objectives and procedure. <br/>
                         • Planning in economics.
                        </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='84'>
                            <Accordion.Header>UNIT IV : Economics Curriculum and its Objectives</Accordion.Header>
                            <Accordion.Body>
                            • Meaning of curriculum. <br/>
                            • Importance of economics curriculum at the school: secondary and higher secondary stage. <br/>
                            • Principles and organisation of curriculum. <br/>
                            • Innovations in curriculum.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='85'>
                            <Accordion.Header>UNIT V : ECONOMICS TEACHER </Accordion.Header>
                            <Accordion.Body>
                            • Qualities and qualification.<br/> 
                            • Role and responsibility. <br/> 
                            • Professional growth. <br/>
                            • Diagnostic testing and remedial teaching.
                            </Accordion.Body>
                            </Accordion.Item>
                        <Accordion.Item eventKey='86'>
                            <Accordion.Header>UNIT VI : Facilities and Equipments</Accordion.Header>
                            <Accordion.Body>
                            • Instructional material and teaching aids <br/>
                            Ø Visual: Chalkboard, chart, picture, graphs, maps, globes, objects, models, specimens and flannel board. <br/>
                            Ø Auditory: Radio, recorders. <br/>
                            Ø Audio Visual: Television, motion picture, films. <br/>
                            Ø Miscellaneous: Booklets, newspapers, magazine. Computer assisted instructions.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='87'>
                                <Accordion.Header>UNIT VII : Examination and Evaluation in Economics</Accordion.Header>
                                <Accordion.Body>
                                    -----------------अनुमोदित पुस्तकें------------------<br/>
                                    1. Pedagogy of School Subject Economics -----Rampal Singh, Dharmendra Kumar <br/>
                                    2. अर्थशास्त्र शिक्षण --------रामपाल सिंह, धर्मेन्द्र कुमार.
                                </Accordion.Body>
                                </Accordion.Item>
                                <h3>Course 7a/7b: GEOGRAPHY METHOD</h3>
                            <Accordion.Item eventKey='88'>
                                <Accordion.Header>UNIT 1: Nature and Scope of Geography</Accordion.Header>
                                <Accordion.Body>
                                • Unique position of Geography among social sciences.  <br/>
                                • Geography as bridge between arts and science.
                                </Accordion.Body>
                                </Accordion.Item>
                            <Accordion.Item eventKey='89'>
                                <Accordion.Header>UNIT II : Aims and Objectives of Geography as a means to :</Accordion.Header>
                                <Accordion.Body>
                                • Understand the life of man and his environment. <br/>
                                • Develop a balance understanding of the people of the world. <br/>
                                • Create awareness of relationship between resources and over population.
                                </Accordion.Body>
                                </Accordion.Item>
                            <Accordion.Item eventKey='90'>
                            <Accordion.Header>UNIT III : Concept of Geography</Accordion.Header>
                            <Accordion.Body>
                            @ Geography in the description of the earth. <br/>
                            @ Study of landscape-physical and cultural. <br/>
                            • Science of distribution on earth. <br/>
                            • Study of the earth as the home of man and the interaction between man and his environment.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='91'>
                            <Accordion.Header>UNIT IV : Planning the Geography Curriculum, its importance, basic principles and teaching of curriculum construction for different levels </Accordion.Header>
                            <Accordion.Body>
                                
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='92'>
                            <Accordion.Header>UNIT V : Correlation of Geography with other Subjects.</Accordion.Header>
                            <Accordion.Body>
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='93'>
                            <Accordion.Header>UNIT VI : UNIT VI: Local Geography : Its meaning, significance and usefulness.</Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='94'>
                            <Accordion.Header>UNIT VII : Method of teaching Geography</Accordion.Header>
                            <Accordion.Body>
                            • Story telling, text-book, observation and direct, laboratory, regional and comparative project, discussion method. <br/>
                            • Lesson planning in Geography teaching. <br/>
                             Unit-VIII: Geography Teacher <br/>
                             Unit-IX: Teaching aids: kinds of importance, chalk board, globes, maps, atlas, charts, models, pictures, projected aids. <br/>
                             Unit-X Methodology: Instruments and sample survey, Instruments: types and uses. <br/>
                             Unit-XI: Geography room: Laboratory, geography museum, excursion-their importance and equipment. <br/>
                             Unit-XII: Environment pollution: A Geographical Problem. <br/>
                             Unit-XIII: The importance of Audio-Visual in Geography. <br/>
                             Unit-XIV: Examination, evaluation and measurement in teaching Geography.
                            ----------अनुमोदित पुस्तकें-------------------<br/>
                            1. Pedagogy of School Subject Geography ------------Dr. R.P. Singh and Dr. Gita Dudeja <br/>
                            2. भूगोल शिक्षण -------------जे०पी० वर्मा, मंजू वर्मा
                            </Accordion.Body>
                            </Accordion.Item>
                            <h3>Course 7a/7b: COMMERCE METHOD</h3>
                            <Accordion.Item eventKey='95'>
                            <Accordion.Header>UNIT I : Concept of Commerce</Accordion.Header>
                            <Accordion.Body>
                            • Meaning, need and scope of Commerce. <br/>
                            • Importance of the subject. <br/>
                            • Aims and objectives of teaching at Secondary and Higher Secondary level. <br/>
                            • Co-relation with other subjects with Business, Maths, Economics, Geography, Book-Keeping, Science language.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='96'>
                            <Accordion.Header>UNIT II : Planing</Accordion.Header>
                            <Accordion.Body>
                            • Lesson planning, unit planning, annual planning with objectives, procedures and evaluation.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='97'>  
                            <Accordion.Header>UNIT III : Method of Teaching</Accordion.Header>
                            <Accordion.Body>
                            • Expository based--Lecture, debate, discussion story-telling. <br/>
                            • Activity based-Simulation/gaming, survey, case study, project. <br/>
                            • Discovery based-Experimental, inquiry, problem-solving. <br/>
                            • Individualised Instructive based-Computer assisted instruction modulars, mastery learning, Dalton plan. <br/>
                            • Group Dynamics based-Seminars, conference, panel discussion, symposium.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='98'>
                            <Accordion.Header>UNIT IV : Text-book in Commerce</Accordion.Header>
                            <Accordion.Body>
                            • Characteristics, importance of text-books. <br/>
                            • Criteria for their selection.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='99'>
                            <Accordion.Header>UNIT V : Commerce Teacher</Accordion.Header>
                            <Accordion.Body>
                            • Qualification and training, qualities. <br/>
                            • Roles and responsibilities. <br/>
                            • Professional growth.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='100'>
                            <Accordion.Header>UNIT VI : Co-curricular Activities</Accordion.Header>
                            <Accordion.Body>
                            • Objective, importance, principles of organisation. <br/>
                            -----------अनुमोदित पुस्तकें-------------------<br/>
                            1. Pedagogy of School Subject Commerce   -------Dr. S.S. Chandra, Dr. N.L. Sharma, Dr. Amit Sharma <br/>
                            2. Pedagogy of School Subject Commerce   --------Dr. R.P. Singh and Dr. Imtiyaj Mansoori <br/>
                            3. वाणिज्य शिक्षण                                                            -------बी०एल० शर्मा, इम्तियाज मंसूरी
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='101'>
                            <Accordion.Header>EPCI: READING AND REFLECTING ON TEXTS</Accordion.Header>
                            <Accordion.Body>
                            (a) The role of language and the pedagogy of reading and writing. <br/>
                            (b) The aims of the reading interactively-individually and in small groups. <br/>
                            (c) Different types of reading skills and strategies: Narrative texts, field notes, ethnographic. <br/>
                            (d) Expository texts: Learn to make prediction, check their prediction, answer questions and summarise them, responding to a text with one's own opinions or writing within the context of other's ideas. <br/>
                              -------अनुमोदित पुस्तकें-----------<br/>
                             1. Text Reading and Reflections ------P.K. Gupta, A.K. Gandhi, S.S. Bhatnagar <br/>
                             2. पढ़ना और समीक्षा करना  -----------पूजा अग्रवाल, डॉ० राजकुमार गोयल  <br/>
                             3. पढ़ना और प्रतिबिम्बित करना --------- --डॉ० राजकुमार गोयल 
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='102'>
                            <Accordion.Header>EPC 2: DRAMA AND ART IN EDUCATION (1/2) </Accordion.Header>
                            <Accordion.Body>
                            1. Aims and objectives of teaching art and drama in schools. <br/>
                            2. Place of Art in school education-child art, its characteristic. <br/>
                            3. The Art Teacher: Role, areas of activities viz. environment, participation in life, visit to the place of Art. <br/>
                            4. Methods of teaching art/drama. <br/>
                            5. Activities related to Drama/Art: <br/>
                            • Organisation of school exhibition. <br/>
                            • Art exhibition with different articles and waste materials. <br/>
                            • One act play, role play and cultural show. <br/>
                             ---------------अनुमोदित पुस्तकें------------<br/>
                            1. Drama and Art in Education --------Dr. Jas Raj Kaur, Dr. Satish Kumar Pandey <br/>
                            2. कला का अध्यापन         ---------कुसुम लता राठौर <br/>
                            3. शिक्षा में नाटक एवं कला  ---------शिल्पी शर्मा, संध्या वार्ष्णेय <br/>
                            4. चित्रकला, नाट्यकला, संगीत एवं नृत्यकला का अध्यापन --------------कुसम लता राठौर, आर० के० अग्रवाल.  <br/>
                            5. शिक्षा में नाटक एवं कला    --------डॉ० बी० एल० शर्मा.
                            </Accordion.Body>
                            </Accordion.Item>
                            <h3>COURSE EPC 3: CRITICAL UNDERSTANDING OF ICT</h3>
                            <Accordion.Item eventKey='103'>
                            <Accordion.Header>UNIT I:</Accordion.Header>
                            <Accordion.Body>
                            • Concept of ICT or ICT in Education: Definition, its nature, aims and objectives and importance of ICT. <br/>
                            • Educational technology and ICT.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='104'>
                            <Accordion.Header>UNIT II : Teaching Learning Materials</Accordion.Header>
                            <Accordion.Body>
                            • Audio materials, visual and audio-visual materials.<br/>
                            • Project and non-project materials. <br/>
                            • Computer, E-mail, Internet.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='105'>
                            <Accordion.Header>UNIT III :</Accordion.Header>
                            <Accordion.Body>
                            • Emerging communication, communication satellite, teleconferencing, interactive broadcasting, language lab mobile service.
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='106'>
                            <Accordion.Header>UNIT IV :</Accordion.Header>
                            <Accordion.Body>
                            • Computer in teaching learning. <br/>
                            • Computer in evaluation. <br/>
                            • Computer in educational administration.<br/>
                            --------------नुमोदित पुस्तकें---------------------<br/>
                            1. Information and Communication Technology    ------------Pooja Sharma, Shivangi Nigam. <br/>
                            2. सूचना एवं सम्प्रेषण तकनीकी (आई०सी०टी०) और ई-अधिगम     ------- -डॉ० राज कुमार गोयल, डॉ० मीरा अग्रवाल, संध्या वार्ष्णेय <br/>
                            3. शिक्षा में सूचना एवं सम्प्रेषण तकनीकी ---------प्रदीप सिंह, अभिषेक चय्वन <br/>
                            4. शिक्षा में सूचना एवं सम्प्रेषण तकनीकी ----------डॉ० शिल्पी शर्मा 
                            </Accordion.Body>
                            </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default Course;
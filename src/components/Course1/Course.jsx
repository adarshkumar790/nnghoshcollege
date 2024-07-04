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
                         • Maintenance of register in the lab.
                         </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey='47'>
                        <Accordion.Header>UNIT VI : Strengthening.Science Teaching</Accordion.Header>
                        <Accordion.Body>
                              
                        </Accordion.Body>    
                        </Accordion.Item>      
                        <Accordion.Item eventKey='48'>
                        <Accordion.Header>UNIT VII : Evaluation</Accordion.Header>
                        <Accordion.Body>
                                
                        </Accordion.Body>
                        </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default Course;
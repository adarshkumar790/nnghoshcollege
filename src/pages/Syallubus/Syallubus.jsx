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
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Syllabus</h1>
                <p className='text-center w-75 mb-5'>A syllabus serves as a comprehensive roadmap for a course, outlining the objectives, expectations, materials, schedule, and assessment methods to guide both students and instructors toward successful learning outcomes.</p>
            </div>
        </header>
 
        <div className='container py-5 w-200'>
            {/* <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2> */}
            {/* <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p> */}
            <Accordion defaultActiveKey="" flush>
            <Accordion.Item eventKey='0'>
                    <Accordion.Header>Class P.G Syallubus</Accordion.Header>
                    <Accordion.Body>
                              <h3>Half Yearly</h3>
                             2-7 Trace the pattern.
                             8-13 Trace the Number.
                             14-21 Trace the Number.
                             22-31 Trace the Number.
                             32-41 Trace the Number.
                             <h3>Final Exam</h3>
                             42-49 Trace the Number.
                             50-55 Colour the picture according to the number.
                             56-60 Revision 1-20 on dotted catterpillar.s
                       </Accordion.Body>
                </Accordion.Item>
               
            <Accordion.Item eventKey='1'>
                    <Accordion.Header>Class L.K.G Syallubus</Accordion.Header>
                   
                    <Accordion.Body>
                    <h3>P.T-1</h3>
                    Trace the Pattern, 1 to 20 counting.
                    <h3>Half Yearly</h3>
                    21-50 Counting, What comes before, What comes after, what comes between.
                    <h3>P.T-2</h3>
                    51-70 counting, 1-10 Number name. 
                    <h3>Final exams</h3>
                    More/Less/Same, count and write, Addition, Substraction.
                    <h3>My first book of handwriting</h3> 
                    <h3>P.T-1</h3>
                    Sleeping line, standing line, stanting line, Cuved line, Circle.
                    <h3>Half Yearly</h3>
                    Feel and write Capital Letters, A to H, Slating line, curved line, circles.
                    <h3>P.T-2</h3>
                    Write the first letter of each picture look at the given pictures and write the correct capital letters.
                    <h3>Final</h3>
                    A to Z
                    Write all the capital letters in the space provided.
                    <h3>The First book of A B C</h3>
                    <h3>P.T-1</h3>
                    a to m small letters, A to M capital letters.
                    <h3>Half Yearly</h3>
                    n to z small letters, N to Z capital letters, Reconize the pictures and write the first letter of their names, Fruits name.
                    <h3>P.T-2</h3>
                    Vegetables name, Birds name, Animals name.
                    <h3>Final Exam</h3>
                    Read and Say it Aloud, A for Apple to Z to Zebra, Bird name, Animals name.
                    <h3>Sing Along Nursery Rhymes</h3>
                    <h3>Half Yearly</h3>
                    1.Birdie , Birdie.
                    2.Butterfly , Butterfly.
                    3.Twinkle, Twinkle, Little star.
                    4. Good Night.
                    5. BAA, BAA, Black Sheep.
                    6. Ding Dong Bell.
                    7.A, B, C.
                    <h3>Final Exam</h3>
                    8.A B C Song, 9.Charley Barley, 10.Eeny, Meeny, Miney, Moe.
                    11. Rain , Rain Go Away.
                    12. Patter - Patter Raidrops.
                    13. After A Bath. 
                    14. Chubby cheeks.
                    15. Humpty Dumpty.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Class U.K.G Syallubus</Accordion.Header>
                    <Accordion.Body>
                        <h3>English</h3>
                        1.Sleeping live, standing, slanting, Curved line, Circle, 2.a to z in small letter, 
                        3.A to Z in small letter, 4.Vowels - a,e,i,o,u, 4.Vowels, 5.Use - "A" and "An", 6.Use-This and That, 
                        7.Use - in and on Look at the pictures and write the frist letter missing letter.
                        <h3>Maths</h3>
                        1.Ditto,odd,Big,Small,Long,Short,More and Less, 2.Number name - 1-10, 3.Counting - 1 to 100/Backward counting 100 - 1,
                        5.What come after, 6.What come before, 7.What come in between, 8.Addition/Substraction.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Class I Syallubus</Accordion.Header>
                    <Accordion.Body>
                       <h3>English(Course Book)</h3>
                       1.The Birth Chocolate My House, 2.It is Good to Share, 3.Number and Letter Land, 4.Give me Jam,
                       5.Being Clen, 6.GrandPa Farukh's Garden, 7.My Best Friend, 8.The Kind-hearted one, 9.Kindness.
                      <h3>P.T-1</h3>
                      1.The Birth Chocolate My House, 2.It is Good to Share.
                      <h3>Half Yearly</h3>
                      3.Number and Letter Land, 4.Give me Jam,
                       5.Being Clen.
                       <h3>P.T-2</h3>
                       6.GrandPa Farukh's Garden, 7.My Best Friend.
                       <h3>Final Exam</h3>
                       8.The Kind-hearted one, 9.Kindness.
                       <h3>English(Work Book)</h3>
                       1.Self, Family, and Home, 2.My School, 3.Food and Health, 4.Nature, 5.Caring and Kindness.
                        <hr/>
                       <h3>Maths(Course Book)</h3>
                       1.Numbers up to 20, 2.Addition up to 10, 3.Shapes, 4.Addition and Substraction up to 20, 5.Measurement, 6.Numbers up to 100,
                       7.Addition and Substraction up to 99, 8.Time and Money Data Handling, 9.Patterns Introduction and Division.
                       <h3>P.T-1</h3>
                       1.Numbers up to 20, 2.Addition up to 10, 3.Shapes.
                       <h3>Half Yearly</h3>
                       3.Shapes, 4.Addition and Substraction up to 20, 5.Measurement.
                       <h3>P.T-2</h3>
                       6.Numbers up to 100,
                       7.Addition and Substraction up to 99.
                       <h3>Final Exam</h3>
                       8.Time and Money Data Handling, 9.Patterns Introduction and Division.
                       <h3>Math(Work Book)</h3>
                       1.Number up to 20, Addition up to 20, Substraction up to 20, 2.Shapes, 3.Addistion and Substraction up to 20, Numbers up to 50,
                       4.Measurement, 4.Numbers up to 100, 5.A Addition and Substraction up to 99, 6.Time and Money Data Handling, 7.Patterns Introsuction to Multiplication and Division.
                       <hr/>
                       <h3>E.V.S(Course Book)</h3>
                       1.All About Me My Wonderful Body My Family, 2.My Home, My School, 3.Places and People Around us, 4.The food we Eat Food Art Clother We Wear, 
                       5.Healthy Habits Some Safety Rules, 6.Plants Around Us, 7.Animals Around and Staying Connected, 8.Air Around US Water is Precious, 
                       9.The Sky and the Earth.
                       <h3>E.V.S(Work Book)</h3>
                       1.All About me, My Wonderfull Body, My Family, 2.My Flame, My School, 3.Places and People Around us, 4.The Food we Eat food Art, Clother We Wear Healthy Habits, Some Safety Rules,
                       5.Plants Around us, 6.Animal Around us Going Around And Staying Connected, 7.Air Around us Water is Precious, 8.The Sky 
                       and the Earth.
                       <h3>Cursive Writing</h3>
                       1.Patterns, Joined Letter, Cross word, 2.Four Letter Rhyming words, 3.Five Letter words, 4.Days of Week Colours, 
                       5.Fun in the Jungle, 6.Number name, 7.Test yourself, 8.Fruits and Vegetables, 9.Months Name, 10.Tongue Twister,
                       11.In the Circus, 12.My Self, 13.Picnic Time, 14.Opposite words, 15.Poem, My Mother Laand, 16.Question Time, 
                       17.Our National Friends, 18.Means of Transparent, 19.Our Senses. 20.Word Jumple, 21.Sory Time, 
                       22.Our Helpers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>Class II Syallubus</Accordion.Header>
                    <Accordion.Body>
                    <h3>Maths</h3>
                    1.Numbers up to 200, 2.Addition, 3.Subdtraction, 4.Multiplication, 5.Division, 6.Numbers up to 1000,
                    7.Addition and Substraction of Number up to 99, 8.More Multiplication, 9.Meaurement, 10.Shapes, 11.Patterns, 12.Time,
                    13.Money, 14.Data Handling.
                    <h3>P.T-1</h3>
                    1.Numbers up to 200, 2.Addition.
                    <h3>Half Yealry</h3>
                    3.Subdtraction, 4.Multiplication, 5.Division, 6.Numbers up to 1000,
                    7.Addition and Substraction of Number up to 99.
                    <h3>P.T-2</h3>
                    8.More Multiplication, 9.Meaurement, 10.Shapes, 11.Patterns.
                    <h3>Final Exam</h3> 
                    10.Shapes, 11.Patterns, 12.Time,
                    13.Money, 14.Data Handling.
                    <hr/>
                       <h3>English (Literacy Skills)</h3>
                       1.Yes, You Can, 2.Growing Up Is Fun, 3.Nani's walk to the Park, 4.My Brothers Wheelchair, 5.Ready ? Yes! Play!,
                       6.Indian Food, 7.The Big Beach, 8.Five Little Seeds, 9.Manju Loves Bihu, 10.A Ring Day.
                        <h3>P.T-1</h3>
                        1.Yes, You Can, 2.Growing Up Is Fun.
                        <h3>Half Yearly</h3>
                        3.Nani's walk to the Park, 4.My Brothers Wheelchair, 5.Ready ? Yes! Play!.
                        <h3>P.T-2</h3>
                        6.Indian Food, 7.The Big Beach.
                        <h3>Final Exam</h3>
                        8.Five Little Seeds, 9.Manju Loves Bihu, 10.A Ring Day.
                        <hr/>
                       <h3>English</h3>
                       1.The Boastful Crow, 2.Mama Antelope's House, 3.Foxy Joxy Plays a Trick, 4.Passport, 5.The Stag and His Reflaction, 6.The Elephant and the Sparrows, 7.Baby Lin Roars. 
                       <h3>P.T-1</h3>
                       1.The Boastful Crow, 2.Mama Antelope's House.
                       <h3>Half Yearly</h3>
                       3.Foxy Joxy Plays a Trick, 4.Passport.
                       <h3>P.T-2</h3>
                       5.The Stag and His Reflaction.
                       <h3>Final Exam</h3>
                       6.The Elephant and the Sparrows, 7.Baby Lin Roars.
                       <hr/>
                       <h3>G.K</h3>
                       1.My Amazing Body, 2.Family and Festivals, 3.Houses we live In, 4.Our Neighbourhood, 5.Eat Healthy, 6.Cleanliness and Good Manners,
                       7.Be Safe ?, 8.My Country, My Pride, 9.Our Green Friends, 10.Animals Arounds us, 11.Going Around, 12.Means of Communication,
                       13.The Air we Bradth, 14.We Need Clean Water, 15.The Sky and Seasons, 16.Directions.
                       <h3>P.T-1</h3>
                       1.My Amazing Body, 2.Family and Festivals, 3.Houses we live In.
                       <h3>Half Yearly</h3>
                       4.Our Neighbourhood, 5.Eat Healthy, 6.Cleanliness and Good Manners,
                       7.Be Safe ?, 8.My Country, My Pride.
                       <h3>P.T-2</h3>
                       9.Our Green Friends, 10.Animals Arounds us, 11.Going Around.
                       <h3>Final Exam</h3>
                       12.Means of Communication,
                       13.The Air we Bradth, 14.We Need Clean Water, 15.The Sky and Seasons, 16.Directions.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>Class III Syallubus</Accordion.Header>
                    <Accordion.Body>
                       <h3>English</h3>
                       1.The weightlifting pricess, 2.Climbing, 3.In-house Garden, 4.The tree, 4.Monkey and myna,
                       5.You can't be that, 7.Tenali Rama and the three dolls, 8.Look, 9.Who is clever.
                      <h3>P.T-1</h3>
                      1.The weightlifting pricess, 2.Climbing.
                      <h3>Half Yearly</h3>
                      3.In-house Garden, 4.The tree.
                      <h3>P.T-2</h3>
                      5.You can't be that, 6.You can't be that.
                      <h3>Final Exam</h3>
                      7.Tenali Rama and the three dolls, 8.Look, 9.Who is clever.
                      <hr/>
                       <h3>English Grammer</h3>
                       1.Noun, 2.Common and Propper nouns, 3.Singular and plurals nouns, 4.Nouns : Gender, 
                       5.Possesive Nouns, 6.Pronouns, 7.Verbs, 8.Is, Am, Are. 9.Was,were, 10. Regular and Irregular verbs,
                       11.Has, Have, Had, 12.Simple Present Tense, 13.Present Present Continous, 14.Simple past tense, 15.Simple Future Tense, 
                       16.Can, Cannot, Should, Should, Not, 17.Articles, 18.Adjectives, 19.Degrees of Comparison, 20.Adverbs, 
                       21.Prepositions, 22.Conjunctions, 23.The Sentence, 24.Asking Questions, 25.Contractions, 26.Interjections,
                       27.Punctuation, 28.Using a Dictionary. 29.Word Power, 30.Reading Comprehension, 31.Compostions.
                       <h3>P.T-1</h3>
                       1.Noun, 2.Common and Propper nouns, 3.Singular and plurals nouns, 4.Nouns : Gender, 
                       5.Possesive Nouns, 6.Pronouns.
                       <h3>Half Yearly</h3>
                       7.Verbs, 8.Is, Am, Are. 9.Was,were, 10. Regular and Irregular verbs,
                       11.Has, Have, Had, 12.Simple Present Tense, 13.Present Present Continous, 14.Simple past tense, 15.Simple Future Tense, 
                       16.Can, Cannot, Should, Should, Not.
                       <h3>P.T-2</h3>
                       17.Articles, 18.Adjectives, 19.Degrees of Comparison, 20.Adverbs, 
                       21.Prepositions, 22.Conjunctions, 23.The Sentence.
                       <h3>Final Exam</h3>
                       23.The Sentence, 24.Asking Questions, 25.Contractions, 26.Interjections,
                       27.Punctuation, 28.Using a Dictionary. 29.Word Power, 30.Reading Comprehension, 31.Compostions.
                       <hr/>
                       <h3>Maths</h3>
                       1.Large Numbers, 2.Addition, 3.Substraction, 4.Multiplication, 5.Division, 6.Fraction, 7.Shapes,
                       8.Patterns and Symmetry, 9.Metric measures, 10.Time, 11.Money, 12.Data handling.
                      <h3>P.T-1</h3>
                      1.Large Numbers, 2.Addition.
                      <h3>Half Yearly</h3>
                      3.Subtraction, 4.Multiplication, 5.Division, 6.Fraction.
                      <h3>P.T-2</h3>
                      7.Shapes,
                       8.Patterns and Symmetry, 9.Metric measures.
                       <h3>Final Exam</h3>
                       2.Addition, 3.Substraction, 4.Multiplication, 5.Division
                       10.Time, 11.Money, 12.Data handling.
                       <hr/>
                       <h3>E.V.S</h3>
                       1.My Body, 2.Yashica's family, 3.Game we play, 4.People at work, 5.Food for us, 6.Weave and wear,
                       7.Houses and Homes, 8.My Plant Friends, 9.The Animals world. 10.Bird - Our winged Friends, 11.Air arounds us,
                       12.Teepoo, the water drop, 13.Rishad on the Train, 14.Sudha goes Treking, 15.Finding Directions,
                       16.The stars and the solar systems.
                       <h3>P.T-1</h3>
                       1.My Body, 2.Yashica's family.
                       <h3>Half Yearly</h3>
                       3.Game we play, 4.People at work, 5.Food for us, 6.Weave and wear,
                       7.Houses and Homes.
                       <h3>P.T-2</h3>
                       8.My Plant Friends, 9.The Animals world. 10.Bird - Our winged Friends.
                       <h3>Final Exam</h3>
                       11.Air arounds us,
                       12.Teepoo, the water drop, 13.Rishad on the Train, 14.Sudha goes Treking, 15.Finding Directions,
                       16.The stars and the solar systems.
                       <h3>G.K</h3>
                       1.Mumble, jumble, 2.Leaves of plants, 3.Body facts, 4.Guess my Name, 5.Who Am, I, 6.Proverbs,
                       7.Know your india, 8.Playing Areas, 9.Our leaders, 10.Musical world, 11.Check out things of Home. 12.Number Crunching,
                       13.Continous, 14.Relatives, 15.Who Am I, 16.Parts of plants, 17.Animal Homes, 18.Our Food, 19.Homes and Building, 
                       20.Personlities, 21.Language Skills, 22.Language in India, 23.Staes and Capitals, 24.Playtime, 25.Science Time, 26.Rules for strangers,
                       27.The Olypics, 28.An Eye For Signboards. 29.Think it out. 30 Direction, 31.Plant wonders, 32.Science Fun,
                       33.Sounds Things make, 34.Classical Dance Forms, 35.Fish facts, 36.Entertainers, 37.Cartons, Books, and Films,
                       38.Glories of india, 39.Computer world, 40.Cartoon and Film world, 41.Landmarks of the world, 42.Indian Cricketers,
                       43.Book world, 44.Food of India, 45.I love of India, 46.Prime ministers of India, 47.Brand Names, 48.Animal Habitats,
                       49.Ferry way, 50.The truth of science, 51.Timeline, 52.Tickle your Brain, 53.Science at the doostep, 54.Our universe, 
                       55.Signs and Symbols, 56.Saying at right, 57.World sportspersons, 58.First in India.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>Class IV Syallubus</Accordion.Header>
                    <Accordion.Body> 
                     <h3>Maths</h3>
                     1.Larger numbers, 2.Addition & Subtraction, 3.Multiplication, 4.Division, 5.Factors & Multiples,
                     6.Fractions, 7.Decimals, 8.The world of shapes, 9.Patterns and Symmetry, 10.Metric measures, 
                     11.Perimeterand area, 12.Time, 13.Money, 14.Data handling.
                     <h3>P.T-1</h3>
                     1.Larger numbers, 2.Addition & Subtraction, 3.Multiplication, 4.Division.
                     <h3>Half Yearly</h3>
                     5.Factors & Multiples,
                     6.Fractions, 7.Decimals, 8.The world of shapes, 9.Patterns and Symmetry, 10.Metric measures.
                     <h3>P.T-2</h3>
                     11.Perimeterand area, 12.Time, 13.Money.
                     <h3>Final Exam</h3>
                     14.Data handling.
                     <hr/>
                     <h3>G.K</h3>
                     1.Animal words, 2.Class a port, 3.Handicrafts of india. 4.Know years, 5.Where in India.
                     6.Wealth of nation, 7.Dictionary, 8.Famous Artists, 9.Sense and Science, 
                     10.Famous women from india, 11.Fairs & Festivals of india, 12.Word sense, 13.Indian sports,
                     12.Key words.
                     <h3>P.T-1</h3>
                     1.Animal words, 2.Class a port, 3.Handicrafts of india. 4.Know years, 5.Where in India.
                     6.Wealth of nation, 7.Dictionary, 8.Famous Artists, 9.Sense and Science, 
                     10.Famous women from india, 11.Fairs & Festivals of india.
                     <h3>Half yearly</h3>
                     Buzzer Game-1, Buzzer Game-2.
                     <h3>P.T-2</h3>
                     Buzzer Game-3.
                     <h3>Final Exam</h3>
                     Buzzer Game-IV.
                     <hr/>
                     <h3>Computer</h3>
                     1.Components of Computer, 2.Central Processing unit, 3.Memory of Computer, 4.Computer of Applications,
                     5.Hardware and Software, 6.Classification of Computer, 7.Logo, 8.Word pad, 9.MS Powerpoint.
                     <h3>P.T-1</h3>
                     1.Components of Computer, 2.Central Processing unit.
                     <h3>Half Yearly</h3>
                     .Memory of Computer, 4.Computer of Applications.
                     <h3>P.T-2</h3>
                     5.Hardware and Software, 6.Classification of Computer.
                     <h3>Final Exam</h3>
                     7.Logo, 8.Word pad, 9.MS Powerpoint.
                     <hr/>
                     <h3>EVS</h3>
                     1.Family, 2.Feelings, 3.Games are fun, 4.Different Occupations, 5.Good food,healthy lite,
                     6.How does food reach us, 7.Then and Now, 8.Plants - Our green friends,
                     9.Animals Arounds, 10.Animal Homes, 11.Water, 12.Waste and waste management, 13.Contructing a Building,
                     14.Camel Carvan, 15.A trip to Remember, 16.Zeeba makes a mab.
                     <h3>P.T-1</h3>
                     1.Family, 2.Feelings, 3.Games are fun, 4.Different Occupations.
                     <h3>Half Yearly</h3>
                     5.Good food,healthy lite,
                     6.How does food reach us, 7.Then and Now, 8.Plants - Our green friends,
                     9.Animals Arounds, 10.Animal Homes.
                     <h3>P.T-2</h3>
                     11.Water, 12.Waste and waste management, 13.Contructing a Building.
                     <h3>Final Exam</h3>
                     15.A trip to Remember, 16.Zeeba makes a mab.
                     <hr/>
                     <h3>English</h3>
                     1.Uncle ken at the wheel, 2.Free in space, 3.Ravan meets his Grandmother, 4.Flying south, 5.The Bird on the shore,
                     6.The night the moon went missing, 7.The land of zenter pane, 8.Morching to freedom,
                     9.My Song, 10.Sidhartha and the swan, 11.Loli the mouse.
                     <h3>P.T-1</h3>
                     1.Uncle ken at the wheel, 2.Free in space, 3.Ravan meets his Grandmother.
                     <h3>Half Yearly</h3>
                     4.Flying south, 5.The Bird on the shore,
                     6.The night the moon went missing.
                     <h3>P.T-2</h3>
                     7.The land of zenter pane, 8.Morching to freedom.
                     <h3>Final Exam</h3>
                     9.My Song, 10.Sidhartha and the swan, 11.Loli the mouse.
                     <h3>Grammar</h3>
                     1.Noun, 2.Compound and proper nouns, 3.Singular and plural nouns, 4.Nouns,
                     5.Processive nouns, 6.Collective, 7.Countable nouns, 8.Pronouns, 9.Verbs, 10.Simple Present,
                     11.Present countners, 17.Articles, 18.Adjectives, 19.Degrees of comparison, 20.Adverbs.
                     <h3>P.T-1</h3>
                     1.Noun, 2.Compound and proper nouns, 3.Singular and plural nouns, 4.Nouns.
                     <h3>Half Yearly</h3>
                     5.Processive nouns, 6.Collective, 7.Countable nouns, 8.Pronouns, 9.Verbs, 10.Simple Present,
                     <h3>P.T-2</h3>
                     Chap-12-16.
                     <h3>Final Exam</h3>
                     17.Articles, 18.Adjectives, 19.Degrees of comparison, 20.Adverbs.
                    <hr/>

                    </Accordion.Body>
                    
                </Accordion.Item>
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>Classs V Syallubus</Accordion.Header>
                    <Accordion.Body>
                       <h3>English</h3>
                       1.Mind over Might, 2.Nothing is something, 3.Food fit, 4.Food pyramid, 5.Unvisual Indian Sports,
                       6.Choose your sports, 7.A Surprise for Mr perps, 8.Tech me to listen, Lord. 9.Brave Dogs, 10.See it Though, 
                       11.Birbal catches the thief.
                       <h3>P.T-1</h3>
                       1.Mind over Might, 2.Nothing is something.
                       <h3>Half Yearly</h3>
                       3.Food fit, 4.Food pyramid, 5.Unvisual Indian Sports,
                       6.Choose your sports.
                       <h3>P.T-2</h3>
                       7.A Surprise for Mr perps, 8.Tech me to listen.
                       <h3>Final Exam</h3>
                       9.Brave Dogs, 10.See it Though, 
                       11.Birbal catches the thief.
                       <hr/>
                       <h3>Grammer</h3>
                       1.Noun and their types, 2.Singular and Plural, 3.Nouns: Gender, 4.Possessive Nouns, 5.Pronouns and Their Types, 
                       6.Verbs, 7.Simple Present Tense, 8.Simple Countinous Tense, 9.Present Perfect Tense, 10.Simple Past Tense,
                       11.Past Continous Tense, 12.Simple Future Tense, 13.Future Continuers, 14.The 'Going to' form, 15.Models, 
                       16.Subject and Predicte, 17.Subject - verb Agreement, 18.Aticle, 19.Adjective, 20.Degree of Comparision,
                       21.Adverbs and their Types, 22.Types of Prepositions, 23.Conjunctions, 24.Sentence and its types,
                       25.Negative sentence, 26.Inerogative sentences, 27.Contractions, 28.Punctuations, 29.Using a Disctionary, 
                       30.Word Power, 31.Reading Comprehesion, 32.Compositions.
                       <h3>P.T-1</h3>
                       1.Noun and their types, 2.Singular and Plural, 3.Nouns: Gender, 4.Possessive Nouns, 5.Pronouns and Their Types.
                       <h3>Half Yearly</h3>
                       6.Verbs, 7.Simple Present Tense, 8.Simple Countinous Tense, 9.Present Perfect Tense, 10.Simple Past Tense,
                       11.Past Continous Tense, 12.Simple Future Tense, 13.Future Continuers, 14.The 'Going to' form, 15.Models, 
                       <h3>P.T-2</h3>
                       16.Subject and Predicte, 17.Subject - verb Agreement, 18.Aticle, 19.Adjective, 20.Degree of Comparision,
                       <h3>Final Exam</h3>
                       21.Adverbs and their Types, 22.Types of Prepositions, 23.Conjunctions, 24.Sentence and its types,
                       25.Negative sentence, 26.Inerogative sentences, 27.Contractions, 28.Punctuations, 29.Using a Disctionary, 
                       30.Word Power, 31.Reading Comprehesion, 32.Compositions.
                       <hr/>
                       
                       <h3>Math</h3>
                       1.More on large Number, 2.Operations on large Numbers, 3.Factors and Multiples, 4. Fractions, 5.Decimals,
                       6.Basic Geometry, 7.Patterns and Symmetry, 8.Metric Measures, 9.Perimeter and Area, 10.Volume and Nets, 
                       11.Time and Temperature, 12.Life Mathematics, 13.Mapping Skills, 14.Data Handling.
                      <h3>P.T-1</h3>
                      1.More on large Number, 2.Operations on large Numbers, 3.Factors and Multiples.
                      <h3>Half Yearly</h3>
                      4. Fractions, 5.Decimals,
                       6.Basic Geometry, 7.Patterns and Symmetry, 8.Metric Measures.
                       <h3>P.T-2</h3>
                       9.Perimeter and Area, 10.Volume and Nets, 
                       11.Time and Temperature.
                       <h3>Final Exam</h3>
                       11.Time and Temperature, 12.Life Mathematics, 13.Mapping Skills, 14.Data Handling.
                       <hr/>
                       <h3>EVS</h3>
                       1.Anusha's Family, 2.Games we play, 3.Our work, 4.From the Farm, 5.The journey of Food, 6.Breathing - In and Out,
                       7.Shelter for all, 8.Food that plants make, 9.Seed Germination and Dispersal, 10.Forests - Green Lungs of the Earth,
                       11.Protecting Animal, 12.Animals Senses, 13.Water - Our Lifeline, 14.Natural - Times of Emergency,
                       15.Travel is Fun, 16.India our Pride.
                       <h3>P.T-1</h3>
                       1.Anusha's Family, 2.Games we play, 3.Our work.
                       <h3>Half Yearly</h3>
                       3.Our work, 4.From the Farm, 5.The journey of Food, 6.Breathing - In and Out,
                       7.Shelter for all, 8.Food that plants make, 9.Seed Germination and Dispersal.
                       <h3>P.T-2</h3>
                       10.Forests - Green Lungs of the Earth,
                       11.Protecting Animal, 12.Animals Senses.
                       <h3>Final Exam</h3>
                       12.Animals Senses, 13.Water - Our Lifeline, 14.Natural - Times of Emergency,
                       15.Travel is Fun, 16.India our Pride.
                       <hr/>
                       <h3>Computer</h3>
                       1.Computer Memory, 2.Classification of Computers, 3.Operating System, 4.Word - pad, 5.Ms-Word, 6.Ms-Excell,
                       7.Ms-Power point, 8.Need of Multimedia System, 9.History of the Computers, 10.Generations, of Computers, 
                       11.Computer Viruses.
                       <h3>Half Yearly</h3>
                       1.Computer Memory, 2.Classification of Computers, 3.Operating System, 4.Word - pad, 5.Ms-Word, 6.Ms-Excell.
                       <h3>Final Exam</h3>
                       7.Ms-Power point, 8.Need of Multimedia System, 9.History of the Computers, 10.Generations, of Computers, 
                       11.Computer Viruses.
                       <hr/>
                       <h3>G.K</h3>
                       1.Fascinating Mammals, 2.Wonderful plants, 3.trades and Professions, 4.Space - Explorations, 5.Social Reformers and Messengers,
                       6.Vitamins and Minerls, 7.Our Herriatage : Movements of India, 8.Famous Writters, 9.Famous Scientist, 10.Cities and Countries,
                       11.Story line, 12.Sporting Terms, 13.World Leaders, 14.Brain Test, 15.Mixed Bag, 16.Mixed Bag, 17.Terms and Know,
                       18.Convas Religions, 19.Great Explores, 20.Colours can Talk, 21.Institutes of Importance, 22.Noted Indians, 
                       23.Newsmapers in India, 24.Infection Detection, 25.Tokyo 2020 Olympics, 26.Famous Places, 27.Crossword, 
                       28.Talk Modern, 29.Number Game, 30.World of Inspects, 31.Living Things, 32.Great Indians, 33.Anagrams, 34.Firsts in India, 
                       35.Save Nature, 36.Notables in India, 37.Sports, 38.Medicines History, 39.World Organisations, 40.Sobriquets in Sports,
                       41.Geographical Facts, 42.Mathemagic, 43.Remarkable Fishes, 44.Desert Life, 45.Buzzer Round, 46.Special places, 
                       47.History Quiz, 48.Scientifically Yours, 49.Famous Personlities, 50.Sportsperson, 51.Indian Film Stars, 
                       52.Continents and Oceans, 53.Mixed Bags, 54.Quick Spot, 55.Think - This Out, 56.The Common Factor, 57.Think Fast,
                       58.The COVID-19 Quiz.  
                       <h3>Half Yearly Exam</h3>
                       1.Fascinating Mammals, 2.Wonderful plants, 3.trades and Professions, 4.Space - Explorations, 5.Social Reformers and Messengers,
                       6.Vitamins and Minerls, 7.Our Herriatage : Movements of India, 8.Famous Writters, 9.Famous Scientist, 10.Cities and Countries,
                       11.Story line, 12.Sporting Terms, 13.World Leaders, 14.Brain Test, 15.Mixed Bag, 16.Mixed Bag, 17.Terms and Know,
                       18.Convas Religions, 19.Great Explores, 20.Colours can Talk, 21.Institutes of Importance, 22.Noted Indians, 
                       23.Newsmapers in India, 24.Infection Detection, 25.Tokyo 2020 Olympics, 26.Famous Places, 27.Crossword, 
                       28.Talk Modern, 29.Number Game, 30.World of Inspects, 31.Living Things, 32.Great Indians, 33.Anagrams, 34.Firsts in India, 
                       35.Save Nature, 36.Notables in India, 37.Sports, 38.Medicines History, 39.World Organisations.
                       <h3>Final Exam</h3>
                       40.Sobriquets in Sports,
                       41.Geographical Facts, 42.Mathemagic, 43.Remarkable Fishes, 44.Desert Life, 45.Buzzer Round, 46.Special places, 
                       47.History Quiz, 48.Scientifically Yours, 49.Famous Personlities, 50.Sportsperson, 51.Indian Film Stars, 
                       52.Continents and Oceans, 53.Mixed Bags, 54.Quick Spot, 55.Think - This Out, 56.The Common Factor, 57.Think Fast,
                       58.The COVID-19 Quiz.
                       <hr/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>Class VI Syallubus</Accordion.Header>
                    <Accordion.Body>
                          <h3>Maths</h3>
                          1.Number System, 2.Factors and Multiples, 3.Whole Numbers, 4.Integers, 5.Fractions, 6.Simplifications,
                          7.Decimals, 8.Algebric Expressions, 9.Linear equations in one valuable, 10.Ratio,Proportion, and Unitary method,
                          11.Line Segment, Ray and Line, 12.Parallel Lines, 13.Angles and their Measurement, 14.Construction, 15.Polygons,
                          16.Triangles, 17.Quadrilaterals, 18.Circles, 19.Three-Dimensions Shapes, 20.Symmetry(Two-Dimension),
                          21. Prrmeterand Area, 22.Data Handling, 23.Pictograph, 24.Bargraph, 25.Activities.
                          <h3>P.T-1</h3>
                          1.Number System, 2.Factors and Multiples, 3.Whole Numbers, 4.Integers.
                          <h3>Half Yearly</h3>
                          5.Fractions, 6.Simplifications,
                          7.Decimals, 8.Algebric Expressions, 9.Linear equations in one valuable, 10.Ratio,Proportion, and Unitary method.
                          <h3>P.T-2</h3>
                          11.Line Segment, Ray and Line, 12.Parallel Lines, 13.Angles and their Measurement, 14.Construction, 15.Polygons,
                          16.Triangles.
                          <h3>Final Exam</h3>
                          17.Quadrilaterals, 18.Circles, 19.Three-Dimensions Shapes, 20.Symmetry(Two-Dimension),
                          21. Prrmeterand Area, 22.Data Handling, 23.Pictograph, 24.Bargraph, 25.Activities.
                         <hr/>
                          <h3>English</h3> 
                          1.Singing Grasses and Tarzon vines, 2.Adventures at Sea, 3.Amrita Devi Bishnoz, 4.Lines written in Early Spring,
                          5.Zakir and his Tabla, 6.The Bangle Sellers, 7.A friend in need, 8.The Doll, 9.Into the future, 10.My Computer ate My Homework,
                          11.Faith Repaid, 12.The Snail.
                          <h3>English Grammer</h3>
                          1.Nouns, 2.Singular and Plural Nuns, 3.Nouns:Gender, 4.Nouns:case, 5.Articles, 6.Adjectives,
                          7.Adjectives:Degrees of Comparison, 8.Verbs, 9.Auxillary Verbs, 10.Subject & Predicate, 11.The Tense,
                          12.Simple Tenses, 13.Continous Tense, 14.Perfect Tenses, 15.Active and Passive, 16.Sub-verb-Agreement.
                          17.Adverb, 18.Adverbs of Comparison, 19.Personal Pronouns, 20.Types of Pronouns, 21.Prepositions, 
                          22.More on Preposition, 23.Conjunctions.
                          <hr/>
                          <h3>Physics</h3>
                          1.Body Movements, 2.Motion and Measurement of Distance, 3.Light, Shadows and Reflection, 4.Light, Shadows
                          and Reflection, 5.Electricity and circuits, 6.Electricity and circuits (Continue), 7.Garrage in Garrage out.
                          <h3>Chemistry</h3>
                          1.Sorting Materials, 2.Sepration of Substance, 3.Changes around us, 4.Changes arround us (Continue),
                          5.Water, 6.Air arrounds us.
                          <h3>Biology</h3>
                          1.Food-where does it come from?, 2.Components of Food, 3.Fibre to Fibric, 4.Fibre to Fibric(Continue),
                          5.Getting to know Plants, 6.The Living organisms.

                          <h3>History</h3>
                          1.What, Where, How and When, 2.From hunting-Gatherring and Growing food, 3.In the earliest cities, 
                          4.What Books and Burials tell us, 5.Kingdoms, Kingsons, on early Republic, 6.New Questioned and Ideas,
                          7.Ashoka, The Emperor, 8.Vital villages, Thriving Towers, 9.Traders, Kings and Pilgrims, 10.New empires and Kingdoms,
                          11.Buildings, Paintings, and Books.
                
                          <h3>P.T-1</h3>
                          1.What, Where, How and When, 2.From hunting-Gatherring and Growing food, 3.In the earliest cities.
                          <h3>Half Yearly</h3>
                          4.What Books and Burials tell us, 5.Kingdoms, Kingsons, on early Republic, 6.New Questioned and Ideas.
                          <h3>P.T-2</h3>
                          7.Ashoka, The Emperor, 8.Vital villages.
                          <h3>Final Exam</h3>
                          9.Traders, Kings and Pilgrims, 10.New empires and Kingdoms,
                          11.Buildings, Paintings, and Books.
                          <hr/>

                          <h3>Civics</h3>
                          1.Understanding diversity, 2.Diversity and descimination, 3.What is Government, 4.Maps, 5.Major Domains of the earth,
                          6.Major land forms of the earth, 7.Our country, 8.Rural Livelihoods, 9.Urban Livehoods.
                          <h3>P.T-1</h3>
                          1.Understanding diversity, 2.Diversity and descimination, 3.What is Government.
                          <h3>Half Yearly</h3>
                          4.Maps, 5.Major Domains of the earth,
                          6.Major land forms of the earth.
                          <h3>P.T-2</h3>
                          7.Our country, 8.Rural Livelihoods.
                          <h3>Final Exam</h3>
                          9.Urban Livehoods.
                          <hr/>
                          <h3>Geoghraphy</h3>
                          1.The Earth in the Solar System, 2.Globe:Latitudes and Longitudes, 3.Motion of the Earth, 4.Key element of a Democratic Government,
                          5.Panchayati Raj, 6.Rural Administration, 7.Urban Administration, 8.India:Climates,Vegetation and wildlife. 
                          <h3>P.T-1</h3>
                          1.The Earth in the Solar System, 2.Globe:Latitudes and Longitudes, 3.Motion of the Earth.
                          <h3>Half Yearly</h3>
                          4.Key element of a Democratic Government,
                          5.Panchayati Raj, 6.Rural Administration.
                          <h3>P.T-2</h3>
                          7.Urban Administration.
                          <h3>Final</h3>
                          8.India:Climates,Vegetation and wildlife.
                          <h3>G.K</h3>
                          1.Animal Words, 2.Sports and Colours, 3.World of comics, 4.Know your Fables, 5.India:Our country, 6.Know your country,
                          7.Who Said so?, 8.Common Names, 9.World Leaders, 10.Mixed Bag, 11.Think it Out.
                          <h3>P.T-1</h3>
                          1.Animal Words, 2.Sports and Colours, 3.World of comics, 4.Know your Fables, 5.India:Our country, 6.Know your country,
                          7.Who Said so?, 8.Common Names, 9.World Leaders, 10.Mixed Bag, 11.Think it Out.
                          <h3>Half Yearly</h3>
                          Bizzer Game 1 and 2, Ch-12. to 21.
                          Chap-22 to 32.
                          <h3>P.T-2</h3>
                          Buzzer Game 3, Chap-33 to 38, Chap- 39-43.
                          <h3>Final Exam</h3>
                          Buzz Game IV and V
                          Chap-44 to 54.
                          Chap-55 to 66.
                          <hr/>
                          <h3>Computer</h3>
                          1.Operating System, 2.Working with windows, 3.MS Word, 4.MS Excell, 5.MS Power Point, 6.Multimdia, 7.Computer Network,
                          8.Internet and E-mail, 9.Types of Software, 10.Algorithum to Flowchart, 11.Computer Programming, 12.Basic, 13.Inside the computer.
                          <h3>P.T-1</h3>
                          1.Operating System, 2.Working with windows, 3.MS Word.
                          <h3>Half Yearly</h3>
                          4.MS Excell, 5.MS Power Point, 6.Multimdia.
                          <h3>P.T-2</h3>
                          7.Computer Network,
                          8.Internet and E-mail, 9.Types of Software.
                          <h3>Final Exam</h3>
                          10.Algorithum to Flowchart, 11.Computer Programming, 12.Basic, 13.Inside the computer.
                          
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>Class VII Syallubus</Accordion.Header>
                    <Accordion.Body>
                    <h3>English(Literature)</h3>
                    1.The Eyes have it, 2.The cookie Thief, 3.The Triumph, 4.For Athletes, 5.Living Out of a Suitcase,
                    6.To the Skies, 7.A Gift of love, 8.Do it Anyway, 9.Her laughter said it All, 10.Post cards from Ura, 11.World Peace,
                    12.Angel Child, Dragon Child, 13.Beautifully Different, Wonderfully Same.
                    <h3>P.T-1</h3>
                    1.The Eyes have it, 2.The cookie Thief.
                    <h3>Half Yearly</h3>
                    3.The Triumph, 4.For Athletes, 5.Living Out of a Suitcase,
                    6.To the Skies, 7.A Gift of love, 8.Do it Anyway.
                    <h3>P.T-2</h3>
                    7.A Gift of love, 8.Do it Anyway, 9.Her laughter said it All, 10.Post cards from Ura.
                    <h3>Final Exam</h3>
                    10.Post cards from Ura, 11.World Peace,
                    12.Angel Child, Dragon Child, 13.Beautifully Different, Wonderfully Same.
                    <hr/>
                    <h3>English(Grammar)</h3>
                    1.Nouns, 2.Articles, 3.Adjectives, 4.More on Adjectives, 5.Verbs, 6.Finite and Non-finite verb, 7.Modals, 8.Present Tense,
                    9.Past Tense, 10.Future Tense, 11.Subject-Verb Agreement, 12.Adverb, 13.Pronouns, 14.Prepositions, 15.Conjunction, 16.Phrases, 17.Clauses, 
                    18.Senetnce and its Kinds, 19.Phrasal Verbs, 20.Active and Passive voice, 21.Direct and Indirect Speech, 22.Punctuation,
                    23.Word Power, 24.Reading Comparehension, 25.Composiition.
                    <h3>P.T-1</h3>
                    1.Nouns, 2.Articles, 3.Adjectives, 4.More on Adjectives, 5.Verbs.
                    <h3>Half Yearly</h3>
                    6.Finite and Non-finite verb, 7.Modals, 8.Present Tense,
                    9.Past Tense, 10.Future Tense, 11.Subject-Verb Agreement, 12.Adverb, 13.Pronouns.
                    <h3>P.T-2</h3>
                    14.Prepositions, 15.Conjunction, 16.Phrases, 17.Clauses.
                    <h3>Final Exam</h3>
                    18.Senetnce and its Kinds, 19.Phrasal Verbs, 20.Active and Passive voice, 21.Direct and Indirect Speech, 22.Punctuation,
                    23.Word Power, 24.Reading Comparehension, 25.Composiition.
                    <hr/>
                    <h3>Computer</h3>
                    1.Ms-word, 2.Ms-Excess, 3.Windows Movie Maker, 4.Flash CS4, 5.Computer, 6.Internet and E-mail, 7.Computer Viruses 
                    8.HTML, 9.Algorithum, flowchart, and Programs, 10.QBASIC, 11.Visual Basic, 12.Photoshop.
                   <hr/>
                    <h3>Half Yearly</h3>
                    1.Ms-word, 2.Ms-Excess, 3.Windows Movie Maker, 4.Flash CS4, 5.Computer, 6.Internet and E-mail.
                    <h3>Final Exam</h3>
                    7.Computer Viruses 
                    8.HTML, 9.Algorithum, flowchart, and Programs, 10.QBASIC, 11.Visual Basic, 12.Photoshop.
                    <h3>G.K</h3>
                    1.The world of Animals, 2.All about Tennis, 3.Indian Music, 4.Animal Homes, 5.Literature Quiz, 6.Indin Achievers, 
                    7.Indian Environmentalists, 8.Who Am I ?, 9.Information Technology, 10.Terms That seem A like , 11.Observation, 
                    12.The world of plants, 13.Films and their Inspiration, 14.Sporting Terms, 15.Ask More on India Literature,
                    16.One word Substituation, 17.Our Nation, 18.The Constitution of India, 19.Scholars/Scientists, 20.Nutrition,
                    21.Hi-tech, 22.Feathered Friends, 23.Cinema of India, 24.Bollywood Special, 25.Characters who still live in Books,
                    26.Great Men of Indian, 27.Places and Their Association, 28.What's in a Name, 29.Famous People, 
                    30.Invention and Inventore 31.Home Aids, 32.Morine world, 33.Sports Persons, 34.In the News, 35.Glossary to Literature, 
                    36.Great kings of India, 37.Subriquets, 38.Flags That Fly High, 39.Around the world, 40.Electrical Symbols, 41.Mixed Bag,
                    42.Animal World, 43.Cricket, 44.Literature, 45.Anagrams, 46.Indian in Space, 47.India Mythology, 
                    48.Imprints on the sanda of Time, 49.World Achievers, 50.Science Quiz, 51.Globe watch, 52.Our Environment, 
                    53.Sports Memorabilia, 54.Proverbs on Numbers, 55.Indian Authors, 56.Place of Pilgrimage, 57.The Accelerators,
                    58.Famous Rulers, 59.Holly wood, 60.Hello Doctor, 61.Mathemagic, 62.Mixed Bag, 63.Fun Quiz, 64.Think it out,
                    65.Mathematics Fun, 66.Brain Exerciser, 67.The Pandemic Quiz, 68.Tokyo 2020 Paralympic Games. 
                    <h3>Half Yearly</h3>
                    1.The world of Animals, 2.All about Tennis, 3.Indian Music, 4.Animal Homes, 5.Literature Quiz, 6.Indin Achievers, 
                    7.Indian Environmentalists, 8.Who Am I ?, 9.Information Technology, 10.Terms That seem A like , 11.Observation, 
                    12.The world of plants, 13.Films and their Inspiration, 14.Sporting Terms, 15.Ask More on India Literature,
                    16.One word Substituation, 17.Our Nation, 18.The Constitution of India, 19.Scholars/Scientists, 20.Nutrition,
                    21.Hi-tech, 22.Feathered Friends, 23.Cinema of India, 24.Bollywood Special, 25.Characters who still live in Books,
                    26.Great Men of Indian, 27.Places and Their Association, 28.What's in a Name, 29.Famous People, 
                    30.Invention and Inventore 31.Home Aids, 32.Morine world, 33.Sports Persons, 34.In the News.
                    <h3>Final Exam</h3>
                    35.Glossary to Literature, 
                    36.Great kings of India, 37.Subriquets, 38.Flags That Fly High, 39.Around the world, 40.Electrical Symbols, 41.Mixed Bag,
                    42.Animal World, 43.Cricket, 44.Literature, 45.Anagrams, 46.Indian in Space, 47.India Mythology, 
                    48.Imprints on the sanda of Time, 49.World Achievers, 50.Science Quiz, 51.Globe watch, 52.Our Environment, 
                    53.Sports Memorabilia, 54.Proverbs on Numbers, 55.Indian Authors, 56.Place of Pilgrimage, 57.The Accelerators,
                    58.Famous Rulers, 59.Holly wood, 60.Hello Doctor, 61.Mathemagic, 62.Mixed Bag, 63.Fun Quiz, 64.Think it out,
                    65.Mathematics Fun, 66.Brain Exerciser, 67.The Pandemic Quiz, 68.Tokyo 2020 Paralympic Games.
                    <hr/>
                    <h3>Maths</h3>
                    1.Integers, 2.Fraction, 3.Decimals, 4.Rational Numbers, 5.Exponents, 6.Algebratic Expression,
                    7.Linear Equations in one variable, 8.Ratio and Proportion, 9.Unitary Method, 10.Percentage, 11.Profit and Loss,
                     12.Simple Interest, 13.Lines and Angles, 14.Properties of Parallel Lines, 15.Properties of Triagles, 
                     16.Congruence, 17.Construction, 18.Reflection and Rotational Symmetery, 19.Three Diamension Shape,
                     20.Mensuration, 21.Collection and Organisation of Data (Mean, Median, and Mode), 22.Bar Graph,
                     23.Probability, 24.Activities.
                     <h3>P.T-1</h3>
                     1.Integers, 2.Fraction, 3.Decimals.
                     <h3>Half Yearly</h3>
                     4.Rational Numbers, 5.Exponents, 6.Algebratic Expression,
                     7.Linear Equations in one variable, 8.Ratio and Proportion, 9.Unitary Method, 10.Percentage, 11.Profit and Loss,
                     12.Simple Interest.
                      <h3>P.T-2</h3>
                      13.Lines and Angles, 14.Properties of Parallel Lines, 15.Properties of Triagles.
                      <h3>Final Exam</h3>
                      15.Properties of Triagles, 
                     16.Congruence, 17.Construction, 18.Reflection and Rotational Symmetery, 19.Three Diamension Shape,
                     20.Mensuration, 21.Collection and Organisation of Data (Mean, Median, and Mode), 22.Bar Graph,
                     23.Probability, 24.Activities.
                     <hr/>
                     <h3>Science</h3>
                     1.Nutrition in plants, 2.Nutrition in Animals, 3. , 4.Heat, 5.Acids, Bases, and Salts, 
                     6.Physical and Chemical Changes, 7. , 8. , 9. , 10.Respiration in Organisms, 11. , 12.Reproduction,
                     13.Motion and Time, 14.Electric Current an its Effects, 15.Light, 16. , 17.Forests: Our Lifeline, 18.Waste water Story.
                     <h3>P.T-1</h3>
                     1.Nutrition in plants, 4.Heat.
                     <h3>Half Yearly</h3>
                     2.Nutrition in Animals, 5.Acids, Bases, and Salts, 13.Motion and Time, 10. Respiration in Organisms,
                     1.Nutrition in Plants, 4.Heat.
                     <h3>P.T-2</h3>
                     6.Physical and Chemicl Changes, 14.Electric Current and its Effects. 
                     <h3>Final Exam</h3>
                     4.Heat, 5.Acids Bases and Salts, 12.Reproduction in plants, 15.Light, 17.Forests: Our Lifeline,
                     18.Wastewater Story, 19.Electric Current and its Effects.
                     <hr/>
                     <h3>History</h3>
                     1.Tracing Changes, 2.New Kings and Kingdoms, 3.The Delhi Saltans, 4.The Mughals Empire, 5.Rulers And Buildings, 6.Towns, Traders And Craftspersons,
                     7.Tribes Nomads And Settled Communities, 8.Devotional Paths To the Divine, 9.The Making of Regional Cultures,
                     10.Eighteen - Century Pollitical formations.
                     <h3>P.T-1</h3>
                     1.Tracing Changes.
                     <h3>Half Yearly Exam</h3>
                     2.New Kings and Kingdoms, 3.The Delhi Saltans, 4.The Mughals Empire, 5.Rulers And Buildings.
                     <h3>P.T-2</h3>
                     6.Towns, Traders And Craftspersons.
                     <h3>Final Exam</h3>
                     .Tribes Nomads And Settled Communities, 8.Devotional Paths To the Divine, 9.The Making of Regional Cultures,
                     10.Eighteen - Century Pollitical formations.
                     <hr/>
                     <h3>Geoghraphy</h3>   
                     1.Environment, 2.Inside our Earth, 3.Our Changing Earth, 4.Earth, 6.Natural Vegetation and Wildlife, 7.Human Environment Settlement,
                     7.Transport and Communication, 8.Human Environment Interaction, 9.The Tropical and Subtropical Region, 9.Life in the Deserts.
                     <h3>P.T-1</h3>
                     1.Environment, 
                     <h3>Half Yearly</h3>
                     3.Our Changing Earth, 2.Inside our Earth.
                     Air
                     <h3>P.T-2</h3>
                     Natural Vegetation and Wildlife.
                     <h3>Final Exam</h3>
                     7.Transport and Communication, 8.Human Environment Interaction, 9.The Tropical and Subtropical Region, 9.Life in the Deserts.
                     <hr/>

                     <h3>Civics</h3>
                     1.On Equality, 2.Role of the Government in Health, 3.How the State Government work, 4.Growing up as Boys and Girls,
                     5.Women change the world, 6.Understanding Media, 7.Understanding Advertising, 8.Markets Around Us, 9.A Shirt in the Market,
                     10.Struggles for Equality. 
                     <h3>P.T-1</h3>
                     1.On Equality, 2.Role of the Government in Health.
                     <h3>Half Yerly</h3>
                     3.How the State Government work, 4.Growing up as Boys and Girls,
                     5.Women change the world.
                     <h3>P.T-2</h3>
                     6.Understanding Media.
                     <h3>Final Exam</h3>
                     7.Understanding Advertising, 8.Markets Around Us, 9.A Shirt in the Market,
                     10.Struggles for Equality.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='10'>
                    <Accordion.Header>Class VIII Syallubus</Accordion.Header>
                    <Accordion.Body>
                    <h3>English Trasure</h3>
                    1.The winner's Cup, 2.The Road Not Taken, 3.The New School, 4.Pip Overcomes His fears, 5.Where the Mind Is without fear,
                    6.The Grand Trout, 7.My Nose, 8.The Mysterious Letters, 9.The Listerners, 10.On Social Networking, 11.The Real Gamem 12.Taking Fight, 13.Because I'm a girl.
                    <h3>P.T-1</h3>
                    1.The winner's Cup, 2.The Road Not Taken, 3.The New School.
                    <h3>Half Yearly</h3>
                    4.Pip Overcomes His fears, 5.Where the Mind Is without fear,
                    6.The Grand Trout, 7.My Nose.
                    <h3>P.T-2</h3>
                    8.The Mysterious Letters, 9.The Listerners, 10.On Social Networking.
                    <h3>Final Exam</h3>
                    11.The Real Gamem 12.Taking Fight, 13.Because I'm a girl.
                    <hr/>
                    <h3>Grammer Way</h3>
                    1.Parts of Speech, 2.Word formation, 3.Determiners, 4.Adjectives of Comparision and order of Adjectives, 5.The Present Tense,
                    6.The Past Tense, 7.The future Tense, 8.Modals, 9.Conditional Sentence, 10.Infinitives, 11.Grounds, 12.Particles, 13.Subject-Verb Agreement,
                    14.Adverbs, 15.Preposition, 16.Types of Conjunction, 17.Phrases and Clsuses, 18.Restrictive and Non-restrictive clauses,
                    19.Simple, Complex and Compund Senetences, 20.Transformation of Sentences, 21.Active and Passive voice, 22.Direct and Indirect Speech,
                    23.Punctuation, 24.Words likely to be confused, 25.Word power, 26.Reading Comprehension, 27.Composiition.
                    <h3>P.T-1</h3>
                    1.Parts of Speech, 2.Word formation, 3.Determiners, 4.Adjectives of Comparision and order of Adjectives, 5.The Present Tense,
                    6.The Past Tense, 7.The future Tense.
                    <h3>Half Yearly</h3>
                    8.Modals, 9.Conditional Sentence, 10.Infinitives, 11.Grounds, 12.Particles, 13.Subject-Verb Agreement,
                    14.Adverbs, 15.Preposition.
                    <h3>P.T-2</h3>
                    16.Types of Conjunction, 17.Phrases and Clsuses, 18.Restrictive and Non-restrictive clauses,
                    19.Simple, Complex and Compund Senetences, 20.Transformation of Sentences, 21.Active and Passive voice.
                    <h3>Final Exam</h3>
                    22.Direct and Indirect Speech,
                    23.Punctuation, 24.Words likely to be confused, 25.Word power, 26.Reading Comprehension, 27.Composiition.
                   <hr className='color-red'/>
                    <h3>Mathematics</h3>
                    1.Rational Numbers, 2.Components, 3.Squares and Square Roots, 4.Cubes and Cube Roots, 5.Playing with Numbers, 6.Operations on Algebric Expression, 
                    7.Factorisation, 8.Linear Equations, 9.Percentage, 10.Profit and Loss, 11.Compound Interest, 12.Direct and Inverse Proportions, 13.Time and Work, 
                    14.Polygons, 15.Quadrilaterals, 16.Paralellograms, 17.Area of a Trapezium and a Polygon, 18.Three - Dimension
                    Figures. 20.Volume and Surface Area of Solids, 21.Data Handling, 22.Introduction, to Co-ordinate Geometery, 23.Line graphs and Linear Graphs, 24.Pie 
                    Charts, Probability.
                    
                    <h3>P.T-1</h3>
                    1.Rational Numbers, 2.Components, 3.Squares and Square Roots, 4.Cubes and Cube Roots.
                    <h3>Half Yealry</h3>
                    5.Playing with Numbers, 6.Operations on Algebric Expression, 
                    7.Factorisation, 8.Linear Equations, 9.Percentage, 10.Profit and Loss, 11.Compound Interest, 12.Direct and Inverse Proportions, 13.Time and Work.
                    <h3>P.T-2</h3>
                    14.Polygons, 15.Quadrilaterals, 16.Paralellograms.
                    <h3>Final Exam</h3>
                    18.Three - Dimension
                    Figures. 20.Volume and Surface Area of Solids, 21.Data Handling, 22.Introduction, to Co-ordinate Geometery, 23.Line graphs and Linear Graphs, 24.Pie 
                    Charts, 25.Probability.
                    <hr/>
                    <h3>Science</h3> 
                    1.1.Crop Production and Management, 1.2.Force and Pressure, 2.Microorganisms: Friend and Foe, 6.Combustion and Flame, 7.Conservation of Plants and Animals, 9.Reproduction in Animals, 
                    10.Reaching the age of adolescence, 16.Light, 15, Some Natural Phenomena.
                    <h3>P.T-1</h3>
                    1.1.Crop Production and Management, 1.2.Force and Pressure.
                    <h3>Half Yearly</h3>
                    2.Microorganisms: Friend and Foe, 12.Friction, 13.Sound, 14.Chemical Effects of electric current.
                    <h3>P.T-2</h3>
                    6.Combustion and flame, Conservation of Plants and Animals.
                    <h3>Final Exam</h3>
                    9.Reproduction in Animals, 
                    10.Reaching the age of adolescence, 16.Light, 15.Some Natural Phenomena.
                    <hr/>
                    <h3>History</h3>
                    1.Introduction - How, When and Where, 2.From Trade to Territory, 3.Ruling the country side, 4.Tribals, Dikus and the vision of a Golden Age,
                    5.When People Rebel, 6.Civilising the "Native", Educating the Nation, 7.Women, Caste and Reform, 8.The making of the National Movement - 1870s-1947s.
                    <h3>P.T-1</h3>
                    1.Introduction - How, When and Where.
                    <h3>Half Yearly</h3>
                    2.From Trade to Territory.
                    <h3>P.T-2</h3>
                    5.When People Rebel.
                    <h3>Final Exam</h3>
                    7.Women, Caste and Reform, 8.The making of the National Movement - 1870s-1947s.
                    <hr/>
                    <h3>Civics</h3>
                    1.The Indian Constitution, 2.Understanding Secularism, 3.Parliament and the making of laws, 4.Judiciary, 5.Understanding Margination, 6.Confronting Mariginalisation,
                    7.Public Facilities, 8.Law and Social Justice.
                    <h3>P.T-1</h3>
                    1.The Indian Constitution.
                    <h3>Half Yearly</h3>
                    2.Understanding Secularism, 3.Parliament and the making of laws, 4.Judiciary.
                    <h3>P.T-2</h3>
                    5.Understanding Margination.
                    <h3>Final Exam</h3>
                    6.Confronting Mariginalisation,
                    7.Public Facilities, 8.Law and Social Justice.
                    <hr/>
                    <h3>Geoghraphy</h3>
                    1.Resources, 2.Land, Soil, Water, Natural, Vegetation and wildlife Resources, 3.Agriculture, 4.Industries, 5.Human Resources,
                    <h3>Half Yearly</h3>
                    1.Resources, 2.Land, Soil, Water, Natural.
                    <h3>Final Exam</h3>
                    3.Agriculture, 4.Industries, 5.Human Resources.
                    <hr/>
                    <h3>G.K</h3>
                    1.The world of Animal, 2.Sports Terms, 3.Yoga for you, 4.Adjectives, 5.Literature facts, 6.World Geoghraphy, 7.
                    National Anthems, 8.Atom and energy, 9.Great women of Indian, 10.Mixed Bag, 11.Science facts, 12.Green World, 13.Sound words,
                    14.A Sporting Mix, 15.Unstitutes of India, 16.Indian History, 17.Great People, 18.Country Facts, 19.Scientific, 20.The Saints of Science, 21.Travel Bag, 22.Strat-Ups in India, 23.Flight World, 24.Musical Instruments, 25.Bollywood Directors Special, 26.Antonym's and Synoms, 27.Wildlife Habitat,
                    28.Who Said it ?, 29.Historical Events, 30.Ancients Civilisations. 31.Hi-tech, 32.Awards and Achievements, 33.The Human Body,
                    34.Water world, 35.Famous Artists, 36.Dances of India, 37.Literature facts, 38.One word Substitutions, 
                    39.Places of Importance, 40.The United Nations, 41.Scientific Instruments, 42.Science fact or Not, 43.Number Game, 44.Insect world,
                    45.Test Cricket, 46.Sport Quiz, 47.Around the world, 48.Greats of India, 49.We are People of My hues,
                    50.Never said Before, 51.Medical terms, 52.Study of Life and its Branches, 53.Geoghraphy Quiz, 54.Mixed Bag,
                    55.Cinema, 56.Small is Beustiful, 57.Literature Quiz, 58.We the people, 59.Fact Match.
                    60.Wonderous world, 61.Science is fun, 62.Mixed Bag, 63.Boxed In!, 64.Nimble Numbers, 65.The Covid-19 Quiz, 
                    66.Padma Awards 2022.
                    <h3>Half Yearly</h3>
                    1.The world of Animal, 2.Sports Terms, 3.Yoga for you, 4.Adjectives, 5.Literature facts, 6.World Geoghraphy, 7.
                    National Anthems, 8.Atom and energy, 9.Great women of Indian, 10.Mixed Bag, 11.Science facts, 12.Green World, 13.Sound words,
                    14.A Sporting Mix, 15.Unstitutes of India, 16.Indian History, 17.Great People, 18.Country Facts, 19.Scientific, 20.The Saints of Science, 21.Travel Bag, 22.Strat-Ups in India, 23.Flight World, 24.Musical Instruments, 25.Bollywood Directors Special, 26.Antonym's and Synoms, 27.Wildlife Habitat,
                    28.Who Said it ?, 29.Historical Events, 30.Ancients Civilisations. 31.Hi-tech, 32.Awards and Achievements, 33.The Human Body,
                    <h3>Final Exam</h3>
                    34.Water world, 35.Famous Artists, 36.Dances of India, 37.Literature facts, 38.One word Substitutions, 
                    39.Places of Importance, 40.The United Nations, 41.Scientific Instruments, 42.Science fact or Not, 43.Number Game, 44.Insect world,
                    45.Test Cricket, 46.Sport Quiz, 47.Around the world, 48.Greats of India, 49.We are People of My hues,
                    50.Never said Before, 51.Medical terms, 52.Study of Life and its Branches, 53.Geoghraphy Quiz, 54.Mixed Bag,
                    55.Cinema, 56.Small is Beustiful, 57.Literature Quiz, 58.We the people, 59.Fact Match.
                    60.Wonderous world, 61.Science is fun, 62.Mixed Bag, 63.Boxed In!, 64.Nimble Numbers, 65.The Covid-19 Quiz, 
                    66.Padma Awards 2022.
                    <hr/>
                    <h3>Computer</h3>
                    1.Windows Movie Makes, 2.Flash CS4, 3.QBASIC, 4.Visual Basic, 5.Database, 6.Microsoft Access, 7.Photoshop CS5,
                    8.Internet and E-Commerce, 9.How Printers and Scanners work, 10.Cyber law and Ethics, 11.Mobile Computing.
                    <h3>Half Yearly</h3>
                    1.Windows Movie Makes, 2.Flash CS4, 3.QBASIC, 4.Visual Basic, 5.Database, 6.Microsoft Access.
                    <h3>Final Exam</h3>
                    7.Photoshop CS5,
                    8.Internet and E-Commerce, 9.How Printers and Scanners work, 10.Cyber law and Ethics, 11.Mobile Computing.
                    </Accordion.Body>
                </Accordion.Item>
                
          </Accordion>
        </div>
    </div>
  )
}

export default Syallubus;
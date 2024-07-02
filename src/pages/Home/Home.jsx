import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/addmissions.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/nng3.JPG';
import Blog2Img from '../../utils/images/nng2.JPG';
import Blog3Img from '../../utils/images/nng1.JPG';

const blogs = [
    
    {
        id: 1,
        img: [Blog2Img],
    //      title: 'Welcome ceremony',
    //    description: "Hon'ble Secretary Vinoy Kr Pandey with Shri Ajay Michyari, Ex-chief General Manager, RBI."
    },
    {
        id: 2,
        img: [Blog1Img],
        title: 'Health Checkup Camp', 
        description: 'Identifying & addressing health issues to the participants.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Durga - Puja Celebration',
        description: "Little Lord Rama and Mata Sita offering card to the respected Director, Mrs. Swapna Pandey."
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
<path d="M0 0 C1.11375 0.474375 2.2275 0.94875 3.375 1.4375 C6.50030369 3.29779981 8.54142216 5.30727189 11 8 C11.63164062 8.65097656 12.26328125 9.30195313 12.9140625 9.97265625 C24.66851619 22.45350876 26.63071941 35.3740747 26.3125 51.94921875 C26.05037016 57.89410517 24.81917756 62.7468741 22 68 C21.56429687 68.8559375 21.12859375 69.711875 20.6796875 70.59375 C14.51447626 81.77872339 5.10081649 89.77664978 -7 94 C-21.30305251 97.24877594 -36.74179234 96.43403484 -49.2109375 88.61328125 C-60.25782258 80.88892674 -68.1362362 71.27817094 -71 58 C-71.40120039 53.82301647 -71.42074677 49.69345406 -71.375 45.5 C-71.38660156 44.43652344 -71.39820312 43.37304688 -71.41015625 42.27734375 C-71.35598384 27.5605062 -66.05128499 18.17191048 -56 7.625 C-41.94375865 -5.85131783 -17.35696641 -9.04146159 0 0 Z M-47 19.4375 C-49.97366883 22.72874511 -52.04329603 26.01670978 -54 30 C-54.5775 31.155 -55.155 32.31 -55.75 33.5 C-58.28178602 40.60847613 -58.25191784 50.08097936 -56.125 57.3125 C-53.29159733 60.89592102 -50.88508989 61.38346942 -46.44921875 61.9921875 C-43.17005465 62.00264735 -41.4214056 61.18707602 -39 59 C-37.57848655 56.15697309 -37.76077394 54.16974528 -38 51 C-38.94992562 48.64583651 -39.94952356 46.31104818 -41 44 C-42.91712854 37.20290792 -42.49077161 31.25861576 -39.75390625 24.859375 C-38.97137745 22.92940759 -38.46217247 21.02817434 -38 19 C-36.68 19 -35.36 19 -34 19 C-34.5259375 20.2065625 -34.5259375 20.2065625 -35.0625 21.4375 C-36.2070589 25.78682382 -36.23356907 29.65353179 -35 34 C-34.00941431 35.0093265 -33.00883229 36.00891099 -32 37 C-29.5345589 42.80342513 -27.364053 49.76940587 -29.7265625 55.87890625 C-31.79246216 59.90153201 -33.82788498 62.29322567 -38 64 C-42.87001908 65.10911408 -47.09492672 65.10364149 -52 64 C-48.19735766 67.92939709 -44.84312907 68.84216172 -39.55859375 69.15625 C-33.76729848 68.80258311 -29.5817645 65.89528567 -25.5 61.9375 C-22.53053098 58.13592702 -22.28745375 54.65678876 -22.203125 49.94140625 C-23.05137233 46.81037567 -23.92541007 45.82750438 -26.01953125 43.44921875 C-30.25015361 38.12347102 -29.70777533 32.78990172 -29.4375 26.25 C-29.41880859 25.12722656 -29.40011719 24.00445312 -29.38085938 22.84765625 C-29.18701933 14.07770377 -29.18701933 14.07770377 -28 10 C-34.83478881 10 -42.16672164 14.79334992 -47 19.4375 Z M-25 10 C-26.36419175 14.09257526 -25.57974426 17.10987977 -24 21 C-22.29710634 23.58299495 -20.46850372 26.04230061 -18.62109375 28.5234375 C-16.36526415 31.96969284 -15.67246423 34.96521459 -15 39 C-12.81509993 36.32357511 -12.81509993 36.32357511 -13 34 C-12.01 34 -11.02 34 -10 34 C-9.97296619 32.06257659 -9.95358875 30.12504521 -9.9375 28.1875 C-9.92589844 27.10855469 -9.91429687 26.02960937 -9.90234375 24.91796875 C-9.86375234 21.93487831 -9.86375234 21.93487831 -11 19 C-8 20 -8 20 -5.8125 23.125 C-2.75465106 29.62880947 -2.59834963 38.40258678 -4.68359375 45.2421875 C-5.44891708 46.8314235 -6.22411187 48.41589506 -7 50 C-7.52087252 53.55929557 -7.76829777 56.80913846 -5.75 59.9375 C-3.16005932 61.50996399 -0.99320192 62.1315373 2.03515625 61.73046875 C2.70417969 61.55128906 3.37320313 61.37210938 4.0625 61.1875 C4.73410156 61.01605469 5.40570313 60.84460938 6.09765625 60.66796875 C8.28739062 59.98731223 8.28739062 59.98731223 11 58 C14.46917676 47.59246973 13.50667598 38.1939989 8.7109375 28.35546875 C3.70802042 19.43315407 -3.0712025 13.49700371 -12.91015625 10.3984375 C-15.39713457 9.92428462 -17.71981927 9.90420815 -20.25 9.9375 C-21.58804688 9.95103516 -21.58804688 9.95103516 -22.953125 9.96484375 C-23.62859375 9.97644531 -24.3040625 9.98804688 -25 10 Z M-65 35 C-65 36.32 -65 37.64 -65 39 C-64.01 38.67 -63.02 38.34 -62 38 C-62 37.01 -62 36.02 -62 35 C-62.99 35 -63.98 35 -65 35 Z M17 35 C17.33 36.32 17.66 37.64 18 39 C18.99 38.67 19.98 38.34 21 38 C20.67 37.01 20.34 36.02 20 35 C19.01 35 18.02 35 17 35 Z M-18 51 C-19.45089193 53.30435777 -20.00798044 54.68876297 -19.9375 57.4375 C-18.16365646 62.28600567 -14.49067446 64.908182 -10.125 67.375 C-6.060578 69.25088708 -3.368878 69.27094633 1 68 C3.4583002 66.79977108 5.68058017 65.46738806 8 64 C5.39923176 62.69961588 4.60786078 63.29657182 1.875 64.125 C-3.14979319 65.3144438 -6.59331448 64.67798576 -11 62 C-14.38161476 58.7073751 -15.74027286 55.51402225 -17 51 C-17.33 51 -17.66 51 -18 51 Z " fill="#70ABC3" transform="translate(169,4)"/>
<path d="M0 0 C6.34623635 1.81742063 11.75085355 4.94696098 16 10 C16.62519531 10.64839844 17.25039062 11.29679688 17.89453125 11.96484375 C29.68474204 24.41128148 31.63045821 37.38767968 31.3125 53.94921875 C31.05037016 59.89410517 29.81917756 64.7468741 27 70 C26.56429687 70.8559375 26.12859375 71.711875 25.6796875 72.59375 C19.51716929 83.77383768 10.10118358 91.78519148 -2 96 C-4.60546875 96.44921875 -4.60546875 96.44921875 -7.1875 96.6875 C-8.04730469 96.77386719 -8.90710938 96.86023438 -9.79296875 96.94921875 C-12 97 -12 97 -14 96 C-13.67 95.34 -13.34 94.68 -13 94 C-13.495 93.505 -13.495 93.505 -14 93 C-14 91.68 -14 90.36 -14 89 C-14.66 88.67 -15.32 88.34 -16 88 C-16 89.98 -16 91.96 -16 94 C-17.0725 93.835 -18.145 93.67 -19.25 93.5 C-23.03028752 92.91189085 -23.03028752 92.91189085 -27 93 C-27 91.02 -27 89.04 -27 87 C-27.99 87 -28.98 87 -30 87 C-29.67 88.65 -29.34 90.3 -29 92 C-30.32 92 -31.64 92 -33 92 C-33.33 91.34 -33.66 90.68 -34 90 C-34.99 90 -35.98 90 -37 90 C-37.66 89.67 -38.32 89.34 -39 89 C-39 88.34 -39 87.68 -39 87 C-38.34 87 -37.68 87 -37 87 C-37.99 84.03 -37.99 84.03 -39 81 C-38.34 81.268125 -37.68 81.53625 -37 81.8125 C-33.35060933 83.25705047 -29.67754567 84.62871178 -26 86 C-26 85.34 -26 84.68 -26 84 C-19.125 84.875 -19.125 84.875 -18 86 C-16.37146465 85.93579251 -14.74550788 85.7987936 -13.125 85.625 C-12.24070313 85.53476563 -11.35640625 85.44453125 -10.4453125 85.3515625 C-7.86893096 85.05520218 -7.86893096 85.05520218 -5 84 C-4.67 83.34 -4.34 82.68 -4 82 C-4.65613281 82.15855469 -5.31226563 82.31710938 -5.98828125 82.48046875 C-17.59219188 84.48218096 -28.70236185 83.91987917 -38.6015625 77.24609375 C-40.84969277 75.57913647 -43.0015823 73.95980093 -45 72 C-45 71.34 -45 70.68 -45 70 C-44.175 70.165 -43.35 70.33 -42.5 70.5 C-36.86344214 71.30522255 -31.05947766 72.06231542 -26 69 C-24.38181287 67.21256371 -22.8826507 65.38513201 -21.4296875 63.4609375 C-20.95789063 62.97882813 -20.48609375 62.49671875 -20 62 C-19.01 62 -18.02 62 -17 62 C-16.67 61.34 -16.34 60.68 -16 60 C-15.01 60.66 -14.02 61.32 -13 62 C-13 62.66 -13 63.32 -13 64 C-12.12794922 64.42732422 -12.12794922 64.42732422 -11.23828125 64.86328125 C-9.84087291 65.57295983 -8.45915839 66.31558387 -7.10546875 67.10546875 C-3.69097288 69.03177294 -1.48398037 69.99135749 2.5 70.0625 C7.01102735 68.69308098 10.70912987 67.49099061 14 64 C18.04897133 54.72785566 18.11914201 44.97432798 14.984375 35.49609375 C12.59626377 29.440526 10.23809232 24.9035465 5 21 C5 20.34 5 19.68 5 19 C4.21625 18.71125 3.4325 18.4225 2.625 18.125 C0 17 0 17 -2 15 C-1.01 15 -0.02 15 1 15 C1 14.34 1 13.68 1 13 C2.9375 12.4375 2.9375 12.4375 5 12 C5.495 12.495 5.495 12.495 6 13 C6.99 12.67 7.98 12.34 9 12 C9 12.66 9 13.32 9 14 C8.34 14 7.68 14 7 14 C7 14.66 7 15.32 7 16 C8.32 16.33 9.64 16.66 11 17 C11.495 19.475 11.495 19.475 12 22 C13.32 21.01 14.64 20.02 16 19 C14.90101298 15.70303895 14.05402613 14.95329411 11.4375 12.8125 C10.79683594 12.28269531 10.15617187 11.75289062 9.49609375 11.20703125 C9.00238281 10.80871094 8.50867188 10.41039062 8 10 C8.66 9.67 9.32 9.34 10 9 C10 8.34 10 7.68 10 7 C9.01 7 8.02 7 7 7 C7 7.66 7 8.32 7 9 C3.22454612 7.90931332 0.52956528 7.0916909 -2 4 C-1.01 3.67 -0.02 3.34 1 3 C-0.32 2.67 -1.64 2.34 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z M22 37 C22.33 38.32 22.66 39.64 23 41 C23.99 40.67 24.98 40.34 26 40 C25.67 39.01 25.34 38.02 25 37 C24.01 37 23.02 37 22 37 Z " fill="#71ACC4" transform="translate(164,2)"/>
<path d="M0 0 C0.97195312 -0.01224609 1.94390625 -0.02449219 2.9453125 -0.03710938 C8.03420446 -0.04750902 12.23758324 0.15221041 17 2.1875 C16.67 2.8475 16.34 3.5075 16 4.1875 C16.66 4.5175 17.32 4.8475 18 5.1875 C17.67 5.8475 17.34 6.5075 17 7.1875 C19.31 8.5075 21.62 9.8275 24 11.1875 C24 10.5275 24 9.8675 24 9.1875 C24.99 9.1875 25.98 9.1875 27 9.1875 C27 10.5075 27 11.8275 27 13.1875 C28.51009927 14.96510758 28.51009927 14.96510758 30.5 16.4375 C31.1496875 16.95828125 31.799375 17.4790625 32.46875 18.015625 C32.9740625 18.40234375 33.479375 18.7890625 34 19.1875 C33.1875 21.125 33.1875 21.125 32 23.1875 C31.01 23.5175 30.02 23.8475 29 24.1875 C26 20.4375 26 20.4375 26 18.1875 C25.34 18.1875 24.68 18.1875 24 18.1875 C24 17.5275 24 16.8675 24 16.1875 C24.66 16.1875 25.32 16.1875 26 16.1875 C26 15.5275 26 14.8675 26 14.1875 C25.01 15.1775 24.02 16.1675 23 17.1875 C22.34 16.8575 21.68 16.5275 21 16.1875 C20.01 15.8575 19.02 15.5275 18 15.1875 C18 15.8475 18 16.5075 18 17.1875 C15.66666667 16.85416667 13.33333333 16.52083333 11 16.1875 C9.76378906 16.01089844 8.52757812 15.83429687 7.25390625 15.65234375 C3.8359375 15.1640625 0.41796875 14.67578125 -3 14.1875 C-2.8797189 21.52464713 -0.84217809 25.63345832 3.27734375 31.65625 C5.15696312 34.41813968 6.60899593 37.16002055 8 40.1875 C8.495 39.1975 8.495 39.1975 9 38.1875 C9.99 38.1875 10.98 38.1875 12 38.1875 C11.505 30.7625 11.505 30.7625 11 23.1875 C15 24.1875 15 24.1875 17.25 27.3125 C20.23166043 33.82972617 20.39658928 42.60668716 18.31640625 49.4296875 C17.55108292 51.0189235 16.77588813 52.60339506 16 54.1875 C15.46497309 57.15801399 15.58993769 59.11203268 16 62.1875 C17.72111465 64.60842035 17.72111465 64.60842035 21 65.1875 C24.74356168 64.81419539 28.34739673 64.07666262 32 63.1875 C32 64.1775 32 65.1675 32 66.1875 C26.10570767 69.16540969 21.5401272 71.0385541 15.0390625 69.0859375 C9.85579365 66.80212172 6.59148067 63.22649019 4 58.1875 C3.7525 58.991875 3.505 59.79625 3.25 60.625 C2.8375 61.470625 2.425 62.31625 2 63.1875 C-0.078125 63.84765625 -0.078125 63.84765625 -2 64.1875 C-1.93039063 63.341875 -1.86078125 62.49625 -1.7890625 61.625 C-1.73492187 60.490625 -1.68078125 59.35625 -1.625 58.1875 C-1.55539063 57.07375 -1.48578125 55.96 -1.4140625 54.8125 C-2.03420627 50.9758772 -2.55006254 50.31619062 -4.99609375 47.55078125 C-9.29711312 42.27376133 -8.70647597 36.90997958 -8.4375 30.375 C-8.41880859 29.24384766 -8.40011719 28.11269531 -8.38085938 26.94726562 C-8.20111707 18.7908512 -8.20111707 18.7908512 -7 15.1875 C-11.72065967 16.73019924 -16.41664092 18.26544619 -21 20.1875 C-21 19.5275 -21 18.8675 -21 18.1875 C-22.65 18.5175 -24.3 18.8475 -26 19.1875 C-26.33 18.1975 -26.66 17.2075 -27 16.1875 C-27.66 15.5275 -28.32 14.8675 -29 14.1875 C-27.68 13.1975 -26.36 12.2075 -25 11.1875 C-25.33 10.1975 -25.66 9.2075 -26 8.1875 C-23.53339578 4.29785489 -21.41547558 2.44906445 -17 1.1875 C-11.34605693 -0.0342511 -5.75592239 0.00381692 0 0 Z " fill="#73ADC5" transform="translate(147,-0.1875)"/>
<path d="M0 0 C2 2 2 2 2.375 4.875 C3.12835579 8.64177897 4.21231994 9.44462661 7 12 C10.01339189 15.75320666 12.46559366 19.39678098 14 24 C14.33 23.34 14.66 22.68 15 22 C15.99 22 16.98 22 18 22 C17.67 17.05 17.34 12.1 17 7 C21 8 21 8 23.25 11.125 C26.23166043 17.64222617 26.39658928 26.41918716 24.31640625 33.2421875 C23.55108292 34.8314235 22.77588813 36.41589506 22 38 C21.46497309 40.97051399 21.58993769 42.92453268 22 46 C23.72111465 48.42092035 23.72111465 48.42092035 27 49 C30.74356168 48.62669539 34.34739673 47.88916262 38 47 C38 47.99 38 48.98 38 50 C32.10570767 52.97790969 27.5401272 54.8510541 21.0390625 52.8984375 C15.85579365 50.61462172 12.59148067 47.03899019 10 42 C9.7525 42.804375 9.505 43.60875 9.25 44.4375 C8.63125 45.7059375 8.63125 45.7059375 8 47 C5.921875 47.66015625 5.921875 47.66015625 4 48 C4.05800781 47.13117187 4.11601562 46.26234375 4.17578125 45.3671875 C4.73605657 38.11977076 4.73605657 38.11977076 1.5 32 C-2.46955025 27.2365397 -1.39816508 21.96362814 -1 16 C2.0100527 17.50502635 2.53538751 20.01444377 4 23 C5.27801732 25.04390495 6.62971867 27.01545462 8 29 C6.75813755 24.03255019 4.52828451 20.81194545 1.33984375 16.9296875 C-1.64170641 12.63555986 -1.15983566 8.03482317 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#B5B2B4" transform="translate(141,16)"/>
<path d="M0 0 C1.32 0.66 2.64 1.32 4 2 C4 2.66 4 3.32 4 4 C4.57234375 4.28617187 5.1446875 4.57234375 5.734375 4.8671875 C9.15625 6.578125 12.578125 8.2890625 16 10 C16 10.66 16 11.32 16 12 C18.64 12 21.28 12 24 12 C22.62740684 15.29142237 21.29739691 16.79419953 18.25 18.625 C17.59515625 19.02976562 16.9403125 19.43453125 16.265625 19.8515625 C7.72008657 24.18326646 -2.7207117 24.35834345 -12.015625 22.34765625 C-18.01874485 20.14840008 -23.4381741 16.47367468 -28 12 C-28 11.34 -28 10.68 -28 10 C-27.175 10.165 -26.35 10.33 -25.5 10.5 C-19.86344214 11.30522255 -14.05947766 12.06231542 -9 9 C-7.38181287 7.21256371 -5.8826507 5.38513201 -4.4296875 3.4609375 C-3.95789063 2.97882813 -3.48609375 2.49671875 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#42447A" transform="translate(147,62)"/>
<path d="M0 0 C1.32 0 2.64 0 4 0 C3.9278125 0.74765625 3.855625 1.4953125 3.78125 2.265625 C3.64203125 3.74289063 3.64203125 3.74289063 3.5 5.25 C3.36078125 6.71179688 3.36078125 6.71179688 3.21875 8.203125 C3.04199832 10.46302153 3 12.73320193 3 15 C3.99 15.33 4.98 15.66 6 16 C9.12422561 22.24845121 10.71069637 28.01148571 10 35 C7.81471671 39.92368809 5.1385616 43.96847565 0 46 C-5.97189197 47.37059816 -10.62158825 47.18159568 -16 44 C-16.66 43.01 -17.32 42.02 -18 41 C-17.67 40.01 -17.34 39.02 -17 38 C-16.67 38.474375 -16.34 38.94875 -16 39.4375 C-12.96615219 41.8076936 -9.79038849 42.01528382 -6 42 C-3.59313185 41.34317691 -3.59313185 41.34317691 -2 40 C-0.57848655 37.15697309 -0.76077394 35.16974528 -1 32 C-1.94992562 29.64583651 -2.94952356 27.31104818 -4 25 C-6.61069747 15.7438908 -4.43305783 8.18410677 0 0 Z " fill="#B5B3B7" transform="translate(131,23)"/>
<path d="M0 0 C-0.99 1.485 -0.99 1.485 -2 3 C0.84678781 3 3.22519413 2.56919095 6 2 C8.66666667 2 11.33333333 2 14 2 C14 2.66 14 3.32 14 4 C14.99 3.34 15.98 2.68 17 2 C19.33199388 1.92094936 21.66832622 1.91201231 24 2 C24 1.34 24 0.68 24 0 C24.66 0 25.32 0 26 0 C26 0.66 26 1.32 26 2 C27.14339844 1.98839844 28.28679687 1.97679688 29.46484375 1.96484375 C30.95572754 1.95546712 32.44661309 1.94636679 33.9375 1.9375 C35.06961914 1.92493164 35.06961914 1.92493164 36.22460938 1.91210938 C38.14994313 1.90347559 40.07535581 1.94775667 42 2 C43 3 43 3 43.09765625 4.84765625 C43.06510417 6.8984375 43.03255208 8.94921875 43 11 C42.34 11 41.68 11 41 11 C40.34 9.68 39.68 8.36 39 7 C38.34 8.32 37.68 9.64 37 11 C31.52173913 11.36521739 31.52173913 11.36521739 29.125 9.6875 C28 8 28 8 28 5 C27.34 4.67 26.68 4.34 26 4 C26.185625 4.78375 26.37125 5.5675 26.5625 6.375 C27 9 27 9 26 11 C25.34 11 24.68 11 24 11 C24 8.69 24 6.38 24 4 C23.34 4 22.68 4 22 4 C22 6.31 22 8.62 22 11 C19.03 11 16.06 11 13 11 C12.34 9.68 11.68 8.36 11 7 C10.67 8.32 10.34 9.64 10 11 C8.741875 11.020625 7.48375 11.04125 6.1875 11.0625 C5.47980469 11.07410156 4.77210938 11.08570312 4.04296875 11.09765625 C2 11 2 11 -1 10 C-1.825 10.185625 -2.65 10.37125 -3.5 10.5625 C-6 11 -6 11 -9 9 C-9 8.34 -9 7.68 -9 7 C-6.03 7.495 -6.03 7.495 -3 8 C-3 7.34 -3 6.68 -3 6 C-5.475 5.01 -5.475 5.01 -8 4 C-7.625 2.0625 -7.625 2.0625 -7 0 C-4.3333581 -1.33332095 -2.83319697 -0.67102033 0 0 Z M35 4 C36 8 36 8 36 8 Z M3 5 C3 5.99 3 6.98 3 8 C3.66 8 4.32 8 5 8 C5 7.01 5 6.02 5 5 C4.34 5 3.68 5 3 5 Z M18 5 C17.67 5.99 17.34 6.98 17 8 C17.66 8 18.32 8 19 8 C18.67 7.01 18.34 6.02 18 5 Z M31 5 C31 5.99 31 6.98 31 8 C31.66 8 32.32 8 33 8 C33 7.01 33 6.02 33 5 C32.34 5 31.68 5 31 5 Z " fill="#FFFFFF" transform="translate(206,109)"/>
<path d="M0 0 C2 2 2 2 2.375 4.875 C3.12835579 8.64177897 4.21231994 9.44462661 7 12 C11.40935598 16.60978126 12.36273537 19.52037853 12.5 25.9375 C12.29931711 31.67216559 11.32097011 35.80102696 9 41 C8.60919203 42.98956785 8.25149128 44.98806977 8 47 C6.02 47.495 6.02 47.495 4 48 C4.05800781 47.13117187 4.11601562 46.26234375 4.17578125 45.3671875 C4.73605657 38.11977076 4.73605657 38.11977076 1.5 32 C-2.46955025 27.2365397 -1.39816508 21.96362814 -1 16 C2.0100527 17.50502635 2.53538751 20.01444377 4 23 C5.27801732 25.04390495 6.62971867 27.01545462 8 29 C6.75813755 24.03255019 4.52828451 20.81194545 1.33984375 16.9296875 C-1.64170641 12.63555986 -1.15983566 8.03482317 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#D17B4D" transform="translate(141,16)"/>
<path d="M0 0 C0.99 0.4021875 0.99 0.4021875 2 0.8125 C5.64939067 2.25705047 9.32245433 3.62871178 13 5 C13 4.34 13 3.68 13 3 C19.875 3.875 19.875 3.875 21 5 C27.5644128 5.0663072 33.04770603 3.45912224 38.96875 0.7421875 C39.97421875 0.37480469 39.97421875 0.37480469 41 0 C41.66 0.33 42.32 0.66 43 1 C43 3.31 43 5.62 43 8 C42.34 8 41.68 8 41 8 C41 7.34 41 6.68 41 6 C39.02 6.99 39.02 6.99 37 8 C37.66 8 38.32 8 39 8 C39 8.66 39 9.32 39 10 C35.125 9.125 35.125 9.125 34 8 C33.01 10.64 32.02 13.28 31 16 C28.03 15.505 28.03 15.505 25 15 C25.33 14.34 25.66 13.68 26 13 C25.67 12.67 25.34 12.34 25 12 C25 10.68 25 9.36 25 8 C24.34 7.67 23.68 7.34 23 7 C23 8.98 23 10.96 23 13 C21.9275 12.835 20.855 12.67 19.75 12.5 C15.96971248 11.91189085 15.96971248 11.91189085 12 12 C12 10.02 12 8.04 12 6 C11.01 6 10.02 6 9 6 C9.33 7.65 9.66 9.3 10 11 C8.68 11 7.36 11 6 11 C5.67 10.34 5.34 9.68 5 9 C4.01 9 3.02 9 2 9 C1.34 8.67 0.68 8.34 0 8 C0 7.34 0 6.68 0 6 C0.66 6 1.32 6 2 6 C1.34 4.02 0.68 2.04 0 0 Z " fill="#2E393E" transform="translate(125,83)"/>
<path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.99 2 2.98 2 4 C5.20404146 4.85441105 7.28311407 5.15736521 10.5625 4.4375 C11.7690625 4.2209375 11.7690625 4.2209375 13 4 C14 5 14 5 14.09765625 6.84765625 C14.06510417 8.8984375 14.03255208 10.94921875 14 13 C11.03 13 8.06 13 5 13 C4.34 11.35 3.68 9.7 3 8 C2.67 9.32 2.34 10.64 2 12 C1.443125 11.79375 0.88625 11.5875 0.3125 11.375 C-2.65834605 10.89324118 -4.25639505 11.87441848 -7 13 C-7.99 12.67 -8.98 12.34 -10 12 C-10 11.01 -10 10.02 -10 9 C-8.35 9 -6.7 9 -5 9 C-6.65 8.01 -8.3 7.02 -10 6 C-9.3125 4.0625 -9.3125 4.0625 -8 2 C-5.375 1.25 -5.375 1.25 -3 1 C-2.67 2.65 -2.34 4.3 -2 6 C-1.34 4.02 -0.68 2.04 0 0 Z M10 7 C9.67 7.99 9.34 8.98 9 10 C9.66 10 10.32 10 11 10 C10.67 9.01 10.34 8.02 10 7 Z " fill="#FFFFFF" transform="translate(126,107)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.32 2.66 2.64 3 4 C4.65614657 4.38218767 6.32457024 4.71395102 8 5 C8.33 4.67 8.66 4.34 9 4 C11.01964199 3.92755947 13.04167124 3.91622812 15.0625 3.9375 C16.16722656 3.94652344 17.27195313 3.95554687 18.41015625 3.96484375 C19.26480469 3.97644531 20.11945313 3.98804687 21 4 C22.4783226 6.95664519 22.06032783 9.74229737 22 13 C21.34 13 20.68 13 20 13 C19.34 11.68 18.68 10.36 18 9 C17.34 10.32 16.68 11.64 16 13 C12.33333333 13 8.66666667 13 5 13 C4.34 11.68 3.68 10.36 3 9 C2.67 9.99 2.34 10.98 2 12 C1.34 12 0.68 12 0 12 C0 8.04 0 4.08 0 0 Z M10 7 C10 7.99 10 8.98 10 10 C10.66 10 11.32 10 12 10 C12 9.01 12 8.02 12 7 C11.34 7 10.68 7 10 7 Z " fill="#FFFFFF" transform="translate(159,107)"/>
<path d="M0 0 C2.875 -0.125 2.875 -0.125 6 0 C8 2 8 2 8.125 5.125 C8.08375 6.07375 8.0425 7.0225 8 8 C8.33 5.69 8.66 3.38 9 1 C9.99 0.67 10.98 0.34 12 0 C12 2.97 12 5.94 12 9 C12.66 7.02 13.32 5.04 14 3 C15.65 2.67 17.3 2.34 19 2 C19.1953125 8.0546875 19.1953125 8.0546875 19 10 C17 12 17 12 14.50390625 12.046875 C13.04791016 11.89992188 13.04791016 11.89992188 11.5625 11.75 C10.59441406 11.66234375 9.62632813 11.5746875 8.62890625 11.484375 C6 11 6 11 3 9 C2.67 9.66 2.34 10.32 2 11 C1.34 11 0.68 11 0 11 C0 7.37 0 3.74 0 0 Z M3 3 C3 3.66 3 4.32 3 5 C3.66 5 4.32 5 5 5 C5 4.34 5 3.68 5 3 C4.34 3 3.68 3 3 3 Z " fill="#FFFFFF" transform="translate(61,108)"/>
<path d="M0 0 C3.01781947 1.50890974 3.52251548 3.9903093 5 7 C6.30993877 9.0433476 7.64590551 11.06389658 9.01171875 13.0703125 C10 15 10 15 10 19 C10.66 19 11.32 19 12 19 C11.01 22.96 10.02 26.92 9 31 C7.68 31.33 6.36 31.66 5 32 C5.05800781 31.13117187 5.11601562 30.26234375 5.17578125 29.3671875 C5.73605657 22.11977076 5.73605657 22.11977076 2.5 16 C-1.46955025 11.2365397 -0.39816508 5.96362814 0 0 Z " fill="#CF8159" transform="translate(140,32)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.65 2.66 3.3 3 5 C3.33 4.67 3.66 4.34 4 4 C5.99958364 3.95919217 8.00045254 3.95745644 10 4 C10 5.65 10 7.3 10 9 C10.66 7.35 11.32 5.7 12 4 C12.66 4 13.32 4 14 4 C14 6.97 14 9.94 14 13 C10.50765756 13.09978121 7.40562852 12.77842938 4 12 C4 11.34 4 10.68 4 10 C3.34 10 2.68 10 2 10 C2 10.66 2 11.32 2 12 C1.34 12 0.68 12 0 12 C0 8.04 0 4.08 0 0 Z M6 6 C5.67 6.66 5.34 7.32 5 8 C5.66 8.66 6.32 9.32 7 10 C6.67 8.68 6.34 7.36 6 6 Z " fill="#FFFFFF" transform="translate(93,107)"/>
<path d="M0 0 C0.8353125 0.7425 0.8353125 0.7425 1.6875 1.5 C4.38162983 3.24754367 5.85375007 3.26218749 9 3 C8.67 3.66 8.34 4.32 8 5 C8.99 5.99 9.98 6.98 11 8 C10.01 9.65 9.02 11.3 8 13 C7.67 12.34 7.34 11.68 7 11 C7.33 10.34 7.66 9.68 8 9 C7.34 8.67 6.68 8.34 6 8 C5.01 8.66 4.02 9.32 3 10 C2.01 9.34 1.02 8.68 0 8 C-1.67293936 8.30027117 -3.33985384 8.63557767 -5 9 C-7.3125 8.5625 -7.3125 8.5625 -9 8 C-9 7.34 -9 6.68 -9 6 C-8.34 6 -7.68 6 -7 6 C-6.67 5.34 -6.34 4.68 -6 4 C-6.66 4 -7.32 4 -8 4 C-8 3.34 -8 2.68 -8 2 C-5.36 2 -2.72 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C6DCE6" transform="translate(156,2)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.65 2.66 3.3 3 5 C3.721875 4.855625 4.44375 4.71125 5.1875 4.5625 C7.0625 4.1875 8.9375 3.8125 10.8125 3.4375 C11.534375 3.293125 12.25625 3.14875 13 3 C13.1953125 9.0546875 13.1953125 9.0546875 13 11 C12.34 11.66 11.68 12.32 11 13 C7.4375 12.75 7.4375 12.75 4 12 C3.67 11.34 3.34 10.68 3 10 C2.67 10.66 2.34 11.32 2 12 C1.34 12 0.68 12 0 12 C0 8.04 0 4.08 0 0 Z M6 6 C6 7.32 6 8.64 6 10 C7.32 9.67 8.64 9.34 10 9 C9.01 9 8.02 9 7 9 C6.67 8.01 6.34 7.02 6 6 Z " fill="#FFFFFF" transform="translate(145,107)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.33 4.63 3.66 8.26 4 12 C3.34 11.67 2.68 11.34 2 11 C1.375 7.9375 1.375 7.9375 1 5 C-0.83928131 6.83928131 -0.17913207 9.35138235 -0.23046875 11.796875 C0.40684806 17.88919167 4.25164354 22.48784568 7.63671875 27.37890625 C9 30 9 30 8.70703125 32.33984375 C8.47371094 32.88769531 8.24039063 33.43554688 8 34 C6.85018626 32.23174858 5.70528078 30.46030479 4.5625 28.6875 C3.92441406 27.70136719 3.28632813 26.71523438 2.62890625 25.69921875 C1 23 1 23 0 20 C-0.33 23.3 -0.66 26.6 -1 30 C-1.33 30 -1.66 30 -2 30 C-2.05819473 25.93756043 -2.09366215 21.87522854 -2.125 17.8125 C-2.14175781 16.66201172 -2.15851563 15.51152344 -2.17578125 14.32617188 C-2.18222656 13.21435547 -2.18867188 12.10253906 -2.1953125 10.95703125 C-2.20578613 9.93585205 -2.21625977 8.91467285 -2.22705078 7.86254883 C-1.98999632 4.87387833 -1.25617102 2.70576631 0 0 Z " fill="#E3B99D" transform="translate(141,13)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.32 3 2.64 3 4 C4.51009927 5.77760758 4.51009927 5.77760758 6.5 7.25 C7.1496875 7.77078125 7.799375 8.2915625 8.46875 8.828125 C8.9740625 9.21484375 9.479375 9.6015625 10 10 C9.1875 11.9375 9.1875 11.9375 8 14 C7.01 14.33 6.02 14.66 5 15 C2 11.25 2 11.25 2 9 C1.34 9 0.68 9 0 9 C0 8.34 0 7.68 0 7 C0.66 7 1.32 7 2 7 C2 6.34 2 5.68 2 5 C1.01 5.99 0.02 6.98 -1 8 C-2.33333333 7.33333333 -3.66666667 6.66666667 -5 6 C-5 5.34 -5 4.68 -5 4 C-4.34 4 -3.68 4 -3 4 C-3.33 3.01 -3.66 2.02 -4 1 C-2.02 1.495 -2.02 1.495 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C1D9E4" transform="translate(171,9)"/>
<path d="M0 0 C1.07350708 0.24447876 1.07350708 0.24447876 2.16870117 0.49389648 C4.95480197 0.99192071 7.47462208 1.1141835 10.30078125 1.09765625 C11.27724609 1.09443359 12.25371094 1.09121094 13.25976562 1.08789062 C14.77086914 1.07532227 14.77086914 1.07532227 16.3125 1.0625 C17.33923828 1.05798828 18.36597656 1.05347656 19.42382812 1.04882812 C21.94927882 1.03708184 24.47460905 1.02065565 27 1 C26.67 1.99 26.34 2.98 26 4 C21.61111589 5.63507447 17.67428158 6.42493469 13 6 C12.01 5.34 11.02 4.68 10 4 C8.34450469 3.61500109 6.6777567 3.27206865 5 3 C5 3.66 5 4.32 5 5 C2.03 4.505 2.03 4.505 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#77ADC3" transform="translate(133,83)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.67 3.64 5.34 6.28 5 9 C0.25 10.125 0.25 10.125 -2 9 C-1.67 8.34 -1.34 7.68 -1 7 C-1.33 6.67 -1.66 6.34 -2 6 C-2 4.68 -2 3.36 -2 2 C-1.34 2.66 -0.68 3.32 0 4 C0 2.68 0 1.36 0 0 Z " fill="#2B3235" transform="translate(152,89)"/>
<path d="M0 0 C4.86896303 0.59619955 9.32790951 1.56976822 14 3 C14.33 4.65 14.66 6.3 15 8 C14.34 7.67 13.68 7.34 13 7 C13 6.01 13 5.02 13 4 C12.01 4 11.02 4 10 4 C10 5.98 10 7.96 10 10 C7.69 9.67 5.38 9.34 3 9 C3.33 7.68 3.66 6.36 4 5 C4.66 5 5.32 5 6 5 C6 4.34 6 3.68 6 3 C4.68 3 3.36 3 2 3 C2 2.34 2 1.68 2 1 C1.34 0.67 0.68 0.34 0 0 Z " fill="#344247" transform="translate(138,86)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C2.9590625 4.2165625 2.9590625 4.2165625 3.9375 4.4375 C6 5 6 5 7 6 C7.04092937 8.33297433 7.04241723 10.66705225 7 13 C6.34 13 5.68 13 5 13 C4.34 11.35 3.68 9.7 3 8 C2.67 9.32 2.34 10.64 2 12 C1.34 12 0.68 12 0 12 C0 8.04 0 4.08 0 0 Z " fill="#FFFFFF" transform="translate(81,107)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 1.65 2.66 3.3 3 5 C3.99 4.67 4.98 4.34 6 4 C5.979375 4.763125 5.95875 5.52625 5.9375 6.3125 C5.87057159 9.10185786 5.87057159 9.10185786 7 12 C6.4225 11.814375 5.845 11.62875 5.25 11.4375 C2.69606643 10.7761831 2.69606643 10.7761831 -1 12 C-0.67 8.04 -0.34 4.08 0 0 Z " fill="#FFFFFF" transform="translate(186,107)"/>
<path d="M0 0 C1.65 0.33 3.3 0.66 5 1 C5.66 3.31 6.32 5.62 7 8 C6.01 7.34 5.02 6.68 4 6 C3.34 7.65 2.68 9.3 2 11 C1.01 10.67 0.02 10.34 -1 10 C-1 9.34 -1 8.68 -1 8 C-1.66 7.34 -2.32 6.68 -3 6 C-1.68 5.01 -0.36 4.02 1 3 C0.67 2.01 0.34 1.02 0 0 Z " fill="#BDD7E2" transform="translate(121,8)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3.02696365 1.79158489 3.04637917 3.58328473 3.0625 5.375 C3.07410156 6.37273438 3.08570313 7.37046875 3.09765625 8.3984375 C3 11 3 11 2 13 C1.34 13 0.68 13 0 13 C-0.19397476 11.02145742 -0.38001321 9.0421352 -0.5625 7.0625 C-0.66691406 5.96035156 -0.77132812 4.85820313 -0.87890625 3.72265625 C-0.91886719 2.82417969 -0.95882812 1.92570312 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#CF6F3E" transform="translate(150,38)"/>
<path d="M0 0 C0.66386719 0.15339844 1.32773438 0.30679688 2.01171875 0.46484375 C5.60155922 1.10773021 9.17795419 1.35033991 12.8125 1.5625 C13.85180664 1.62727539 13.85180664 1.62727539 14.91210938 1.69335938 C16.60788686 1.79861453 18.30392052 1.89972863 20 2 C20 2.33 20 2.66 20 3 C9.44191344 4.33257403 9.44191344 4.33257403 5 3 C5 3.66 5 4.32 5 5 C2.03 4.505 2.03 4.505 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#7B9CB6" transform="translate(133,83)"/>
<path d="M0 0 C0 1.98 0 3.96 0 6 C-0.66 5.34 -1.32 4.68 -2 4 C-2.66 4.66 -3.32 5.32 -4 6 C-4.99 6 -5.98 6 -7 6 C-7.33 4.35 -7.66 2.7 -8 1 C-5.29120665 -0.35439668 -2.99066732 -0.06501451 0 0 Z " fill="#C3DBE5" transform="translate(141,5)"/>
<path d="M0 0 C1.65 0 3.3 0 5 0 C5.33 0.99 5.66 1.98 6 3 C6.33 3.66 6.66 4.32 7 5 C5 7 5 7 2.375 7.125 C1.59125 7.08375 0.8075 7.0425 0 7 C-0.33 6.01 -0.66 5.02 -1 4 C-0.34 4 0.32 4 1 4 C1.33 3.34 1.66 2.68 2 2 C1.34 2 0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#B0D0DD" transform="translate(148,4)"/>
<path d="M0 0 C0.55171875 0.48082031 1.1034375 0.96164063 1.671875 1.45703125 C4.36143493 3.23954161 6.05821418 3.47751409 9.25 3.6875 C10.14203125 3.75324219 11.0340625 3.81898437 11.953125 3.88671875 C12.62859375 3.92410156 13.3040625 3.96148437 14 4 C13.67 4.66 13.34 5.32 13 6 C10.01971943 6.85841753 7.09487823 7.14067628 4 7 C1.4375 5.25 1.4375 5.25 0 3 C0 2.01 0 1.02 0 0 Z " fill="#BBBFC5" transform="translate(113,61)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-5.46809845 5.4606443 -8.48727081 4.71084699 -14 3 C-13.42507812 2.85691406 -12.85015625 2.71382813 -12.2578125 2.56640625 C-10.81385369 2.20416745 -9.37101531 1.83741339 -7.9296875 1.46484375 C-2.22222222 0 -2.22222222 0 0 0 Z " fill="#C0C0C3" transform="translate(179,63)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C3.54296875 2.046875 3.54296875 2.046875 5.1875 4.75 C5.73792969 5.63171875 6.28835937 6.5134375 6.85546875 7.421875 C8 10 8 10 7.67578125 12.328125 C7.45277344 12.87984375 7.22976562 13.4315625 7 14 C5.82508418 12.23462904 4.66031316 10.46250287 3.5 8.6875 C2.8503125 7.70136719 2.200625 6.71523438 1.53125 5.69921875 C0 3 0 3 0 0 Z " fill="#EEE1D5" transform="translate(142,33)"/>
<path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C3.835 1.495 3.67 1.99 3.5 2.5 C3.03038294 4.84808532 2.9976212 6.74611065 3.0625 9.125 C3 13 3 13 1 15 C0.67 10.05 0.34 5.1 0 0 Z " fill="#BDBDC0" transform="translate(158,23)"/>
<path d="M0 0 C2.0625 0.4375 2.0625 0.4375 4 1 C4 2.32 4 3.64 4 5 C2.02 5.99 2.02 5.99 0 7 C-0.38133299 5.0085944 -0.71325582 3.00720923 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#B9D5E1" transform="translate(176,17)"/>
<path d="M0 0 C-1.36983503 3.16115776 -1.9890638 3.9927092 -5 6 C-7.73990408 5.96856707 -10.28417854 5.44521663 -13 5 C-3.38461538 0 -3.38461538 0 0 0 Z " fill="#6F7099" transform="translate(176,69)"/>
<path d="M0 0 C3 1 3 1 4 3 C4.66 2.34 5.32 1.68 6 1 C6.66 1.66 7.32 2.32 8 3 C7.34 3 6.68 3 6 3 C6 4.32 6 5.64 6 7 C3.36 6.34 0.72 5.68 -2 5 C-1.34 3.35 -0.68 1.7 0 0 Z " fill="#8CBBCE" transform="translate(156,7)"/>
<path d="M0 0 C1 2 1 2 0.375 4.0625 C-1 6 -1 6 -3.625 6.75 C-4.800625 6.87375 -4.800625 6.87375 -6 7 C-6 6.34 -6 5.68 -6 5 C-6.66 4.67 -7.32 4.34 -8 4 C-5.36 2.68 -2.72 1.36 0 0 Z " fill="#6E9FBA" transform="translate(166,79)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 3.96 2 7.92 2 12 C1.01 12.495 1.01 12.495 0 13 C0 8.71 0 4.42 0 0 Z " fill="#FFFFFF" transform="translate(108,107)"/>
<path d="M0 0 C0.66 1.65 1.32 3.3 2 5 C1.34 5 0.68 5 0 5 C0 5.66 0 6.32 0 7 C-3 6 -3 6 -5 3 C-2.25 0 -2.25 0 0 0 Z " fill="#C7DDE6" transform="translate(118,15)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C2.67 3.63 2.34 7.26 2 11 C1.34 11 0.68 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#FFFFFF" transform="translate(89,108)"/>
<path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C2.67 4.3 2.34 7.6 2 11 C1.34 11 0.68 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#FFFFFF" transform="translate(141,108)"/>
<path d="M0 0 C2.97 0.495 2.97 0.495 6 1 C5.67 2.32 5.34 3.64 5 5 C2.525 4.01 2.525 4.01 0 3 C0 2.01 0 1.02 0 0 Z " fill="#6CA2BB" transform="translate(127,81)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 3.63 2 7.26 2 11 C1.34 11 0.68 11 0 11 C0 7.37 0 3.74 0 0 Z " fill="#FFFFFF" transform="translate(182,108)"/>
<path d="M0 0 C0.99 0 1.98 0 3 0 C3 1.98 3 3.96 3 6 C1.68 5.67 0.36 5.34 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#69A1B7" transform="translate(134,89)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C1.68 3.99 0.36 4.98 -1 6 C-1 5.34 -1 4.68 -1 4 C-1.66 4 -2.32 4 -3 4 C-3 3.34 -3 2.68 -3 2 C-2.01 2 -1.02 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#D0E2EA" transform="translate(174,14)"/>
<path d="M0 0 C0.99 0.99 1.98 1.98 3 3 C2.67 3.99 2.34 4.98 2 6 C0.68 5.67 -0.64 5.34 -2 5 C-1.01 4.34 -0.02 3.68 1 3 C-0.32 2.67 -1.64 2.34 -3 2 C-2.01 1.34 -1.02 0.68 0 0 Z " fill="#7EB3C9" transform="translate(164,2)"/>
<path d="M0 0 C0.99 0.495 0.99 0.495 2 1 C1.01 1.495 1.01 1.495 0 2 C0 1.34 0 0.68 0 0 Z " fill="#F8F1DD" transform="translate(143,59)"/>
<path d="M0 0 C0.33 0.66 0.66 1.32 1 2 C0.34 1.67 -0.32 1.34 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#E5F3ED" transform="translate(144,52)"/>
<path d="M0 0 C2 1 2 1 2 1 Z " fill="#FFFFE2" transform="translate(155,67)"/>
<path d="" fill="#F6FDE0" transform="translate(0,0)"/>
            </svg>
                <h2>Welcome To</h2>
                <h4 className='text-center fw-semibold'>N.N.GHOSH SANATAN TEACHERS TRAINING COLLEGE</h4>
                <h5 className='text-center fw-semibold'>SANATAN ROAD, JAMUARY, KANKE, RANCHI-834006(JHARKHAND)</h5>
                <h5 className='text-center text-color-red fw-semibold'>Achieving Excellence Together</h5>
                <h5 className='text-center fw-semibold'>Email:- principalnngsttc@gmail.com</h5>
                <h5 className='text-center fw-semibold'>Mob:- 8651038210, 8709574088</h5>
                <h5 className='text-center fw-semibold'>Mangaed by</h5>
                <h5>RISHIKUL SHAIKSHANIK SANSTHAN</h5>
                <h5>(Resgistration No.118/2006-07)</h5>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    {/* <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'></button>
                    </Link> */}
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize fw-semibold'>Admission Start</h2>
                        <p>Admissions for the upcoming academic year have officially commenced, offering prospective students the opportunity to embark on an enriching educational journey with us.</p>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Enquiry</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the gallery</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/gallery" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    {/* <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text> */}
                                    {/* </Card.Body> */}
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/gallery">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More gallery</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;
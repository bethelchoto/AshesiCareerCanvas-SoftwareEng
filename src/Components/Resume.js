// import React, { useState } from 'react';
// import '../Styles/Resume.css';


// const Resume = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 123 456 7890',
//     address: '123 Main Street, Cityville',
//   });

//   const [education, setEducation] = useState([
//     {
//       degree: 'Bachelor of Science in Computer Science',
//       school: 'University of Example',
//       year: '2015-2019',
//     },
//   ]);

//   const [experience, setExperience] = useState([
//     {
//       position: 'Software Developer',
//       company: 'Tech Solutions Inc.',
//       year: '2019-present',
//       responsibilities: [
//         'Developing and maintaining web applications.',
//         'Collaborating with cross-functional teams.',
//         'Implementing new features and functionalities.',
//       ],
//     },
//   ]);

//   const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'HTML', 'CSS']);

//   return (
//     <div className='pagebody'>
//       <header>
//         <h1>{personalInfo.name}</h1>
//         <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.address}</p>
//       </header>

//       <section>
//         <h2>Education</h2>
//         <ul>
//           {education.map((edu, index) => (
//             <li key={index}>
//               <strong>{edu.degree}</strong> - {edu.school}, {edu.year}
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Experience</h2>
//         <ul>
//           {experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.position}</strong> - {exp.company}, {exp.year}
//               <ul>
//                 {exp.responsibilities.map((res, i) => (
//                   <li key={i}>{res}</li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2>Skills</h2>
//         <ul>
//           {skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Resume;














// // import React from 'react';
// // import '../Styles/App.css';

// // const Resume = () => {
// //   const personalInfo = {
// //     name: 'Jane Doe',
// //     email: 'jane.doe@example.com',
// //     phone: '+1234567890',
// //     location: 'New York, NY',
// //   };

// //   const workExperience = [
// //     {
// //       company: 'Acme Corporation',
// //       title: 'Software Engineer',
// //       dates: '2018-2023',
// //       description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
// //     },
// //     {
// //       company: 'Beta Enterprises',
// //       title: 'Web Developer',
// //       dates: '2016-2018',
// //       description: 'Designed and implemented responsive websites using HTML, CSS, and JavaScript.',
// //     },
// //   ];

// //   const education = [
// //     {
// //       institution: 'Stanford University',
// //       degree: 'Bachelor of Science in Computer Science',
// //       dates: '2014-2018',
// //     },
// //   ];

// //   const skills = [
// //     'React',
// //     'Node.js',
// //     'PostgreSQL',
// //     'HTML',
// //     'CSS',
// //     'JavaScript',
// //   ];

// //   return (
// //     <div className="ccc">
// //       <h1>Jane Doe</h1>
// //       <h2>Software Engineer</h2>

// //       <section className="contact-info">
// //         <p>
// //           <i className="fa fa-envelope"></i>
// //           {personalInfo.email}
// //         </p>
// //         <p>
// //           <i className="fa fa-phone"></i>
// //           {personalInfo.phone}
// //         </p>
// //         <p>
// //           <i className="fa fa-map-marker"></i>
// //           {personalInfo.location}
// //         </p>
// //       </section>

// //       <section className="work-experience">
// //         <h2>Work Experience</h2>
// //         {workExperience.map((experience) => (
// //           <div className="experience-item" key={experience.company}>
// //             <h3>{experience.company}</h3>
// //             <h4>{experience.title}</h4>
// //             <span>{experience.dates}</span>
// //             <p>{experience.description}</p>
// //           </div>
// //         ))}
// //       </section>

// //       <section className="education">
// //         <h2>Education</h2>
// //         {education.map((educationItem) => (
// //           <div className="education-item" key={educationItem.institution}>
// //             <h3>{educationItem.institution}</h3>
// //             <h4>{educationItem.degree}</h4>
// //             <span>{educationItem.dates}</span>
// //           </div>
// //         ))}
// //       </section>

// //       <section className="skills">
// //         <h2>Skills</h2>
// //         <ul>
// //           {skills.map((skill) => (
// //             <li key={skill}>{skill}</li>
// //           ))}
// //         </ul>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Resume;

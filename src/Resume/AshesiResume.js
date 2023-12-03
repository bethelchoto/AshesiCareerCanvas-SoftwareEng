import React, { useState } from 'react';
import '../Styles/Resume.css';


const AshesiResume = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Bethel Choto',
    email: 'john.doe@example.com',
    phone: '+233 20 924 6391',
    address: '1 University Avenue, Berekuso Eastern Region, Accra Ghana ',
    linkedin: 'https://www.linkedin.com/in/bethel-panashe-choto/',
    nationality: "Zimbabwean"
  });

  const [education, setEducation] = useState([
    {
      school:'Ashesi University',
      location: "Berekuso, Eastern Region ",
      degree: 'Bachelor of Science in Computer Science',
      year: '2015-2019',
    },
  ]);

  const [awards, setAwards] = useState([
    {
      award:'Second Place in a Wikipedia creative writing competition',
      school:'Ashesi University',
      year: '2019',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..',
      ],
    },
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.',
        
      ],
    },
  ]);

  const [project, setProject] = useState([
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..',
      ],
    },
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.',
      ],
    },
  ]);

  const [coactivities, setCoActivities] = useState([
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..',
      ],
    },
    {
      location:'Chinhoyi, Zimbabwe',
      position: 'Software Developer',
      company: 'Tech Solutions Inc.',
      year: '2019-present',
      responsibilities: [
        'Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.Developing and maintainingures and functionalities..Collaborating with cross-functional teams.',
      ],
    },
  ]);



  const [skills, setSkills] = useState(['JavaScript']);

  return (

    <div className='container-resume'>

      <header>
            <h5>{personalInfo.name}</h5>   
            <h6 className='header'>{personalInfo.address}</h6>
            <h6 className='header'>{personalInfo.phone} | {personalInfo.nationality} </h6>
            <h6 className='header'>{personalInfo.email} | {personalInfo.linkedin} </h6>
      </header>

      <div className='inner_container'>

        <section>
        <h5 className='nameTag' style={{ marginBottom: '0px' }}>EDUCATION</h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>
            {education.map((edu, index) => (
                <li key={index}>
                <strong className="school">{edu.school}</strong> <strong><span className="location">{edu.location}</span></strong>
                </li>
            ))}
            {education.map((edu, index) => (
                <li key={index}>
                <strong className="degree">{edu.degree}</strong> <strong>{edu.year}</strong>
                </li>
            ))}
            </ul>
            
        </section>

        <section>
        <h5 className='nameTag' style={{ marginBottom: '0px' }}>ACHIEVEMENTS/AWARDS</h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>
            {awards.map((award, index) => (
                <li key={index}>
                {/* <strong className="school">{}</strong> <strong><span className="location">{}</span></strong> */}
                <strong className="awards">{award.award} - {award.school}</strong> <strong><span className="">{award.year}</span></strong>
                </li>
            ))}
            {/* {education.map((award, index) => (
                <li key={index}>
                <strong className="degree">{edu.degree}</strong> <strong>{edu.year}</strong>
                </li>
            ))} */}
            </ul>
            
        </section>

        <section>
            <h5 className='nameTag' style={{ marginBottom: '0px' }}>WORK EXPERIENCE</h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>

            {experience.map((exp, index) => (
                <li key={index} >
                <strong className="experience">{exp.company} - {exp.location}</strong> <strong><span className="">{exp.year}</span></strong>
                <strong className="experience">{exp.position} </strong>

                <ul>
                    {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                    ))}
                </ul>
                </li>
            ))}
            </ul>
        </section>

        <section>
            <h5 className='nameTag' style={{ marginBottom: '0px' }}>PROJECT AND RESEARCH </h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>

            {project.map((proj, index) => (
                <li key={index} >
                <strong className="experience">{proj.company} - {proj.location}</strong> <strong><span className="">{proj.year}</span></strong>
                <strong className="experience">{proj.position} </strong>

                <ul>
                    {proj.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                    ))}
                </ul>
                </li>
            ))}
            </ul>
        </section>

        <section>
            <h5 className='nameTag' style={{ marginBottom: '0px' }}>CO-CURRICULAR ACTIVITIES  </h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>

            {coactivities.map((act, index) => (
                <li key={index} >
                <strong className="experience">{act.company} - {act.location}</strong> <strong><span className="">{act.year}</span></strong>
                <strong className="experience">{act.position} </strong>

                <ul>
                    {act.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                    ))}
                </ul>
                </li>
            ))}
            </ul>
        </section>

        <section>
        <h5 className='nameTag' style={{ marginBottom: '0px' }}>SKILLS  </h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>

            <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            </ul>
        </section>

        <section>
        <h5 className='nameTag' style={{ marginBottom: '0px' }}>REFERENCES </h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>

            <ul>
            Available upon request 
            *STEM – Science, Technology, Engineering and Mathematics 
            </ul>
        </section>

            
      </div>
    </div>
  );
};

export default AshesiResume;




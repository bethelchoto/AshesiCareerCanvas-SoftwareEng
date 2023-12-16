import '../Styles/Resume.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {View, Text} from 'react-native';

const AshesiResume = () => {

  const navigate = useNavigate()

  const [educationData, setEducationData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [achievementData, setachievementData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [curriculumData, setCurriculumData] = useState([]);
  const [skillData, setskillData] = useState([]);

  const [skills, setSkills] = useState(['JavaScript']);

     // Fetch education data from the backend when the component mounts
useEffect(() => {
  const educationData = async () => {
    try {
      const studentId = sessionStorage.getItem("studentId");

      const response = await fetch(
        `http://localhost/api/getEducationData.php?student_id=${studentId}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setEducationData(data);
      } else {
        console.error("Error fetching experience data");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); 
    }
  };


  const studentData = async () => {
    try {
      const studentId = sessionStorage.getItem("studentId");

      const response = await fetch(
        `http://localhost/api/getstudent.php?student_id=${studentId}`
      );
      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setStudentData(data);
      } else {
        console.error("Error fetching student data");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); 
    }
  };
  const achievmentData = async () => {
    try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
        `http://localhost/api/getachievement_cv.php?student_id=${studentId}`
        );
        
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setachievementData(data);
        } else {
        console.error("Error fetching Achievement data");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setLoading(false); 
    }
    };
    const experiencData = async () => {
      try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
          `http://localhost/api/getExperience_cv.php?student_id=${studentId}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setExperienceData(data);
        } else {
          console.error("Error fetching experience data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); 
      }
    };

    const projectData = async () => {
      try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
          `http://localhost/api/getProject_cv.php?student_id=${studentId}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setProjectData(data);
        } else {
          console.error("Error fetching project data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const curriculumData = async () => {
      try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
          `http://localhost/api/getcurriculum_cv.php?student_id=${studentId}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setCurriculumData(data);
        } else {
          console.error("Error fetching project data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };


    const skillData = async () => {
      try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
          `http://localhost/api/getskill_cv.php?student_id=${studentId}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setskillData(data);
        } else {
          console.error("Error fetching project data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };


  educationData();
  studentData();
  achievmentData();
  experiencData();
  projectData();
  projectData();
  skillData();
  curriculumData();
}, []); 

if (loading) {
  return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading indicator
}

if (
  !Array.isArray(studentData) ||
  studentData.length === 0 ||
  studentData.message
) {
  return (
    <div className="boarder-container">
      <div className="form-student-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Student </label>
          <hr
            className="long-line"
            style={{ width: "100%", border: "1px solid black" }}
          />
        </div>
      </div>
      <div className="right-side">
        <div className="labels-container">
          <label htmlFor="label1">
            {studentData.message || "No infomation found for this student data"}
          </label>
        </div>
      </div>

      <div className="btn-row-education">
        <button
          type="submit"
          className="main-primary-btn"
          onClick={() => navigate("/curriculum")}
        >
          Add
        </button>
      </div>
    </div>
  );
}

return (

    <div className='container-resume'>

      {studentData.map((studentItem) => (
      <header>
            <strong style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:14, color:'black'}}>{studentItem.full_name}</strong>   
            <h6 style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}} className='header'>{studentItem.addresss}  {studentItem.city}</h6>
            <h6 style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}} className='header'>{studentItem.phonenumber} | {studentItem.country} </h6>
            <h6 style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}} className='header'>{studentItem.email} | {studentItem.linkedin} | {studentItem.github}</h6>
      </header>
      ))}

      <div className='inner_container'>
        <section>
        <h5 className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>EDUCATION</h5>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>
            {educationData.map((educationItem) => (
                <li>
                <strong className="school">{educationItem.university_name}</strong> <strong><span className="location">{educationItem.location}</span></strong>
                </li>
            ))}
            {educationData.map((educationItem) => (
                <li>
                <strong className="degree">{educationItem.program_of_study}</strong> <strong>{educationItem.start_date}-{educationItem.end_date}</strong>
                </li>
            ))}
            </ul>
        </section>

        <section>
        <strong className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>ACHIEVEMENTS/AWARDS</strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>
            {achievementData.map((achievementItem) => (
                <li key={achievementItem.achievment_id}>
                <strong className="awards">{achievementItem.achievement_name} - {achievementItem.organization_name}</strong> <strong><span className="">{achievementItem.year_attained}</span></strong>
                </li>
            ))}

            </ul>
            
        </section>

        <section>
            <strong className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>WORK EXPERIENCE</strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>

            <ul className='trial-font'>

            {experienceData.map((experienceItem) => (
                <li style={{fontFamily:'verdana', fontSize:8.5}} key={experienceItem.experience_id}  >
                <strong numberOfLines={1} ellipsizeMode="tail" className="experience">{experienceItem.organization_name} - {experienceItem.city},{experienceItem.country}</strong> <strong><span className="">{experienceItem.start_date}-{experienceItem.end_date}</span></strong>
                <strong className="experience">{experienceItem.position} </strong>

                {experienceData.map((experienceItem) => (
                    <View style={{fontFamily:'verdana', fontSize:8.5, color:'black'}} key={experienceItem.experience_id}>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {experienceItem.job_description}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {experienceItem.job_descriptionone}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {experienceItem.job_descriptiontwo}</Text>

                    </View>
                    ))};
             
                </li>
            ))}
            </ul>
        </section>

        <section>
            <strong className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>PROJECT AND RESEARCH </strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>

            {projectData.map((projectItem) => (
                <li key={projectItem.project_id} >
                <strong className="experience">{projectItem.project_name} - {projectItem.project_owner}</strong> <strong><span className="">{projectItem.start_date}-{projectItem.end_date}</span></strong>
                

                {projectData.map((projectItem) => (
                    <View style={{fontFamily:'verdana', fontSize:8.5}} key={projectItem.experience_id}>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {projectItem.project_description}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {projectItem.project_descriptionone}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {projectItem.project_descriptiontwo}</Text>

                    </View>
                    ))}
                </li>
            ))}
            </ul>
        </section>

        <section>
            <strong className='nameTag' style={{ marginBottom: '0px',color:'black' }}>CO-CURRICULAR ACTIVITIES  </strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>
            <ul>

            {curriculumData.map((curriculumItem) => (
                <li style={{fontFamily:'verdana', fontSize:8.5}} key={curriculumItem.curriculum_id} >
                <strong className="experience">{curriculumItem.organization_name}-{curriculumItem.	activity_name}</strong>
                <strong><span className="">{curriculumItem.start_date}-{curriculumItem.end_date}</span></strong>

                {curriculumData.map((curriculumItem) => (
                    <View style={{fontFamily:'verdana', fontSize:8.5, color:'black'}} key={curriculumItem.curriculum_id}>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {curriculumItem.description}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {curriculumItem.descriptionone}</Text>
                       <Text style={{fontFamily:'verdana', fontSize:8.5}}> • {curriculumItem.descriptiontwo}</Text>
                    </View>
                    ))}
                </li>
            ))}
            </ul>
        </section>

        <section>
        <strong className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>SKILLS  </strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>

            <ul>
            {skillData.map((skillItem) => (
                <View style={{fontFamily:'verdana', fontSize:8.5, color:'black'}} key={skillItem.skill_id}>

                <Text style={{fontFamily:'verdana', fontSize:8.5, color:'black'}}> 
                  {skillItem.skill_name}
                </Text>

                </View>
            ))}
            </ul>
        </section>

        <section>
        <strong className='nameTag' style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>REFERENCES </strong>
            <hr className="long"  style={{  width: '100%', margin: '0 auto', border: '1px solid black', borderColor: 'black' }}/>

            <ul style={{ marginBottom: '0px', fontFamily:'verdana', fontSize:8.5, color:'black'}}>
            Available upon request 
            *STEM – Science, Technology, Engineering and Mathematics 
            </ul>
        </section> 
      </div>

    </div>
  );
};

export default AshesiResume;
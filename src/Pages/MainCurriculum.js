import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import '../Styles/App.css';
import '../Styles/MainCurriculum.css';

const MainCurriculum = () => {
  const navigate = useNavigate();
    const [curriculumData, setCurriculumData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

  // Fetch education data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentId = sessionStorage.getItem("studentId");

        const response = await fetch(
          `http://localhost/api/getcurriculum.php?student_id=${studentId}`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (response.ok) {
          setCurriculumData(data);
        } else {
          console.error("Error fetching curriculum data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }
  const handleAddActivities =(e)=>{
    navigate("/activity")
  }

  const handleCheckboxChange = (curriculumId) => {
    
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.includes(curriculumId);

      if (isAlreadySelected) {
        return prevSelectedItems.filter((id) => id !== curriculumId);
      } else {
        return [...prevSelectedItems, curriculumId];
      }
    });
  };
  if (
    !Array.isArray(curriculumData) ||
    curriculumData.length === 0 ||
    curriculumData.message
  ) {
    return (
      <div className="boarder-container">
        <div className="form-student-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Curriculum </label>
            <hr
              className="long-line"
              style={{ width: "100%", border: "1px solid black" }}
            />
          </div>
        </div>
        <div className="right-side">
          <div className="labels-container">
            <label htmlFor="label1">
              {curriculumData.message || "No curriculum data found"}
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

  const selectedSkills = curriculumData.filter((curriculumItem) =>
  selectedItems.includes(curriculumItem.curriculum_id)
  );

  console.log("Submitting data:", selectedSkills);


  const handleCheckSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", selectedSkills);

    try {
      const response = await fetch(
        "http://localhost/api/curriculum_cv.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedSkills),
        }
      );
      const data = await response.json();
      console.log("Response:", response);

      if (response.ok) {
        // console.log(data.message);
        alert("Data sent successfully");
      } else {
        // console.error(data.error);
        alert("Error sending data. Status:");
      }
    } catch (error) {
      alert("Error");
      //console.error("Error:", error);
    }
  };

  const handledelete = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", selectedSkills);

    try {
      const response = await fetch(
        "http://localhost/api/curriculum_cvdel.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedSkills),
        }
      );
      const data = await response.json();
      console.log("Response:", response);

      if (response.ok) {
        console.log(data.message);
        alert("Deleted Data sent successfully", data);
      } else {
        console.error(data.error);
        alert("Error sending data. Status:", response.status);
      }
    } catch (error) {
      console.log("Error");
      //console.error("Error:", error);
    }
  };

  return (
      <div className='boarder-container'>
        
            <div className="form-student-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">EXTRA CURRICULUM ACTIVITIES</label>
                  </div>
                  <hr className="long-line"  style={{ width: '100%', border: '1px solid black' }}/>
            </div>

          {curriculumData.map((curriculumItem) => (
            <div key={curriculumItem.curriculum_id} className="row-grid">

                <div className='left-side-curr'>
                    <CheckBoxIcon
                     color={selectedItems.includes(curriculumItem.curriculum_id) ? "primary" : "disabled"}
                     onClick={() => handleCheckboxChange(curriculumItem.curriculum_id)}
                    />
                </div>

                <div className='right-side'>

                    <div className="labels-container">
                        <label htmlFor="label1">Organization :</label>
                        <span id="label1">{curriculumItem.organization_name}</span>
                    </div>

                    <div className="labels-container">
                        <label htmlFor="label1">Activity :</label>
                        <span id="label1">{curriculumItem.activity_name}</span>
                    </div>

                    <div className="labels-container">
                        <label htmlFor="label1">Start Date :</label>
                        <span id="label1">{curriculumItem.start_date}</span>
                    </div>

                    <div className="labels-container">
                        <label htmlFor="label1">End Date :</label>
                        <span id="label1">{curriculumItem.end_date}</span>
                    </div> 
      
                    <div className="labels-container">
                        <label htmlFor="label1">Description :</label>
                        <span id="label1">{curriculumItem.description}</span>
                    </div>



                </div>
                <div> 
                        <button className='main-primary-btn'>Approved</button>
                    </div>
            </div>
          ))}


            <div className="btn-row-exp">
              <button type="button" className="main-primary-btn" onClick={handledelete}>
                Remove from CV
              </button>
              <button type="button" className="main-primary-btn" onClick={handleCheckSubmit}>
              Add to CV
              </button>
              <button type="button" className="main-primary-btn" onClick={handleAddActivities}>
                Add Co-Activities
              </button>

            </div>


    </div>
  );
};

export default MainCurriculum;

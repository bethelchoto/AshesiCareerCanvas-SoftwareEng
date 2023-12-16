import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import '../Styles/MainAchievement.css';
import '../Styles/App.css';
import "../Styles/MainProject.css";
import { Link } from 'react-router-dom';

const MainAchievement = () => {
  const navigate = useNavigate();
  
    const [achievementData, setAchievementData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
     
    // Fetch education data from the backend when the component mounts
    useEffect(() => {
        const fetchData = async () => {
        try {
            const studentId = sessionStorage.getItem("studentId");

            const response = await fetch(
            `http://localhost/api/getAchievement.php?student_id=${studentId}`
            );
            
            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok) {
              setAchievementData(data);
            } else {
            console.error("Error fetching Achievement data");
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

    if (
      !Array.isArray(achievementData) ||
      achievementData.length === 0 ||
      achievementData.message
    ) {
      return (
        <div className="boarder-container">
          <div className="form-student-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Achievement </label>
              <hr
                className="long-line"
                style={{ width: "100%", border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="right-side">
            <div className="labels-container">
              <label htmlFor="label1">
                {achievementData.message || "No curriculum data found"}
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

    const handleCheckboxChange = (achievement_id) => {
      setSelectedItems((prevSelectedItems) => {
        const isAlreadySelected = prevSelectedItems.includes(achievement_id);
    
        if (isAlreadySelected) {
          // If already selected, uncheck the item by filtering it out
          return prevSelectedItems.filter((id) => id !== achievement_id);
        } else {
          // If not selected, check the item by adding it to the array
          return [...prevSelectedItems, achievement_id];
        }
      });
    };

   
    
    const navAddAchievemet = () =>{
      navigate("/achievements")
    }

    const selectedSkills = achievementData.filter((achievementItem) =>
    selectedItems.includes(achievementItem.achievement_id)
      );

      console.log("Submitting data:", selectedSkills);

      const handleCheckSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form data:", selectedSkills);
    
        try {
          const response = await fetch(
            "http://localhost/api/postResumeAchievement.php",
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
            console.log(data.message);
            console.log("Data sent successfully", data);
          } else {
            console.error(data.error);
            console.error("Error sending data. Status:", response.status);
          }
          
        } catch (error) {
          console.log("Error");
          //console.error("Error:", error);
        }
      };

      
    const handledelete = async (e) => {
      e.preventDefault();
      console.log("Submitting form data:", selectedSkills);
  
      try {
        const response = await fetch(
          "http://localhost/api/achievements_cvdel.php",
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
          console.log("Deleted Data sent successfully", data);
        } else {
          console.error(data.error);
          console.error("Error sending data. Status:", response.status);
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
            <label for="inputEmail4">ACHIEVEMENT</label>
            </div>
            <hr className="long-line"  style={{ width: "100%", border: "1px solid black"}}/>
            </div>

        {achievementData.map((achievementItem) => 
        (
        <div key={achievementItem.achievement_id} className="row-grid">
            <div className='left-side-achievement'>
              <CheckBoxIcon
                  color={selectedItems.includes(achievementItem.achievement_id) ? "primary" : "disabled"}
                  onClick={() => handleCheckboxChange(achievementItem.achievement_id)}        
              />
            </div>
            
            <div className='right-side'>
            <div className="labels-container">
                    <label htmlFor="label1">Achievement id :</label>
                    <span id="label1">{achievementItem.achievement_id}</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Achivement :</label>
                    <span id="label1">{achievementItem.achievement_name}</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Organization :</label>
                    <span id="label1">{achievementItem.organization_name}</span>
                </div>

                <div className="labels-container">
                    <label htmlFor="label1">Year Attained :</label>
                    <span id="label1">{achievementItem.year_attained}</span>
                </div>

            </div>

            <div> 
                <button className='main-primary-btn'>Approved</button>
            </div>

            {/* <Link to ={`/ashesiresume/${achievementItem.achievement_id}`}> i want to send the id to the next page:</Link> */}

            {/* <a href={`/resume/${achievementItem.achievement_id}`}> i want to send the id to the next page: href </a> */}
        </div>
        ))}


            <div className="btn-row-exp">
            <button type="button" className="main-primary-btn" onClick={handledelete}>
            Remove CV
            </button>
            <button type="button" className="main-primary-btn" onClick={handleCheckSubmit}>
            Add CV
            </button>
            <button className="main-primary-btn" onClick={navAddAchievemet}>Add Achievement</button>
            </div>
    </div>
  );
};

export default MainAchievement;

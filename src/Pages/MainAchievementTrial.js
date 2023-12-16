// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import '../Styles/MainAchievement.css';
// import '../Styles/App.css';

// const MainAchievementTrial = () => {
//     const navigate = useNavigate();

//     const [achievementData, setAchievementData] = useState([]);
//     const [selectedItems, setSelectedItems] = useState([]);
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [loading, setLoading] = useState(true);
     
//     // Fetch education data from the backend when the component mounts
//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//             const studentId = sessionStorage.getItem("studentId");

//             const response = await fetch(
//             `http://localhost/api/getachievement.php?student_id=${studentId}`
//             );
            
//             const data = await response.json();
//             console.log("API Response:", data);

//             if (response.ok) {
//               setAchievementData(data);
//             } else {
//             console.error("Error fetching Achievement data");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         } finally {
//             setLoading(false); 
//         }
//         };

//         fetchData();
//     }, []); 

//     if (loading) {
//         return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading indicator
//     }

//     const handleEditChange = (e, index, fieldName) => {
//       const { value } = e.target;
//       setEducationData((prevData) => {
//         const newData = [...prevData];
//         newData[index] = {
//           ...newData[index],
//           [fieldName]: value,
//         };
//         return newData;
//       });
//     };
  
//     const handleEdit = (index) => {
//       setEditingIndex(index);
//     };
  

//     const handleCheckboxChange = (experienceId) => {
//         setSelectedItems((prevSelectedItems) => {
//           const isAlreadySelected = prevSelectedItems.includes(experienceId);
    
//           if (isAlreadySelected) {
//             return prevSelectedItems.filter((id) => id !== experienceId);
//           } else {
//             return [...prevSelectedItems, experienceId];
//           }
//         });
//       };


//     //   const handleCheckSubmit = async (e) => {
//     //     e.preventDefault();
//     //     console.log("Submitting form data:", experienceData);
//     //     console.log(experienceData[0].student_id);
//     //     console.log(experienceData[0].end_date);
//     //     if (!achievementData[0].student_id) {
//     //       console.error("Missing student_id in experienceData");
//     //       return;
//     //     }
    
//     // }
      
     

//   return (
//       <div className='boarder-container'>
//           <div className="form-student-row">
//             <div className="form-group col-md-6">
//             <label for="inputEmail4">ACHIEVEMENT</label>
//             </div>
//             <hr className="long-line"  style={{ width: "100%", border: "1px solid black"}}/>
//             </div>

//         {achievementData.map((achievementItem) => (
//         <div key={achievementItem.achievment_id} className="row-grid">
//             <div className='left-side-achievement'>
//             <CheckBoxIcon
//               color={selectedItems.includes(achievementItem.achievement_id) ? "primary" : "disabled"}
//               onClick={() => handleCheckboxChange(achievementItem.achievement_id)}
//             />
//             </div>
            
//             <div className='right-side'>
//                 <div className="labels-container">
//                     <label htmlFor="label1">Achivement :</label>
//                     <span id="label1">{achievementItem.achievement_name}</span>
//                 </div>

//                 <div className="labels-container">
//                     <label htmlFor="label1">Organization :</label>
//                     <span id="label1">{achievementItem.organization_name}</span>
//                 </div>


//                 <div className="labels-container">
//                     <label htmlFor="label1">Year Attained :</label>
//                     <span id="label1">{achievementItem.year_attained}</span>
//                 </div>

//             </div>

            
//             <div> 
//                 <button className='main-primary-btn'>Approved</button>
//             </div>
            
//         </div>
//         ))}

//         {/* <div className="btn-row-exp">
//             <button type="button" className="main-primary-btn" onClick={handleCheckAll}>
//             Check All
//             </button>
//             <button type="button" className="main-primary-btn" onClick={handleUncheckAll}>
//             Uncheck All
//             </button>
//             <button type="button" className="main-primary-btn" onClick={handleCheckSubmit}>
//             Submit Checked
//             </button>
//         </div> */}



//         {/* <div className='btn-row-achievement'> 
//         <button type="submit" className="main-primary-btn">
//           cancel
//         </button>
//         <button type="submit" className="main-primary-btn">
//           edit
//         </button>
//         <button type="submit" className="main-primary-btn">
//           delete
//         </button>
//         <button
//           type="submit"
//           className="main-primary-btn"
//           onClick={() => navigate("/achievements")}
//         >
//           Add
//         </button>
//         </div>  */}

//     </div>
//   );
// };

// export default MainAchievementTrial;
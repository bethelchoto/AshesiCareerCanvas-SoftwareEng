// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// function Resume() {
//     const params = useParams();
//     const navigate = useNavigate();
//     const [ResumeAchievementData, setResumeAchievementData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // const id = parseInt(params.id)
  
//     useEffect(() => {
//       const fetchData = async () => {
        

//         try {
//             const response = await fetch(`http://localhost/api/getResumeAchievement.php?achievement_id=${parseInt(params.id)}`);
//             const data = await response.json();
//             console.log("Full Response:", data);

//           if (!response.ok) {
//             throw new Error(`Error: ${response.status} - ${response.statusText}`);
//           }
//           console.log("API Response from achievement:", data);
//           setResumeAchievementData(data);
//         } catch (error) {
//           console.error("Error:", error.message);
//           console.error("Error:", error.code);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);
    
//     return (
//     <div>

      
//         {/* {ResumeAchievementData.map((ResumeAchievementItem) => 
//             (
//             <div key={ResumeAchievementItem.achievement_id} className="row-grid">
//                 <div className='left-side-achievement'>
//                 </div>
//                 <div className='right-side'>
//                 <div className="labels-container">
//                         <h1><label htmlFor="label1">Achievement name Achievement name Achievement name Achievement name : {ResumeAchievementItem.achievement_name}</label></h1>
//                         <span id="label1">{ResumeAchievementItem.achievement_name}</span>
//                     </div>
//                     </div>

//             </div>
//             ))}          */}
//     </div> 
//    );
    
//   }
  
//   export default Resume;
// import "../Styles/Sidebar.css";
// import "../Styles/App.css";
// import React from 'react';
// import { SidebarData } from "./SidebarData";

// function Sidebar() {
//   return (
//     <div className="Sidebar">
//       <div><h4>Student</h4></div>
//       <ul className="SidebarList">
//         {SidebarData.map((val, key) =>{

//           return (
//             <li key = {key} 
//             className="SidebarRow"
//             id = {window.location.pathname === val.link ? "active" : ""}
//             onClick={()=> {window.location.pathname = val.link}}>{""}
//             <div id="icon">{val.icon}</div>{""}
//             <div id="title">{val.title}</div>
//             </li>
//           );

//         }
//         )}
//       </ul>
//     </div>
//   )
// }
// export default Sidebar

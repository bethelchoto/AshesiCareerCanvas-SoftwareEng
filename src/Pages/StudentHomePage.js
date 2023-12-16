import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Admin.css';
import '../Styles/App.css';
import homePicture from "../Assets/HomePicture.jpeg";

const StudentHomePage = () => {

    const studentRole = sessionStorage.getItem("role");
    
  return (


      <div className="main-studenthomepage">
          <div className="home-right-side">
              <div className="picture-homepage">
                <img className="homepage-picture" src={homePicture} alt="Profile" />
          </div>
        </div>
    </div>
  );
};
export default StudentHomePage;

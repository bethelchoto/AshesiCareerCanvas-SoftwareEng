import { Link } from "react-router-dom";
import React from 'react';
import "../Styles/Home.css";
import HomeNavBar from "../Components/HomeNavbar";
import homePicture from "../Assets/HomePicture.jpeg";

const Home=()=>{
    return (         
      <div>
          < HomeNavBar/>
      <div className="main-home">
          <div className="home-left-side"> 
                  <h2> Hi we’re</h2>
                  <h1><strong> AshesiCareerServices.</strong></h1>
                  <p> We specialize in professional career 
                  advice <br/>and building visually appealing resumes.<br/> 
                  <h4>Your success is our priority!.</h4></p>
                  <div className="rect">
                  </div>    
          </div>
          <div className="home-right-side">
              <div className="picture-homepage">
                  <img className="homepage-picture" src={homePicture} alt="Profile" />
              </div>
          </div>
        </div>
        <footer>
          <p>&copy; 2023 Ashesi Career Service. All rights reserved.</p>
        </footer>
      </div>       
    );
};

export default Home;
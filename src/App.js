import "./Styles/App.css";
import Home from './Pages/Home';
import Login from './Auth/Login';
import Skills from './Pages/Skills';
import Register from './Auth/Register';
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Sidebar from './Components/Sidebar';
import CoCurriculum from './Pages/Activity';
import EducationForm from './Pages/Education';
import HeaderNavbar from './Components/Navbar';
import Achievements from './Pages/Achievements';
import WorkExperience from "./Pages/WorkExperience";
import StudentProfile from "./Pages/StudentProfile";
import MybeShowComponents from "./Components/ShowComponents";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainEducation from "./Pages/MainEducation";
import MainExperience from "./Pages/MainExperience";


function App() {
  return (
    <Router>
      <div className="App">   

        <MybeShowComponents>
          <HeaderNavbar/>
          <Sidebar/>
          
        </MybeShowComponents>         
          <switch>
            <Routes>
              {/* AUTHANTICATION ROUTES */}
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />

              {/* STUDENTS ROUTES */}
              <Route path="/skills" element={<Skills/>} />
              <Route path="/education" element={<EducationForm/>} />
              <Route path="/achievements" element={<Achievements/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/activities" element={<CoCurriculum/>} />
              <Route path="/workexperience" element={<WorkExperience/>} />
              <Route path="/studentprofile" element={<StudentProfile/>} />
             

              {/* Main Student Pages */}
              <Route path="/maineducation" element={<MainEducation/>} />
              <Route path="/mainexperience" element={<MainExperience/>} />
            </Routes>
          </switch>

      </div>
    </Router> 

  );
}

export default App;

import "./Styles/App.css";
import Home from './Pages/Home';
import Login from './Auth/Login';
import Skills from './Pages/Skills';
import Register from './Auth/Register';
import Projects from "./Pages/Projects";
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
import MainProject from "./Pages/MainProject";
import MainCurriculum from "./Pages/MainCurriculum";
import MainSkill from "./Pages/MainSkill";
import MainAchievement from "./Pages/MainAchievement";
import Review from "./Pages/Review";
import Admin from "./Pages/Admin";
import AdminPage from "./Pages/AdminPage";
import Display from "./Pages/Display"
import MainAchievementTrial from "./Pages/MainAchievementTrial";
import StudentHomePage from "./Pages/StudentHomePage";
import PendingReview from "./Pages/PendingReview";
import AshesiResume from "./Resume/AshesiResume";
// import StudentHomePage from "./Pages/StudentHomePage";

function App() {
  return (
    <Router>
      <div className="App">

        <MybeShowComponents>
          <HeaderNavbar />
          <Sidebar />
        </MybeShowComponents>

        <switch>
          <Routes>

           

            <Route path="/" element={<Home />} />

             {/* STUDENTS ROUTES */}

             

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* STUDENTS ROUTES */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<EducationForm />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activity" element={<CoCurriculum />} />
            <Route path="/workexperience" element={<WorkExperience />} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/ashesiresume" element={<AshesiResume />} />
            
            {/* Main Student Pages */}
            <Route path="/maineducation" element={<MainEducation />} />
            <Route path="/mainexperience" element={<MainExperience />} />
            <Route path="/mainproject" element={<MainProject />} />
            <Route path="/maincurriculum" element={<MainCurriculum />} />
            <Route path="/mainskill" element={<MainSkill />} />
            <Route path="/mainachievement" element={<MainAchievement />} />
            <Route path="/mainachievementtrial" element={<MainAchievementTrial />} />
            <Route path="/display" element={<Display/>} />
            <Route path="/review" element={<Review />} />
            <Route path="/pendingreview" element={<PendingReview />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/homestudent" element={<StudentHomePage />} />
            

            {/* Admin page */}
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </switch>
      </div>
    </Router>
  );
}

export default App;
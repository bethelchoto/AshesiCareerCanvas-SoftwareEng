import "./Styles/App.css";
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Sidebar from './Components/Sidebar';
import Skills from './Pages/Skills';
import EducationForm from './Pages/Education';
import HeaderNavbar from './Components/Navbar';
import MybeShowComponents from "./Components/ShowComponents";
import Achievements from './Pages/Achievements';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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

            </Routes>
          </switch>

      </div>
    </Router> 

  );
}

export default App;

import HeaderNavbar from './Components/Navbar'
import Home from './Pages/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Styles/App.css";
import MybeShowComponents from "./Components/ShowComponents";
import EducationForm from './Pages/Education';

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
              <Route path ='/sidebar' element={<Sidebar/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/education" element={<EducationForm/>} />
            </Routes>
          </switch>

      </div>
    </Router> 

  );
}

export default App;

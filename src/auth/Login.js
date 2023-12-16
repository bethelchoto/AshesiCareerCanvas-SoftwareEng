import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    role:""
  });


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("All fields are required");
      return;
    }


    try {
      const response = await axios.post(
        "http://localhost/api/login.php",
        data
      );
      if (
        response.status === 200 &&
        response.data.message.includes("Logged in")
      ) 
      {
        sessionStorage.setItem("studentId", response.data.student_id);

        alert("Login Successful ");

        // Redirect to the student profile page
        navigate("/homestudent");
      } 
      else 
      {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  return (
    <div className="main-box">
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Login</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h6>
              Do not have an account ?<Link to="/register"> Sign Up</Link>
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="row-md-6"> Email </div>
          <div className="row-md-6">
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={data.email}
            />
          </div>
        </div>


        <div className="row">
          <div className="row-md-6"> Password</div>
          <div className="row-md-6">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={data.password}
            />
          </div>
        </div>



        <div className="row">          
        <button type="button" className="main-primary-btn"
            name="Submit"
            value="login"
            onClick={submitForm}>
            Login
        </button>

        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h6>
              <Link to="/"> Forget password </Link>
            </h6>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Login;

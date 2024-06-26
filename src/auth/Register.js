import { useState } from "react";
import "../Styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    // role:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      
    });
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.first_name || !data.last_name || !data.email || !data.password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost/api/register.php",
        data
      );

      if (response.status === 200) {
        alert("User Registration Successfully");
         navigate("/login");
      } else {
        alert("Student Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="main-box">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Create an account</h1>
          </div>
        </div>

        <div className="row">
          <div className="row-md-6"> First Name</div>
          <div className="row-md-6">
            <input
              type="text"
              name="first_name"
              className="form-control"
              onChange={handleChange}
              value={data.first_name}
            />
          </div>
        </div>

        <div className="row">
          <div className="row-md-6"> Last Name</div>

          <div className="row-md-6">
            <input
              type="text"
              name="last_name"
              className="form-control"
              onChange={handleChange}
              value={data.last_name}
            />
          </div>
        </div>

        <div className="row">
          <div className="row-md-6"> Email</div>
          <div className="row-md-6">
            <input
              type="email"
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
            value="Sign Up"
            onClick={handleSubmit}>
            Save
        </button>

        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <h6>
              Already have an account ? <Link to="/login"> Login </Link>
            </h6>
          </div>
        </div>


      </form>

    </div>
  );
};

export default Register;

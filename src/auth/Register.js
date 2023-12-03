import { useState } from "react";
import '../Styles/Register.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register=(props)=>{
    
    let history = useNavigate();
    
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const submitForm = async (e) => {
        e.preventDefault();
        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password
        };
    
        try {
            // Use axios.post for making the HTTP request
            const result = await axios.post('http://localhost/api/register.php', sendData);
    
            if (result.data.Status === 'Invalid') {
                alert('Invalid User');
            } else {
                // Redirect to the login page after successful registration
                history('/login');
            }
        } catch (error) {
            // Handle the error
            console.error("Error during registration:", error);
    
            // You can show a user-friendly error message here
            alert("An error occurred during registration. Please try again later.");
        }
    }
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    const [userType, setUserType ] = useState("");
    const [secretKey, setSecretKey] = useState("");
    

    return (
        <div className="main-box" >

        <form onSubmit={submitForm}>    

            <div className="row">
                <div className="col-md-12 text-center"><h1>Create an account</h1></div>
            </div>

            <div className="radioButtons">
            Select User Type: 
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>

          {userType === "Admin" ? (
            <div className="row">
                <div className="row-md-6"> Secret Key</div>
                <div className="row-md-6">
                    <input type="text" name="secret_key" className="form-control"
                    // onChange={handleChange} value={data.first_name}
                    />
                </div>
            </div>
          ) : null}

                <div className="row">
                    <div className="row-md-6"> First Name</div>
                    <div className="row-md-6">
                        <input type="text" name="first_name" className="form-control"
                        onChange={handleChange} value={data.first_name}
                        />
                        
                    </div>
                </div>

                <div className="row">
                    <div className="row-md-6"> Last Name</div>
                    <div className="row-md-6">
                        <input type="text" name="last_name" className="form-control"
                        onChange={handleChange} value={data.last_name}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="row-md-6"> Email</div>
                    <div className="row-md-6">
                        <input type="email" name="email" className="form-control"
                        onChange={handleChange} value={data.email}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="row-md-6"> Password</div>
                    <div className="row-md-6">
                        <input type="password" name="password" className="form-control"
                        onChange={handleChange} value={data.password}/>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-md-6">
                        <input type="submit" name="Submit" value="Sign Up" className="btn btn-success"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center"><h6>Already have an account ? <Link to ="/"> Login </Link></h6></div>
                </div>
            </form>
        </div>
    )
}

export default Register;





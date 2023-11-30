import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    let history = useNavigate();

    const [data, setData] = useState({
        email:"",
        password:""
    })

    const submitForm = async (e) => {
        e.preventDefault();
        const sendData = {
            email: data.email,
            password: data.password
        };
    
        try {
            // Use axios.post for making the HTTP request to the login endpoint
            const result = await axios.post('http://localhost/phpReact/login.php', sendData);
    
            if (result.data.Status === 'Invalid') {
                alert('Invalid User');
            } else {
                // Redirect to a welcome page or dashboard after successful login
                history('/dashboard');
            }
        } catch (error) {
            // Handle the error
            console.error("Error during login:", error);
    
            // You can show a user-friendly error message here
            alert("An error occurred during login. Please try again later.");
        }
    }

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
        console.log(data);
    }
    

    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Login</h1></div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center"><h6>Do not have an account ?<Link to ="/register"> Sign Up</Link></h6></div>
            </div>

                <div className="row">
                    <div className="row-md-6"> Email </div>
                    <div className="row-md-6">
                        <input type="text" name="email" className="form-control"
                        onChange={handleChange} value={data.first_name}
                        />
                        
                    </div>
                </div>

                <div className="row">
                    <div className="row-md-6"> Password</div>
                    <div className="row-md-6">
                        <input type="text" name="password" className="form-control"
                        onChange={handleChange} value={data.first_name}
                        />
                        
                    </div>
                </div>

                <div className="row">
                <div className="col-md-12 text-center"><h6><Link to ="/"> Forget password </Link></h6></div>
            </div>
            
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" name="Submit" value="Login" className="btn btn-success"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login=()=>{
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value});
        // console.log(data);
    }

    const submitForm=(e)=>{
        e.preventDefault();
        data = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password
        }

        console.log()
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
                        // onChange={handleChange} value={data.first_name}
                        />
                        
                    </div>
                </div>

                <div className="row">
                    <div className="row-md-6"> Password</div>
                    <div className="row-md-6">
                        <input type="text" name="password" className="form-control"
                        // onChange={handleChange} value={data.first_name}
                        />
                        
                    </div>
                </div>

                <div className="row">
                <div className="col-md-12 text-center"><h6><Link to ="/"> Forget password </Link></h6></div>
            </div>
            
                <div className="row">
                    <div className="col-md-12">
                        <input type="submit" name="Submit" value="Register" className="btn btn-success"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
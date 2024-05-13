import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

const Login = () => {
    const navigate = useNavigate();
    
    const redirectToRegisterPage = () => {
        navigate('/register');
    }

    const redirectToHomePage = () => {
        navigate('/home');
    }

    const redirectToAdminLoginPage = () => {
        navigate('/adminlogin');
    }

    return (
        <div>
            <div className="containerlogin d-flex justify-content-center align-items-center vh-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src="src\assets\images\logo.png" className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"> <img src="src\assets\images\user.png" alt="user" className="user"/></span>
                                </div>
                                <input type="text" name="" className="form-control input_user" value="" placeholder="Employee ID" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text" > <img src="src\assets\images\key.png" alt="key" className="user"/> </span>
                                </div>
                                <input type="password" name="" className="form-control input_pass" value="" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" className="btn login_btn" onClick={redirectToHomePage}> Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don&apos;t have an account? <a href="#" className="ml-2" onClick={redirectToRegisterPage}> Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="#" onClick={redirectToAdminLoginPage}>Are you an Admin?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

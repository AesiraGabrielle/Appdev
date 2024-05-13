import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

const Register = () => {
    const navigate = useNavigate();

const redirectToLoginPage = () => {
    navigate('/login');
}

    return (
        <div className="containerlogin d-flex justify-content-center align-items-center vh-100">
        
            <div className="register_card">
                <div className="d-flex justify-content-center">
                    <div className="brand_logo_container">
                        <img src="src\assets\images\logo.png" className="brand_logo" alt="Logo" />
                    </div>
                </div>
                <div className="d-flex justify-content-center form_container">
                    <form>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user wider-input" value="" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" value="" placeholder="Employee ID" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user wider-input" value="" placeholder="Middle Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" value="" placeholder="Age" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" value="" placeholder="Sex" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user wider-input" value="" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" value="" placeholder="Birth Date (MM/DD/YY)" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Email" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Password" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Reconfirm Password" />
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn login_btn"  onClick={redirectToLoginPage}>Register</button>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        Already have an account? <a href="#" className="ml-2" onClick={redirectToLoginPage}> Log in here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

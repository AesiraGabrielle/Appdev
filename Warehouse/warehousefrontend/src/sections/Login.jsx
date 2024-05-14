import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const redirectToRegisterPage = () => {
        navigate('/register');
    }

    const redirectToHomePage = () => {
        const credentials = {
            employee_id: employeeId,
            password: password,
            position: "User"
        };
        console.log(credentials);

        axios.post('http://localhost:8000/api/auth/login', credentials)
            .then(response => {
                const token = response.data.token;
                console.log('Logged in successfully', 'Token:', token);
                document.cookie = `token=${token}; expires=${new Date(Date.now() + 60 * 24 * 3 * 60 * 1000).toUTCString()}`;
                navigate('/home');
            })
            .catch(error => {
                setError(error.response.data.message);
            });
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
                                <input type="text" name="employeeId" value={employeeId} onChange={(e) => { const inputText = e.target.value; if (/^\d{0,6}$/.test(inputText)) {  setEmployeeId(inputText); }}} className="form-control input_user" placeholder="Employee ID" />
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text" > <img src="src\assets\images\key.png" alt="key" className="user"/> </span>
                                </div>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control input_pass" placeholder="Password" />
                            </div>
                            <div className="d-flex justify-content-center">
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" className="btn login_btn" onClick={redirectToHomePage}> Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links" style={{marginTop:'30px'}}>
                            Don&apos;t have an account? <a href="#" className="ml-2" style={{color:'white'}} onClick={redirectToRegisterPage}> Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="#" onClick={redirectToAdminLoginPage} style={{color:'white'}}>Are you an Admin?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

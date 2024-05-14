import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const AdminLogin = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const redirectToRegisterPage = () => {
        navigate('/register');
    }

    const redirectToAdminHome = () => {
        
        const credentials = {
            employee_id: employeeId,
            password: password,
            position: "Admin"
        };
        console.log(credentials);

        axios.post('http://localhost:8000/api/auth/login', credentials)
            .then(response => {
                const token = response.data.token;
                console.log('Logged in successfully', 'Token:', token);
                document.cookie = `token=${token}; expires=${new Date(Date.now() + 60 * 24 * 3 * 60 * 1000).toUTCString()}`;
                navigate('/adminhome');
            })
            .catch(error => {
                console.log(error);
                setError(error.response.data.message);
            });
    }

    const redirectToAdminRegisterPage = () => {
        navigate('/adminregister');
    }
    return (
        <section className="vh-100" style={{ backgroundColor: '#426ec8' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ backgroundColor: '#6c8cd7', borderRadius: '1rem 0 0 1rem' }}>
                                    <img src="src\assets\images\admin.png" className="img-fluid" alt="Logo" style={{ borderRadius: '1rem 0 0 1rem', marginTop:'100px' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{backgroundColor:'#343434', borderRadius:'0 10px 10px 0px'}}>
                                    <div className="card-body p-4 p-lg-5 text-white" style={{backgroundColor:'#343434'}}>

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-10">W.I.S</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" name="employeeId" value={employeeId} onChange={(e) => { const inputText = e.target.value; if (/^\d{0,6}$/.test(inputText)) {  setEmployeeId(inputText); }}} id="form2Example17" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example17">Admin ID</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                
                                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form2Example27" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form2Example27">Password</label>
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn btn-lg btn-block" type="button" style={{backgroundColor:'#426ec8'}} onClick={redirectToAdminHome}>Login</button>
                                            </div>

                                            <p className="mb-5 pb-lg-2 text-white" style={{ color: '#393f81' }}>Don&rsquo;t have an account? <a href="#!"
                                                style={{ color: '#426ec8'}} onClick={redirectToAdminRegisterPage}>Register here</a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLogin;

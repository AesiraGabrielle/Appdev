import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

const Register = () => {
    const navigate = useNavigate();
    const [birthdate, setBirthdate] = useState(null); // State for birthdate
    const [age, setAge] = useState(''); // State for age

    const redirectToLoginPage = () => {
        navigate('/login');
    }

    const handleDateChange = (date) => {
        setBirthdate(date);
        calculateAgeFromDate(date);
    }

    const calculateAgeFromDate = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }
        setAge(calculatedAge.toString());
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
                                    <input type="text" name="" className="form-control input_user wider-input" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" placeholder="Employee ID" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user wider-input" placeholder="Middle Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user" value={age} placeholder="Age" readOnly />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    {/* Dropdown for Sex */}
                                    <select name="sex" className="form-select input_user">
                                        <option value="">Select Sex</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="" className="form-control input_user wider-input" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    {/* Date Picker for Birthdate */}
                                    <DatePicker
                                        selected={birthdate}
                                        onChange={handleDateChange}
                                        className="form-control input_user"
                                        placeholderText="Birth Date (MM/DD/YY)"
                                        dateFormat="MM/dd/yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" placeholder="Email" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" placeholder="Password" />
                        </div>
                        <div className="input-group mb-2">
                            <input type="password" name="" className="form-control input_pass" placeholder="Reconfirm Password" />
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn login_btn" onClick={redirectToLoginPage}>Register</button>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        Already have an account? <a href="#" className="ml-2" onClick={redirectToLoginPage} style={{color:'blue'}}> Log in here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

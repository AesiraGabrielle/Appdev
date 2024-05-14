import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const AdminRegister = () => {
    const navigate = useNavigate();
    const [birthdate, setBirthdate] = useState(null); // State for birthdate
    const [age, setAge] = useState(''); // State for age

    const redirectToAdminLoginPage = () => {
        navigate('/adminlogin');
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
        <section style={{ backgroundColor: '#426ec8', height: '911px' }}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card card-registration my-2" style={{ height: '650px', top: '70px', backgroundColor: '#343434' }}> {/* Adjusted height */}
                            <div className="row g-0">
                                <div className="col-xl-6">
                                    <div className="card-body p-md-3 p-2" style={{ color: 'white' }}>
                                        <h3 className="mb-4 text-uppercase">Admin Registration</h3>
                                        <div className="row">
                                            <div className="col">
                                                <div className="input-group mb-3">
                                                    <input type="text" name="" className="form-control input_user wider-input" value="" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="input-group mb-3">
                                                    <input type="text" name="" className="form-control input_user" value="" placeholder="Admin ID" />
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
                                                    <input type="text" name="" className="form-control input_user" value={age} placeholder="Age" readOnly />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="input-group mb-3">
                                                    {/* Dropdown for Sex */}
                                                    <select name="sex" className="form-select input_user" onChange={(e) => console.log(e.target.value)}>
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
                                                    <input type="text" name="" className="form-control input_user wider-input" value="" placeholder="Last Name" />
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
                                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Email" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Password" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <input type="password" name="" className="form-control input_pass" value="" placeholder="Reconfirm Password" />
                                        </div>

                                        <div className="d-flex justify-content-end pt-2">
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2" style={{ backgroundColor: '#426ec8', color: 'white', border: 'none', top: '20px' }}>Register</button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center links" style={{ color: 'white' }}>
                                        Already have an account? <a href="#" className="ml-2" onClick={redirectToAdminLoginPage}> Log in here</a>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-none d-xl-block" style={{ borderLeft: '1px solid white', height: '648px' }}> {/* Adjusted border height */}
                                    <img src="src\assets\images\admin.png" className="img-fluid" alt="Logo" style={{ borderRadius: '1rem 0 0 1rem', marginTop: '80px', marginLeft: '50px', borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminRegister;

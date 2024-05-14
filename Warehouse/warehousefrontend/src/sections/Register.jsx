import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [birthdate, setBirthdate] = useState(null); // State for birthdate
    const [age, setAge] = useState(''); // State for age

    const [first_name, setFname] = useState('');
    const [middle_name, setMName] = useState('');
    const [last_name, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [sex, setSex] = useState('');
    const [error, setError] = useState('');

    // Regular expression for allowing only text input
    const textRegex = /^[a-zA-Z\s]*$/;
    // Regular expression for validating email addresses
    const emailRegex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const numberRegex = /^\d{0,6}$/;

    const handleChange = (e) => {
        const inputText = e.target.value;
        setEmail(inputText); // Always update the email state variable
        if (inputText.trim() === '') {
            setError('Email is required');
        } else if (!emailRegex.test(inputText)) {
            setError('Please enter a valid email address');
        } else {
            setError('');
        }
    };

    const handleProfileImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Here you can perform additional validations if needed
            setProfileImage(selectedFile);
            console.log(selectedFile);
            setError('');
        } else {
            setProfileImage(null);
            setError('Please select a file');
        }
    };

    const handleSexChange = (e) => {
        setSex(e.target.value);
    };

    const redirectToLoginPage = () => {
        navigate('/login');
    }

    const AccRegistration = () =>{
        console.log(
            "first_name" , first_name ,
            "middle_name" , middle_name,
            "last_name",last_name,
            "email", email,
            "employeeId" , employeeId,
            "password" , password,
            "password_confirmation" ,password_confirmation, 
            "birthdate", birthdate, 
            "age" , age, 
            "sex", sex,
            "profileImage", profileImage

        );

        if (first_name.trim() === ''){
            setError('Please enter a first name');
            return;
        }
        if (middle_name.trim() === ''){
            setError('Please enter a middle name');
            return;
        }
        if (last_name.trim() === ''){
            setError('Please enter a last name');
            return;
        }

        if (email.trim() === '' || !emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return; // Return early if email is invalid
        }

        if (employeeId.trim() === ''){
            setError('Please enter a employee_id');
            return;
        }
        if (password.trim() === ''){
            setError('Please enter a password');
            return;
        }
        if (password_confirmation.trim() === ''){
            setError('Please enter a Reconfirm password');
            return;
        }
        if (password_confirmation.trim() !== password.trim()){
            setError('Password not match');
            return;
        }

        if (sex === ''){
            setError('Please select sex');
            return;
        }


        if (birthdate === null){
            setError('Please select birthdate');
            return;
        }

        if (profileImage === null){
            setError('Please select profile picture');
            return;
        }

        setError('');

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('middle_name', middle_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('employee_id', employeeId);
        formData.append('password', password);
        formData.append('password_confirmation', password_confirmation);
        formData.append('profile_picture', profileImage);
        formData.append('birthday', birthdate);
        formData.append('age', age);
        formData.append('position', 'User');
        formData.append('active_status', 'Deactivate');
        formData.append('sex', sex);


        axios.post(`http://127.0.0.1:8000/api/auth/register`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setError('')
            console.log(response.data);
            navigate('/login');
        })
        .catch(error => {
            console.error('Errors:', error.response.data.error);
            setError('An error occurred while registering. Please try again later.');
        });


    }

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        setBirthdate(formattedDate);
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
                                    <input type="text"
                                    name="first_name" value={first_name} 
                                    onChange={(e) => {
                                    const inputText = e.target.value;
                                    if (textRegex.test(inputText)) {
                                        setFname(inputText);
                                        }
                                    }}
                                    className="form-control input_user wider-input" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" name="employeeId" value={employeeId} 
                                    onChange={(e) => {
                                        const inputText = e.target.value;
                                        if (numberRegex.test(inputText)) {
                                            setEmployeeId(inputText);
                                            }
                                        }}
                                    className="form-control input_user" placeholder="Employee ID" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <input type="text" 
                                    name="middle_name" value={middle_name} 
                                    onChange={(e) => {
                                    const inputText = e.target.value;
                                    if (textRegex.test(inputText)) {
                                        setMName(inputText);
                                        }
                                    }}
                                     className="form-control input_user wider-input" placeholder="Middle Name" />
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
                                    <select name="sex"   onChange={handleSexChange}  className="form-select input_user">
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
                                    <input type="text"
                                    name="last_name" value={last_name} 
                                    onChange={(e) => {
                                    const inputText = e.target.value;
                                    if (textRegex.test(inputText)) {
                                        setLName(inputText);
                                        }
                                    }}
                                    className="form-control input_user wider-input" placeholder="Last Name" />
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
                        <input 
                            type="text" 
                            name="email" 
                            value={email} 
                            onChange={handleChange}
                            className="form-control input_pass" 
                            placeholder="Email" 
                        />
                        
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-2">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        className="form-control input_pass"
                                        placeholder="Password" 
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-2">
                                    <input type="password" 
                                    name="password" 
                                    value={password_confirmation} 
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                    className="form-control input_pass" placeholder="Reconfirm Password" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Upload Profile Image:</span>
                            <input 
                                type="file" 
                                className="form-control-file" 
                                onChange={handleProfileImageUpload} 
                                id="profile" 
                                accept="image/*" 
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="d-flex justify-content-center mt-3 login_container">
                            
                            <button type="button" name="button" className="btn login_btn" onClick={AccRegistration}>Register</button>
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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='vw-100 vh-100 d-flex flex-column bg-main-gradient text-white'>
      <div className='bg-dark p-3 header-bar text-white'>
        <span className='logo-text'>YOU</span>TIFY
      </div>

      <div className='vh-100 mb-5 login d-flex flex-column p-3 justify-content-center align-items-center container-fluid form-container'>
        <form action="" className='w-100 w-md-50 w-lg-25 d-flex flex-column p-3'>
          <h3 className='text-center pb-3'>Log In to Youtify</h3>
          <div className='mb-2'>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" placeholder='Email Address' className='form-control rounded-pill'/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" placeholder='*************' className='form-control rounded-pill'/>
          </div>

          <div className='d-grid'>
            <button className='shadow sign-in-bg btn mb-2 rounded-pill text-white btn-danger'>Log In</button>
          </div>
          <p className='text-center'>
            Don't have an account? <Link to='/register'>Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

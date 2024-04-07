import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='vw-100 vh-100 d-flex flex-column bg-main-gradient text-white'>
      <div className='bg-dark p-3 header-bar text-white'>
        <span className='logo-text'>YOU</span>TIFY
      </div>

      <div className='vh-100 mb-5 login d-flex flex-column p-3 justify-content-center align-items-center container-fluid form-container'>
        <form action="" className='w-100 w-md-50 w-lg-25 d-flex flex-column p-3'>
          <h3 className='text-center pb-3'>Sign up to your music journey</h3>
          <div className='mb-2'>
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" placeholder='Email Address' className='form-control rounded-pill'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" placeholder='*************' className='form-control rounded-pill'/>
          </div>
          <div className='mb-2'>
            <label htmlFor="password" className="form-label">Confirm Password</label>
            <input type="password" placeholder='*************' className='form-control rounded-pill'/>
          </div>

          <div className='mb-4'>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" placeholder='Name' className='form-control rounded-pill'/>
          </div>

          <div class="col-12 mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>

          <div className='d-grid'>
            <button className='shadow sign-in-bg btn mb-2 rounded-pill text-white btn-danger'>Sign Up</button>
          </div>
          <p className='text-center'>
            Already have an account? <Link to='/'>Sign in now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

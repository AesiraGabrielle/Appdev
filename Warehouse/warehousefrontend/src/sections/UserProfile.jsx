import React from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';

const UserProfile = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center"> {/* Centering the content */}
          <Navbar className="sticky-top" />
          <div className="card h-1000 card-custom">
            <div className="card-body">
              <div className="row align-items-center"> {/* Align items in a row */}
                <div className="col-md-9"> {/* 9 columns for text content */}
                  <p className="mt-0 mb-1"><strong>Name:</strong> Sequito, Alex Gabrielle Marri A.</p>
                  <p className="card-text mt-3">
                    <strong>Employee ID:</strong> 2100916
                  </p>
                  <p className="card-text">
                    <strong>Birthdate:</strong> 12-13-2002
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> gabby@gab.com
                  </p>
                  <p className="card-text">
                    <strong>Phone Number:</strong> +639515826846
                  </p>
                  <button className="btn btn-primary mt-3">Edit Profile</button>
                </div>
                <div className="col-md-3 text-right"> {/* 3 columns for the user profile image */}
                  <img src="src\assets\images\user.png" alt="profile" className="Userprof" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

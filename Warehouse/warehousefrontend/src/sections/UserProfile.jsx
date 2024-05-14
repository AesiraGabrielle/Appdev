import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';
import { Modal, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(''); // Default image path

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    const cookieString = document.cookie;
    if (cookieString) {
      const tokenCookie = cookieString.split('; ').find(row => row.startsWith('token='));
      if (tokenCookie) {
        const token = tokenCookie.split('=')[1];
        axios.get('http://localhost:8000/api/auth/show', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(response => {
            setName(response.data.user.first_name);
            setEmployeeID(response.data.user.employee_id);
            setBirthdate(response.data.user.birthday);
            setEmail(response.data.user.email);
            setImage('http://localhost:8000' + response.data.user.profile_picture);
          })
          .catch(error => {
            const now = new Date();
            document.cookie = `token=; expires=${new Date(now.getTime() - 1000).toUTCString()}; path=/`;
            console.error('Error fetching events:', error);
          });
      } else {
        console.error('Token cookie not found.');
      }
    } else {
      console.error('No cookies found.');
    }
  }

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Handle saving changes to profile here
    setShowModal(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          <Navbar className="sticky-top" />
          <div className="card h-1500 card-custom" style={{marginTop:'250px'}}>
            <div className="card-body" style={{margin:'50px'}}>
              <div className="row align-items-center">
                <div className="col-md-9">
                  <p className="mt-0 mb-1"><strong>Name:</strong> {name}</p>
                  <p className="card-text mt-3">
                    <strong>Admin ID:</strong> {employeeID}
                  </p>
                  <p className="card-text">
                    <strong>Birthdate:</strong> {birthdate}
                  </p>
                  <p className="card-text">
                    <strong>Email:</strong> {email}
                  </p>
                  
                  <button className="btn btn-primary mt-3" onClick={handleEditProfile}>Edit Profile</button>
                </div>
                <div className="col-md-3 text-right">
                  <img src={image} alt="profile" className="Userprof" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8">
              {/* Add form fields for editing profile information */}
              <div className="form-group">
                <strong style={{ float: 'left', width: '100px' }}>Name:</strong>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <strong style={{ float: 'left', width: '100px' }}>Admin ID:</strong>
                <input type="text" className="form-control" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} />
              </div>
              <div className="form-group">
                <strong style={{ float: 'left', width: '100px' }}>Birthdate:</strong>
                <input type="text" className="form-control" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              </div>
              <div className="form-group">
                <strong style={{ float: 'left', width: '100px' }}>Email:</strong>
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <strong style={{ float: 'left', width: '100px' }}>Phone Number:</strong>
                <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
            </div>
            <div className="col-md-3">
              <img src={image} alt="profile" className="Userprof" style={{ maxWidth: '100%', height: 'auto' }} />
              <div className="upload-wrapper" style={{ textAlign: 'center' }}>
                <label htmlFor="upload" className="custom-file-upload">
                  Upload Image
                </label>
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfile;

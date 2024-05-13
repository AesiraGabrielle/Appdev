import React, { useState } from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../assets/sidenavs/AdminNavbar';
import AdminSidebar from '../assets/sidenavs/AdminSidebar';
import { Modal, Button } from 'react-bootstrap';

const AdminProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('Dorego, Matt');
  const [employeeID, setEmployeeID] = useState('2000976');
  const [birthdate, setBirthdate] = useState('12-13-2002');
  const [email, setEmail] = useState('matt@miming.com');
  const [phoneNumber, setPhoneNumber] = useState('+639515826846');
  const [image, setImage] = useState('src\\assets\\images\\user.png'); // Default image path

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
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
          <AdminSidebar />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          <AdminNavbar className="sticky-top" />
          <div className="card h-1000 card-custom">
            <div className="card-body">
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
                  <p className="card-text">
                    <strong>Phone Number:</strong> {phoneNumber}
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

export default AdminProfile;

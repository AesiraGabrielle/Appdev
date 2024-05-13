import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../assets/sidenavs/AdminNavbar';
import AdminSidebar from '../assets/sidenavs/AdminSidebar';

const AdminContacts = () => {
  const images = [
    "src/assets/images/facebook.png",
    "src/assets/images/twitter.png",
    "src/assets/images/instagram.png",
    "src/assets/images/telephone-call.png",
    "src/assets/images/gmail.png",


  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <div>
      <AdminSidebar />
      <h3 style={{ paddingTop: '100px', paddingLeft: '380px', textAlign: 'left' }}>Contacts</h3>
      <Card style={{ width: '71%', height: 'auto', border:  'solid black', marginLeft: '430px',marginTop: '30px', marginBottom:'20px'}}>
        <Card.Body style={{ margin: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Render buttons for each image */}
          {images.map((src, index) => (
            <button key={index} className="itembuttons" style={{ marginRight: '30px', marginLeft: '30px', marginBottom: '30px' }} onClick={() => handleButtonClick(src)}>
              <img src={src} alt={`Item ${index + 1}`} className="items1" />
            </button>
          ))}
        </Card.Body>
      </Card>
      <AdminNavbar />
     

    </div>
  );
};

export default AdminContacts;
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddOptionsModal = ({ showModal, handleCloseModal, handleAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    itemName: '',
    desc: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handleAdd(formData);
    handleCloseModal();
    setFormData({
      date: '',
      itemName: '',
      desc: '',
      quantity: '',
    });
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p><strong>Returned Date:</strong> <input type="text" name="date" value={formData.date} onChange={handleChange}  style={{ float: 'right' }}/></p>
          <p><strong>Item Name:</strong> <input type="text" name="itemName" value={formData.itemName} onChange={handleChange}  style={{ float: 'right' }}/></p>
          <p><strong>Item Description:</strong> <input type="text" name="desc" value={formData.desc} onChange={handleChange} style={{ float: 'right' }}/></p>
          <p><strong>Quantity:</strong> <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} style={{ float: 'right' }}/></p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}  style={{backgroundColor:'#990000'}}>
          Close
        </Button>
        <Button  variant="primary" onClick={handleSubmit} style={{backgroundColor:'#228B22'}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddOptionsModal;

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AddItems = ({ showModal, handleCloseModal, handleAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    productname: '',
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
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p><strong>Item Name:</strong> <input type="text" name="productname" value={formData.productname} onChange={handleChange}  style={{ float: 'right' }}/></p>
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

export default AddItems;

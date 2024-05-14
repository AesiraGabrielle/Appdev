import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const BatchOut = ({ showModal, handleCloseModal, addToDataTable }) => {
  const [formData, setFormData] = useState({
    itemNumber: '',
    itemName: '',
    quantity: '',
    employeeID: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBatchOut = () => {
    // Pass only the relevant data (itemName and quantity) to the addToDataTable function
    const { itemName, quantity } = formData;
    addToDataTable(formData, 'Batch Out');
    // Reset the form data to clear the inputs
    setFormData({
      itemNumber: '',
      itemName: '',
      quantity: '',
      employeeID: ''
    });
    handleCloseModal(); // Call handleCloseModal here
  };

  
  
  

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="modalbatches">
      <Modal.Header closeButton>
        <Modal.Title>Batch Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <p className="batchestext"><strong>Item Number:</strong></p>
          <input type="text" name="itemNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.itemNumber} onChange={handleInputChange} placeholder="Item Number" />
          <p className="batchestext"><strong>Item Name:</strong></p>
          <input type="text" name="itemName" className="form-control input_user wider-modal float-right mb-3" value={formData.itemName} onChange={handleInputChange} placeholder="Item Name" />
          <p className="batchestext"><strong>Quantity:</strong></p>
          <input type="text" name="quantity" className="form-control input_user wider-modal float-right mb-3" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" />
          <p className="batchestext"><strong>Batch Number:</strong></p>
          <select name="batchNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.batchNumber} onChange={handleInputChange}>
            <option value="">Select Batch Number</option>
            <option value="1">1- Shampoo</option>
            <option value="2">2- Soap</option>
            <option value="3">3- Food</option>
          </select>
          <p className="batchestext"><strong>Employee ID:</strong></p>
          <input type="text" name="employeeID" className="form-control input_user wider-modal float-right mb-3" value={formData.employeeID} onChange={handleInputChange} placeholder="Employee ID" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="edit" variant="secondary" onClick={handleBatchOut}>Batch Out</Button>
        <Button className="close" variant="secondary" onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BatchOut;

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const BatchIn = ({ showModal, handleCloseModal, addToItems, addToDataTable, handleImageSelection }) => {
  const [formData, setFormData] = useState({
    receivedDate: '',
    type: '',
    itemNumber: '',
    itemName: '',
    itemDescription: '',
    quantity: '',
    batchNumber: '',
    employeeID: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // Define imageUrl state to store the URL of the uploaded image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file)); // Generate URL for uploaded image
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBatchIn = () => {
    const newData = {
      itemNum: formData.itemNumber,
      id: formData.id,
      type: formData.type,
      date: formData.receivedDate,
      itemName: formData.itemName,
      itemDescription: formData.itemDescription,
      quantity: formData.quantity,
      batchNumber: formData.batchNumber,
      employeeID: formData.employeeID,
      image: selectedImage
    };

    if (addToItems) {
      addToItems(newData);
    } else if (addToDataTable) {
      addToDataTable(newData, 'Batch In');
    }

    setFormData({
      receivedDate: '',
      id:'', 
      type: '',
      itemNumber: '',
      itemName: '',
      itemDescription: '',
      quantity: '',
      batchNumber: '',
      employeeID: ''
    });

    setSelectedImage(null);
    setImageUrl(null);
    handleCloseModal();
  };
  

  return (
    <Modal show={showModal} onHide={handleCloseModal} className="modalbatches">
      <Modal.Header closeButton>
        <Modal.Title>Batch In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div>
            <p className="batchestext"><strong>Upload Image:</strong></p>
            <input className="form-control input_user wider-modal float-right mb-3" type="file" id="imageUpload" onChange={handleFileChange} />
          </div>
          {imageUrl && (
            <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100%', height: 'auto' }} />
          )}
          <p className="batchestext"><strong>Received Date:</strong></p>
          <input type="text" name="receivedDate" className="form-control input_user wider-modal float-right mb-3" value={formData.receivedDate} onChange={handleInputChange} placeholder="Received Date" />
          <p className="batchestext"><strong>Type:</strong></p>
          <select name="type" className="form-control input_user wider-modal float-right mb-3" value={formData.type} onChange={handleInputChange}>
            <option value="">Select Type</option>
            <option value="Returned">Returned</option>
            <option value="Batch in">Batch in</option>
          </select>
          <p className="batchestext"><strong>ID:</strong></p>
          <input type="text" name="itemNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.itemNumber} onChange={handleInputChange} placeholder="ID" />
          <p className="batchestext"><strong>Item Number:</strong></p>
          <input type="text" name="itemNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.itemNumber} onChange={handleInputChange} placeholder="Item Number" />
          <p className="batchestext"><strong>Item Name:</strong></p>
          <input type="text" name="itemName" className="form-control input_user wider-modal float-right mb-3" value={formData.itemName} onChange={handleInputChange} placeholder="Item Name" />
          <p className="batchestext"><strong>Description:</strong></p>
          <input type="text" name="itemDescription" className="form-control input_user wider-modal float-right mb-3" value={formData.itemDescription} onChange={handleInputChange} placeholder="Item Description" />
          <p className="batchestext"><strong>Quantity:</strong></p>
          <input type="text" name="quantity" className="form-control input_user wider-modal float-right mb-3" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" />
          <p className="batchestext"><strong>Batch Number:</strong></p>
          <input type="text" name="batchNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.batchNumber} onChange={handleInputChange} placeholder="Batch Number" />
          <p className="batchestext"><strong>Employee ID:</strong></p>
          <input type="text" name="employeeID" className="form-control input_user wider-modal float-right mb-3" value={formData.employeeID} onChange={handleInputChange} placeholder="Employee ID" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="edit" variant="secondary" onClick={handleBatchIn}>Batch In</Button>
        <Button className="close"  variant="secondary" onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BatchIn;

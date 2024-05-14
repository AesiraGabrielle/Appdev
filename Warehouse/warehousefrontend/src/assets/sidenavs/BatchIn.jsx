import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const BatchIn = ({ showModal, handleCloseModal, addToItems, addToDataTable, handleImageSelection, loggedInEmployeeID }) => {
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    itemName: '',
    itemDescription: '',
    quantity: '',
    batchNumber: '',
    employeeID: loggedInEmployeeID // Set initial value to logged-in user's ID
  });

  const [itemNum, setItemNum] = useState(1); 

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); 

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setFormData(prevState => ({ ...prevState, date: currentDate }));
    setItemNum(prevItemNumber => prevItemNumber + 1);
    
  }, []);
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
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
      type: 'Batch In', // Set type to 'Batch In'
      date: formData.date,
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

    console.log("employee_id: ", '1', 
    "item_name: ", formData.itemName,
    "recieved_date: ", formData.date,
    'quantity: ', formData.quantity,
    'batchInOut: ', 'Batch In',
    'description: ', formData.itemDescription,
    'batch_info: ', formData.batchNumber,
    'logo:', selectedImage);
    
    const formData2 = new FormData();
    formData2.append('employee_id', 1);
    formData2.append('item_name', formData.itemName);
    formData2.append('recieved_date', formData.date);
    formData2.append('quantity', formData.quantity);
    formData2.append('batchInOut', 'Batch In');
    formData2.append('description', formData.itemDescription);
    formData2.append('batch_info', formData.batchNumber);
    formData2.append('logo', selectedImage);

    axios.post(`http://127.0.0.1:8000/api/batch`, formData2,{
      headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
      console.log(response.data)

    })
    .catch(error => {
        console.error('Errors:', error.response.data.error);
        // setError('An error occurred while registering. Please try again later.');
    });

  
    // setFormData({
    //   date: '',
    //   type: '',
    //   itemName: '',
    //   itemDescription: '',
    //   quantity: '',
    //   batchNumber: '',
    //   employeeID: loggedInEmployeeID
    // });
  
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
          <input type="text" name="date" className="form-control input_user wider-modal float-right mb-3" value={formData.date} onChange={handleInputChange} placeholder="Received Date" />
          <p className="batchestext"><strong>Item Name:</strong></p>
          <input type="text" name="itemName" className="form-control input_user wider-modal float-right mb-3" value={formData.itemName} onChange={handleInputChange} placeholder="Item Name" />
          <p className="batchestext"><strong>Description:</strong></p>
          <input type="text" name="itemDescription" className="form-control input_user wider-modal float-right mb-3" value={formData.itemDescription} onChange={handleInputChange} placeholder="Item Description" />
          <p className="batchestext"><strong>Quantity:</strong></p>
          <input type="text" name="quantity" className="form-control input_user wider-modal float-right mb-3" value={formData.quantity} onChange={handleInputChange} placeholder="Quantity" />
          <p className="batchestext"><strong>Batch Number:</strong></p>
          <select name="batchNumber" className="form-control input_user wider-modal float-right mb-3" value={formData.batchNumber} onChange={handleInputChange}>
            <option value="">Select Batch Number</option>
            <option value="1">1- Shampoo</option>
            <option value="2">2- Soap</option>
            <option value="3">3- Food</option>
          </select>
          <input type="hidden" name="employeeID" value={formData.employeeID} />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="edit" variant="secondary" onClick={handleBatchIn}>Batch In</Button>
        <Button className="close" variant="secondary" onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BatchIn;

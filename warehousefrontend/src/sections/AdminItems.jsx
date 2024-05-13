import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../assets/sidenavs/AdminNavbar';
import AdminSidebar from '../assets/sidenavs/AdminSidebar';
import BatchIn from '../assets/sidenavs/BatchIn'; // Import your Batches component
import BatchOut from '../assets/sidenavs/BatchOut'; // Import your Batches component


const AdminItems = () => {
  const [imagesData, setImagesData] = useState([
    { src: "src/assets/images/hamburger.png", itemName: "Delicious hamburger", itemDescription: "Fast Food" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/ramen.png", itemName: "Hot ramen noodles", itemDescription: "Asian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/pizza.png", itemName: "Cheesy pizza", itemDescription: "Italian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/vegetable.png", itemName: "Fresh vegetables", itemDescription: "Healthy Food", quantity:"50", batchNum:'1' },
    { src: "src/assets/images/ramen.png", itemName: "Spicy ramen noodles", itemDescription: "Asian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/pizza.png", itemName: "Vegetarian pizza", itemDescription: "Italian Cuisine", quantity:"50" , batchNum:'1'},
    { src: "src/assets/images/vegetable.png", itemName: "Organic vegetables", itemDescription: "Healthy Food" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/ramen.png", itemName: "Miso ramen noodles", itemDescription: "Asian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/pizza.png", itemName: "Pepperoni pizza", itemDescription: "Italian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/ramen.png", itemName: "Tonkotsu ramen noodles", itemDescription: "Asian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/pizza.png", itemName: "Margherita pizza", itemDescription: "Italian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/vegetable.png", itemName: "Fresh salad", itemDescription: "Healthy Food" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/ramen.png", itemName: "Tonkotsu ramen noodles", itemDescription: "Asian Cuisine" , quantity:"50", batchNum:'1'},
    { src: "src/assets/images/pizza.png", itemName: "Margherita pizza", itemDescription: "Italian Cuisine", quantity:"50" , batchNum:'1'},
    { src: "src/assets/images/vegetable.png", itemName: "Fresh salad", itemDescription: "Healthy Food" , quantity:"50", batchNum:'1'},
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [batchNum, setBatchNum] = useState("");
  const [searchQuery, setSearchQuery] = useState('');
  const [showBatchInModal, setShowBatchInModal] = useState(false);
  const [showBatchOutModal, setShowBatchOutModal] = useState(false);

  const handleButtonClick = (index) => {
    console.log("Image button clicked:", index);
    setSelectedImage(index);
    setItemDescription(imagesData[index].itemDescription);
    setItemName(imagesData[index].itemName);
    setQuantity(imagesData[index].quantity);
    setBatchNum(imagesData[index].batchNum);
    setShowModal(true);
  };
  
  const handleDelete = (index) => {
    const updatedImagesData = [...imagesData];
    updatedImagesData.splice(index, 1);
    setImagesData(updatedImagesData);
    setShowModal(false);
  };
  

  const handleShowBatchInModal = () => setShowBatchInModal(true);
  const handleHideBatchInModal = () => setShowBatchInModal(false);

  const handleShowBatchOutModal = () => setShowBatchOutModal(true);
  const handleHideBatchOutModal = () => setShowBatchOutModal(false);

  const addToItems = (newData) => {
    const imageUrl = URL.createObjectURL(newData.image);
    newData = { ...newData, imageUrl };
    setImagesData([...imagesData, newData]);
  };
  

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const updatedImagesData = [...imagesData];
    updatedImagesData[selectedImage] = { ...updatedImagesData[selectedImage], itemDescription, itemName };
    setImagesData(updatedImagesData);
    setEditMode(false);
    setShowModal(false);
  };

  const handleImageSelection = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };
  const filteredData = imagesData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <AdminSidebar />
      <h3 style={{ paddingTop: '100px', paddingLeft: '375px', textAlign: 'left' }}>Items</h3>
      <Card style={{ width: '71%', height: 'auto', border: 'solid black', marginLeft: '430px', marginTop: '30px', marginBottom: '20px' }}>
        <Card.Body style={{ margin: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Render buttons for each image */}
          {imagesData.map((image, index) => (
  <button key={index} className="itembuttons" style={{ marginRight: '30px', marginLeft: '30px', marginBottom: '30px' }} onClick={() => handleButtonClick(index)}>
    {image.imageUrl && <img src={image.imageUrl} alt={`Item ${index + 1}`} className="items1" />}
    {/* Render placeholder image if imageUrl is not available */}
    {!image.imageUrl && <img src={image.src} alt={`Item ${index + 1}`} className="items1" />}
  </button>
))}

        </Card.Body>
      </Card>
      <AdminNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Item</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', alignItems: 'center' }}>
  {selectedImage !== null && <img src={imagesData[selectedImage].imageUrl || imagesData[selectedImage].src} alt="Selected Item" className="modal-image" style={{ margin: '50px', fontSize: '18px' }} />}
  <div>
    <p><strong>Item No.:</strong> {selectedImage !== null ? selectedImage + 1 : ''}</p>
    {editMode ? (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>Item Name:</strong></p>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} style={{ float: 'right', marginBottom: '15px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>Description:</strong></p>
          <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} style={{ float: 'right', marginBottom: '15px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>Quantity:</strong></p>
          <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{ float: 'right', marginBottom: '15px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p><strong>Batch Number:</strong></p>
          <input type="text" value={batchNum} onChange={(e) => setBatchNum(e.target.value)} style={{ float: 'right', marginBottom: '15px' }} />
        </div>
      </>
    ) : (
      <>
        <p><strong>Item Name:</strong> {itemName}</p>
        <p><strong>Description:</strong> {itemDescription}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Batch Number:</strong> {batchNum}</p>
      </>
    )}
  </div>
</Modal.Body>

<Modal.Footer>
  {!editMode ? (
    <>
      <Button className="edit" variant="secondary" onClick={handleEdit}>Edit</Button>
      <Button className="delete" variant="danger" onClick={() => handleDelete(selectedImage)}>Delete</Button>
    </>
  ) : (
    <Button className="edit" variant="primary" onClick={handleSave}>Save</Button>
  )}
</Modal.Footer>

      </Modal>
      <div className="buttons-container2" style={{ bottom: '-10px' }}>
        <button onClick={handleShowBatchInModal}>Batch In</button>
        <button onClick={handleShowBatchOutModal}>Batch Out</button>
      </div>
      <BatchIn
        showModal={showBatchInModal}
        handleCloseModal={handleHideBatchInModal}
        addToItems={addToItems}
        handleImageSelection={handleImageSelection} // Pass the handleImageSelection function
      />
      <BatchOut showModal={showBatchOutModal} handleCloseModal={handleHideBatchOutModal} />
    </div>
  );
};

export default AdminItems;
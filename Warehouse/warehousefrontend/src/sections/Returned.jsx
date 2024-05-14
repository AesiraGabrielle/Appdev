import React, { useState, useEffect } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';
import Add from '../assets/sidenavs/Add';
import axios from 'axios';

const Returned = ({ stocksData, setStocksData }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddOptionsModal, setShowAddOptionsModal] = useState(false); // State for AddOptionsModal
  const [rowData, setRowData] = useState(null);
  const [editedData, setEditedData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    // { itemNum: 1, date: '12-13-2023', itemName: 'SunSilk', desc: 'Shampoo', quantity: '10' },
    // { itemNum: 2, date: '04-26-2024', itemName: 'Rice', desc: 'Food', quantity: '10' },
    // { itemNum: 3, date: '05-02-2024', itemName: 'Safe Guard', desc: 'Soap', quantity: '10' },
    // { itemNum: 4, date: '12-13-2023', itemName: 'Keratin', desc: 'Shampoo', quantity: '10' },
    // { itemNum: 5, date: '04-26-2024', itemName: 'Hotdog', desc: 'Food', quantity: '10' },
    // { itemNum: 6, date: '05-02-2024', itemName: 'Bioderm', desc: 'Soap', quantity: '10' },
    // { itemNum: 7, date: '12-13-2023', itemName: 'Eggs', desc: 'Food', quantity: '10' },
    // { itemNum: 8, date: '04-26-2024', itemName: 'Sardines', desc: 'Food', quantity: '10' },
    // { itemNum: 9, date: '05-02-2024', itemName: 'CreamSilk', desc: 'Conditioner', quantity: '10' },
    // { itemNum: 10, date: '12-13-2023', itemName: 'Ketchup', desc: 'Food', quantity: '10' },
    // { itemNum: 11, date: '04-26-2024', itemName: 'Bluebay', desc: 'Food', quantity: '10' },
    // { itemNum: 12, date: '05-02-2024', itemName: 'Palmolive', desc: 'Conditioner', quantity: '10' },
  ]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/batch`)
      .then(response => {
        console.log(response.data);

        // Filter the data to include only entries with batchInOut value "Batch In"
        const batchInData = response.data.filter(item => item.batchInOut === "Batch In" || item.batchInOut === "Batch Out");

        // Extract specific properties for the filtered data and update the state
        const newData = batchInData.map(item => ({
          itemNum: item.id,
          date: item.recieved_date, 
          desc: item.description,
          itemName: item.item_name,
          quantity: item.quantity,
        }))
        setData(newData);
      })
      .catch(error => {
          console.error('Errors:', error.response.data.error);
      });
  }, []);

  const handleEdit = (row) => {
    setRowData(row);
    setEditedData({ ...row }); // Clone the row data for editing
    setShowEditModal(true);
  };

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleUpdate = () => {
    const index = data.findIndex(item => item.id === editedData.id);
    if (index !== -1) {
      const updatedData = [...data];
      updatedData[index] = editedData;
      console.log('Updated data:', editedData);
      setData(updatedData);
    }
    setShowEditModal(false);
    setRowData(null);
  };

  const handleRemove = (row) => {
    const newData = data.filter(item => item !== row);
    setData(newData);
  };
  

  const handleShowAddOptionsModal = () => setShowAddOptionsModal(true); // Function to show AddOptionsModal

  const handleCloseAddOptionsModal = () => setShowAddOptionsModal(false); // Function to hide AddOptionsModal
  
  const handleAdd = (newData) => {
    const newId = data.length + 1;
    newData.id = newId;
    setData([...data, newData]);
  
    // Update the quantity in the stocks' data table
    if (stocksData && setStocksData) {
      const existingItem = stocksData.find(item => item.itemName === newData.itemName);
      if (existingItem) {
        const updatedQuantity = parseInt(existingItem.quantity) + parseInt(newData.quantity);
        const updatedData = stocksData.map(item => {
          if (item.itemName === newData.itemName) {
            return { ...item, quantity: updatedQuantity.toString() };
          }
          return item;
        });
        setStocksData(updatedData);
      }
    }
  
    setShowAddOptionsModal(false);
  };
  
  
  


  const columns = [
    {
      name: 'Returned Date',
      selector: row => row.date,
      id: "date",
      sortable: true, 
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Return ID',
      selector: row => row.itemNum,
      id: "itemNum",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Item Name',
      selector: row => row.itemName,
      id: "itemName",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Item Description',
      selector: row => row.desc,
      id: "desc",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Quantity',
      selector: row => row.quantity,
      id: "quantity",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Controls',
      id: "controls",
      cell: row => (
        <div>
          <Button variant="success" onClick={() => handleEdit(row)}>Edit</Button>
          <Button variant="custom-red" onClick={() => handleRemove(row)}>Remove</Button>
        </div>
      ),
      // allowOverflow: true,
      // button: true,
      width: '150px',
    },
  ];

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setRowData(null);
    setEditedData(null);
  };

  return (
    <div className="container-fluid-home">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8"> 
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Returned</h3>
          <Card className="data-card">
            <Card.Body style={{ padding: '2rem', margin: 0, width:'100%' }}>
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                width={'100%'}
                customStyles={{
                  rows: {
                    style: {
                      backgroundColor: 'transparent',
                      '&:nth-of-type(odd)': {
                        backgroundColor: '#6c8cd7',
                      },
                      '&:nth-of-type(even)': {
                        backgroundColor: '#426ec8',
                      },
                    },
                  },
                  pagination: {
                    style: {
                      backgroundColor: '#426ec8',
                      color: 'black',
                      fontSize: '16px',
                      border: '3px solid #426ec8',
                    },
                    pageButtonsStyle: {
                      backgroundColor: 'transparent',
                      color: 'black',
                    },
                  },
                }}
              />
            </Card.Body>
          </Card>
          <div className="buttons-container2">
          <button onClick={handleShowAddOptionsModal}>Add</button>
          <Add showModal={showAddOptionsModal} handleCloseModal={handleCloseAddOptionsModal} handleAdd={handleAdd} /> {/* Pass handleAdd function to Add component */}

          </div>
        </div>
      </div>
      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editedData && (
            <div>
              <p><strong>Returned Date:</strong> <input type="text" name="date" value={editedData.date} onChange={handleInputChange} style={{ float: 'right' }} /></p>
              <p><strong>Return ID:</strong> <input type="text" name="id" value={editedData.id} onChange={handleInputChange} style={{ float: 'right' }} /></p>
              <p><strong>Item Name:</strong> <input type="text" name="itemName" value={editedData.itemName} onChange={handleInputChange} style={{ float: 'right' }} /></p>
              <p><strong>Item Description:</strong> <input type="text" name="desc" value={editedData.desc} onChange={handleInputChange} style={{ float: 'right' }} /></p>
              <p><strong>Quantity:</strong> <input type="text" name="quantity" value={editedData.quantity} onChange={handleInputChange} style={{ float: 'right' }} /></p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="edit" variant="secondary" onClick={handleUpdate}>Update</Button>
          <Button classname ="close" variant="secondary" onClick={handleCloseEditModal}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Returned;
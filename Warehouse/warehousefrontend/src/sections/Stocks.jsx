import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../assets/styles.css';
import DataTable from 'react-data-table-component';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';
import BatchIn from '../assets/sidenavs/BatchIn'; 
import BatchOut from '../assets/sidenavs/BatchOut'; 
import axios from 'axios';

const columns = [
  {
    name: 'Received Date',
    selector: row => row.date,
    id: "date",
    sortable: true, 
    style: {
      fontSize: '18px',
      color: 'black',
    },
  },
  {
    name: 'Item No.',
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
    name: 'Description',
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
];

const Stocks = () => {
  const [showBatchInModal, setShowBatchInModal] = useState(false);
  const [showBatchOutModal, setShowBatchOutModal] = useState(false);
  const [modalType, setModalType] = useState(''); // State to track the modal type
  const [searchQuery, setSearchQuery] = useState('');
  const [dataTableData, setDataTableData] = useState([
    { itemNum: 1, date: '12-13-2023', itemName: 'SunSilk', desc: 'Shampoo', quantity: '10' },
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
        setDataTableData(newData);
      })
      .catch(error => {
          console.error('Errors:', error.response.data.error);
      });
  }, []);

  const handleShowBatchInModal = () => {
    setModalType('Batch In'); // Set modal type to Batch In
    setShowBatchInModal(true);
  };

  const handleShowBatchOutModal = () => {
    setModalType('Batch Out'); // Set modal type to Batch Out
    setShowBatchOutModal(true);
  };

  const handleCloseModal = () => {
    setShowBatchOutModal(false); // or setShowBatchInModal(false) depending on the modal you want to close
  };
  
  

  const handleHideBatchInModal = () => setShowBatchInModal(false);
  const handleHideBatchOutModal = () => setShowBatchOutModal(false);

  const addToDataTable = (newData, operationType) => {
    const existingItem = dataTableData.find(item => item.itemName === newData.itemName);
    if (existingItem) {
      let updatedQuantity;
      if (operationType === 'Batch In') {
        // For batch in operation, increase the quantity
        updatedQuantity = parseInt(existingItem.quantity) + parseInt(newData.quantity);
      } else if (operationType === 'Batch Out') {
        // For batch out operation, decrease the quantity
        updatedQuantity = parseInt(existingItem.quantity) - parseInt(newData.quantity);
      }
      // Ensure the quantity doesn't go below 0
      updatedQuantity = Math.max(updatedQuantity, 0);
      const updatedData = dataTableData.map(item => {
        if (item.itemName === newData.itemName) {
          return { ...item, quantity: updatedQuantity.toString() };
        }
        return item;
      });
      setDataTableData(updatedData);
    }
    
    handleCloseModal();
  };

  const filteredData = dataTableData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  

  return (
    <div className="container-fluid-home">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8"> 
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Stocks</h3>
          <Card className="data-card">
            <Card.Body style={{ padding: '2rem', margin: 0 }}>
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
          <div className="buttons-container2" style={{ bottom: '-10px' }}>
        <button onClick={handleShowBatchInModal}>Batch In</button>
        <button onClick={handleShowBatchOutModal}>Batch Out</button>
      </div>
        </div>
      </div>
      <BatchIn showModal={showBatchInModal} handleCloseModal={handleHideBatchInModal} addToDataTable={addToDataTable} />
      <BatchOut showModal={showBatchOutModal} handleCloseModal={handleHideBatchOutModal} addToDataTable={addToDataTable}  />
    </div>
  );
};

export default Stocks;

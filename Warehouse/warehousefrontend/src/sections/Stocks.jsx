import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';
import BatchIn from '../assets/sidenavs/BatchIn'; 
import BatchOut from '../assets/sidenavs/BatchOut'; 

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

  const [dataTableData, setDataTableData] = useState([
    { itemNum: 1, date: '12-13-2023', itemName: 'SunSilk', desc: 'Shampoo', quantity: '10' },
    { itemNum: 2, date: '04-26-2024', itemName: 'Rice', desc: 'Food', quantity: '10' },
    { itemNum: 3, date: '05-02-2024', itemName: 'Safe Guard', desc: 'Soap', quantity: '10' },
    { itemNum: 4, date: '12-13-2023', itemName: 'SunSilk', desc: 'Shampoo', quantity: '10' },
    { itemNum: 5, date: '04-26-2024', itemName: 'Hotdog', desc: 'Food', quantity: '10' },
    { itemNum: 6, date: '05-02-2024', itemName: 'Safe Guard', desc: 'Soap', quantity: '10' },
    { itemNum: 7, date: '12-13-2023', itemName: 'Eggs', desc: 'Food', quantity: '10' },
    { itemNum: 8, date: '04-26-2024', itemName: 'Sardines', desc: 'Food', quantity: '10' },
    { itemNum: 9, date: '05-02-2024', itemName: 'CreamSilk', desc: 'Conditioner', quantity: '10' },
    { itemNum: 10, date: '12-13-2023', itemName: 'Ketchup', desc: 'Food', quantity: '10' },
    { itemNum: 11, date: '04-26-2024', itemName: 'Rice', desc: 'Food', quantity: '10' },
    { itemNum: 12, date: '05-02-2024', itemName: 'Creamsilk', desc: 'Conditioner', quantity: '10' },
  ]);

  const handleShowBatchInModal = () => {
    setModalType('Batch In'); // Set modal type to Batch In
    setShowBatchInModal(true);
  };

  const handleShowBatchOutModal = () => {
    setModalType('Batch Out'); // Set modal type to Batch Out
    setShowBatchOutModal(true);
  };

  const handleHideBatchInModal = () => setShowBatchInModal(false);
  const handleHideBatchOutModal = () => setShowBatchOutModal(false);

  const addToDataTable = (newData) => {
    setDataTableData([...dataTableData, { ...newData, type: modalType }]);
  };

  return (
    <div className="container-fluid-home">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-8"> 
          <Navbar />
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Stocks</h3>
          <Card className="data-card">
            <Card.Body style={{ padding: '2rem', margin: 0 }}>
              <DataTable
                columns={columns}
                data={dataTableData}
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

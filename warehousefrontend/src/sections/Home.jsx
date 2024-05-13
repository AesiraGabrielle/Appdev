import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../assets/sidenavs/Navbar';
import Sidebar from '../assets/sidenavs/Sidebar';
import BatchIn from '../assets/sidenavs/BatchIn'; 
import BatchOut from '../assets/sidenavs/BatchOut'; 

const Home = () => {
  const [showBatchInModal, setShowBatchInModal] = useState(false);
  const [showBatchOutModal, setShowBatchOutModal] = useState(false);
  const [modalType, setModalType] = useState(''); // State to track the modal type
  const [searchQuery, setSearchQuery] = useState('');
  const [dataTableData, setDataTableData] = useState([
    { itemNum: 1, type: 'Batch In', date: '12-13-2023', itemName: 'SunSilk' },
    { itemNum: 2, type: 'Batch Out', date: '04-26-2024', itemName: 'Rice' },
    { itemNum: 3, type: 'Returned', date: '05-02-2024', itemName: 'Safe Guard' },
    { itemNum: 4, type: 'Batch In', date: '12-13-2023', itemName: 'SunSilk' },
    { itemNum: 5, type: 'Batch Out', date: '04-26-2024', itemName: 'Hotdog' },
    { itemNum: 6, type: 'Returned', date: '05-02-2024', itemName: 'Safe Guard' },
    { itemNum: 7, type: 'Batch In', date: '12-13-2023', itemName: 'Eggs' },
    { itemNum: 8, type: 'Batch Out', date: '04-26-2024', itemName: 'Sardines' },
    { itemNum: 9, type: 'Returned', date: '05-02-2024', itemName: 'Conditioner' },
    { itemNum: 10, type: 'Batch In', date: '12-13-2023', itemName: 'Ketchup' },
    { itemNum: 11, type: 'Batch Out', date: '04-26-2024', itemName: 'Rice' },
    { itemNum: 12, type: 'Returned', date: '05-02-2024', itemName: 'Conditioner' },
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
    // Calculate the next itemNum based on the maximum itemNum in the current data table
    const nextItemNum = Math.max(...dataTableData.map(item => item.itemNum), 0) + 1;
    // Add the new data with the calculated itemNum
    setDataTableData([...dataTableData, { ...newData, itemNum: nextItemNum, type: modalType }]);
  };

  const columns = [
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
      name: 'Type',
      selector: row => row.type,
      id: "type",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Date',
      selector: row => row.date,
      id: "date",
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
  ];

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
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Home</h3>
          <Card className="data-card">
            <Card.Body style={{ padding: '2rem', margin: 0 }}>
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                responsive
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

export default Home;

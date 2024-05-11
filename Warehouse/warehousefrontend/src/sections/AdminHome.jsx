import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../assets/sidenavs/AdminNavbar';
import AdminSidebar from '../assets/sidenavs/AdminSidebar';
import BatchIn from '../assets/sidenavs/BatchIn'; 
import BatchOut from '../assets/sidenavs/BatchOut'; 



const AdminHome = () => {
  const [showBatchInModal, setShowBatchInModal] = useState(false);
  const [showBatchOutModal, setShowBatchOutModal] = useState(false);
  const [modalType, setModalType] = useState(''); // State to track the modal type
  const [searchQuery, setSearchQuery] = useState('');
  const [dataTableData, setDataTableData] = useState([
    { id: 1, type: 'Batch In', date: '12-13-2023', itemName: 'SunSilk', changesBy: '2100916' },
    { id: 2, type: 'Batch Out', date: '04-26-2024', itemName: 'Rice', changesBy: '2100916' },
    { id: 3, type: 'Returned', date: '05-02-2024', itemName: 'Safe Guard', changesBy: '2100916' },
    { id: 4, type: 'Batch In', date: '12-13-2023', itemName: 'SunSilk' , changesBy: '2100916'},
    { id: 5, type: 'Batch Out', date: '04-26-2024', itemName: 'Hotdog' , changesBy: '2100916'},
    { id: 6, type: 'Returned', date: '05-02-2024', itemName: 'Safe Guard', changesBy: '2100916' },
    { id: 7, type: 'Batch In', date: '12-13-2023', itemName: 'Eggs', changesBy: '2100916' },
    { id: 8, type: 'Batch Out', date: '04-26-2024', itemName: 'Sardines' , changesBy: '2100916'},
    { id: 9, type: 'Returned', date: '05-02-2024', itemName: 'Conditioner', changesBy: '2100916' },
    { id: 10, type: 'Batch In', date: '12-13-2023', itemName: 'Ketchup' , changesBy: '2100916'},
    { id: 11, type: 'Batch Out', date: '04-26-2024', itemName: 'Rice', changesBy: '2100916'},
    { id: 12, type: 'Returned', date: '05-02-2024', itemName: 'Conditioner', changesBy: '2100916' },
  ]);

  const columns = [
    {
      name: 'ID.',
      selector: row => row.id,
      id: "id",
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
    {
      name: 'Actions by',
      selector: row => row.changesBy,
      id: "changesBy",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
  ];

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

  const filteredData = dataTableData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  
  
  return (
    <div className="container-fluid-home">
      <div className="row">
        <div className="col-md-3">
          <AdminSidebar />
        </div>
        <div className="col-md-8">
        <AdminNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Tracker</h3>
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

export default AdminHome;

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from '../assets/sidenavs/AdminNavbar';
import AdminSidebar from '../assets/sidenavs/AdminSidebar';


const Employee = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataTableData, setDataTableData] = useState([
    { id: 1, name: 'Rogelio Ocena', date: '12-13-2023', contact: '09630505847', actions: '2100916' },
    { id: 2, name: 'Nickxon Vivero', date: '12-13-2023', contact: '09630505847', actions: '2100916' },
    { id: 3, name: 'Arthur Abines', date: '12-13-2023', contact: '09630505847', actions: '2100916' },
    { id: 4, name: 'Radelyn Pita', date: '12-13-2023', contact: '09630505847', actions: '2100916' },
    { id: 5, name: 'Clarizze Regodo', date: '12-13-2023', contact: '09630505847', actions: '2100916' },


  ]);
  
  const handleDeactivate = (rowIndex) => {
    const updatedData = [...dataTableData];
    updatedData[rowIndex].active = false;
    setDataTableData(updatedData);
  };

  const handleReactivate = (rowIndex) => {
    const updatedData = [...dataTableData];
    updatedData[rowIndex].active = true;
    setDataTableData(updatedData);
  };

  const handleRemove = (rowIndex) => {
    const updatedData = [...dataTableData];
    updatedData.splice(rowIndex, 1);
    setDataTableData(updatedData);
  };

  const toggleActiveState = (rowIndex) => {
    const updatedData = [...dataTableData];
    updatedData[rowIndex].active = !updatedData[rowIndex].active; // Toggle active state
    setDataTableData(updatedData);
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      id: "id",
      sortable: true, 
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Name',
      selector: row => row.name,
      id: "name",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Hired Date',
      selector: row => row.date,
      id: "date",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Contacts',
      selector: row => row.contact,
      id: "contact",
      sortable: true,
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Actions',
      selector: row => row.changesBy,
      cell: (row, rowIndex) => (
        <div>
          {row.active ? (
            <Button variant="warning" onClick={() => handleDeactivate(rowIndex)}>
              Deactivate
            </Button>
          ) : (
            <Button variant="success" onClick={() => handleReactivate(rowIndex)}>
              Reactivate
            </Button>
          )}
          {' '}
          <Button variant="danger" onClick={() => handleRemove(rowIndex)}>
            Remove
          </Button>
        </div>
      ),
      id: "actions",
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
          <AdminSidebar />
        </div>
        <div className="col-md-8">
        <AdminNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <h3 style={{ paddingTop: '100px', color: 'black' }}>Employees</h3>
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
         
        </div>
      </div>
    
    </div>
  );
};

export default Employee;

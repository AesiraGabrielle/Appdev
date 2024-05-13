import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSidebar from '../assets/sidenavs/AdminSidebar'; 
import AdminNavbar from '../assets/sidenavs/AdminNavbar'; 
import DataTable from 'react-data-table-component';
import Breadcrumb from '../assets/sidenavs/Breadcrumb'; // Import the Breadcrumb component

const Employee = () => {
  const [view, setView] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [dataTableData, setDataTableData] = useState([
    { id: 1, name: 'ALEX GABRIELLE MARRI SEQUITO', date: '2023-01-15', actions:'2100916', verified: false, active: true },
    { id: 2, name: 'RUBY LINGO', date: '2024-02-24', verified: true, actions:'2100916',active: true },
    { id: 3, name: 'RYAN RAYO', date: '2024-01-25', verified: true,actions:'2100916', active: false },
    { id: 4, name: 'AMACCANA KIMMY', date: '2023-04-30', verified: false, actions:'2100916',active: true },
    { id: 5, name: 'JANINE MEMORACION', date: '2023-05-05', verified: true, actions:'2100916', active: false },
    { id: 6, name: 'FRANZ PETER', date: '2023-06-10', verified: false,actions:'2100916', active: true },
    { id: 7, name: 'ANDREW PERMEJO', date: '2023-07-15', verified: true,actions:'2100916', active: false },
    { id: 8, name: 'HAKDOG HAKCHIGIDIDOG', date: '2023-08-20', verified: false, actions:'2100916',active: true },
    { id: 9, name: 'KAPOY KAAYO', date: '2023-09-25', verified: true, actions:'2100916',active: false },
    { id: 10, name: 'DIRI NA AK', date: '2023-10-30', verified: false, actions:'2100916',active: true },
    { id: 14, name: 'RADELYN PITA', date: '2023-01-15', verified: false,actions:'2100916', active: true },
    { id: 15, name: 'GILLIAN DOBLE', date: '2024-02-24', verified: true, actions:'2100916',active: true },
    { id: 16, name: 'CHARISSA ROSADA', date: '2024-01-25', verified: true,actions:'2100916', active: false },
    { id: 17, name: 'CLARIZZE REGODO', date: '2023-04-30', verified: false, actions:'2100916',active: true },
    { id: 18, name: 'JP I FORGOT THE APELYIDO', date: '2023-05-05', verified: true, actions:'2100916',active: false },
    { id: 19, name: 'MATT ROMAWAK', date: '2023-05-05', verified: true,  actions:'2100916', active: false },
    { id: 20, name: 'LAURENCE SALAZAR', date: '2023-07-15', verified: true,  actions:'2100916',active: false },
    { id: 21, name: 'ROGELIO OCENA', date: '2023-08-20', verified: false, actions:'2100916',active: true },
    { id: 22, name: 'ADRIAN DALE', date: '2023-09-25', verified: true, actions:'2100916',active: false },
    { id: 23, name: 'ARCHIE SOMETHING', date: '2023-10-30', verified: false,actions:'2100916', active: true },
    { id: 24, name: 'MARIAN BULA', date: '2023-06-10', verified: false, actions:'2100916', active: true },
  ]);
  const [pendingVerificationList, setPendingVerificationList] = useState([
    { id: 11, name: 'SEAN PULMA', date: '2023-11-05',  actions:'2100916' , verified: false, active: true },
    { id: 12, name: 'BLAIRE OLAES', date: '2023-11-10', actions:'2100916' , verified: false, active: true },
    { id: 13, name: 'SHERNA PALCONITE', date: '2023-11-15',actions:'2100916' ,  verified: false, active: true },
    { id: 25, name: 'GENG GENG', date: '2023-11-05', actions:'2100916' , verified: false, active: true },
    { id: 26, name: 'MICHELLE ABRAHAN', date: '2023-11-05', actions:'2100916' , verified: false, active: true },
    { id: 27, name: 'RAMEL PANIS', date: '2023-11-05', actions:'2100916' , verified: false, active: true },
    { id: 28, name: 'ULYSSES DURAN', date: '2023-11-05',actions:'2100916' ,  verified: false, active: true },
  ]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([{ name: 'Admin/ Employees' }]);
  const [removedList, setRemovedList] = useState([
    { id: 29, name: 'JOHN DOE', date: '2023-11-20', actions:'2100916' , verified: false, active: false },
    { id: 30, name: 'JANE DOE', date: '2023-11-25', actions:'2100916' , verified: false, active: false },
    { id: 31, name: 'MICHAEL SMITH', date: '2023-11-30', actions:'2100916' , verified: false, active: false },
  ]);
  
  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      id: "name",
      style: {
        fontSize: '18px',
        color: 'black',
        minWidth: '330px', // Set a minimum width for the column
        maxWidth: '400px', // Set a maximum width for the column

      },
    },
    {
      name: 'Hired Date',
      selector: row => row.date,
      sortable: true,
      id: "date",
      style: {
        fontSize: '18px',
        color: 'black',
        margin:'0px',
        paddingLeft: '20px',
      },
    },
    {
      name: 'Actions',
      selector: row => row.actions,
      sortable: true,
      id: "actions",
      style: {
        fontSize: '18px',
        color: 'black',
      },
    },
    {
      name: 'Control',
      id: 'control',
      cell: row => (
        <div>
          {view === 'verify' ? (
            // Your existing button logic for the 'Verify' view
            <>
              <Button  variant="success" onClick={() => handleVerifyemployee(row.id)}>VERIFY</Button>
              <Button variant="danger" onClick={() => handleDenyVerification(row.id)}>DENY</Button>
            </>
          ) : view === 'deactivated' ? (
            // Button only for the 'Deactivated' view
            <Button variant="success" onClick={() => handleReactivateAccount(row.id)}>REACTIVATE</Button>
            ) : view === 'removed' ? (
            // Button only for the 'Removed' view
            <Button variant="success" onClick={() => handleRestoreAccount(row)}>RESTORE</Button>
          ) : (
            // Buttons for other views
            row.active ? (
              <>
                <Button variant="warning" onClick={() => handleDeactivateAccount(row.id)} disabled={!row.active}>DEACTIVATE</Button>
                <Button variant="danger" onClick={() => handleRemoveAccount(row.id)}>REMOVE</Button>
              </>
            ) : (
              <>
                <Button  variant="success"  onClick={() => handleReactivateAccount(row.id)}>REACTIVATE</Button>
                <Button  variant="success"  onClick={() => handleRestoreAccount(row)}>RESTORE</Button>
              </>
            )
          )}
        </div>
      ),
      style: {
        fontSize: '18px',
        color: 'black',
        width: '50%',
      },
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeactivateAccount = (id) => {
    const updatedList = dataTableData.map(employee =>
      employee.id === id ? { ...employee, active: false } : employee
    );
    setDataTableData(updatedList);
  };

  const handleRemoveAccount = (id) => {
    const removedAccount = dataTableData.find(employee => employee.id === id);
    setRemovedList([...removedList, removedAccount]); // Add to removed list
    const updatedList = dataTableData.filter(employee => employee.id !== id);
    setDataTableData(updatedList);
  };

  const handleRestoreAccount = (row) => {
    // Remove from the removed list
    const updatedRemovedList = removedList.filter(employee => employee.id !== row.id);
    setRemovedList(updatedRemovedList);
    
    // Add back to the All pane's data
    setDataTableData([...dataTableData, { ...row, active: true }]);
  };
  
  const handleReactivateAccount = (id) => {
    // Find the deactivated employee in the data table
    const deactivatedEmployee = dataTableData.find(employee => employee.id === id && !employee.active);
  
    if (deactivatedEmployee) {
      // Update the deactivated employee to be active again
      const reactivatedEmployee = { ...deactivatedEmployee, active: true };
  
      // Remove the deactivated employee from the data table
      const updatedDataTableData = dataTableData.filter(employee => employee.id !== id);
  
      // Add the reactivated employee back to the All pane's data
      setDataTableData([...updatedDataTableData, reactivatedEmployee]);
    }
  };
  
  

  const handleDenyVerification = (id) => {
    // Find the employee to be denied in the pending verification list
    const deniedEmployee = pendingVerificationList.find(employee => employee.id === id);
    
    // Remove the denied employee from the pending verification list
    const updatedPendingVerificationList = pendingVerificationList.filter(employee => employee.id !== id);
    setPendingVerificationList(updatedPendingVerificationList);
    
    // Add the denied employee to the Removed list
    setRemovedList([...removedList, { ...deniedEmployee, active: false }]);
  };
  
  const handleVerifyemployee = (id) => {
    // Find the user to be verified in the pending verification list
    const verifiedUser = pendingVerificationList.find(employee => employee.id === id);
  
    // Remove the verified user from the pending verification list
    const updatedPendingVerificationList = pendingVerificationList.filter(employee => employee.id !== id);
    setPendingVerificationList(updatedPendingVerificationList);
  
    // Add the verified user to the All pane's data
    setDataTableData([...dataTableData, { ...verifiedUser, verified: true, active: true }]);
  };
  

  const changeView = (newView) => {
    setView(newView);
    let breadcrumb;
    switch(newView) {
      case 'all':
        breadcrumb = [{ name: 'Admin/Employees  ' }];
        break;
      case 'deactivated':
        breadcrumb = [{ name: 'Admin/Employees  ' }];
        break;
      case 'removed':
        breadcrumb = [{ name: 'Admin/Employees ' }];
        break;
      case 'verify':
        breadcrumb = [{ name: 'Admin/Employees ' }];
        break;
      default:
        breadcrumb = [{ name: 'Admin/Employees' }];
    }
    breadcrumb.push({ name: newView.toUpperCase() });
    setBreadcrumbItems(breadcrumb);
  };

  const renderEmployees = () => {
    let filteredemployees;
    switch (view) {
      case 'all':
        filteredemployees = dataTableData.filter(
          (employee) =>
            employee.active && employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'deactivated':
        filteredemployees = dataTableData.filter(
          (employee) =>
            !employee.active && employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'removed':
        filteredemployees = removedList.filter((employee) =>
          employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'verify':
        filteredemployees = pendingVerificationList.filter((employee) =>
          employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      default:
        filteredemployees = [];
    }
    return filteredemployees;
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
        <h3 style={{ paddingTop: '100px', color: 'black' }}>Employees</h3>
            <Breadcrumb items={breadcrumbItems} style={{color:'black'}}/>
            <Card style={{ width: '100%', maxWidth: '2000px', marginLeft:'60px' }}>
  <Card.Body style={{margin:'10px', justifyContent:'center'}}>
  <br />
  <div className="d-flex mb-3">
  <span onClick={() => changeView('all')} className={`tab ${view === 'all' ? 'active-pane' : ''}`}> ALL </span>
  <span onClick={() => changeView('deactivated')} className={`tab ${view === 'deactivated' ? 'active-pane' : ''}`}>DEACTIVATED</span>
  <span onClick={() => changeView('removed')} className={`tab ${view === 'removed' ? 'active-pane' : ''}`}>REMOVED</span>
  <span onClick={() => changeView('verify')} className={`tab ${view === 'verify' ? 'active-pane' : ''}`}>PENDING VERIFICATION</span>
</div>

    <DataTable
      columns={columns}
      data={renderEmployees()} 
      searchable={true}
      pagination
      noHeader={true} 
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
}

export default Employee;

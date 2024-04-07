import React, { useState } from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import DataTable from 'react-data-table-component';
import Breadcrumb from '../components/Breadcrumb';

function MusicList() {
  const [view, setView] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [listenerList, setListenerList] = useState([
     { id: 1, title: 'Random Random' , name: 'ALEX GABRIELLE MARRI SEQUITO', joinedOn: '2023-01-15', verified: false, active: true },
    { id: 2, title: 'Random Random' , name: 'RUBY LINGO', joinedOn: '2024-02-24', verified: true, active: true },
    { id: 3,  title: 'Random Random' , name: 'RYAN RAYO', joinedOn: '2024-01-25', verified: true, active: false },
    { id: 4, title: 'Random Random' , name: 'AMACCANA KIMMY', joinedOn: '2023-04-30', verified: false, active: true },
    { id: 5, title: 'Random Random' , name: 'JANINE MEMORACION', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 6, title: 'Random Random' , name: 'FRANZ PETER', joinedOn: '2023-06-10', verified: false, active: true },
    { id: 7, title: 'Random Random' , name: 'ANDREW PERMEJO', joinedOn: '2023-07-15', verified: true, active: false },
    { id: 8, title: 'Random Random' , name: 'HAKDOG HAKCHIGIDIDOG', joinedOn: '2023-08-20', verified: false, active: true },
    { id: 9, title: 'Random Random' , name: 'KAPOY KAAYO', joinedOn: '2023-09-25', verified: true, active: false },
    { id: 10, title: 'Random Random' , name: 'DIRI NA AK', joinedOn: '2023-10-30', verified: false, active: true },
    { id: 14, title: 'Random Random' , name: 'RADELYN PITA', joinedOn: '2023-01-15', verified: false, active: true },
    { id: 15, title: 'Random Random' , name: 'GILLIAN DOBLE', joinedOn: '2024-02-24', verified: true, active: true },
    { id: 16, title: 'Random Random' , name: 'CHARISSA ROSADA', joinedOn: '2024-01-25', verified: true, active: false },
    { id: 17, title: 'Random Random' , name: 'CLARIZZE REGODO', joinedOn: '2023-04-30', verified: false, active: true },
    { id: 18, title: 'Random Random' , name: 'JP I FORGOT THE APELYIDO', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 19, title: 'Random Random' , name: 'MATT ROMAWAK', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 20, title: 'Random Random' , name: 'LAURENCE SALAZAR', joinedOn: '2023-07-15', verified: true, active: false },
    { id: 21, title: 'Random Random' , name: 'ROGELIO OCENA', joinedOn: '2023-08-20', verified: false, active: true },
    { id: 22, title: 'Random Random' , name: 'ADRIAN DALE', joinedOn: '2023-09-25', verified: true, active: false },
    { id: 23, title: 'Random Random' , name: 'ARCHIE SOMETHING', joinedOn: '2023-10-30', verified: false, active: true },
    { id: 24, title: 'Random Random' , name: 'MARIAN BULA', joinedOn: '2023-06-10', verified: false, active: true },

  ]);

  const [breadcrumbItems, setBreadcrumbItems] = useState([{ name: 'Admin/ Music List/ All' }]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleChangePage = (page) => setCurrentPage(page);

  const filteredListeners = () => {
    switch (view) {
      case 'all':
        return listenerList.filter((listener) => listener.name.toLowerCase().includes(searchQuery.toLowerCase()));
      default:
        return [];
    }
  };

  const paginatedListeners = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredListeners().slice(startIndex, endIndex);
  };

  const handleRemoveAccount = (id) => {
    const updatedList = listenerList.filter((listener) => listener.id !== id);
    setListenerList(updatedList);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const changeView = (newView) => {
    setView(newView);
    let breadcrumb;
    switch (newView) {
      case 'all':
        breadcrumb = [{ name: 'Admin/ Music List/ ' }, { name: 'All' }];
        break;
      default:
        breadcrumb = [{ name: 'Admin/ Music List/ ' }, { name: newView.charAt(0).toUpperCase() + newView.slice(1) }];
        break;
    }
    setBreadcrumbItems(breadcrumb);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
      id: 'title',
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
    {
      name: 'Artist Name',
      selector: (row) => row.name,
      sortable: true,
      id: 'name',
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
    {
      name: 'Added',
      selector: (row) => row.joinedOn,
      sortable: true,
      id: 'joinedon',
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
    {
      name: 'Control',
      id: 'control',
      cell: (row) => (
        <div>
          <button className="btnremove" onClick={() => handleRemoveAccount(row.id)}>REMOVE MUSIC</button>
        </div>
      ),
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
  ];

  return (
    <div className="mainadmin">
      <Sidebar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2>Music List</h2>
            <Breadcrumb paths={breadcrumbItems} />
            <div className="input-group mb-3" style={{ paddingLeft: '600px', width: '1300px' }}>
              <input
                type="text"
                className="form-control searchstyling"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  paddingLeft: '40px',
                  backgroundImage: `url('src/assets/images/Search.png')`,
                  backgroundPosition: '10px center',
                  backgroundSize: '20px 20px',
                  backgroundRepeat: 'no-repeat',
                  border: 'none',
                }}
              />
            </div>

            <DataTable
              columns={columns}
              data={paginatedListeners()}
              pagination
              paginationServer
              paginationTotalRows={filteredListeners().length}
              paginationPerPage={itemsPerPage}
              onChangePage={handleChangePage}
              noHeader
              customStyles={{
                rows: {
                  style: {
                    backgroundColor: 'transparent',
                    '&:nth-of-type(odd)': {
                      backgroundColor: '#1E1E1E',
                    },
                    '&:nth-of-type(even)': {
                      backgroundColor: '#2C2C2C',
                    },
                  },
                },
                pagination: {
                  style: {
                    backgroundColor: '#1E1E1E',
                    color: 'white',
                    fontSize: '16px',
                    border: '3px solid #2C2C2C',
                  },
                  pageButtonsStyle: {
                    backgroundColor: 'transparent',
                    color: 'white',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicList;
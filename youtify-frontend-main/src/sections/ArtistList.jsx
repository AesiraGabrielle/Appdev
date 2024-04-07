import React, { useState } from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar'; 
import DataTable from 'react-data-table-component';
import Breadcrumb from '../components/Breadcrumb'; // Import the Breadcrumb component



function ArtistList() {
  const [view, setView] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [artistList, setArtistList] = useState([
    { id: 1, name: 'ALEX GABRIELLE MARRI SEQUITO', joinedOn: '2023-01-15', verified: false, active: true },
    { id: 2, name: 'RUBY LINGO', joinedOn: '2024-02-24', verified: true, active: true },
    { id: 3, name: 'RYAN RAYO', joinedOn: '2024-01-25', verified: true, active: false },
    { id: 4, name: 'AMACCANA KIMMY', joinedOn: '2023-04-30', verified: false, active: true },
    { id: 5, name: 'JANINE MEMORACION', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 6, name: 'FRANZ PETER', joinedOn: '2023-06-10', verified: false, active: true },
    { id: 7, name: 'ANDREW PERMEJO', joinedOn: '2023-07-15', verified: true, active: false },
    { id: 8, name: 'HAKDOG HAKCHIGIDIDOG', joinedOn: '2023-08-20', verified: false, active: true },
    { id: 9, name: 'KAPOY KAAYO', joinedOn: '2023-09-25', verified: true, active: false },
    { id: 10, name: 'DIRI NA AK', joinedOn: '2023-10-30', verified: false, active: true },
    { id: 14, name: 'RADELYN PITA', joinedOn: '2023-01-15', verified: false, active: true },
    { id: 15, name: 'GILLIAN DOBLE', joinedOn: '2024-02-24', verified: true, active: true },
    { id: 16, name: 'CHARISSA ROSADA', joinedOn: '2024-01-25', verified: true, active: false },
    { id: 17, name: 'CLARIZZE REGODO', joinedOn: '2023-04-30', verified: false, active: true },
    { id: 18, name: 'JP I FORGOT THE APELYIDO', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 19, name: 'MATT ROMAWAK', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 20, name: 'LAURENCE SALAZAR', joinedOn: '2023-07-15', verified: true, active: false },
    { id: 21, name: 'ROGELIO OCENA', joinedOn: '2023-08-20', verified: false, active: true },
    { id: 22, name: 'ADRIAN DALE', joinedOn: '2023-09-25', verified: true, active: false },
    { id: 23, name: 'ARCHIE SOMETHING', joinedOn: '2023-10-30', verified: false, active: true },
    { id: 24, name: 'MARIAN BULA', joinedOn: '2023-06-10', verified: false, active: true },

  ]);
  const [pendingVerificationList, setPendingVerificationList] = useState([
    { id: 11, name: 'SEAN PULMA', joinedOn: '2023-11-05', verified: false, active: true },
    { id: 12, name: 'BLAIRE OLAES', joinedOn: '2023-11-10', verified: false, active: true },
    { id: 13, name: 'SHERNA PALCONITE', joinedOn: '2023-11-15', verified: false, active: true },
    { id: 25, name: 'GENG GENG', joinedOn: '2023-11-05', verified: false, active: true },
    { id: 26, name: 'MICHELLE ABRAHAN', joinedOn: '2023-11-05', verified: false, active: true },
    { id: 27, name: 'RAMEL PANIS', joinedOn: '2023-11-05', verified: false, active: true },
    { id: 28, name: 'ULYSSES DURAN', joinedOn: '2023-11-05', verified: false, active: true },


  ]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([{ name: 'Admin/ Artist List' }]); // Initialize breadcrumb items

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      id: "name",
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
    {
      name: 'Joined On',
      selector: row => row.joinedOn,
      sortable: true,
      id: "joinedon",
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
    {
      name: 'Control',
      id: "control",
      cell: row => (
        <div>
          {view === 'verify' ? (
            <>
              <button className="btnreactivate" onClick={() => handleVerifyArtist(row.id)}>VERIFY</button>
              <button className="btnremove" onClick={() => handleDenyVerification(row.id)}>DENY</button>
            </>
          ) : (
            row.active ? (
              <>
                <button className="btndeactivate" onClick={() => handleDeactivateAccount(row.id)} disabled={!row.active}>DEACTIVATE ACCOUNT</button>
                <button className="btnremove" onClick={() => handleRemoveAccount(row.id)}>REMOVE ACCOUNT</button>
              </>
            ) : (
              <button className="btnreactivate" onClick={() => handleReactivateAccount(row.id)}>REACTIVATE</button>
            )
          )}
        </div>
      ),
      style: {
        fontSize: '18px',
        color: 'white',
      },
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeactivateAccount = (id) => {
    const updatedList = artistList.map(artist =>
      artist.id === id ? { ...artist, active: false } : artist
    );
    setArtistList(updatedList);
  };
    
  const handleRemoveAccount = (id) => {
    const updatedList = artistList.filter(artist => artist.id !== id);
    setArtistList(updatedList);
  };
  
  const handleReactivateAccount = (id) => {
    const updatedList = artistList.map(artist =>
      artist.id === id ? { ...artist, active: true } : artist
    );
    setArtistList(updatedList);
  };
  

  const handleDenyVerification = (id) => {
    // handleDenyVerification logic
  };

  const handleVerifyArtist = (id) => {
    // handleVerifyArtist logic
  };

  const changeView = (newView) => {
    setView(newView);
    let breadcrumb;
    switch(newView) {
      case 'all':
        breadcrumb = [{ name: 'Admin/Artist List / ' }, { name: 'All' }];
        break;
      case 'deactivated':
        breadcrumb = [{ name: 'Admin/Artist List / ' }, { name: 'Deactivated' }];
        break;
      case 'verify':
        breadcrumb = [{ name: 'Admin/Artist List / ' }, { name: 'Verify Artist' }];
        break;
      default:
        breadcrumb = [{ name: 'Admin/Artist List' }];
    }
    breadcrumb.push({ name: newView.toUpperCase() });
    setBreadcrumbItems(breadcrumb);
  };

  const renderArtists = () => {
    let filteredArtists;
    switch (view) {
      case 'all':
        filteredArtists = artistList.filter(
          (artist) =>
            artist.active && artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'deactivated':
        filteredArtists = artistList.filter(
          (artist) =>
            !artist.active && artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      case 'verify':
        filteredArtists = pendingVerificationList.filter((artist) =>
          artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        break;
      default:
        filteredArtists = [];
    }
    return filteredArtists;
  };
  

   return (
    <div className="mainadmin">
      <Sidebar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2>Artists</h2>
            <Breadcrumb items={breadcrumbItems} />
            <br />
            <div className="input-group mb-3" style={{ paddingLeft:'600px', width: '1300px' }}>
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
            <br />
            <div className="d-flex mb-3">
              <span onClick={() => changeView('all')} className={`tab ${view === 'all' && 'active-tab'} me-3 active-pane`}> ALL </span>
              <span onClick={() => changeView('deactivated')} className={`tab ${view === 'deactivated' && 'active-tab'} me-3 active-pane`}>DEACTIVATED</span>
              <span onClick={() => changeView('verify')} className={`tab ${view === 'verify' && 'active-tab'} active-pane`}>PENDING VERIFICATION</span>
            </div>
            <DataTable
              columns={columns}
              data={renderArtists()} 
              searchable={true}
              pagination
              noHeader={true} 
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

export default ArtistList;
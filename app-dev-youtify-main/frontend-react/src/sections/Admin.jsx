import React, { useState } from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Sidebar from '../components/sections/Sidebar'; // Importing Sidebar component
import Dashboard from '../assets/images/Dashboard.png';
import Artist from '../assets/images/Artist.png';
import Listener from '../assets/images/Listener.png';
import Music from '../assets/images/Music.png';
import Podcast from '../assets/images/Podcast.png';
import Videocast from '../assets/images/Videocast.png';
import Pricing from '../assets/images/Pricing.png';


function AdminSettings() {
  const [view, setView] = useState('all'); // Manage the current view: 'all', 'deactivated', 'verify'
  const [searchQuery, setSearchQuery] = useState('');
  const [artistList, setArtistList] = useState([
    { id: 1, name: 'ALEX GABRIELLE MARRI SEQUITO', joinedOn: '2023-01-15', verified: false, active: true },
    { id: 2, name: 'RUBY LINGO', joinedOn: '2023-02-20', verified: true, active: true },
    { id: 3, name: 'RYAN RAYO', joinedOn: '2023-03-25', verified: true, active: false },
    { id: 4, name: 'KIMMY KIMMY', joinedOn: '2023-04-30', verified: false, active: true },
    { id: 5, name: 'JANINE MEMORACION', joinedOn: '2023-05-05', verified: true, active: false },
    { id: 6, name: 'FRANZ PETER', joinedOn: '2023-06-10', verified: false, active: true },
    { id: 7, name: 'ANDREW PERMEJO', joinedOn: '2023-07-15', verified: true, active: false },
    { id: 8, name: 'HAKDOG HAKCHIGIDIDOG', joinedOn: '2023-08-20', verified: false, active: true },
    { id: 9, name: 'KAPOY KAAYO', joinedOn: '2023-09-25', verified: true, active: false },
    { id: 10, name: 'LAST NA', joinedOn: '2023-10-30', verified: false, active: true },
  ]);
  const [pendingVerificationList, setPendingVerificationList] = useState([
    { id: 11, name: 'SEAN PULMA', joinedOn: '2023-11-05', verified: false, active: true },
    { id: 12, name: 'BLAIRE OLAES', joinedOn: '2023-11-10', verified: false, active: true },
    { id: 13, name: 'SHERNA PALCONITE', joinedOn: '2023-11-15', verified: false, active: true },
  ]);

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
    const updatedList = pendingVerificationList.filter(artist => artist.id !== id);
    setPendingVerificationList(updatedList);
  };

  const handleVerifyArtist = (id) => {
    const artist = pendingVerificationList.find(artist => artist.id === id);
    const updatedList = pendingVerificationList.filter(artist => artist.id !== id);
    setPendingVerificationList(updatedList);
    setArtistList([...artistList, artist]);
  };

  const changeView = (newView) => {
    setView(newView);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderArtists = () => {
    let filteredArtists;
    switch (view) {
      case 'all':
        filteredArtists = artistList.filter(artist =>
          artist.active && artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredArtists.map(artist => (
          <div key={artist.id} style={{ display: 'flex', marginBottom: '5px' }}>
            <div style={{ flex: 1 }}>{artist.name}</div>
            <div style={{ flex: 1 }}>{artist.joinedOn}</div>
            <div style={{ flex: 1 }}>
              <button className="btndeactivate" onClick={() => handleDeactivateAccount(artist.id)} disabled={!artist.active}>DEACTIVATE ACCOUNT</button>
              <button className="btnremove" onClick={() => handleRemoveAccount(artist.id)}>REMOVE ACCOUNT</button>
            </div>
          </div>
        ));
      case 'deactivated':
        filteredArtists = artistList.filter(artist =>
          !artist.active && artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredArtists.map(artist => (
          <div key={artist.id} style={{ display: 'flex', marginBottom: '5px' }}>
            <div style={{ flex: 1 }}>{artist.name}</div>
            <div style={{ flex: 1 }}>{artist.joinedOn}</div>
            <div style={{ flex: 1 }}>
              <button className="btnreactivate" onClick={() => handleReactivateAccount(artist.id)}>REACTIVATE</button>
            </div>
          </div>
        ));
      case 'verify':
        filteredArtists = pendingVerificationList.filter(artist =>
          artist.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filteredArtists.map(artist => (
          <div key={artist.id} style={{ display: 'flex', marginBottom: '5px' }}>
            <div style={{ flex: 1 }}>{artist.name}</div>
            <div style={{ flex: 1 }}>{artist.joinedOn}</div>
            <div style={{ flex: 1 }}>
              <button className="btnreactivate" onClick={() => handleVerifyArtist(artist.id)}>VERIFY</button>
              <button className="btnremove" onClick={() => handleDenyVerification(artist.id)}>DENY</button>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="mainadmin">
      <Sidebar /> {/* Including Sidebar component */}
      <div style={{ marginLeft: '400px', padding: '20px', marginTop:'20px' }}> {/* Adjusting margin to accommodate sidebar */}
        <h2>Artists</h2>
        <br></br>
        <input  class="searchstyling" type="text"   placeholder="Search"  value={searchQuery}  onChange={handleSearchChange}  style={{ paddingLeft: '30px', // Adjust this value according to the width of your search icon
           backgroundImage: `url('src/assets/images/Search.png')`, // Replace 'path_to_your_icon.png' with the actual path to your icon file
          backgroundPosition: '10px center',backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat',
  }} 
/>
        <br></br>
        <div name="spanstyling" style={{ display: 'flex', marginBottom: '10px' }}>
          <span onClick={() => changeView('all')} className={`tab ${view === 'all' && 'active-tab'}`}>ALL</span>
          <div className="column-divider"></div>
          <span onClick={() => changeView('deactivated')} className={`tab ${view === 'deactivated' && 'active-tab'}`}>DEACTIVATED</span>
          <div className="column-divider"></div>
          <span onClick={() => changeView('verify')} className= {`tab ${view === 'verify' && 'active-tab'}`}>VERIFY ARTIST</span>
                   
        </div>
          <div>
          <div name="tablestyle" style={{ display: 'flex', marginLeft: '0px',  backgroundColor: '#363636',  marginRight: '75px',padding: '20px'
 }}>
          <div style={{ flex: 1,marginRight:'20px' }}>NAME</div>
          <div style={{ flex: 1, marginLeft:'50px' }}>JOINED ON</div>
          <div style={{ flex: 1, marginLeft:'100px'  }}>CONTROL</div>
</div>

          <br></br>

        </div>
        {renderArtists()}
      </div>
    </div>
  );
}

export default AdminSettings;
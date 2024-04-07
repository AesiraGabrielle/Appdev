import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import Sidebar from '../components/Sidebar';
import RevenueChart from "../components/RevenueChart";
import TopSong from "../components/TopSongs"; 
import MapComponent from '../components/MapComponent';


function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userName = "Ryan Rayo";
 
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');

    navigate('/login');
  };


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container-fluid bg-1E1E1E text-white min-vh-100" style={{ backgroundColor: '#1E1E1E', fontFamily:'Montserrat' }}>
      <div className="row">
        <div className="col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="main-content p-4" style={{ marginLeft: '-20px' }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h2 className="mb-0" style={{ marginBottom: '0', marginRight: '20px', marginLeft: '-100px' }}>Dashboard</h2>
              </div>
              <div className="input-group w-70">
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
                    height: '43px',
                  }}
                />
              </div>
              <div className="user-profile d-flex align-items-center position-relative" ref={dropdownRef}>
                <img
                  src="src/assets/images/user.png"
                  alt="User Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: '50px', height: '40px', marginRight: '10px', cursor: 'pointer' }}
                  onClick={toggleDropdown}
                />
                <span style={{ maxWidth: '150px', whiteSpace: 'nowrap',  cursor: 'pointer', marginRight: '20px', }}>{userName}</span>
                {dropdownOpen && (
                  <div
                    className="dropdown-menu show position-absolute" 
                    style={{ top: 'calc(100% + 5px)', right: '0', zIndex: '1000' }} // Adjusted position
                  >
                    <a className="dropdown-item" href="#">
                      Account
                    </a>
                    <a className="dropdown-item" href="#">
                      Video Podcasts
                    </a>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                    <a className="dropdown-item" href="#">
                      Devices
                    </a>
                    <a className="dropdown-item" href="#">
                      About
                    </a>
                    <div className="dropdown-divider" onClick={handleLogout}></div>
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div style={{ marginLeft: '-100px' }}>
              <div className="mb-bg-1E1E1E" style={{ backgroundColor: '#1E1E1E', padding: '20px', marginTop: '20px' }}>
                <div className="mb-4">
                  <h4 className="mb-0">Album Track</h4>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <div className="position-relative">
                      <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', border:'none', borderRadius:' 20px',padding: 0, margin: 0 }}>
                        <img src="src/assets/images/taytay.jpeg" alt="Image 1" className="img-fluid" style={{ background: '#2C2C2C', border:'none'}}/>
                      </button>
                      <h5 className="text-left mt-3">Ammacana Pls </h5>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="position-relative">
                    <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', border:'none', borderRadius:' 20px',padding: 0, margin: 0 }}>
                      <img src="src/assets/images/taytay.jpeg" alt="Image 1" className="img-fluid" style={{ background: '#2C2C2C', border:'none' }}/>                      </button>
                      <h5 className="text-left mt-3">Ammacana Pls </h5>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="position-relative">
                    <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', border:'none', borderRadius:' 20px',padding: 0, margin: 0 }}>
                      <img src="src/assets/images/taytay.jpeg" alt="Image 1" className="img-fluid" style={{ background: '#2C2C2C', border:'none', }}/>                     
                      </button>
                      <h5 className="text-left mt-3">Ammacana Pls </h5>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="position-relative">
                    <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', border:'none', borderRadius:' 20px',padding: 0, margin: 0 }}>
                      <img src="src/assets/images/taytay.jpeg" alt="Image 1" className="img-fluid" style={{ background: '#2C2C2C', border:'none' }}/>                      </button>
                      <h5 className="text-left mt-3">Ammacana Pls </h5>
                    </div>
                  </div>
                </div>
                <h4 className="mb-0">Overview</h4>
                </div>
                <div className="row">
                  <div className="col-md-3" style={{ width: '25%' }}>
                    <div className="position-relative">
                      <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', padding: 0, margin: 0, display: 'flex', border:'none', alignItems: 'center', height:'60px', marginLeft: '20px' }}>
                        <img src="src/assets/images/music.png" alt="Image 1" className="img-fluid" style={{ marginLeft:'20px', marginRight: '10px', height:'40px'  }} />
                        <div style={{ float: 'right', marginLeft:'20px' }}>
                          <h5 className="text-right mt-3">Total Songs </h5>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ width: '25%' }}>
                    <div className="position-relative">
                      <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', padding: 0, margin: 0, display: 'flex', border:'none', alignItems: 'center', height:'60px', marginLeft: '20px' }}>
                        <img src="src/assets/images/artist.png" alt="Image 2" className="img-fluid" style={{ marginLeft:'20px', marginRight: '10px', height:'40px'  }} />
                        <div style={{ float: 'right', marginLeft:'20px' }}>
                          <h5 className="text-right mt-3">Total Artists </h5>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ width: '25%' }}>
                    <div className="position-relative">
                      <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', padding: 0, margin: 0, display: 'flex', border:'none', alignItems: 'center', height:'60px', marginLeft: '20px' }}>
                        <img src="src/assets/images/playlist.png" alt="Image 3" className="img-fluid" style={{ marginLeft:'20px', marginRight: '10px', height:'40px'  }} />
                        <div style={{ float: 'right', marginLeft:'20px' }}>
                          <h5 className="text-right mt-3">Total Tracks </h5>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3" style={{ width: '25%' }}>
                    <div className="position-relative">
                      <button className="btn btn-primary w-100" style={{ background: '#2C2C2C', padding: 0, margin: 0, display: 'flex', border:'none', alignItems: 'center', height:'60px', marginLeft: '20px' }}>
                        <img src="src/assets/images/album.png" alt="Image 4" className="img-fluid" style={{ marginLeft:'20px', marginRight: '10px', height:'40px'  }} />
                        <div style={{ float: 'right', marginLeft:'20px' }}>
                          <h5 className="text-right mt-3">Total Albums </h5>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginTop:'30px', marginLeft:'20px', height:'390px', backgroundColor:'white'}}>
                  <RevenueChart/>
                </div>
                <div className="row" style={{ marginTop:'20px', display: 'flex'  }}>
                  <div className="col-md-8">
                  <div className="mb-0" style={{ height: '400px' , marginLeft:'20px'}}>
                          <h4 className="mb-0">Top Songs</h4>
                          <TopSong /> {/* Rendering TopSong component */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-0" style={{ height: '400px' }}>
                          <h4 className="mb-0">Sale by Location</h4>
                          <MapComponent style={{ width: '100%', height: '70%' }}/> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
  );
}

export default AdminDashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const redirectToUserProfilePage = () => {
    navigate('/userprofile');
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-white fixed-top">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <img src="src\assets\images\logo.png" alt="user" className="logo" />
          </div>
          <div className="col-auto">
            <h1 className="navbar-brand">Warehouse Inventory System</h1>
          </div>
          <div className="col-auto flex-grow-1" style={{ paddingLeft: '800px' }}>
            <form className="form-inline d-flex justify-content-end" role="search">
              <div className="input-group">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
                <div className="input-group-append">
                  <button className="search btn btn-outline-dark" type="submit" style={{ marginRight: '10px' }}>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-auto">
            <img src="src\assets\images\user.png" alt="user" className="user" onClick={redirectToUserProfilePage} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

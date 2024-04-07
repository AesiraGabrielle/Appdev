import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage or session
    // Then redirect to the login page
    // For example, clear localStorage:
    localStorage.removeItem('accessToken');

    // Redirect to the login page
    navigate('/login');
  };


  const handleHomeClick = () => {
    navigate('/home'); // Redirect to the Listener List page
  };

  return (
    <div className="sidenav">
    <h1 style={{ color: '#C70000', fontFamily: 'Jockey One', marginTop: '10px', marginLeft: '20px', fontSize: '40px', fontWeight: '400' }}>
      YOU<span style={{ color: '#fff' }}>TIFY</span>
    </h1>
    <a href="#" style={{ fontFamily: 'Montserrat' }} onClick={handleHomeClick}>
      <img className="imghighlight1" src="src/assets/images/home.png" alt="Home" /> Home
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight1" src="src/assets/images/search.png" alt="Search" /> Search
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight1" src="src/assets/images/musical-note.png" alt="Music" /> Music
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight1" src="src/assets/images/podcast.png" alt="Podcast" /> Podcast
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight1" src="src/assets/images/video.png" alt="Videocast" /> Videocast
    </a>

    <h2 style={{ color: '#C70000', marginLeft: '8px', fontFamily: 'Montserrat' }}>YOUR LIBRARY</h2>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight" src="src/assets/images/playlist.png" alt="Recently Played" /> Recently Played
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight" src="src/assets/images/playlist.png" alt="Top Charts" /> Top Charts
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight" src="src/assets/images/playlist.png" alt="Best of the Best" /> Best of the Best
    </a>
    <a href="#" style={{ fontFamily: 'Montserrat' }}>
      <img className="imghighlight" src="src/assets/images/playlist.png" alt="Lorem Music" /> Lorem Music
    </a>
 {/* Logout Button */}
 <br></br> <br></br> <br></br>  <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br>  <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br>
 <br></br> <br></br> <br></br>
 <button className="btnout" onClick={handleLogout} style={{ fontFamily: 'Montserrat', marginLeft: '250px', marginTop: 'auto', marginBottom: '20px',  }}>
        LOGOUT
      </button>
    </div>
  );
}

export default Sidebar;

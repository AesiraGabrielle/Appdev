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

  const handleArtistListClick = () => {
    navigate('/artistlist'); // Redirect to the Artist List page
  };

  const handleHomeClick = () => {
    navigate('/home'); // Redirect to the Listener List page
  };

  const handleListenerListClick = () => {
    navigate('/listenerslist'); // Redirect to the Listener List page
  };

  const handleMusicListClick = () => {
    navigate('/musiclist'); // Redirect to the Listener List page
  };

  return (
    <div className="sidenav">
      <h1 style={{ color: '#C70000', fontFamily: 'Jockey One', marginTop: '10px', marginLeft: '20px', fontSize: '40px', fontWeight: '400' }}>
        YOU<span style={{ color: '#fff' }}>TIFY</span>
      </h1>
      <a href="#" style={{ fontFamily: 'Montserrat' }} onClick={handleHomeClick}>
        <img className="imghighlight1" src="src/assets/images/home.png" alt="Dashboard" /> Dashboard
      </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }} onClick={handleArtistListClick}>
        <img className="imghighlight1" src="src/assets/images/artist.png" alt="Artist List" /> Artist List
      </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }} onClick={handleListenerListClick}>
        <img className="imghighlight1" src="src/assets/images/listen.png" alt="Listener" /> Listener List
        </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }} onClick={handleMusicListClick}>
        <img className="imghighlight1" src="src/assets/images/musical-note.png" alt="Music" /> Music List
      </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }}>
        <img className="imghighlight1" src="src/assets/images/podcast.png" alt="Podcast" /> Podcast List
      </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }}>
        <img className="imghighlight1" src="src/assets/images/video.png" alt="Videocast" /> Videocast List
      </a>
      <a href="#" style={{ fontFamily: 'Montserrat' }}>
        <img className="imghighlight1" src="src/assets/images/pricing.png" alt="Pricing" /> Pricing Setting
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

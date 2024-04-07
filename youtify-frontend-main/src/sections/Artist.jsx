import React, { useState } from 'react';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArtistSidebar from '../components/ArtistSidebar'; 


function Artist() {
  const [uploadedSongs, setUploadedSongs] = useState([]);

  const handleUpload = (songName, songData) => {
    setUploadedSongs([...uploadedSongs, { name: songName, data: songData }]);
  };

  const handlePlay = (index) => {
    const audioPlayer = document.getElementById(`audio${index}`);
    audioPlayer.play();
  };


  return (
    <div className="artistpage">
      <div className="button-container">
      <div className="row">
    <div className="col">
    <a href="#" className="btn btn-secondary previous no-background" role="button">&#8249;</a>
<a href="#" className="btn btn-secondary next no-background" role="button">&#8250;</a>

    </div>
    <div className="col text-end">
      <button className="btn btn-primary" style={{ borderRadius: '30px', backgroundColor: '#C70000', color: '#fff', fontSize: '12px', fontFamily: 'Montserrat', padding: '8px', marginTop: '15px', marginBottom: '5px' , borderColor: 'transparent'}}>EXPLORE PREMIUM</button>
      <button className="btn btn-dark" style={{ borderRadius: '20px', backgroundColor: '#2C2C2C', color: '#fff', fontSize: '16px', fontFamily: 'Montserrat', padding: '9px', marginRight: '20px', marginTop: '10px', width: '150px' }}>
        User Name 
        <img src="src/assets/images/User.png" alt="User" style={{ height: '17px', width: '17px' }} />
      </button>
    </div>
  </div>
</div>
<ArtistSidebar onUpload={handleUpload} />
      {/* Add more components or content here */}
     
        
          <h3 className="h3allsong">ALL SONGS</h3>
          <table className="table" style={{fontFamily: 'Montserrat', marginleft: '300px'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Artist Name</th>
                <th>Title</th>
                <th>Duration</th>
                
              </tr>
            </thead>
            <br></br>
            <tbody className="table tbody">
              {/* Display uploaded songs */}
              {uploadedSongs.map((song, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{song.name}</td>
                  <td>
                    <audio id={`audio${index}`} src={song.data} type="audio/mpeg" controls />
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


  );
}

export default Artist;


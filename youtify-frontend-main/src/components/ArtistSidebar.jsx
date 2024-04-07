import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ArtistSidebar({ onUpload }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [albumName, setAlbumName] = useState('');
  const [albums, setAlbums] = useState(['Album 1', 'Album 2']);
  const [step, setStep] = useState(1);
  const [albumImages, setAlbumImages] = useState({});
  const [newAlbumName, setNewAlbumName] = useState('');
  const [musicFiles, setMusicFiles] = useState([]);
  const [artistNames, setArtistNames] = useState({});
  const [selectedGenres, setSelectedGenres] = useState(Array(musicFiles.length).fill(''));
  const [modalMusicTitles, setModalMusicTitles] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const songName = file.name;
    onUpload(songName);
    console.log('Selected file:', file);
  };

  const handleAlbumImageUpload = (event) => {
    const file = event.target.files[0];
    console.log('Selected album image:', file);
    setAlbumImages({ ...albumImages, [newAlbumName]: URL.createObjectURL(file) });
  };

  const handleMusicUpload = (event) => {
    const files = event.target.files;
    console.log('Selected music files:', files);
    const updatedMusicFiles = [...musicFiles, ...files];
    const updatedModalMusicTitles = [...modalMusicTitles];
    updatedMusicFiles.forEach((file, index) => {
      if (!updatedModalMusicTitles[index]) {
        updatedModalMusicTitles[index] = '';
      }
    });
    setMusicFiles(updatedMusicFiles);
    setModalMusicTitles(updatedModalMusicTitles);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setStep(1);
    setAlbumName('');
    setMusicFiles([]);
    setModalMusicTitles([]);
  };

  const handleNextStep = () => {
    if (step === 1) {
      setNewAlbumName(albumName);
      setStep(2);
    } else if (step === 2) {
      setAlbums([...albums, newAlbumName]);
      setShowModal(false);
    }
  };

  const handleRemoveMusic = (indexToRemove) => {
    setMusicFiles(musicFiles.filter((_, index) => index !== indexToRemove));
  };

  const handleCreateAlbum = () => {
    setShowModal(true);
  };

  const handleAlbumClick = (name) => {
    setAlbumName(name);
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleAllSongClick = () => {
    navigate('/allsong');
  };



  const handleModalMusicTitleChange = (event, index) => {
    const updatedTitles = [...modalMusicTitles];
    updatedTitles[index] = event.target.value; // Update the title directly
    setModalMusicTitles(updatedTitles);
  };

  const handleArtistNameChange = (event, index) => {
    const updatedArtistNames = { ...artistNames };
    updatedArtistNames[musicFiles[index].name] = event.target.value;
    setArtistNames(updatedArtistNames);
  };

  const handleGenreChange = (event, index) => {
    const updatedSelectedGenres = [...selectedGenres];
    updatedSelectedGenres[index] = event.target.value;
    setSelectedGenres(updatedSelectedGenres);
  };


  return (
    <div className="sidenav">
      <h1 style={{ color: '#C70000', fontFamily: 'Jockey One', marginTop: '10px', marginLeft: '10px', fontSize: '40px', fontWeight: '400' }}>
        YOU<span style={{ color: '#fff' }}>TIFY</span>
      </h1>
      <a href="#" className="nav-link" onClick={handleHomeClick}>
        <img className="imghighlight1" src="src/assets/images/home.png" alt="Home" /> Home
      </a>
      <a href="#" className="nav-link">
        <img className="imghighlight1" src="src/assets/images/search.png" alt="Search" /> Search
      </a>
      <a href="#" className="nav-link" onClick={handleAllSongClick}>
        <img className="imghighlight1" src="src/assets/images/musical-note.png" alt="Music" /> All Songs
      </a>
      <a href="#" className="nav-link" onClick={handleCreateAlbum}>
        <img className="imghighlight1" src="src/assets/images/album.png" alt="Album" /> Create Album
      </a>
      {albums.map((album, index) => (
        <a key={index} href="#" className="nav-link" onClick={() => handleAlbumClick(album)}>
          <img className="imghighlight1" src={albumImages[album] ? albumImages[album] : "src/assets/images/album.png"} alt={album} /> {album}
        </a>
      ))}
      {musicFiles.length > 0 && (
        <div className="bg-light p-3 rounded mt-3">
          <label>Music to Upload:</label>
          <ul className="list-unstyled">
          {musicFiles.map((file, index) => (
  <li key={index} className="position-relative">
    <button
      onClick={() => handleRemoveMusic(index)}
      className="btn btn-danger btn-sm position-absolute top-0 end-0"
    >
      X
    </button>
    <input
      type="text"
      value={modalMusicTitles[index] || ''}
      onChange={(e) => handleModalMusicTitleChange(e, index)}
      placeholder="Enter Music Title"
      className="form-control"
    />
    <input
      type="text"
      value={artistNames[file.name] || ''}
      onChange={(event) => handleArtistNameChange(event, index)}
      placeholder="Enter Artist Name"
      className="form-control mt-2"
    />
    <select value={selectedGenres[index] || ''} onChange={(e) => handleGenreChange(e, index)} className="form-control mt-2">
      <option value="">Select Genre</option>
      <option value="rock">Rock</option>
      <option value="pop">Pop</option>
      <option value="metal">Metal</option>
      <option value="country">Country</option>
      <option value="jazz">Classical</option>
      {/* Add more genre options as needed */}
    </select>
    <audio controls className="mt-2">
      <source src={URL.createObjectURL(file)} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </li>
))}

          </ul>
        </div>
      )}
      <br />
      <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
      <button className="btn btn-outline-primary" onClick={() => document.getElementById('fileInput').click()}>
        + Upload Music
      </button>

      <Modal show={showModal} onHide={handleModalClose} dialogClassName="modal-lg">
        <Modal.Header closeButton style={{ backgroundColor: '#2C2C2C', borderBottom: 'none' }}>
          <Modal.Title style={{ color: '#fff' }}>{step === 1 ? 'Enter Album Name' : 'Upload Album Image'}</Modal.Title>
        </Modal.Header>
<Modal.Body style={{ backgroundColor: '#2C2C2C', color: '#fff', border: 'none' }}>
  {step === 1 ? (
    <div>
      <label htmlFor="albumName">Album Name:</label>
      <input
        type="text"
        id="albumName"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
        className="form-control"
      />
    </div>
  ) : (
    <div>
      <label htmlFor="albumImage">Upload/Drag Album Image:</label>
      <input
        type="file"
        id="albumImage"
        accept="image/*"
        className="form-control"
        onChange={handleAlbumImageUpload}
      />
      {musicFiles.length > 0 && (
        <div className="bg-light p-3 rounded mt-3">
          <label>Music to Upload:</label>
          <ul className="list-unstyled">
            {musicFiles.map((file, index) => (
              <li key={index} className="position-relative">
                <button
                  onClick={() => handleRemoveMusic(index)}
                  className="btn btn-danger btn-sm position-absolute top-0 start-100 translate-middle"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  X
                </button>
                <input
                  type="text"
                  value={modalMusicTitles[index] || file.title || file.name}
                  onChange={(e) => handleModalMusicTitleChange(e, index)}
                  placeholder="Enter Music Title"
                  className="form-control"
                />
                <input
                  type="text"
                  value={artistNames[file.name] || ''}
                  onChange={(event) => handleArtistNameChange(event, index)}
                  placeholder="Enter Artist Name"
                  className="form-control mt-2"
                />
                <select
                  value={selectedGenres[index] || ''}
                  onChange={(e) => handleGenreChange(e, index)}
                  className="form-control mt-2"
                >
                  <option value="">Select Genre</option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="metal">Metal</option>
                  <option value="country">Country</option>
                  <option value="jazz">Classical</option>
                  {/* Add more genre options as needed */}
                </select>
                <audio controls className="mt-2">
                  <source src={URL.createObjectURL(file)} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        </div>
      )}

      <label htmlFor="musicFile">Upload/Drag Music:</label>
      <input
        type="file"
        id="musicFile"
        accept="audio/*"
        className="form-control"
        onChange={handleMusicUpload}
        multiple
      />
    </div>
  )}
</Modal.Body>

        <Modal.Footer style={{ backgroundColor: '#2C2C2C', borderTop: 'none' }}>
          <Button variant="secondary" onClick={handleModalClose} style={{ backgroundColor: '#C70000' }}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNextStep} style={{ backgroundColor: '#4CAF50' }}>
            {step === 1 ? 'Next' : 'Upload'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ArtistSidebar;

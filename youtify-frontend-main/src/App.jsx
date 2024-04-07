import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./sections/Register"
import Login from "./sections/Login";
import Home from "./sections/Home";
import ListenersList from "./sections/ListenersList";
import Artist from "./sections/Artist";
import ArtistList from "./sections/ArtistList";
import MusicList from "./sections/MusicList";
import Dashboard from "./sections/Dashboard";


function App() 
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/artistlist" element={<ArtistList />}></Route>        
        <Route path="/musiclist" element={<MusicList />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/listenerslist" element={<ListenersList />}></Route>
        <Route path="/allsong" element={<Artist />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>



      </Routes>
    </Router>
  );
}

export default App

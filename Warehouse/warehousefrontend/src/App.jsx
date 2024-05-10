import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from "./sections/UserProfile";
import Login from "./sections/Login";
import Register from "./sections/Register";
import Home from "./sections/Home";
import Stocks from "./sections/Stocks";
import Items from "./sections/Items";
import About from "./sections/About";
import Returned from "./sections/Returned";
import Contacts from "./sections/Contacts";




function App() 
{
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/stocks" element={<Stocks />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/returned" element={<Returned />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>



      </Routes>
    </Router>
  );
}

export default App;

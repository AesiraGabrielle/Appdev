import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from "./sections/UserProfile.jsx";
import Login from "./sections/Login";
import Register from "./sections/Register";
import Home from "./sections/Home";
import Stocks from "./sections/Stocks";
import Items from "./sections/Items";
import Returned from "./sections/Returned";
import Contacts from "./sections/Contacts.jsx";
import AdminLogin from "./sections/AdminLogin.jsx";
import AdminRegister from "./sections/AdminRegister.jsx";
import AdminHome from "./sections/AdminHome";
import AdminProfile from "./sections/AdminProfile.jsx";
import AdminStocks from "./sections/AdminStocks";
import AdminItems from "./sections/AdminItems";
import AdminReturned from "./sections/AdminReturned";
import AdminContacts from "./sections/AdminContacts.jsx";
import Employees from "./sections/Employee.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/items" element={<Items />} />
        <Route path="/returned" element={<Returned />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Admin routes */}
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminstocks" element={<AdminStocks />} />
        <Route path="/adminitems" element={<AdminItems />} />
        <Route path="/adminreturned" element={<AdminReturned />} />
        <Route path="/admincontacts" element={<AdminContacts />} />
      </Routes>
    </Router>
  );
}

export default App;

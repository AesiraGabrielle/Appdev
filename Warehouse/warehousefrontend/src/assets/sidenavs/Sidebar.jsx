import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Sidebar = () => {
  const navigate = useNavigate();
    
  const redirectToHomePage = () => {
      navigate('/home');
  };
  
  const redirectToStocksPage = () => {
        navigate('/stocks');
  };

  const redirectToItemsPage = () => {
        navigate('/items');
  };

  const redirectToReturnedPage = () => {
    navigate('/returned');
  };

  const redirectToContactsPage = () => {
    navigate('/contacts');
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clearing local storage or session, redirecting to login page, etc.
    // After logout, navigate to the login page
    navigate('/login');
  };

  return (
    <div className="sidebar-header">
      <ul>
        <a href="#home" onClick={redirectToHomePage}>Home</a>
        <a href="#stocks" onClick={redirectToStocksPage}>Stocks</a>
        <a href="#items" onClick={redirectToItemsPage}>Items</a>
        <a href="#returned" onClick={redirectToReturnedPage}>Returned</a>
        <a href="#contacts" onClick={redirectToContactsPage}>WIS Contacts</a>
        {/* Logout Button */}
        <a href="#logout" onClick={handleLogout}>Logout</a>
      </ul>
    </div>
  );
};

export default Sidebar;

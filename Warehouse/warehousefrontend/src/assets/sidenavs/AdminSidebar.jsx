import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminSidebar = () => {
  const navigate = useNavigate();
    
  const redirectToAdminHomePage = () => {
      navigate('/adminhome');}
  
  const redirectToAdminStocksPage = () => {
        navigate('/adminstocks');}

  const redirectToAdminItemsPage = () => {
        navigate('/adminitems');}

  const redirectToAdminReturnedPage = () => {
    navigate('/adminreturned');}


  const redirectToAdminContactsPage = () => {
    navigate('/admincontacts');}

  const redirectToEmployeePage = () => {
    navigate('/employees');}

  return (
    <div className="sidebar-header">
      <ul>
        <a href="#adminhome" onClick={redirectToAdminHomePage}>Home</a>
        <a href="#adminstocks" onClick={redirectToAdminStocksPage}>Stocks</a>
        <a href="#adminitems" onClick={redirectToAdminItemsPage}>Items</a>
        <a href="#adminreturned" onClick={redirectToAdminReturnedPage}>Returned</a>
        <a href="#employees" onClick={redirectToEmployeePage}>Employees</a>
        <a href="#admincontacts" onClick={redirectToAdminContactsPage}>WIS Contacts</a>
      </ul>
    </div>
  );
};

export default AdminSidebar;

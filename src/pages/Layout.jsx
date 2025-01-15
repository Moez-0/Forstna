import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { AdminNavbar } from '../components/AdminNavbar'; // Import AdminNavbar

const Layout = () => {
  // Replace this with actual role check logic
  const userRole = 'admin'; // Change this to 'user' to see the user navbar

  const isAdmin = userRole === 'user';  

  return (
    <>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;

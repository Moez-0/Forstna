import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '/logo.png';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        {/* Logo */}
        <div className="mb-6">
          <img src={logo} alt="Logo" className="mx-auto w-24" />
        </div>

        {/* Navigation */}
        <ul className="flex-1">
          <li>
            <Link
              to="/admin/users"
              className="block py-2 px-4 w-full hover:bg-gray-700 text-center"
            >
              Users Management
            </Link>
          </li>
          <li>
            <Link
              to="/admin/deals"
              className="block py-2 px-4 w-full hover:bg-gray-700 text-center"
            >
              Deals
            </Link>
          </li>
          <li>
            <Link
              to="/admin/business"
              className="block py-2 px-4 w-full hover:bg-gray-700 text-center"
            >
              Business Listings
            </Link>
          </li>
          <li>
            <Link
              to="/admin/loyalty-program"
              className="block py-2 px-4 w-full hover:bg-gray-700 text-center"
            >
              Loyalty Program
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

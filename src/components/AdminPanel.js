import React from 'react';
import ManageScreens from './ManageScreens';
import ManageBookings from './ManageBookings';
import ManageFoodMenu from './ManageFoodMenu';

function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ManageScreens />
      <ManageBookings />
      <ManageFoodMenu />
    </div>
  );
}

export default AdminPanel;

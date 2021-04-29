import React from 'react';
import RequireAuth from 'components/requiredAuth';

const AppointmentsPage = () => (
  <div style={{ minHeight: 'calc(100vh - 608px)' }}>
    <h1>My Appointments</h1>
  </div>
);

export default RequireAuth(AppointmentsPage);

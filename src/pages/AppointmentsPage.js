import React from 'react';
import RequireAuth from 'components/requiredAuth';
import Appointments from 'container/Appointments';

const AppointmentsPage = () => (
  <div style={{ minHeight: 'calc(100vh - 608px)' }}>
    <h1>My Appointments</h1>
    <Appointments />
  </div>
);

export default RequireAuth(AppointmentsPage);

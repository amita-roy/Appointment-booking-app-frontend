import React from 'react';
import RequireAuth from 'components/requiredAuth';

const AppointmentsPage = () => (
  <div>
    <h1>My Appointments</h1>
  </div>
);

export default RequireAuth(AppointmentsPage);

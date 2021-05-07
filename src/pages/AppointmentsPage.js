import React from 'react';
import RequireAuth from 'container/requiredAuth';
import Appointments from 'container/Appointments';

const AppointmentsPage = () => (
  <div
    className="py-16 px-10 bg-primary bg-opacity-20"
    style={{ minHeight: 'calc(100vh - 608px)' }}
  >
    <div className="m-auto" style={{ maxWidth: '1024px' }}>
      <h1 className="text-4xl">Your Appointments</h1>
      <Appointments />
    </div>
  </div>
);

export default RequireAuth(AppointmentsPage);

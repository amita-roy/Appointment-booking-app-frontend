import React from 'react';
import Services from 'container/Services';

const ServicesPage = () => (
  <div
    className="services-page p-10 flex justify-center bg-primary bg-opacity-20"
    style={{ minHeight: 'calc(100vh - 608px)' }}
  >
    <Services />
  </div>
);

export default ServicesPage;

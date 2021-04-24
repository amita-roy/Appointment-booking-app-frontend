import React from 'react';

const Jumbotron = () => (
  <div
    className="bg-jumbotron bg-cover bg-center relative text-center"
    style={{ height: '700px' }}
  >
    <div className="content absolute w-full flex items-center justify-center h-full bg-black bg-opacity-50">
      <div>
        <h1 className="text-white text-5xl lg:text-6xl ">
          Award-Winning beauty salon
          <span className="block mt-8">in Stockholm</span>
        </h1>
        <button
          type="button"
          className="uppercase bg-white px-6 pt-3 pb-2 text-sm mt-20 focus:outline-none shadow-xl active:bg-opacity-80"
        >
          book now
        </button>
      </div>
    </div>
  </div>
);

export default Jumbotron;

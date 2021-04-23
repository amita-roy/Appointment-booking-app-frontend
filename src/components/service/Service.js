import React from 'react';

const Service = () => (
  <div className="w-80 border-2 p-5 lg:w-96 border-opacity-20 border-primary-dark shadow-xl">
    <div className="flex justify-center image-wrapper">
      <div className="h-36 w-36 object-cover object-center rounded-full overflow-hidden">
        <img
          src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/08/31173324/Waxing-technique-for-glowing-skin-740x560.jpg"
          alt="skin care"
          className="h-full w-auto"
        />
      </div>
    </div>
    <div className="card-content flex justify-between mt-4 items-start">
      <div className="left-content">
        <p className="title text-2xl">Legs Waxing</p>
        <p className="description text-sm text-opacity-40 text-black">
          Sugar wax
        </p>
        <div className="tags mt-4">
          <span className="p-2 bg-primary offer border mr-3 text-sm">50% Off</span>
          <span className="p-2 duration border text-sm">40 mins</span>
        </div>
      </div>
      <div className="right-content flex flex-col justify-between h-24">
        <p className="price text-xl">400 SEK</p>
        <p type="button" className="bg-black text-white px-4 py-2">Reserve</p>
      </div>
    </div>
  </div>
);

export default Service;

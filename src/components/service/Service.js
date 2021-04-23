import React from 'react';

const Service = () => (
  <div className="w-80 border-2 py-4 px-5 lg:w-96 border-opacity-50 border-black shadow-xl">
    <div className="flex justify-center image-wrapper">
      <div className="h-36 w-36 object-cover object-center rounded-full overflow-hidden">
        <img
          src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2017/08/31173324/Waxing-technique-for-glowing-skin-740x560.jpg"
          alt="skin care"
          className="h-full w-auto"
        />
      </div>
    </div>
    <div className="card-content mt-3 ">
      <div className="top-content flex justify-between items-start">
        <div className="top-left-content">
          <p className="title text-xl">Legs Waxing</p>
          <p className="description text-sm text-opacity-40 text-black">
            Sugar wax
          </p>
        </div>
        <p className="price text-xl">400 SEK</p>
      </div>

      <div className="bottom-content flex justify-between items-end mt-2">
        <div className="tags flex">
          <p className="px-2 pt-2 pb-1 bg-primary mr-3 text-sm offer border border-opacity-30 border-black">
            50% Off
          </p>
          <p className="px-2 pt-2 pb-1 duration border border-opacity-30 border-black text-sm">
            40 mins
          </p>
        </div>
        <button type="button" className="bg-black text-white px-4 py-2">
          Reserve
        </button>
      </div>
    </div>
  </div>
);

export default Service;

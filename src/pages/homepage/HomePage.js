import React from 'react';
import Jumbotron from 'components/jumbotron/Jumbotron';
import homepageImage from 'assets/images/homepage-pic.png';

const HomePage = () => (
  <div>
    <Jumbotron />
    <div className="border-primary border-2 flex items-center justify-center p-14 xl:px-48 xl:py-20">
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="content px-10 lg:w-1/2 text-center lg:text-left">
          <p className="uppercase text-black text-opacity-50">what we offer</p>
          <p className="text-black capitalize font-medium text-2xl mt-2">
            skin health and beauty
          </p>
          <p className="font-light mt-3">
            We take an holistic approach to your health & beauty. Our team work
            with clients on a very personal level to achieve their ideas about a
            positive image. We aim for perfection in the products we make and
            the service we provide.
          </p>
          <button
            type="button"
            className="uppercase text-xs px-4 pt-3 pb-2 bg-primary mt-6 outline-none shadow-lg focus:outline-none"
          >
            view services
          </button>
        </div>
        <div className="image-section border-2 lg:w-1/2 px-10 object-contain object-center mt-20 lg:mt-0" style={{ height: '450px' }}>
          <img src={homepageImage} alt="girlImg" className="h-full m-auto" />
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

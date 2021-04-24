import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'components/jumbotron/Jumbotron';
import homepageImage from 'assets/images/homepage-pic.png';

const HomePage = () => (
  <div>
    <Jumbotron />
    <div className="flex items-center justify-center p-14 xl:px-56 xl:py-20">
      <div className="flex justify-between items-center">
        <div className="content w-1/2 lg:pr-20 text-left">
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
          <Link
            to="/services"
            type="button"
            className="uppercase text-xs px-4 pt-4 pb-3 bg-primary mt-8 outline-none shadow-lg focus:outline-none active:bg-opacity-80"
          >
            view services
          </Link>
        </div>
        <div className="image-section h-96 w-96 px-10 relative ml-10">
          <div className="rounded-full bg-primary bg-opacity-40 h-64 w-64 absolute top-0 left-0" />
          <div className="rounded-full bg-decoration bg-opacity-40 h-28 w-28 absolute -bottom-4 right-0" />

          <div className="absolute h-full object-contain object-center top-0">
            <img src={homepageImage} alt="girlImg" className="h-full m-auto" />
            <div className="border-homepageDeco border-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

import React from 'react';

const Footer = () => {
  const columnClasses = 'column w-1/4 px-10';
  const spanCardClasses = 'w-14 flex justify-center items-center bg-primary text-black mr-4 text-sm py-1 px-2';
  return (
    <div className="footer h-[400px]">
      <div className="footer-top bg-black text-primary flex px-40 py-28">
        <div className={columnClasses}>
          <p className="text-4xl font-light text-left">Encapture</p>
          <p className="mt-3 font-thin pr-10">
            From our family to yours, we put lots of love and careful attention
            in each item. We hope you enjoy our work as much as we enjoy
            bringing it to you.
          </p>
          <div className="flex mt-6">
            <span className={`${spanCardClasses} font-bold`}>Visa</span>
            <span className={spanCardClasses}>shopify</span>
            <span className={spanCardClasses}>paypal</span>
          </div>
        </div>
        <div className={columnClasses}>
          <p className="text-xl font-normal">Our Company</p>
          <p className="font-light mt-2">Delivery</p>
          <p className="font-light mt-2">Legal Notice</p>
          <p className="font-light mt-2">About Us</p>
          <p className="font-light mt-2">Contact Us</p>
        </div>
        <div className={columnClasses}>
          <p className="text-xl font-normal">Products</p>
          <p className="font-light mt-2">Price Drop</p>
          <p className="font-light mt-2">New Products</p>
          <p className="font-light mt-2">Best Sales</p>
          <p className="font-light mt-2">Store</p>
        </div>
        <div className={columnClasses}>
          <p className="text-xl font-normal">Contact Us</p>
          <p className="font-light mt-2 flex items-center">
            <span className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            Lorem Ipsum 133/2
            <br />
            Kungsholmen, Stockholm City
          </p>
          <p className="font-light mt-3 flex items-center">
            <span className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            +46-123456789
          </p>

          <p className="font-light mt-3 flex items-center">
            <span className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
            encapture_mail@encapture.com
          </p>
        </div>
      </div>
      <div className="footer-bottom bg-primary-dark pt-5 pb-4 flex items-center justify-center">
        <p className="text-sm font-light text-primary-light">
          Copyright Encapture 2021 - Terms & Conditions Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;

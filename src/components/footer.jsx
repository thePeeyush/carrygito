import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer id='Footer' className="bg-green-50 py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
          <div className="mb-10 lg:mb-0">
            <Image src="/Logo.png" alt="Image" width={200} height={200} className="mb-5 mx-auto lg:mx-0" />

            <p className="font-normal text-gray-400 text-md max-w-xs">Our expert chefs prepare fresh and flavorful dishes every day, ensuring a balanced and wholesome meal experience.</p>
          </div>

          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">Our services</h4>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Plans</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Monthly</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">One Meal</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Only Lunch</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Only Dinner</a>
          </div>

          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">Area Covered</h4>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Bhawarkua</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Geeta Bhawan</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">Khandwa Naka</a>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">Location</h4>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">121 Rambhag, Indore</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">888-123-42287</a>

            <a href="#" className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300">info@example.com</a>
          </div>
        </div>

        <hr className="text-gray-300 mt-10" />

        <p className="font-normal text-gray-400 text-md text-center mt-5">© 2023 CarryGito. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

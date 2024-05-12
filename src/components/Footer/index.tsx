import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 bg-white border-solid border-t-2 border-gray-300 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex justify-center md:justify-end">
              <li className="mr-4">
                <a href="#" className="text-gray-900 hover:border-gray-300 hover:text-gray-700">Home</a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-900 hover:border-gray-300 hover:text-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:border-gray-300 hover:text-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-green-600 flex flex-col items-center justify-center py-8">
        <div className="bg-white rounded-full p-4 shadow-md">
          <img
            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745313653/gyjkjrbk5q1kw7xnfwzr.png"
            alt="Kuppismart Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>

      <div className="border-t border-gray-300 w-full"></div>

      <div className="bg-white text-center py-4 text-gray-600 text-sm">
        © 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

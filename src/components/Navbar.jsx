import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dt8emxboh/image/upload/v1745313653/gyjkjrbk5q1kw7xnfwzr.png"
            alt="Kuppismart Logo"
            className="h-10"
          />
        </div>

        {/* Links */}
        <nav className="flex space-x-8 text-gray-800 font-medium">
          <Link to="/services" className="hover:text-green-600">
            Services
          </Link>
          <Link to="/faq" className="hover:text-green-600">
            FAQs
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Divider line */}
      <hr className="border-gray-300" />
    </header>
  );
}

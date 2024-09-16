import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        {/* Site map column */}
        <div>
          <h2 className="font-bold text-lg">Site Map</h2>
          <ul className="space-y-2 mt-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Products column */}
        <div>
          <h2 className="font-bold text-lg">Our Products</h2>
          <ul className="space-y-2 mt-2">
            <li><a href="#processors" className="hover:underline">Processors</a></li>
            <li><a href="#memory" className="hover:underline">Memory Chips</a></li>
            <li><a href="#sensors" className="hover:underline">Sensors</a></li>
            <li><a href="#custom" className="hover:underline">Custom Solutions</a></li>
          </ul>
        </div>

        {/* About Us column */}
        <div>
          <h2 className="font-bold text-lg">About Us</h2>
          <ul className="space-y-2 mt-2">
            <li><a href="#history" className="hover:underline">Our History</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
            <li><a href="#news" className="hover:underline">News & Press</a></li>
            <li><a href="#investors" className="hover:underline">Investors</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg">Contact</h2>
          <ul className="space-y-2 mt-2">
            <li>Phone: (555) 123-4567</li>
            <li>Email: support@pinnacle-semi.com</li>
            <li>Address: 123 Silicon Way, Tech City</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pinnacle Semiconductors. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
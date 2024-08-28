import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-3">Abstract</h4>
          <ul className="space-y-2">
            <li>Branches</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <p className="mt-4">Contact Us: info@abstract.com</p>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        © Copyright 2024 Abstract Studio Design, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

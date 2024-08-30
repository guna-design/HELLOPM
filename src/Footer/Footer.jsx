import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-pink-500">HelloPM.co</h2>
          <p className="mt-4 text-gray-400">
            15-week product management bootcamp and premium community for
            product managers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              "Home",
              "Blog",
              "Certificate",
              "Privacy Policy",
              "Terms of Service",
              "Member Login",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300  transition-colors duration-300 relative inline-block group"
                >
                  <span className="">{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Resources</h3>
          <ul className="mt-4 space-y-2">
            {[
              "First Principles for Product Managers",
              "SQL for Product Managers",
              "Ultimate Product Management Interview Guide",
              "How to Create Portfolio - for Product Manager",
            ].map((resource, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300  transition-colors duration-300 relative inline-block group"
                >
                  <span className="">{resource}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-purple-400">Contact Us</h3>
          <p className="mt-4 text-gray-300">
            info@hellopm.co
            <br />
            HelloPM LLP
            <br />
            2 A/3, Delhi Stock Exchange, Asaf Ali Road Turkmam Gate, New Delhi
            110002, India
            <br />
            GSTIN: 07AANFH9998M1Z4
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-300  ">
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-300  ">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2021-2024 HelloPM LLP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

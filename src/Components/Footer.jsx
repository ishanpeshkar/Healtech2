import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://facebook.com", icon: "fab fa-facebook-square", label: "Facebook" },
    { href: "https://twitter.com", icon: "fab fa-twitter-square", label: "Twitter" },
    { href: "https://linkedin.com", icon: "fab fa-linkedin", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-24 transition duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="text-lg font-semibold">© {currentYear} HEALTECH. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li><a href="/contact" className="hover:text-gray-400 transition duration-200">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-gray-400 transition duration-200">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-400 transition duration-200">Terms of Use</a></li>
            <li><a href="/about" className="hover:text-gray-400 transition duration-200">About Us</a></li>
          </ul>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-200">
              <i className={`${link.icon} fa-lg`} aria-label={link.label}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

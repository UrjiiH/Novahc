import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Services', path: '/services' },
    { name: 'Knowledge Hub', path: '/knowledgehub' },
    { name: 'News & Updates', path: '/newsupdates' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contactus' }
  ];

  const authLinks = [
    { name: 'Sign In', path: '/signin' },
    { name: 'Sign Up', path: '/signup' }
  ];

  const getLinkClasses = (path) =>
    location.pathname === path
      ? ' text-lg text-[#459f69] transition-colors' : 'text-slate-600 hover:text-slate-900 transition-colors';

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-[#e7e7ea] bg-white/80'>
      <div className='container px-5 py-1 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <img src={Logo} alt="Nova health consultancy" className='h-12 w-auto ml-[50px]' />
            <h1 className='text-lg font-bold text-[#1e293b]'>NOVA</h1>
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex ml-14 space-x-6 text-[17px]'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={getLinkClasses(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Links */}
          <div className='hidden lg:flex justify-center space-x-3 items-center mr-11'>
            {authLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className={`py-2 px-3 border rounded-md ${
                  link.name === 'Sign Up'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 bg-[#f8fafc] w-full p-12 flex flex-col justify-center items-center text-center lg:hidden cursor-pointer'>
            <ul className='space-y-4'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={toggleNavbar}
                    className={getLinkClasses(link.path)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6 mt-5'>
              {authLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={toggleNavbar}
                  className={`py-2 px-3 border rounded-md ${
                    link.name === 'Sign Up'
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

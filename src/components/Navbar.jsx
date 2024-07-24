/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const menuItems = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Tech Stack", href: "#techstack" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className='flex sticky top-0 z-50 shadow-sm shadow-black justify-between items-center sm:px-10 px-5 text-lg bg-[#363636]'>
      <div className='font-semibold text-blue-500 sm:text-2xl text-lg'>
        MosiCodes
      </div>
      <div className='md:flex hidden '>
        <div>
          <ul className='flex gap-5 '>
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                <li className='hover:bg-blue-600 p-2'>{item.title}</li>
              </a>
            ))}
          </ul>
        </div>

        <div className='flex gap-5 mx-10 justify-center items-center text-xl'>
          <a href='http://github.com/Evarmedia' target='_blank'>
            <FaGithub />
          </a>

          <a href='http://twitter.com/mosicodes' target='_blank'>
            <FaXTwitter />
          </a>

          <a
            href='https://www.linkedin.com/in/mishak-mosimabale/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Hamburger menu for mobile screens */}
      <div className='md:hidden flex items-center'>
        <button
          id='toggleOpen'
          className='flex items-center justify-center focus:outline-none'
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <HiOutlineMenuAlt3 className='text-2xl' />
          ) : (
            <MdClose className='text-2xl' />
          )}
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className='absolute top-full right-0 bg-[#363636] p-5 mt-2 rounded-lg shadow-lg z-50'
          >
            <ul className='flex flex-col gap-5'>
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} onClick={toggleMenu}>
                  <li className='hover:bg-blue-600 p-2'>{item.title}</li>
                </a>
              ))}
            </ul>
            <div className='flex gap-3 mt-5 items-center text-xl'>
              <FaGithub />
              <FaXTwitter />
              <FaLinkedin />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

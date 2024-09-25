/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
        <form className='bg-gray-500 p-8 rounded-lg shadow-lg w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Contact Me</h2>

          <div className='flex gap-8 mx-10 justify-center items-center text-xl'>

            <a href='http://github.com/Evarmedia' target='_blank'>
              <FaGithub />
            </a>

            <a href='http://twitter.com/mosicodes' target='_blank'>
              <FaXTwitter />
            </a>

            <a href='https://www.linkedin.com/in/mishak-mosimabale/' target='_blank'>
              <FaLinkedin />
            </a>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='subject'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black'
              rows='4'
              required
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

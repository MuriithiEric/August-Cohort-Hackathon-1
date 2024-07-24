// import React from 'react'
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TechStack = () => {
  return (
    <div className='flex flex-col items-center sm:mb-28 sm:mt-10'>
      <h1 className='font-semibold sm:text-3xl text-xl mb-2'>My Skills</h1>
      <p className='text-sm  sm:text-lg text-gray-500'>{`Technologies I've been working with recently`}</p>

      <div className='flex justify-center items-center gap-3 sm:gap-12 flex-wrap w-3/4 my-5'>
        <FaHtml5
          title='HTML'
          className='sm:text-9xl text-3xl text-red-500 cursor-pointer'
        />
        <FaCss3Alt
          title='CSS'
          className='sm:text-9xl text-3xl text-blue-500 cursor-pointer'
        />
        <SiJavascript
          title='JAVASCRIPT'
          className='sm:text-9xl text-3xl text-yellow-500 cursor-pointer'
        />
        <FaReact
          title='REACT'
          className='sm:text-9xl text-3xl text-blue-600 cursor-pointer'
        />
        <SiRedux
          title='REDUX'
          className='sm:text-9xl text-3xl text-purple-600 cursor-pointer'
        />
        <RiTailwindCssFill
          title='TAILWIND'
          className='sm:text-9xl text-3xl text-blue-400 cursor-pointer'
        />
        <FaBootstrap
          title='BOOTSRAP'
          className='sm:text-9xl text-3xl text-purple-500 cursor-pointer'
        />
        <FaSass
          title='SASS'
          className='sm:text-9xl text-3xl text-amber-800 cursor-pointer'
        />
        <FaGitAlt
          title='GIT'
          className='sm:text-9xl text-3xl text-pink-800 cursor-pointer'
        />
        <VscVscode
          title='VSCODE'
          className='sm:text-9xl text-3xl text-blue-700 cursor-pointer'
        />
        <RiNextjsFill
          title='NEXTJS'
          className='sm:text-9xl text-3xl text-gray-300 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default TechStack;

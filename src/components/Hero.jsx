// import React from 'react'
import image from "../assets/me.jpg";
const Hero = () => {
  return (
    <div className='py-10 flex justify-between items-center px-10 sm:px-44 my-8 sm:my-48 sm:mx-10 gap-4'>
      <div className='sm:text-5xl text-sm font-semibold sm:space-y-2'>
        <h2>Hi👋🏾, </h2>
        <h2>My Name is</h2>
        <h2 className="text-blue-500">Mishak Mosimabale</h2>
        <h1>{`I'm a Software Engineer`}</h1>
      </div>
      <div className='sm:w-[400px] w-[200px] animate-pulse'>
        <img
          src={image}
          alt=''
          className='rounded-full border-2 border-black p-2'
        />
      </div>
    </div>
  );
};

export default Hero;

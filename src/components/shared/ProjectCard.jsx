/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ title, description, image, githublink, previewlink }) => {
  return (
    <div className='border border-gray-200 rounded-lg shadow-lg bg-black overflow-hidden'>
      <img src={image} alt={title} className='w-full h-40 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600'>{description}</p>

        <div className='flex justify-between mt-2'>
          <div className='flex items-center gap-2'>
            <span>
              <FaLink />
            </span>
            <a href={previewlink} target="_blank">
            <p className='underline cursor-pointer'>Live Preview</p>
            </a>
          </div>

          <div className='flex items-center gap-2'>
            <span>
              <FaGithub />
            </span>
            <a href={githublink} target="_blank">
            <p className='underline cursor-pointer'>View Code</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

/* eslint-disable no-unused-vars */
// Project.jsx
import React from "react";
import image5 from "../assets/calculator.png";
import image6 from "../assets/drum.png";
import image1 from "../assets/ecom.png";
import image3 from "../assets/ecom2.png";
import image4 from "../assets/pomodoro.png";
import image2 from "../assets/randomQuoteGenerator.png";
import ProjectCard from "../components/shared/ProjectCard";

const projects = [
  {
    title: "Ecommerce clone",
    description:
      "'An Shoe e-shop, implementing different filtering methods using react + vite.',",
    image: image1,
    githublink: "https://github.com/Evarmedia/ecom-clone",
    previewlink: "https://ecom-clone-react.netlify.app/",
  },
  {
    title: "Random Quote Generator",
    description:
      "A Random Quote Generator built using Javascript, React and Css",
    image: image2,
    githublink: "https://dt9g3g.csb.app",
    previewlink: "https://codesandbox.io/s/randomquotegenerator-dt9g3g",
  },
  {
    title: "FullStack Ecom app",
    description:
      "A calculator built using JavaScript, React and Css during the completion of FreeCodeCamps Frontend's Development Libraries Certificcation",
    image: image3,
    githublink: "https://github.com/Evarmedia/cozycove-ecom",
    previewlink: "https://cozycove-ecom.netlify.app/",
  },
  {
    title: "Pomodoro clock",
    description: "A pmodoo clock built with javascript",
    image: image4,
    githublink: "https://github.com/Evarmedia/clock_25_FCC",
    previewlink: "https://github.com/Evarmedia/clock_25_FCC",
  },
  {
    title: "Calculator",
    description: "A calculator built using JavaScript, React and Css during the completion of FreeCodeCamps Frontend's Development Libraries Certificcation",
    image: image5,
    githublink: "https://github.com/Evarmedia/calculator_FCC",
    previewlink: "https://myfcc-calculator-project.netlify.app/",
  },
  {
    title: "Drum Machine",
    description: "A Drum machine built using JavaScript, html and Css during the completion of FreeCodeCamps Frontend's Development Libraries Certificcation",
    image: image6,
    githublink: "https://github.com/Evarmedia/drum_machine_FCC",
    previewlink: "https://github.com/Evarmedia/drum_machine_FCC",
  },
];

const Project = () => {
  return (
    <div className='p-10 min-h-screen mt-8'>
      <h2 className='text-2xl font-semibold mb-2 text-center'>My Projects</h2>
      <h3 className='text-lg text-center mb-8 text-gray-500 '>{`Things I've built so far`}</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

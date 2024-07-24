/* eslint-disable no-unused-vars */
import React from "react";

const experiences = [
  {
    title: "Remote Intern",
    company: "Dropify Technologies, Canada",
    duration: "Feb 2024 - May 2024",
    details: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Implemented responsive design and ensured cross-browser compatibility."
    ]
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    duration: "Jun 2020 - Jan 2024",
    details: [
      "Assisted in developing single-page applications using React.",
      "Participated in code reviews and contributed to the improvement of development processes.",
      "Created and optimized SQL queries for database interactions."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Technology",
    duration: "2011 - 2016",
    details: [
      "Graduated with Second Class Upper.",
      "Completed a capstone project on BMI machine using Arduino, sensors etc.",
      "Active member of the Computer Engineering Club."
    ]
  },
  {
    degree: "High School Diploma",
    institution: "MC Secondary School",
    duration: "2005 - 2011",
    details: [
      "Top 10% of the graduating class.",
      "President of the Coding Club.",
      "Participated in various science fairs and coding competitions."
    ]
  }
];

const Experience = () => {
  return (
    <section className="p-5 sm:p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Experience & Education</h2>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-5">Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 p-5 text-blue-500 shadow-md rounded-lg">
            <h4 className="text-xl font-bold">{exp.title}</h4>
            <p className="text-white">{exp.company}</p>
            <p className="text-white">{exp.duration}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-gray-400">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-5">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-8 p-5 shadow-md text-blue-500 rounded-lg">
            <h4 className="text-xl font-bold">{edu.degree}</h4>
            <p className="text-white">{edu.institution}</p>
            <p className="text-white">{edu.duration}</p>
            <ul className="list-disc list-inside mt-2">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="text-gray-400">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

// import React from 'react'
import Hero from "./Hero";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, [])
  return (
    <>
      <section id='#' data-aos="fade-in">
        <Hero />
      </section>

      <section id='techstack' data-aos="fade-out">
        <TechStack />
      </section>

      <section id='projects' data-aos="slide-right">
        <Projects />
      </section>
      
      <section id='experience' data-aos="zoom-in">
        <Experience />
      </section>

      <section id='contact' data-aos="flip-right">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Home;

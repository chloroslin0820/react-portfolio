import React from 'react';
import Works from './Works';
import './projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My recent projects</span>

        <Works />
    </section>
  );
}

export default Projects;

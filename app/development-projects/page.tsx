// /contact/index.tsx
"use client";

import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import ContentImg from '../(components)/ContentImg';
import ProjectItem from '../(components)/ProjectItem';
import projectData from '../(data)/projects.json';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DevelopmentProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  {/* Fetch module data from JSON file */}
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setProjects(projectData.items);
      } catch (error) {
        console.error('Failed to load education data:', error);
      }
    };
  
    fetchProjectData();
  }, []);

  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Development Projects" />
      <section id="DevelopmentProjectsPageContent">
        
      <article className="mainContentItem2 sectionTop sectionBottom">
        <div className="textContent">
          <h2>Development projects</h2>
          <p>Intro blurb here.</p>
          <ul>
            <li>Client projects</li>
            <li>Uni projects</li>  
          </ul>              
        </div>
      </article>

        <CallToAction heading="My Projects" 
                      mainText="Take a look at my software development projects." 
                      buttonText="Take a look!"
                      buttonLink="development-projects" />

        <article className="mainContentItem2 sectionTop">
          <div className="textContent">
            <h2>Client projects</h2>
            <p>Intro blurb here.</p>              
          </div>
        </article>

        {/* Items where the project_category is 'client' */}
        {projects.filter((project) => project.project_category === "client").map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}

        <CallToAction heading="My Qualifications" 
                      mainText="Take a look at my education background." 
                      buttonText="Take a look!"
                      buttonLink="education" /> 

        <article className="mainContentItem2 sectionTop">
          <div className="textContent">
            <h2>Uni Projects</h2>
            <p>Intro blurb here.</p>             
          </div>
        </article>

        {/* Items where the project_category is 'uni' */}
        {projects.filter((project) => project.project_category === "uni")
          .sort((a, b) => b.project_year - a.project_year)
          .map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}

      </section>
    </main>
    </>
  );
}
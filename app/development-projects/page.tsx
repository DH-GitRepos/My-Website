// /contact/index.tsx
"use client";

import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import ProjectItem from '../(components)/ProjectItem';
import ContentP from '../(components)/ContentP';
import ContentH from '../(components)/ContentH';
import projectData from '../(data)/projects.json';
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
        
      <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
        <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
          <ContentH level={2} text="Development projects" />
          <ContentP text="In this section you can take a look at some of the projects I have undertaken, both client/live projects 
            and projects I have done for assessments at uni. Each has links to a web deployment, or GitHub repo where
            appropriate so you can take a dive into the source code of my projects." />
        </div>
      </article>

        <CallToAction heading="Get in touch" 
                      mainText="Give me a shout if you would like to discuss any of my projects in more detail." 
                      buttonText="Contact me!"
                      buttonLink="contact" />

        <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
          <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
            <ContentH level={2} text="Client projects" />
            <ContentP text="I have been designing and building websites in a freelance capacity since around 2010 and most of my early 
              work is no longer out there (apart from <a href='https://www.aerquality.co.uk/' target='_blank'>this one</a> from 2011
              which has never been updated but still exists!)." />
            <ContentP text="Below are some of the more recent projects I have worked on." />
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

        <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
          <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
            <ContentH level={2} text="Uni Projects" />
            <ContentP text="Below is a collection of projects I produced for my BSc (Hons) Computer Science degree. There is a wide selection of
              client-side and server-side projects, from CLI and web applications to database builds and A.I. model builds." />
            <ContentP text="If you would like to discuss and of these projcts in more detail please do get in touch." />
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
// /education/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import DOMPurify from 'dompurify';
import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import ContentImg from '../(components)/ContentImg';
import ScopedStyles from './page.module.css';
import educationData from '../(data)/education.json';
import degreeModuleData from '../(data)/modules.json';

export default function EducationPage() {
  const [visibleContent, setVisibleContent] = useState<string | null>(null);
  const [scrollToId, setScrollToId] = useState<string | null>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [education, setEducation] = useState<any[]>([]);

  const showContentItem = (id: string) => {
    const element = document.querySelector(`li[data-id="${id}-main"]`) as HTMLElement | null;
    const heading = element?.querySelector(`.${ScopedStyles.moduleHeading}`) as HTMLElement | null;

    if (visibleContent === id) {
      setVisibleContent(null);
      // Reset the heading styles
      if (heading) {
        heading.style.backgroundImage = 'url(/images/circle-open.png)';
        heading.style.color = 'rgb(51, 51, 51)';
        heading.style.backgroundPosition = 'top left';
        heading.style.backgroundRepeat = 'no-repeat';
        heading.style.backgroundSize = '25px';
        console.log(`Setting background image to open for ${id}`);
      }
    } else {
      if (visibleContent) {
        const previousElement = document.querySelector(`li[data-id="${visibleContent}-main"]`) as HTMLElement | null;
        const previousHeading = previousElement?.querySelector(`.${ScopedStyles.moduleHeading}`) as HTMLElement | null;
        if (previousHeading) {
          previousHeading.style.backgroundImage = 'url(/images/circle-open.png)';
          previousHeading.style.color = 'rgb(51, 51, 51)';
          previousHeading.style.backgroundPosition = 'top left';
          previousHeading.style.backgroundRepeat = 'no-repeat';
          previousHeading.style.backgroundSize = '25px';
          console.log(`Setting background image to open for ${visibleContent}`);
        }
      }
      setVisibleContent(null); // Close any open sections first
      setTimeout(() => {
        setVisibleContent(id);
        setScrollToId(id);
        if (heading) {
          heading.style.backgroundImage = 'url(/images/circle-close.png)';
          heading.style.color = 'rgb(81, 113, 255)';
          heading.style.backgroundPosition = 'top left';
          heading.style.backgroundRepeat = 'no-repeat';
          heading.style.backgroundSize = '25px';
          console.log(`Setting background image to close for ${id}`);
        }
      }, 600); // Delay to allow the closing animation to complete
    }
    console.log('Visible content ID:', visibleContent);
  };

  const scrollToElement = (id: string | null) => {
    const element = document.querySelector(`li[data-id="${id}-main"]`);
    if (element) {
      console.log('Scrolling to ID:', id);
      console.log('Element:', element);
      console.log('Element offsetTop:', element.getBoundingClientRect().top + window.scrollY);
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = 65; // Adjust this value as needed
      const scrollToPosition = elementPosition - offset;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    } else {
      console.log('Element not found:', id);
    }
  };

  {/* Fetch module data from JSON file */}
  useEffect(() => {
    const fetchModuleData = async () => {
      try {
        setModules(degreeModuleData.items);
      } catch (error) {
        console.error('Failed to load education data:', error);
      }
    };
  
    fetchModuleData();
  }, []);

  {/* Fetch education data from JSON file */}
  useEffect(() => {
    const fetchEducationData = () => {
      try {
        setEducation(educationData.items);
      } catch (error) {
        console.error('Failed to load education data:', error);
      }
    };

    fetchEducationData();
  }, []);

  {/* Scroll to content item when visibleContent state changes */}
  useEffect(() => {
    if (scrollToId) {
      scrollToElement(scrollToId);
    }
  }, [scrollToId]);

  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Education Background" />
      <section id="EducationPageContent">

        <article className="mainContentItem sectionTop sectionBottom">
          <div className="textContent2">
            <h2>My learning journey</h2>
            <p>As of July 2024 I finally achieved my BSc (Hons) Computer Science, a lifelong goal which 
              has always been top of my buchet list! My journey through learning over the years has been 
              a varied but mostly technology focused endevour. As an advocate for lifelong learning and 
              development, I have always been keen to learn new things and develop new skills, and my 
              degree has been a fantastic milestone to cap off many topics I first got into as a 
              technology hobbyist.</p>
            <p>My journey has taken me through an interesting mix of career focused learning and personal 
              development, from BASIC programming as a child on the ZX Spectrum, to learning about the web 
              and design in the early 2000s which I turned into my first serious career, to my most recent 
              academic dive into developing my skills as a software engineer.</p>
            <p>Below I will take you through a more detailed look at my education history, giving insight 
              into what I have studied, when and why!</p>
          </div>
          <ContentImg src="/images/DH-Grad-Headshot" alt="Here's me face with a funny hat on." /> 
        </article>

        <CallToAction heading="Software Projects" 
                      mainText="Take a more detailed look at my software development projects." 
                      buttonText="Check it out!" 
                      buttonLink="development-projects" />

        <article id="degreeContainer" className="mainContentItem2 sectionTop sectionBottom">
          <div className="textContent">
            <h2>BSc (Hons) Computer Science</h2>
            <h3 className="text-[1.5em] mt-[-15px]">Staffordshire University, 2021 - 2024. Grade: 1st Class.</h3>
            <p>Blurb about learning context here.</p>
            <h4 className="text-[1.25em] mt-[-15px] mb-[15px]">Modules Studied:</h4>
            <ul className={`${ScopedStyles.moduleList}`}>
            {modules.map((module) => (
              <li key={module.module_id} onClick={() => showContentItem(module.module_id)} data-id={`${module.module_id}-main`}>
                <h5 className={`${ScopedStyles.moduleHeading}`}>{module.module_title}</h5>
                <CSSTransition
                  in={visibleContent === module.module_id}
                  timeout={500}
                  classNames={{
                    enter: ScopedStyles.slide_fade_enter,
                    enterActive: ScopedStyles.slide_fade_enter_active,
                    exit: ScopedStyles.slide_fade_exit,
                    exitActive: ScopedStyles.slide_fade_exit_active,
                  }}
                  unmountOnExit
                  onEnter={() => console.log(`Entering: ${module.module_id}`)}
                  onExited={() => console.log(`Exited: ${module.module_id}`)}
                >
                  {/* this section receives html content from the data source, set as innerHTML and sanitise */}
                  <div className={`${ScopedStyles.moduleContent}`} 
                      data-id={module.module_id} 
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(module.module_content) }} />
                </CSSTransition>
              </li>
            ))}
            </ul>
          </div>
        </article>

        <CallToAction heading="Design Career" 
                      mainText="Explore some of the work I did in my design career." 
                      buttonText="Check it out!"
                      buttonLink="design" />

        {/* First 4 education items */}
        {education.slice(0, 4).map((edu) => (
          <article key={edu.id} className="mainContentItem2 sectionTop sectionBottom">
            <div className="textContent">
              <h2>{edu.edu_title}</h2>
              <h3 className="text-[1.5em] mt-[-15px]">{edu.edu_establishment}, {edu.edu_date_range}. {edu.edu_result}</h3>
              <p>{edu.edu_description}</p>
            </div>
          </article>
        ))}

        <CallToAction heading="Any questions?" 
                      mainText="If you have any questions, feel free to get in touch." 
                      buttonText="Contact me!"
                      buttonLink="contact" />

        {/* Next 4 education items */}
        {education.slice(4, 8).map((edu) => (
          <article key={edu.id} className="mainContentItem2 sectionTop sectionBottom">
            <div className="textContent">
              <h2>{edu.edu_title}</h2>
              <h3 className="text-[1.5em] mt-[-15px]">{edu.edu_establishment}, {edu.edu_date_range}. {edu.edu_result}</h3>
              <p>{edu.edu_description}</p>
            </div>
          </article>
        ))}

      </section>
    </main>
    </>
  );
}
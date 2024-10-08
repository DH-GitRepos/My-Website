// /index.tsx
"use client";

import { useState, useEffect } from 'react';
import CallToAction from './(components)/CallToAction';
import PageTitle from './(components)/PageTitle';
import ContentImg from './(components)/ContentImg';
import ContentP from './(components)/ContentP';
import ContentH from './(components)/ContentH';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Welcome" />
      <section id="HomeViewPageContent">

        <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] sm:px-[10px] md:px-[10%] lg:px-[20%]">
          <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
            <ContentH level={2} text="A bit about me..." />
            <ContentImg src="/images/DH-Headshot" alt="Here's me face." classes="xl:px-[50px] 2xl:px-[400px]" />
            <ContentP text="Hi! I'm Darren. I'm a BSc (Hons) Computer Science graduate with
              specialising in software engineering. I graduated in from Staffordshire University in July 2024 with a first,
              and as of the time of writing this am currently seeking my first developer role in the industry." />
            <ContentP text="Coupled with my previous experience in the design industry (more below), I now have a skillset which enables
              me to work in a full-stack developer capacity, with the industry experience to integrate seemlessly into a
              multi-disciplinary team of designers and developers." />
          </div>          
        </article>

        <CallToAction heading="My Qualifications" 
                      mainText="Take a more detailed look at my qualifications." 
                      buttonText="Take a look!" 
                      buttonLink="education" />

        <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
          <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
            <ContentH level={2} text="My journey" />
            <ContentP text="My passion for technology and programming has been a constant throughout my life, so when COVID came
              along and I found myself out of work for a while, so I decided to take the opportunity to retrain as a software
              developer and enrolled at Staffordshire University to chase my dream of becoming a software engineer." />
            <ContentP text="My degree has been a fantastic experience, and I have learned so much about software development and computer
              science in general. I have a particular interest in software engineering, and have developed a strong skillset
              in programming, software design, and software testing. This has also enabled me to bring some long developed
              web skills upto date, learning about front-end/back-end frameworks, libraries and toolchains." />
          </div>
        </article>

        <CallToAction heading="Software Development Skills" 
                      mainText="Take a deep dive into my software development skills." 
                      buttonText="Take a look!" 
                      buttonLink="development-skills" />

        <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
          <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
            <ContentH level={2} text="My background" />
            <ContentImg src="/images/Print-POS-George" alt="My design work." classes="xl:px-[50px] 2xl:px-[400px]" />
            <ContentP text="My background is in the design industry, which I have involved in professionally for
              the past 12 or so years prior to my Computer Science degree, progressing from design roles to print graphics
              management." />
            <ContentP text="My design experience has given me a strong foundation in design principles, and I have developed a keen eye for
              detail and a strong work ethic. I have a good understanding of the design process, and have experience working
              with household name clients to deliver projects to a high standard." />
            <ContentP text="My management experience includes production management in a large and small format digital print environment, and
              exhibition graphics management. I have experience in managing print projects from concept to delivery, and have
              developed a strong understanding of the print process and the importance of quality control. I have also developed
              a strong understanding of the importance of customer service and client relationships." />
          </div>          
        </article>

        <CallToAction heading="Previous Career Skills" 
                      mainText="Take a look into my experience in design, print and graphics management." 
                      buttonText="Discover more!" 
                      buttonLink="design" />
      
      </section>
    </main>
    </>
  );
}
// /index.tsx
"use client";

import { useState, useEffect } from 'react';
import CallToAction from './(components)/CallToAction';
import PageTitle from './(components)/PageTitle';
import ContentImg from './(components)/ContentImg';

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

        <article className="mainContentItem sectionTop sectionBottom">
          <div className="textContent2">
            <h2>A bit about me...</h2>
            <p><span className="font-bold text-2xl pr-[10px]">Hi! I'm Darren.</span> I'm a BSc (Hons) Computer Science graduate with
              specialising in software engineering. I graduated in from Staffordshire University in July 2024 with a first,
              and as of the time of writing this am currently seeking my first developer role in the industry.</p>
            <p>Coupled with my previous experience in the design industry (more below), I now have a skillset which enables
              me to work in a full-stack developer capacity, with the industry experience to integrate seemlessly into a
              multi-disciplinary team of designers and developers.</p>
          </div>
          <ContentImg src="/images/DH-Headshot" alt="Here's me face." />
        </article>

        <CallToAction heading="My Qualifications" 
                      mainText="Take a more detailed look at my qualifications." 
                      buttonText="Take a look!" 
                      buttonLink="education" />

        <article className="mainContentItem2 sectionTop sectionBottom">
          <div className="textContent">
            <h2>My journey</h2>
            <p>My passion for technology and programming has been a constant throughout my life, so when COVID came
              along and I found myself out of work for a while, so I decided to take the opportunity to retrain as a software
              developer and enrolled at Staffordshire University to chase my dream of becoming a software engineer.</p>
            <p>My degree has been a fantastic experience, and I have learned so much about software development and computer
              science in general. I have a particular interest in software engineering, and have developed a strong skillset
              in programming, software design, and software testing. This has also enabled me to bring some long developed
              web skills upto date, learning about front-end/back-end frameworks, libraries and toolchains.</p>
          </div>
        </article>

        <CallToAction heading="Software Development Skills" 
                      mainText="Take a deep dive into my software development skills." 
                      buttonText="Take a look!" 
                      buttonLink="development-skills" />

        <article className="mainContentItem sectionTop sectionBottom">
          <div className="textContent2">
            <h2>My background</h2>
            <p>My background is in the design industry, which I have involved in professionally for
              the past 12 or so years prior to my Computer Science degree, progressing from design roles to print graphics
              management.</p>
            <p>My design experience has given me a strong foundation in design principles, and I have developed a keen eye for
              detail and a strong work ethic. I have a good understanding of the design process, and have experience working
              with household name clients to deliver projects to a high standard.</p>
            <p>My management experience includes production management in a large and small format digital print environment, and
              exhibition graphics management. I have experience in managing print projects from concept to delivery, and have
              developed a strong understanding of the print process and the importance of quality control. I have also developed
              a strong understanding of the importance of customer service and client relationships.</p>
          </div>
          <ContentImg src="/images/Print-POS-George" alt="My design work." />
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
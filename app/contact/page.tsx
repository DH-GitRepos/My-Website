// /contact/index.tsx
"use client";

import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import ContentImg from '../(components)/ContentImg';

export default function ContactPage() {
  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Contact Me" />
      <section id="ContactPageContent">
        
        <article className="mainContentItem">
          <div className="textContent">
            <h2>A bit about me...</h2>
            <p><span className="font-bold text-2xl pr-[10px]">Hi! I'm Darren.</span> I'm a BSc (Hons) Computer Science graduate with 
              specialising in software engineering. I graduated in from Staffordshire University in July 2024 with a first, 
              and as of the time of writing this am currently seeking my first developer role in the industry.</p>              
            <p>Coupled with my previous experience in the design industry (more below), I now have a skillset which enables 
              me to work in a full-stack developer capacity, with the industry experience to integrate seemlessly into a 
              multi-disciplinary team of designers and developers.</p>
          </div>
          <div className="imageContent">
            <ContentImg src="/images/DH-Headshot" alt="Here's me face." />
          </div>
        </article>

        <CallToAction heading="My Qualifications" 
                      mainText="Take a more detailed look at my qualifications." 
                      buttonText="Take a look!"
                      buttonLink="qualifications" />

      </section>
    </main>
    </>
  );
}
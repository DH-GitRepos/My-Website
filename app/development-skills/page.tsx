// /development/index.tsx
"use client";

import ScopedStyles from './page.module.css';
import PageTitle from '../(components)/PageTitle';
import CallToAction from '../(components)/CallToAction';
import LogoGallery from '../(components)/LogoGallery';

/**
 * Represents a list of images with their filenames and descriptions.
 */
type ImageList = {
  filename: string;
  description: string;
  alt: string;
}[];

export default function DevelopmentSkillsPage() {
  
  const clientSideLanguages = [
    { filename: 'logo-html', description: 'HTML5', alt: 'HTML Logo'},
    { filename: 'logo-css', description: 'CSS3', alt: 'CSS Logo'},
    { filename: 'logo-javascript', description: 'JavaScript', alt: 'JavaScript Logo'},
    { filename: 'logo-typescript', description: 'TypeScript', alt: 'TypeScript Logo'}
  ];

  const clientSideFrameworks = [
    { filename: 'logo-tailwind', description: 'Tailwind CSS', alt: 'Tailwind CSS Logo'},
    { filename: 'logo-vue', description: 'Vue.js', alt: 'Vue.js Logo'},
    { filename: 'logo-next', description: 'Next.js', alt: 'Next.js Logo'}
  ];

  const clientSideLibraries = [
    { filename: 'logo-jquery', description: 'jQuery', alt: 'jQuery Logo'},
    { filename: 'logo-react', description: 'React', alt: 'React Logo'}
  ];

  const serverSideLanguages = [
    { filename: 'logo-c-sharp', description: 'C#', alt: 'C# Logo'},
    { filename: 'logo-java', description: 'Java', alt: 'Java Logo'},
    { filename: 'logo-python', description: 'Python', alt: 'Python Logo'},
    { filename: 'logo-php', description: 'PHP', alt: 'PHP Logo'},
    { filename: 'logo-sql', description: 'SQL', alt: 'SQL Logo'},
    { filename: 'logo-json', description: 'JSON', alt: 'JSON Logo'}
  ];

  const serverSideFrameworks = [
    { filename: 'logo-net-core', description: '.NET Code', alt: '.NET Core Logo'},
    { filename: 'logo-laravel', description: 'Laravel', alt: 'Laravel Logo'},
    { filename: 'logo-spring-boot', description: 'Spring Boot', alt: 'Spring Boot Logo'},
    { filename: 'logo-flask', description: 'Flask', alt: 'Flask Logo'},
    { filename: 'logo-wordpress', description: 'WordPress CMS', alt: 'WordPress CMS Logo'}
  ];

  const serverSideDatabases = [
    { filename: 'logo-mysql', description: 'MySQL', alt: 'MySQL Logo'},
    { filename: 'logo-oracle', description: 'Oracle', alt: 'Oracle SQL Logo'}
  ];

  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Development Skills" />
      <section id="DevelopmentSkillsPageContent">
        
        <article className="mainContentItem2 sectionTop sectionBottom">
          <div className="textContent">
            <h2>Software development</h2>
            <p>My journey into software development, specifically web technologies, started in 2001. I learned the basics of web
              authoring and built up from there with a mix of formal courses and self-directed study. My skillset now is full-stack 
              in nature being capable in front-end and server-side technologies including languages, frameworks and databases. This
              gives me the capability to produce applications for mobile, desktop and web.</p>
            <p>Take a look below at my specific techhnology skills.</p>              
          </div>
        </article>

        <CallToAction heading="My Projects" 
                      mainText="Take a look at my software development projects." 
                      buttonText="Take a look!"
                      buttonLink="development-projects" />

        <article className="mainContentItem2 sectionTop sectionBottom">
          <div className="textContent">
            <h2>Client-side skills</h2>
            <div className={`${ScopedStyles.clientSideSkillsContainer} flex flex-row justify-stretch gap-2`}>

              <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Languages:</h3>
                <LogoGallery imageList={clientSideLanguages} />
              </div>

              <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Frameworks:</h3>
                <LogoGallery imageList={clientSideFrameworks} />
              </div>

              <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Libraries:</h3>
                <LogoGallery imageList={clientSideLibraries} />
              </div>
              
            </div>

          </div>
        </article>

        <CallToAction heading="My Qualifications" 
                      mainText="Take a look at my education background." 
                      buttonText="Take a look!"
                      buttonLink="education" /> 

        <article className="mainContentItem2 sectionTop sectionBottom">
          <div className="textContent">
            <h2>Server-side skills</h2>
            <div className={`${ScopedStyles.serverSideSkillsContainer} flex flex-row justify-stretch gap-2`}>
            
            <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Languages:</h3>
                <LogoGallery imageList={serverSideLanguages} />
              </div>

              <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Frameworks:</h3>
                <LogoGallery imageList={serverSideFrameworks} />    
              </div>

              <div className={`${ScopedStyles.skillsBox} basis-1/3`}>
                <h3>Databases:</h3>
                <LogoGallery imageList={serverSideDatabases} />
              </div>

            </div>

          </div>
        </article>

      </section>
    </main>
    </>
  );
}
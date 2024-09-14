// /contact/index.tsx
"use client";

import PageTitle from '../(components)/PageTitle';
import ContentP from '../(components)/ContentP';
import ContentH from '../(components)/ContentH';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Contact Me" />
      <section id="ContactPageContent">
        
      <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
        <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">

            <div className="basis-2/5 xs:mt-[20px]">
              <picture id="header-logo" className="h-[60px] py-[10px] pl-[15px]">
                <source media="(max-height: 50px)" srcSet="/images/Logo-C.webp" type="image/webp" />
                <img src="/images/Logo-C.png" alt="Site Logo" className="h-[50px]" />
              </picture>
              <ContentH level={2} text="Get in touch!" />
              <ContentP text="I am based in Newcastle-under-Lyme, Staffordshire, UK." />
              <ContentH level={3} text="<a href='tel:+447729440047' target='_blank' rel='noopener noreferrer' class='headingOverride hover:text-c_deepGrey'>+44 (0)7729 440047</a>" classes='mb-[15px]' />
              <ContentH level={3} text="<a href='mailto:darren.halpin78@gmail.com' target='_blank' rel='noopener noreferrer' class='headingOverride hover:text-c_deepGrey'>darren.halpin78@gmail.com</a>" />

              <ul className="pl-[12px] mt-[40px]">
                <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                  <Link href="https://www.linkedin.com/in/darren-halpin/" target="_blank" rel="noopener noreferrer" className="headingOverride">
                    <div className="w-[100%] h-[40px] xs:pl-[35px] xs:pt-[3px] bg-[url('/images/social_icons/LI-Logo-DG-I.webp')] hover:bg-[url('/images/social_icons/LI-Logo-DG.webp')] bg-contain bg-no-repeat">
                      <ContentH level={3} text="/in/darren-halpin" />
                    </div>
                  </Link>
                </li>
                <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                  <Link href="https://github.com/DH-GitRepos/" target="_blank" rel="noopener noreferrer" className="headingOverride">
                    <div className="w-[100%] h-[40px] xs:pl-[35px] xs:pt-[3px] bg-[url('/images/social_icons/GH-Logo-DG-I.webp')] hover:bg-[url('/images/social_icons/GH-Logo-DG.webp')] bg-contain bg-no-repeat">
                      <ContentH level={3} text="/DH-GitRepos" />
                    </div>
                  </Link>
                </li>
            </ul>

            </div>

            <div className="basis-3/5 xs:mt-[25px] xl:p-[20px] lg:p-[20px] md:p-[20px] sm:p-[10px] xs:p-[5px]">
              <picture>
                <source srcSet="/images/my-location-map-ex.webp" type="image/webp" />
                <img src="/images/my-location-map-ex.jpg" alt="Based in Newcastle-under-Lyme, Staffordshire." className="rounded-xl shadow-lg shadow-c_lightGrey" />
              </picture>
            </div>

          </div>

        </article>

      </section>
    </main>
    </>
  );
}
// /contact/index.tsx
"use client";

import PageTitle from '../(components)/PageTitle';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
    <main className="w-[100%] z-50 bg-c_lightGrey">
      <PageTitle pageTitle="Contact Me" />
      <section id="ContactPageContent">
        
        <article className="mainContentItem sectionTop sectionBottom">
          <div className="textContent flex flex-row gap-3">

            <div className="basis-2/5">
              <picture id="header-logo" className="h-[60px] py-[10px] pl-[15px]">
                <source media="(max-height: 50px)" srcSet="/images/Logo-C.webp" type="image/webp" />
                <img src="/images/Logo-C.png" alt="Site Logo" className="h-[50px]" />
              </picture>
              <h2 className="pl-[12px]">Get in touch!</h2>
              <p className="pl-[12px] mt-[20px] !leading-[1.5em]">I am based in Newcastle-under-Lyme, Staffordshire, UK.</p>
              <h3 className="pl-[12px] text-[1.5em] mb-[0.5em]">
                <Link href="tel:+447729440047" target="_blank" rel="noopener noreferrer" className="headingOverride hover:text-c_deepGrey">
                  +44 (0)7729 440047
                </Link>
              </h3>
              <h3 className="pl-[12px] text-[1.5em]">
                <Link href="mailto:darren.halpin78@gmail.com" target="_blank" rel="noopener noreferrer" className="headingOverride hover:text-c_deepGrey">
                  darren.halpin78@gmail.com
                </Link>
              </h3>

              <ul className="pl-[12px] mt-[40px]">
                <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                  <Link href="https://www.linkedin.com/in/darren-halpin/" target="_blank" rel="noopener noreferrer" className="headingOverride">
                    <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/LI-Logo-DG-I.webp')] hover:bg-[url('/images/social_icons/LI-Logo-DG.webp')] bg-contain bg-no-repeat">
                      <h3 className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_deepGrey">/in/darren-halpin</h3>
                    </div>
                  </Link>
                </li>
                <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                  <Link href="https://github.com/DH-GitRepos/" target="_blank" rel="noopener noreferrer" className="headingOverride">
                    <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/GH-Logo-DG-I.webp')] hover:bg-[url('/images/social_icons/GH-Logo-DG.webp')] bg-contain bg-no-repeat">
                      <h3 className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_deepGrey">/DH-GitRepos</h3>
                    </div>
                  </Link>
                </li>
            </ul>

            </div>

            <div className="basis-3/5">
              <picture>
                <source srcSet="/images/my-location-map-ex.webp" type="image/webp" />
                <img src="/images/my-location-map-ex.jpg" alt="Based in Newcastle-under-Lyme, Staffordshire." className="rounded-xl shadow-lg shadow-c_lightGrey" />
              </picture>
            </div>


          </div>
          {/* <div className="imageContent">
            <ContentImg src="/images/DH-Headshot" alt="Here's me face." />
          </div> */}
        </article>

      </section>
    </main>
    </>
  );
}
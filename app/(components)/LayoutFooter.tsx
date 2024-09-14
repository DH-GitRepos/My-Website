"use client";

import Link from 'next/link';

export default function LayoutFooter() {
  return (
    <>
    <footer className="w-[100%] z-50">
      <section id="footerPageBottom" className="w-[100%] bg-c_black text-c_white border-t-[5px] border-c_blue 2xl:px-[20%] xl:px-[20%] md:px-[20%] xs:px-[5%] flex flex-col">
        <div className="w-[100%] text-center flex flex-col xs:items-center sm:items-center md:items-center">
          <p className="font-bold text-xl mt-[80px] mb-[30px]">Want to chat?</p>
          <Link href="/contact" className="w-[250px] text-c_white bg-c_blue hover:bg-c_lightGrey py-[7px] px-[15px] border-[2px] border-c_white rounded-3xl">
            Get in touch!
          </Link>
          <hr className="w-[100%] border-bottom-[1px] border-c_white my-[80px]" />
          <Link href="/" className="xs:self-center sm:self-center md:self-center lg:self-center xl:self-center 2xl:self-start">
            <picture id="header-logo" className="h-[40-px] mb-[40px]">
              <source media="(max-height: 45px)" srcSet="/images/Logo-D.webp" type="image/webp" />
              <img src="/images/Logo-D.webp" alt="Site Logo" className="h-[40px]" />
            </picture>
          </Link>
        </div>

        <div id="footerPageBottomContainer" className="pt-[20px] flex xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
          <article className="footerNav grow box-border 2xl:w-1/3 xl:w-[100%] md:w-[100%] xs:w-[100%] 2xl:text-left xl:text-center md:text-center sm:text-center xs:text-center">
            <h6 className="font-bold pb-[15px] text-c_blue text-[1.75em]">SITE LINKS</h6>
            <nav className="site-navigation">
              <ul>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Home</Link>
                </li>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/development-skills" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Dev Skills</Link>
                </li>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/development-projects" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Dev Projects</Link>
                </li>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/design" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Design</Link>
                </li>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/education" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Education</Link>
                </li>
                <li className="w-[100%] 2xl:h-[40px] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/contact" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">Contact</Link>
                </li>
              </ul>
            </nav>
            <hr className="w-[100%] border-bottom-[1px] border-c_white mt-[50px] 2xl:hidden" />
          </article>

          <article className="footerText grow box-border 2xl:w-1/3 xl:w-[100%] md:w-[100%] xs:w-[100%] xs:mt-[50px] sm:mt-[50px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[0px] 2xl:text-left xl:text-center md:text-center sm:text-center xs:text-center">
            <h6 className="pb-[15px] font-bold text-c_blue md:text-[1.75em] xs:text-[1.75em]">CONTACT ME</h6>
            <ul>
              <li className="w-[100%] xl:h-[40px] md:h-[60px] xs:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                <Link href="tel:+447729440047" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">07729 440047</Link>
              </li>
              <li className="w-[100%] xl:h-[40px] md:h-[60px] pb-[10px] hover:text-c_blue cursor-pointer">
                <Link href="mailto:darren.halpin78@gmail.com" className="block w-[100%] h-[100%] 2xl:pt-[10px] xl:pt-[10px] md:pt-[10px] 2xl:text-[1em] xl:text-[1.25em] md:text-[1.5em] xs:pt-[10px] xs:text-[1.25em]">darren.halpin78@gmail.com</Link>
              </li>
            </ul>

            <hr className="w-[100%] border-bottom-[1px] border-c_white mt-[50px] 2xl:hidden" />

            <h6 className="xl:pt-[25px] xl:pb-[15px] xl:mt-[30px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] xs:mt-[50px] font-bold text-c_blue md:text-[1.75em] xs:text-[1.75em]">SOCIAL</h6>
            
            <ul className="xs:hidden sm:hidden lg:hidden xl:hidden">
              <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                <Link href="https://www.linkedin.com/in/darren-halpin/" target="_blank" rel="noopener noreferrer">
                  <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/LI-Logo-LG.png')] hover:bg-[url('/images/social_icons/LI-Logo-B.png')] bg-contain bg-no-repeat">
                    <p className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_blue">/in/darren-halpin</p>
                  </div>
                </Link>
              </li>
              <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                <Link href="https://github.com/DH-GitRepos/" target="_blank" rel="noopener noreferrer">
                  <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/GH-Logo-LG.png')] hover:bg-[url('/images/social_icons/GH-Logo-B.png')] bg-contain bg-no-repeat">
                    <p className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_blue">/DH-GitRepos</p>
                  </div>
                </Link>
              </li>
            </ul>

            <div id="footerSmallSocialsContainer" className="2xl:hidden md:flex flex flex-row justify-evenly mt-[20px]">
              <div id="LILogoContainer" className="w-[75px] h-[75px] bg-[url('/images/social_icons/LI-Logo-B.png')] hover:bg-[url('/images/social_icons/LI-Logo-B-I.png')] bg-contain bg-no-repeat">
                <Link href="https://www.linkedin.com/in/darren-halpin/" target="_blank" rel="noopener noreferrer" className="block w-[100%] h-[100%]">&nbsp;</Link>
              </div>
              <div id="LILogoContainer" className="w-[75px] h-[75px] bg-[url('/images/social_icons/GH-Logo-B.png')] hover:bg-[url('/images/social_icons/GH-Logo-B-I.png')] bg-contain bg-no-repeat">  <Link href="https://github.com/DH-GitRepos/" target="_blank" rel="noopener noreferrer" className="block w-[100%] h-[100%]">&nbsp;</Link>
              </div>
            </div>

            <ul className="xs:hidden md:hidden lg:hidden xl:hidden 2xl:block">
              <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                <Link href="https://www.linkedin.com/in/darren-halpin/" target="_blank" rel="noopener noreferrer">
                  <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/LI-Logo-LG.png')] hover:bg-[url('/images/social_icons/LI-Logo-B.png')] bg-contain bg-no-repeat">
                    <p className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_blue">/in/darren-halpin</p>
                  </div>
                </Link>
              </li>
              <li className="w-[100%] h-[50px] pb-[10px] cursor-pointer group">
                <Link href="https://github.com/DH-GitRepos/" target="_blank" rel="noopener noreferrer">
                  <div className="w-[100%] h-[40px] bg-[url('/images/social_icons/GH-Logo-LG.png')] hover:bg-[url('/images/social_icons/GH-Logo-B.png')] bg-contain bg-no-repeat">
                    <p className="w-[100%] pl-[50px] pt-[8px] group-hover:text-c_blue">/DH-GitRepos</p>
                  </div>
                </Link>
              </li>
            </ul>

            <hr className="w-[100%] border-bottom-[1px] border-c_white mt-[50px] 2xl:hidden" />

          </article>

          <article className="footerText grow bg-c_blue box-border 2xl:w-1/3 xl:w-[100%] lg:w-[100%] md:w-[100%] xs:w-[100%] px-[25px] xs:mt-[80px] sm:mt-[80px] md:mt-[80px] lg:mt-[80px] xl:mt-[80px] 2xl:mt-[0px] rounded-tr-xl rounded-bl-xl">
            <h6 className="text-c_white text-3xl font-bold pt-[55px] text-center">This site was built with</h6>
            <ul className="flex xl:flex-row md:flex-row xs:flex-col justify-center pt-[35px] md:pb-[50px] xs:pb-[50px]">
              <li className="grow">
                <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <picture id="next-logo" className="h-[100-px] py-[10px]">
                    <source media="(max-height: 100px)" srcSet="/images/next.svg" type="image/svg+xml" />
                    <img src="/images/next.png" alt="Next.js Logo" className="h-[80px]" />
                  </picture>
                  <div className="group-hover:text-c_black">Next.js</div>
                </Link>
              </li>
              <li className="grow">
                <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <picture id="tailwind-logo" className="h-[100-px] py-[10px]">
                    <source media="(max-height: 100px)" srcSet="/images/tailwind-logo.svg" type="image/svg+xml" />
                    <img src="/images/tailwind-logo.png" alt="Tailwind CSS Logo" className="h-[80px]" />
                  </picture>
                  <div className="group-hover:text-c_black">Tailwind CSS</div>
                </Link>
              </li>
            </ul>
          </article>
        </div>

        <div className="w-[100%] text-center">
          <hr className="w-[100%] border-bottom-[1px] border-c_white mt-[80px]" />
          <p className="font-bold text-sm my-[80px]">&copy; Copyright 2024 Darren Halpin</p>
        </div>
      </section>
    </footer>
    </>
  );
}
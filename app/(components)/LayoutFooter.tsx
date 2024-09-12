"use client";

import Link from 'next/link';

export default function LayoutFooter() {
  return (
    <>
    <footer className="w-[100%] z-50">
      <section id="footerPageBottom" className="w-[100%] bg-c_black text-c_white border-t-[5px] border-c_blue px-[20%] flex flex-col">
        <div className="w-[100%] text-center">
          <p className="font-bold text-xl mt-[80px] mb-[30px]">Want to chat?</p>
          <Link href="/contact" className="text-c_white bg-c_blue hover:bg-c_lightGrey py-[7px] px-[15px] border-[2px] border-c_white rounded-3xl">
            Get in touch!
          </Link>
          <hr className="w-[100%] border-bottom-[1px] border-c_white mt-[80px]" />
        </div>

        <div id="footerPageBottomContainer" className="pt-[80px] flex flex-row">
          <article className="footerNav grow box-border w-1/3">
            <Link href="/">
                <picture id="header-logo" className="h-[60-px] py-[10px]">
                  <source media="(max-height: 45px)" srcSet="/images/Logo-D.webp" type="image/webp" />
                  <img src="/images/Logo-D.webp" alt="Site Logo" className="h-[40px]" />
                </picture>
            </Link>

            <h6 className="font-bold pb-[15px] text-c_blue">SITE LINKS</h6>
            <nav className="site-navigation">
              <ul>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/" className="block w-[100%] h-[40px]">Home</Link>
                </li>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/development-skills" className="block w-[100%] h-[40px]">Dev Skills</Link>
                </li>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/development-projects" className="block w-[100%] h-[40px]">Dev Projects</Link>
                </li>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/design" className="block w-[100%] h-[40px]">Design</Link>
                </li>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/education" className="block w-[100%] h-[40px]">Education</Link>
                </li>
                <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                  <Link href="/contact" className="block w-[100%] h-[40px]">Contact</Link>
                </li>
              </ul>
            </nav>
          </article>

          <article className="footerText grow box-border w-1/3">
            <h6 className="pt-[62px] pb-[15px] font-bold text-c_blue">CONTACT ME</h6>
            <ul>
              <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                <Link href="tel:+447729440047" className="block w-[100%] h-[40px]">07729 440047</Link>
              </li>
              <li className="w-[100%] h-[40px] pb-[10px] hover:text-c_blue cursor-pointer">
                <Link href="mailto:darren.halpin78@gmail.com" className="block w-[100%] h-[40px]">darren.halpin78@gmail.com</Link>
              </li>
            </ul>

            <h6 className="pt-[25px] pb-[15px] font-bold text-c_blue">SOCIAL</h6>
            <ul>
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
          </article>

          <article className="footerText grow bg-c_blue box-border w-1/3 px-[25px] rounded-tr-xl rounded-bl-xl">
            <h6 className="text-c_white text-3xl font-bold pt-[55px] text-center">This site was built with</h6>
            <ul className="flex flex-row justify-center pt-[35px]">
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
"use client";

import Link from 'next/link';
import SiteNavigation from './SiteNavigation';

export default function LayoutHeader() {
  return (
    <>
    <header className="sticky top-0 w-[100%] h-[65px] z-999">
      <section id="headerPageTop" className="h-[65px] bg-c_lightGrey border-b-[5px] border-c_blue px-[20%] flex">
        <article id="headerPageTopLogo" className="grow-0">
          <Link href="/">
            <picture id="header-logo" className="h-[60px] py-[10px] pl-[15px]">
              <source media="(max-height: 45px)" srcSet="/images/Logo-D.webp" type="image/webp" />
              <img src="/images/Logo-D.png" alt="Site Logo" className="h-[40px]" />
            </picture>
          </Link>
        </article>

        <article id="headerPageTopText" className="grow text-right">
          <div className="flex flex-row items-center justify-end h-[100%]">
            <div aria-label="Telephone number">
              <Link href="tel:+447729440047" className="text-c_white hover:text-c_black text-[1.5em] mx-[10px] font-bold tracking-wider pointer">
                07729 440047
              </Link>
            </div>
            <div>
              <Link href="/contact" className="text-c_white bg-c_blue hover:bg-c_black py-[7px] px-[15px] border-[2px] border-c_white rounded-3xl">
                Contact Me
              </Link>
            </div>
          </div>
        </article>

        <article id="headerPageTopNav" className="pt-[15px] grow-0">
          <SiteNavigation />
        </article>
      </section>
    </header>
    </>
  );
}
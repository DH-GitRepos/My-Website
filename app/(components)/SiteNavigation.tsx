"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './SiteNavigation.module.css';

const SiteNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <div>      
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className={`${styles.burger} z-[999]`}
        id="menu-toggle"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div className={`${styles.navWrapper} fixed top-0 right-0 w-[100%] h-[100vh] bg-c_black border-l-[10px] border-l-[rgb(81,113,255)] translate-x-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.25,1)] flex justify-center items-center`}>
        <nav className="w-[100%]">
          <ul className="list-none p-0 m-0 text-center flex flex-col w-[100%]">
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block pointer w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Home
                </span>
              </Link>
            </li>
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/development-skills" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Dev Skills
                </span>
              </Link>
            </li>
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/development-projects" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Dev Projects
                </span>
              </Link>
            </li>
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/design" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Design
                </span>
              </Link>
            </li>
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/education" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Education
                </span>
              </Link>
            </li>
            <li className="block w-[100vw] h-[40px] my-[20px]">
              <Link href="/contact" onClick={closeMenu} className="text-white no-underline text-[1em]">
                <span className="block w-[100vw] h-[40px] text-c_white hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default SiteNavigation;
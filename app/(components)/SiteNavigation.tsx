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
      <div className={`${styles.navWrapper} w-[100%]`}>
        <nav className={`${styles.siteNavigation} w-[80%]`}>
          <ul>
            <li className="w-[100%] h-[80px]">
              <Link href="/" onClick={closeMenu}>
                <span className="block pointer w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Home
                </span>
              </Link>
            </li>
            <li className="w-[100%] h-[80px]">
              <Link href="/development-skills" onClick={closeMenu}>
                <span className="block w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Dev Skills
                </span>
              </Link>
            </li>
            <li className="w-[100%] h-[80px]">
              <Link href="/development-projects" onClick={closeMenu}>
                <span className="block w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Dev Projects
                </span>
              </Link>
            </li>
            <li className="w-[100%] h-[80px]">
              <Link href="/design" onClick={closeMenu}>
                <span className="block w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Design
                </span>
              </Link>
            </li>
            <li className="w-[100%] h-[80px]">
              <Link href="/education" onClick={closeMenu}>
                <span className="block w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
                  Education
                </span>
              </Link>
            </li>
            <li className="w-[100%] h-[80px]">
              <Link href="/contact" onClick={closeMenu}>
                <span className="block w-[100%] h-[80px] hover:text-c_blue pt-[15px] text-[1.75em] font-bold tracking-wide">
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
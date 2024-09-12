"use client";

import Link from 'next/link';
import styles from './CallToAction.module.css';

interface CallToActionProps {
  heading: string;
  mainText: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ heading, mainText, buttonText, buttonLink }) => {
  
  const customLink = "/" + buttonLink;
  
  return (
    <>
    <article className={styles.callToActionBar}>
      <h2 className="text-[3em] mb-[25px]">{heading}</h2>
      <p className="text-[1em] font-bold text-c_deepGrey bg-c_white mb-[50px] mx-[20%] p-[10px]">{mainText}</p>
      <Link href={customLink} className="text-c_white bg-c_blue hover:bg-c_lightGrey py-[12px] px-[15px] border-[2px] border-c_white rounded-3xl">
          {buttonText}
      </Link>
    </article>
    </>
  );
};

export default CallToAction;
"use client";

import Link from 'next/link';

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
    <article className="flex flex-col items-center justify-between gap-1 box-border w-[100%] 2xl:h-[350px] xl:h-[350px] lg:h-[350px] md:h-[400px] sm:h-[700px] xs:h-[700px] text-center text-white 2xl:py-[50px] xl:py-[50px] lg:py-[50px] md:py-[50px] sm:py-[50%] xs:py-[50%] bg-[url('/images/CTA-BG-v1.webp')] bg-fixed bg-top-left bg-cover">
      <h2 className="block text-c_white xl:text-[3em] md:text-[3em] xs:text-[2em] xs:px-[5%]">{heading}</h2>
      <p className="block text-[1em] font-bold text-c_deepGrey bg-c_white mx-[20%] p-[10px]">{mainText}</p>
      <Link href={customLink} className="block w-[250px] text-c_white bg-c_blue hover:bg-c_lightGrey py-[12px] px-[15px] border-[2px] border-c_white rounded-3xl">
          {buttonText}
      </Link>
    </article>
    </>
  );
};

export default CallToAction;
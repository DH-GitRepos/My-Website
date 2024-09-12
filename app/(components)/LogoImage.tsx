"use client";

interface CallToActionProps {
  src: string;
  desc: string;
  altTxt: string;
}

const LogoImage: React.FC<CallToActionProps> = ({ src, desc, altTxt }) => {

  return (
    <>
    <li className="">
      <picture className="">
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img src={`${src}.png`} alt={altTxt} />
      </picture>
      <p className="text-c_black text-center">{desc}</p>
    </li>
    </>
  );
};

export default LogoImage;
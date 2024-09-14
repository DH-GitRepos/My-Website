"use client";

interface CallToActionProps {
  src: string;
  alt: string;
  bigCorners?: boolean;
  classes?: string;
}

const ContentImg: React.FC<CallToActionProps> = ({ src, alt, bigCorners, classes }) => {

  return (
    <>
    <div className={bigCorners ? `imageContent ${classes}` : `imageContent2 ${classes}`}>
      <picture className="facepic">
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img src={`${src}.jpg`} alt={alt} />
      </picture>
    </div>
    </>
  );
};

export default ContentImg;
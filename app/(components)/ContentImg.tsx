"use client";

interface CallToActionProps {
  src: string;
  alt: string;
  bigCorners?: boolean;
}

const ContentImg: React.FC<CallToActionProps> = ({ src, alt, bigCorners }) => {

  return (
    <>
    <div className={bigCorners ? "imageContent" : "imageContent2"}>
      <picture className="facepic">
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img src={`${src}.jpg`} alt={alt} />
      </picture>
    </div>
    </>
  );
};

export default ContentImg;
"use client";

import ScopedStyles from '../design/page.module.css';

interface CallToActionProps {
  imgId: string;
  imgNo: string;
}

const GalleryImg: React.FC<CallToActionProps> = ({ imgId, imgNo }) => {

  return (
    <>
    <picture className={`${ScopedStyles.gridImg}`} id={`i${imgId}`}>
      <source media="(max-width: 512px)" srcSet={`/images/gallery/mobile/${imgNo}-M-Portfolio.webp`} type="image/webp" />
      <source media="(max-width: 1024px)" srcSet={`/images/gallery/desktop/${imgNo}-D-Portfolio.webp`} type="image/webp" />
      <source media="(min-width: 1025px)" srcSet={`/images/gallery/full-size/${imgNo}-FS-Portfolio.webp`} type="image/webp" />
      <img src={`/images/gallery/mobile/${imgNo}-M-Portfolio.webp`} alt="Portfolio image." />
    </picture>
    </>
  );
};

export default GalleryImg;
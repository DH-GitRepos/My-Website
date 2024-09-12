"use client";

import LogoImage from './LogoImage';
import ScopedStyles from '../development-skills/page.module.css';

type ImageList = {
  filename: string;
  description: string;
  alt: string;
}[];

interface CallToActionProps {
  imageList: ImageList;
}

const LogoGallery: React.FC<CallToActionProps> = ({ imageList }) => {

  return (
    <>
    <ul className="flex flex-row flex-wrap justify-around">
        {imageList.map((img) => (
            <LogoImage src={`/images/logos/${img.filename}`} desc={img.description} altTxt={img.alt} />
        ))
        }                   
    </ul>
    </>
  );
};

export default LogoGallery;
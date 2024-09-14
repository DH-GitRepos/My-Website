"use client";

import ScopedStyles from '../design/page.module.css';
import GalleryImg from './GalleryImg';

const PortfolioGallery: React.FC = () => {

  return (
    <>
    <div id={`${ScopedStyles.imageGallery}`} className="textContent p-[10px]">
        {[
            { imgId: "01", imgNo: "15" },
            { imgId: "02", imgNo: "03" },
            { imgId: "03", imgNo: "04" },
            { imgId: "04", imgNo: "05" },
            { imgId: "05", imgNo: "06" },
            { imgId: "06", imgNo: "07" },
            { imgId: "07", imgNo: "08" },
            { imgId: "08", imgNo: "13" },
            { imgId: "09", imgNo: "10" },
            { imgId: "10", imgNo: "11" },
            { imgId: "11", imgNo: "12" },
            { imgId: "12", imgNo: "02" },
            { imgId: "13", imgNo: "16" },
            { imgId: "14", imgNo: "09" },
            { imgId: "15", imgNo: "14" }
        ].map((item) => (
            <GalleryImg imgId={item.imgId} imgNo={item.imgNo} />
        ))
        }                   
    </div>
    </>
  );
};

export default PortfolioGallery;
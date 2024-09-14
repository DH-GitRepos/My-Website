"use client";

interface CallToActionProps {
  pageTitle: string;
}

const PageTitle: React.FC<CallToActionProps> = ({ pageTitle }) => {

  return (
    <>
    <section id="HomeViewPageTitle" className="w-[100%] h-[100vh] bg-page-heading-image bg-center bg-no-repeat bg-auto">
        <div id="pageTitleContainer" className="h-[100%] flex justify-center items-center">    
            <h1 className="block bg-c_white text-c_deepGrey xl:text-[4em] md:text-[4em] xs:text-[2.5em] px-[15px] py-[10px] w-min rounded-tl-3xl rounded-tr-md rounded-br-md rounded-bl-md shadow-lg shadow-c_white_shadow text-center leading-tight">
                {pageTitle}
            </h1>
        </div>
    </section>
    </>
  );
};

export default PageTitle;
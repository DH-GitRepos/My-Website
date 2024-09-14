"use client";

interface CallToActionProps {
  itemsList: string[];
}

const ContentList: React.FC<CallToActionProps> = ({ itemsList }) => {

  return (
    <>
      <ul className="block w-[100%] xs:p-[15px] sm:p-[15px] xs:mb-[20px] xs:ml-[16px] xs:pl-[20px] sm:mb-[20px] sm:ml-[16px] sm:pl-[20px] text-c_white list-disc">
        {itemsList.map((item) => (
          <li className="leading-[2em]">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ContentList;
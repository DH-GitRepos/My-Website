"use client";

import sanitizeHtml from 'sanitize-html';

const sanitizeConfig = {
  allowedTags: ['a', 'b', 'i', 'em', 'strong', 'p', 'div', 'span', 'ul', 'ol', 'li', 'br'],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    '*': ['class', 'id', 'style']
  }
};

interface CallToActionProps {
  text: string;
  classes?: string;
}

const ContentP: React.FC<CallToActionProps> = ({ text, classes }) => {
  const sanitizedText = sanitizeHtml(text, sanitizeConfig);

  return (
    <>
      <p className={`${classes} block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white`}
          dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </>
  );
};

export default ContentP;
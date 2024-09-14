"use client";

import ScopedStyles from '../education/page.module.css';
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
  level: number;
  classes?: string;
}

const ContentH: React.FC<CallToActionProps> = ({ text, level, classes }) => {
  const sanitizedText = sanitizeHtml(text, sanitizeConfig);

  return (
    <>
      {level === 2 ? <h2 className={`${classes} block w-[100%] xs:p-[10px] sm:p-[10px]`}
                          dangerouslySetInnerHTML={{ __html: sanitizedText }} /> : null}

      {level === 3 ? <h3 className={`${classes} block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey`}
                          dangerouslySetInnerHTML={{ __html: sanitizedText }} /> : null}

      {level === 4 ? <h4 className={`${classes} block w-[100%] xs:p-[10px] sm:p-[10px] text-[1.25em] mt-[-15px] mb-[15px] text-c_deepGrey`}
                          dangerouslySetInnerHTML={{ __html: sanitizedText }} /> : null}

      {level === 5 ? <h5 className={`${classes} ${ScopedStyles.moduleHeading} bg-[url('/images/circle-open.png')] xs:bg-top-left xs:bg-no-repeat xs:bg-contain xs:text-[var(--col_deepGrey)] xs:pl-[30px] xs:pt-[1px]`}
                          dangerouslySetInnerHTML={{ __html: sanitizedText }} /> : null}
    </>
  );
};

export default ContentH;


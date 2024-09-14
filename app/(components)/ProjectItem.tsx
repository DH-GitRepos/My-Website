"use client";

import ContentImg from '../(components)/ContentImg';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

const sanitizeConfig = {
  allowedTags: ['a', 'b', 'i', 'em', 'strong', 'p', 'div', 'span', 'ul', 'ol', 'li', 'br'],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    '*': ['class', 'id', 'style']
  }
};

interface ProjectDataItem {
  client_name: string;
  collectionId: string;
  collectionName: string;
  created: string;
  github_link: string;
  github_link_url: string;
  id: string;
  module_title: string;
  project_category: string;
  project_description: string;
  project_title: string;
  project_type: string;
  project_year: number;
  screenshot_alt_text: string;
  screenshot_image: string;
  screenshot_present: boolean;
  technologies_list: string;
  updated: string;
  website_link: string;
  website_link_url: string;
}

interface CallToActionProps {
  project: ProjectDataItem;
}

const ProjectItem: React.FC<CallToActionProps> = ({ project }) => {
  const sanitizedText = sanitizeHtml(project.project_description, sanitizeConfig);

  return (
    <article className="sectionTop sectionBottom xs:w-[100%] sm:w-[100%] xs:px-[10px] md:px-[10%] lg:px-[20%]">
      
      <div className="textContent bg-c_blue xs:w-[100%] sm:w-[100%] flex flex-col xs:rounded-lg">
    
        <h2 className="block w-[100%] xs:p-[10px] sm:p-[10px]">{project.project_title}</h2>
        <hr className="border-b-1 border-c_white w-[80%] ml-[10px] mb-[25px]" />

        { /* If screenshot flag is true, display the screenshot */ }
        {project.screenshot_present ? (
          <ContentImg src={`/images/screenshots/${project.screenshot_image}`}
                      alt={project.screenshot_alt_text}
                      classes="xl:px-[50px] 2xl:px-[400px]"
          />
        ) : null}

          <div className="">

            <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Project year:</h3>            
            <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">{project.project_year}</p>

            { /* If the project category is "client", output the client name */ }
            {project.project_category === "client" ? (
              <>
                <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Client:</h3>
                <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">{project.client_name}</p>
              </>
            ) : null}

            { /* If the project category is "uni", output the module name */ }
            {project.project_category === "uni" ? (
              <>
                <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Module:</h3>
                <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">{project.module_title}</p>
              </>
            ) : null}

            <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Project type:</h3>
            <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">{project.project_type}</p>

            <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Technologies used:</h3>
            <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">{project.technologies_list}</p>

            <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Project description:</h3>
            {/* this section receives html content from the data source, set as innerHTML and sanitise */}
            <div className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white"
                dangerouslySetInnerHTML={{ __html: sanitizedText }} />

            { /* If website flag is true, display the website link */ }
            {project.website_link ? (
              <>
                <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">Website:</h3>
                <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">
                  <Link href={`${project.website_link_url}`} target="_blank">
                    {project.website_link_url}
                  </Link>
                </p>
              </>
            ) : null}

            { /* If github flag is true, display the website link */ }
            {project.github_link ? (
              <>
                <h3 className="block w-[100%] xs:px-[15px] sm:px-[15px] xs:text-[1.5em] sm:text-[1.5em] text-c_deepGrey">GitHub:</h3>
                <p className="block w-[100%] xs:px-[15px] sm:px-[15px] text-c_white">
                  <Link href={`${project.github_link_url}`} target="_blank">
                    {project.github_link_url}
                  </Link>
                </p>
              </>
            ) : null}

          </div>

        </div>        

    </article>
  );
};

export default ProjectItem;
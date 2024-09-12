"use client";

import ContentImg from '../(components)/ContentImg';
import Link from 'next/link';
import DOMPurify from 'dompurify';

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
  return (
    <article className="mainContentItem">

      <div className="textContent">
        <h2 className="!text-c_white">{project.project_title}</h2>

        <div className="flex flex-row">

          <div className="basis-2/3">

            <h3 className="!text-c_deepGrey">Project year:</h3>
            <p>{project.project_year}</p>

            {project.project_category === "client" ? (
              <>
                <h3 className="!text-c_deepGrey">Client:</h3>
                <p>{project.client_name}</p>
              </>
            ) : null}

            {project.project_category === "uni" ? (
              <>
                <h3 className="!text-c_deepGrey">Module:</h3>
                <p>{project.module_title}</p>
              </>
            ) : null}

            <h3 className="!text-c_deepGrey">Project type:</h3>
            <p>{project.project_type}</p>

            <h3 className="!text-c_deepGrey">Technologies used:</h3>
            <p>{project.technologies_list}</p>

            <h3 className="!text-c_deepGrey">Project description:</h3>

            {/* this section receives html content from the data source, set as innerHTML and sanitise */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(project.project_description),
              }}
            />

            {project.website_link ? (
              <>
                <h3 className="!text-c_deepGrey">Website:</h3>
                <p>
                  <Link href={`${project.website_link_url}`} target="_blank">
                    {project.website_link_url}
                  </Link>
                </p>
              </>
            ) : null}

            {project.github_link ? (
              <>
                <h3 className="!text-c_deepGrey">GitHub:</h3>
                <p>
                  <Link href={`${project.github_link_url}`} target="_blank">
                    {project.github_link_url}
                  </Link>
                </p>
              </>
            ) : null}

          </div>

          <div className="basis-1/3">
          
            {project.screenshot_present ? (
              <ContentImg src={`/images/screenshots/${project.screenshot_image}`}
                          alt={project.screenshot_alt_text}
              />
            ) : null}

          </div>

        </div>

        

      </div>

      

    </article>
  );
};

export default ProjectItem;
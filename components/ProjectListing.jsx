import './ProjectsStyles.css'
import { PROJECTS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { aldrich } from "@/app/fonts";
import Button from './Button';

const ProjectListings = () => {
  return (
    <div className="projects_tiles">
      {PROJECTS.map((project, key) => (
        <div key={key} className="projects_tile">
          <Image
            src={project.image}
            width={200}
            height={200}
            className="projects_pic"
          />
          <h3 className={`${aldrich.className} + projects_tile_title`}>
            {project.label}
          </h3>
          <p className="projects_tile_text">{project.text}</p>
          <Link href={`/projects/${project.key}`}>
            {" "}
            <Button title="Learn more" styles="projects_button" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectListings;
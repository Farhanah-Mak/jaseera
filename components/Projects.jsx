import "./ProjectsStyles.css"
import { aldrich } from "@/app/fonts";
import ProjectListings from "./ProjectListing";

const Projects = ({title, src, text}) => {
  return (
    <div className="projects">
      <section className="projects_container">
        <div className="projects_top">
          <h1 className={`${aldrich.className} + projects_title`}>
            Our projects
          </h1>
            <p className="projects_text">
              Welcome to our projects section, a dynamic showcase of our
              innovative endeavors, where groundbreaking ideas and remarkable
              achievements come to life in a symphony of creativity and
              technological prowess.
            </p>
        </div>
        <div className="projects_bottom">
          <ProjectListings />
        </div>
      </section>
    </div>
  );
}

export default Projects
import "./ProjectsStyles.css"
import { aldrich } from "@/app/fonts";
import Image from "next/image";
import Button from "./Button";

const Projects = () => {
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
            technological prowess. Step into a world where possibilities unfold,
            and witness the extraordinary tapestry of our passion, expertise,
            and relentless pursuit of excellence.
          </p>
        </div>
        <div className="projects_bottom">
          <div className="projects_tiles">
            <div className="projects_tile">
              <Image
                src="/projects1.jpg"
                width={200}
                height={200}
                className="projects_pic"
              />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 1
              </h3>
              <p className="projects_tile_text">
                As Built scanning and 3D modelling for Petrochemical, Oil and
                gas plants
              </p>
              <Button title="Learn more" styles="projects_button" />
            </div>
            <div className="projects_tile">
              <Image
                src="/projects2.jpg"
                width={200}
                height={200}
                className="projects_pic"
              />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 2
              </h3>
              <p className="projects_tile_text">
                Scanning and modelling for offshaore plants and ships
              </p>
              <Button title="Learn more" styles="projects_button" />
            </div>
            <div className="projects_tile">
              <Image
                src="/projects3.jpg"
                width={200}
                height={200}
                className="projects_pic"
              />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 3
              </h3>
              <p className="projects_tile_text">
                Reverse engineering for mechanical parts
              </p>
              <Button title="Learn more" styles="projects_button" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects
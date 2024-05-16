import "./ProjectsStyles.css"
import { aldrich } from "@/app/fonts";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="projects">
      <section className="projects_container">
        <div className="projects_top">
          <h1 className={`${aldrich.className} + projects_title`}>
            Our projects
          </h1>
          <p className="projects_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dolor blanditiis commodi et vero ab? Animi sapiente dolore libero
            ipsum.
          </p>
        </div>
        <div className="projects_bottom">
          <div className="projects_tiles">
            <div className="projects_tile">
              <Image src="" width={200} height={200} className="projects_pic" />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 1
              </h3>
              <p className="projects_tile_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, similique!
              </p>
              <button className="button projects_button">Learn more</button>
            </div>
            <div className="projects_tile">
              <Image src="" width={200} height={200} className="projects_pic" />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 2
              </h3>
              <p className="projects_tile_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, similique!
              </p>
              <button className="button projects_button">Learn more</button>
            </div>
            <div className="projects_tile">
              <Image src="" width={200} height={200} className="projects_pic" />
              <h3 className={`${aldrich.className} + projects_tile_title`}>
                Project 3
              </h3>
              <p className="projects_tile_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque, similique!
              </p>
              <button className="button projects_button">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects
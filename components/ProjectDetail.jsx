import Image from "next/image"
import "./ProjectDetailStyles.css"
import { aldrich } from "@/app/fonts";

const ProjectDetail = ({project}) => {
  return (
    <div className="projectDetail">
      <div className="projectDetail_container">
              <h1 className={`${aldrich.className} + projectDetail_title`}>{project.label}</h1>
        <Image src={project.image} width={300} height={300} className="projectDetail_image"/>
            <p className="projectDetail_text">{project.details}
            </p>
      </div>
    </div>
  );
}

export default ProjectDetail
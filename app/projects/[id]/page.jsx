
import ProjectDetail from "@/components/ProjectDetail";
import { PROJECTS } from "@/constants";

const page = ({ params }) => {
    const project = PROJECTS.find((project) => project.key === params.id)
  return (
      <>
          <ProjectDetail project={project} />
      </>
  )
}

export default page;





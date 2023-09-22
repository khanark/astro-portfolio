import Typography from "./Typography";
import layout, { style } from "../../constants/style";
import type { Project } from "../../constants/constants";

const ProjectCardHeader = ({
  projectName,
  projectType,
  projectStack,
}: Project) => (
  <div>
    <div className="flex group justify-between items-center">
      <Typography variant="h2" className="!font-normal !mb-2">
        {projectName}
      </Typography>
      <Typography variant="p" className="!text-md !m-0 font-semibold">
        {projectType.join(", ")}
      </Typography>
    </div>
    <div className="flex gap-2">
      {projectStack.map((tech) => (
        <Typography
          key={tech}
          variant="p"
          className={`${style.textSecondary} ${layout.section.dark} !text-sm !font-semibold !rounded-md !px-2 !py-1`}
        >
          {tech}
        </Typography>
      ))}
    </div>
  </div>
);

const projectCardBody = ({ projectPhoto }: Project) => {
  // this is where the project photo will go
};

const ProjectCard = ({
  projectName,
  projectType,
  projectPhoto,
  projectLink,
  projectStack,
}: Project) => {
  return (
    <a
      className={`${layout.section.light} group !p-12`}
      href={projectLink}
      target="_blank"
    >
      <ProjectCardHeader
        projectName={projectName}
        projectType={projectType}
        projectStack={projectStack}
      />
      /!FIX: project photo
      {/* <projectCardBody projectPhoto={projectPhoto} /> */}
    </a>
  );
};

export default ProjectCard;

import Typography from "./Typography";
import layout, { style } from "../../constants/style";
import type { Project } from "../../constants/constants";

const ProjectType = ({ type }: { type: string }) => {
  return (
    <p
      className={`${layout.section.dark} !px-3 !py-1 inline-block ${style.textSecondary} !rounded-full`}
    >
      {type}
    </p>
  );
};

const ProjectCardHeader = ({
  projectName,
  projectType,
  projectStack,
}: Project) => (
  <div>
    <div className="flex justify-between items-center">
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
    </a>
  );
};

export default ProjectCard;

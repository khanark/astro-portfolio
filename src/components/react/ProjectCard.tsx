import Typography from "./Typography";
import layout, { style } from "../../constants/style";
import type { Project } from "../../constants/constants";

const ProjectCardHeader = ({
  projectName,
  projectType,
  projectStack,
}: Project) => (
  <div>
    <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
      <Typography variant="h2" className="!font-normal !m-0">
        {projectName}
      </Typography>
      <Typography variant="p" className="!text-md !m-0 font-semibold">
        {projectType.join(", ")}
      </Typography>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {projectStack.map((tech) => (
        <Typography
          key={tech}
          variant="p"
          className={`${style.textSecondary} ${layout.section.dark} !text-sm !font-semibold !m-0 !rounded-md !px-2 !py-1`}
        >
          {tech}
        </Typography>
      ))}
    </div>
  </div>
);

const ProjectCardBody = ({ projectPhotos }: { projectPhotos?: ImageMetadata[] }) => {
  return (
    <>
      <ul className="absolute flex gap-2 list-none opacity-0 group-hover:opacity-100 transition">
      <li><a className="text-xs underline underline-offset-2 font-bold tracking-wider uppercase text-cyan-600" href="#">demo</a></li>        
        <li><a className="text-xs underline underline-offset-2 font-bold tracking-wider uppercase text-cyan-600" href="#">github</a></li>
        </ul>
    <div className="absolute w-[150%] left-1/4 opacity-80 group-hover:opacity-100 group-hover:translate-x-[30px]  transition-all duration-700 -rotate-6  flex gap-4 justify-between mt-4">
      {projectPhotos && projectPhotos.map((photo, i) => (
        <div className="w-1/2">
        <img
          key={i}
          src={photo.src}
          alt="project"
          className="z-0 w-full h-auto object-fit grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          </div>
      ))}
    </div>
    </>
  );
};

const ProjectCard = ({
  projectName,
  projectType,
  projectPhotos,
  projectLink,
  projectStack,
}: Project) => {

  return (
    <div
      className={`${layout.section.light} group overflow-hidden relative h-[450px] md:h-[580px] group !p-12`}
    >
      <ProjectCardHeader
        projectName={projectName}
        projectType={projectType}
        projectStack={projectStack}
      />
      <ProjectCardBody projectPhotos={projectPhotos} />      
    </div>
  );
};

export default ProjectCard;

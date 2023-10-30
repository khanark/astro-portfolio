import Typography from "./Typography";
import layout, { style } from "../../constants/style";
import type { Project } from "../../constants/constants";

const ProjectCardHeader = ({ projectName, projectType, projectStack }: Project) => (
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

const ProjectCardBody = ({ projectPhotos }: { projectPhotos?: string[] }) => {
    return (
        <div>
            <ul className="absolute flex gap-2 list-none opacity-0 group-hover:opacity-100 transition">
                <li>
                    <a
                        className="text-xs underline underline-offset-2 font-bold tracking-wider uppercase text-cyan-600"
                        href="#"
                    >
                        demo
                    </a>
                </li>
                <li>
                    <a
                        className="text-xs underline underline-offset-2 font-bold tracking-wider uppercase text-cyan-600"
                        href="#"
                    >
                        github
                    </a>
                </li>
            </ul>
            <div className="w-full relative flex gap-4">
                {projectPhotos &&
                    projectPhotos.map((photo, i) => (
                        // <div key={i} className="w-full h-[300px]">
                        //     <img
                        //         src={`${photo}`}
                        //         alt="project"
                        //         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        //     />
                        // </div>
                        <div
                            className="bg-top bg-no-repeat bg-cover w-full h-[300px] grayscale group-hover:grayscale-0 transition-all duration-700"
                            style={{ backgroundImage: `url(${photo})` }}
                        ></div>
                    ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ projectName, projectType, projectPhotos, projectStack }: Project) => {
    return (
        <div
            className={`project-card opacity-0 ${layout.section.light}  flex flex-col justify-between group relative overflow-hidden rounded drop-shadow-md h-[450px] md:h-[580px] group !p-12`}
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

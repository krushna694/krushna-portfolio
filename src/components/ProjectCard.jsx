import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
    return (
        <motion.div
            className="project-card"
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.3,
            }}
        >

            {/* Project Image */}

            <div className="project-image-wrapper">

                <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="project-image"
                />

                <div className="project-overlay">

                    {project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                        >
                            <FaGithub />
                        </a>
                    )}

                    {project.live !== "#" && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} live demo`}
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}

                </div>

            </div>


            {/* Project Content */}

            <div className="project-content">

                <p className="project-number">
                    {String(project.id).padStart(2, "0")}
                </p>

                <h3 className="project-title">
                    {project.title}
                </h3>

                <h4 className="project-subtitle">
                    {project.subtitle}
                </h4>

                <p className="project-description">
                    {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                    {project.technologies.map((technology) => (

                        <span
                            className="project-tech"
                            key={technology}
                        >
                            {technology}
                        </span>

                    ))}

                </div>


                {/* Links */}

                <div className="project-links">

                    {project.github !== "#" && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    )}

                    {project.live !== "#" && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                    )}

                </div>

            </div>

        </motion.div>
    );
}

export default ProjectCard;
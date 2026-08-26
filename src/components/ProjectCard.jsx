import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

function ProjectCard({ project, index }) {

    const isReversed = index % 2 !== 0;

    return (
        <motion.article
            className={`project-row ${isReversed ? "project-row-reverse" : ""
                }`}

            initial={{
                opacity: 0,
                y: 50,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            viewport={{
                once: true,
                amount: 0.2,
            }}

            transition={{
                duration: 0.7,
            }}
        >

            {/* Project Image */}

            <div className="project-image-container">

                <motion.div
                    className="project-image-wrapper"

                    whileHover={{
                        scale: 1.02,
                    }}

                    transition={{
                        duration: 0.3,
                    }}
                >

                    <img
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        className="project-image"
                    />

                </motion.div>

            </div>


            {/* Project Information */}

            <div className="project-info">

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

                    {project.technologies.map(
                        (technology) => (

                            <span
                                className="project-tech"
                                key={technology}
                            >
                                {technology}
                            </span>

                        )
                    )}

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

        </motion.article>
    );
}

export default ProjectCard;
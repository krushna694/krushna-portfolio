import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section
            className="projects-section"
            id="projects"
        >

            <div className="container">

                {/* Section Header */}

                <motion.div
                    className="section-heading"

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: 0.7,
                    }}
                >

                    <p className="section-label">
                        MY PROJECTS
                    </p>

                    <h2 className="section-title">
                        Things I've built
                    </h2>

                    <p className="section-description">
                        A selection of projects where I've applied my
                        programming and web development skills to build
                        practical applications.
                    </p>

                </motion.div>


                {/* Project Cards */}

                <div className="row g-4">

                    {projects.map((project, index) => (

                        <motion.div
                            className="col-lg-6"
                            key={project.id}

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
                                amount: 0.15,
                            }}

                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                        >

                            <ProjectCard
                                project={project}
                            />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;
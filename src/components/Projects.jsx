import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {

    const featuredProject = projects[0];

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
                        amount: 0.2,
                    }}

                    transition={{
                        duration: 0.7,
                    }}
                >

                    <p className="section-label">
                        MY PROJECTS
                    </p>

                    <h2 className="section-title">
                        Selected work
                    </h2>

                    <p className="section-description">
                        A look at one of my projects. Explore the complete
                        collection to see more of my work.
                    </p>

                </motion.div>


                {/* Featured Project */}

                <div className="home-project">

                    <ProjectCard
                        project={featuredProject}
                        index={0}
                    />

                </div>


                {/* Explore More */}

                <motion.div
                    className="explore-projects"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                >

                    <Link
                        to="/projects"
                        className="explore-projects-link"
                    >
                        Explore More Projects
                        <span>→</span>
                    </Link>

                </motion.div>

            </div>

        </section>
    );
}

export default Projects;
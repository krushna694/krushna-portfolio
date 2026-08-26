import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
    return (
        <section className="all-projects-section">

            <div className="container">

                {/* Page Header */}

                <motion.div
                    className="projects-page-header"

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.7,
                    }}
                >

                    <p className="section-label">
                        MY WORK
                    </p>

                    <h1>
                        All Projects
                    </h1>

                    <p>
                        A collection of projects I've built while
                        learning and working with different technologies.
                    </p>

                </motion.div>


                {/* All Projects */}

                <div className="projects-page-list">

                    {projects.map((project, index) => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ProjectsPage;
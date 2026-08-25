import { motion } from "framer-motion";

import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaGoogle,
    FaRobot,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiPostman,
    SiIntellijidea,
    SiPostgresql,
} from "react-icons/si";

import { skills } from "../data/skills";


function getSkillIcon(skill) {

    const icons = {

        // Backend
        Java: <FaJava />,
        "Spring Boot": <SiSpringboot />,
        "Spring MVC": <SiSpringboot />,
        "Spring Data JPA": <SiSpringboot />,
        Hibernate: <SiHibernate />,
        "REST APIs": null,

        // Frontend
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        JavaScript: <FaJs />,
        Bootstrap: null,
        React: <FaReact />,

        // Database
        MySQL: <SiMysql />,
        SQL: null,
        PostgreSQL: <SiPostgresql />,

        // Tools
        Git: <FaGitAlt />,
        GitHub: null,
        Maven: null,
        Postman: <SiPostman />,
        "VS Code": null,
        "IntelliJ IDEA": <SiIntellijidea />,

        // AI & Developer Tools
        ChatGPT: <FaRobot />,
        "Google Gemini": <FaGoogle />,
        Claude: <FaRobot />,
        "GitHub Copilot": <FaGithub />,
    };

    return icons[skill] || "◆";
}


function Skills() {

    return (

        <section className="skills-section" id="skills">

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
                        MY SKILLS
                    </p>

                    <h2 className="section-title">
                        Technologies I work with
                    </h2>

                    <p className="section-description">
                        Technologies and tools I use to build,
                        test, and improve modern web applications.
                    </p>

                </motion.div>


                {/* Skills Cards */}

                <div className="row g-4">

                    {skills.map((skillGroup, groupIndex) => (

                        <motion.div

                            className="col-md-6"

                            key={skillGroup.category}

                            initial={{
                                opacity: 0,
                                y: 40,
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
                                duration: 0.6,
                                delay: groupIndex * 0.12,
                            }}
                        >

                            <div className="skill-card">

                                <h3>
                                    {skillGroup.category}
                                </h3>

                                <p className="skill-description">
                                    {skillGroup.description}
                                </p>


                                <div className="technology-list">

                                    {skillGroup.technologies.map(
                                        (technology) => (

                                            <motion.div

                                                className="technology"

                                                key={technology}

                                                whileHover={{
                                                    y: -4,
                                                    scale: 1.03,
                                                }}

                                                transition={{
                                                    duration: 0.2,
                                                }}
                                            >

                                                <span className="technology-icon">

                                                    {getSkillIcon(technology)}

                                                </span>

                                                <span>
                                                    {technology}
                                                </span>

                                            </motion.div>

                                        )
                                    )}

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;
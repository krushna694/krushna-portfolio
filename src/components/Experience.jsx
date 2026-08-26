import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function Experience() {
    return (
        <section
            className="experience-section"
            id="experience"
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
                        EXPERIENCE & TRAINING
                    </p>

                    <h2 className="section-title">
                        My learning journey
                    </h2>

                    <p className="section-description">
                        A brief overview of my internship and professional
                        development experience.
                    </p>
                </motion.div>


                {/* Experience Timeline */}

                <div className="experience-list">

                    {experiences.map((experience, index) => (

                        <motion.article
                            className="experience-item"
                            key={experience.id}

                            initial={{
                                opacity: 0,
                                x: -30,
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}

                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}

                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                        >

                            {/* Timeline */}

                            <div className="experience-marker">
                                <span></span>
                            </div>


                            {/* Content */}

                            <div className="experience-content">

                                <p className="experience-period">
                                    {experience.period}
                                </p>

                                <h3>
                                    {experience.role}
                                </h3>

                                <h4>
                                    {experience.company}
                                </h4>

                                <p className="experience-location">
                                    {experience.location}
                                </p>

                                <p className="experience-description">
                                    {experience.description}
                                </p>


                                <div className="experience-skills">

                                    {experience.skills.map((skill) => (

                                        <span
                                            key={skill}
                                            className="experience-skill"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Experience;
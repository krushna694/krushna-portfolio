import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";

function EducationAndAchievement() {
    return (
        <section
            className="education-achievement-section"
            id="education"
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
                        EDUCATION & ACHIEVEMENT
                    </p>

                    <h2 className="section-title">
                        Academic background & milestone
                    </h2>

                    <p className="section-description">
                        My academic journey and a milestone I'm proud of.
                    </p>
                </motion.div>


                {/* Content */}

                <div className="education-achievement-grid">

                    {/* Education */}

                    <motion.div
                        className="education-block"
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
                            duration: 0.7,
                        }}
                    >

                        <div className="education-achievement-icon">
                            <FaGraduationCap />
                        </div>

                        <p className="education-achievement-period">
                            Oct 2022 – Jun 2026
                        </p>

                        <h3>
                            B.E. in Computer Engineering
                        </h3>

                        <h4>
                            Matoshri College of Engineering and Research Centre
                        </h4>

                        <p className="education-achievement-location">
                            Nashik, Maharashtra
                        </p>

                        <div className="education-cgpa">
                            <span>CGPA</span>
                            <strong>7.76 / 10</strong>
                        </div>

                    </motion.div>


                    {/* Achievement */}

                    <motion.div
                        className="achievement-block"
                        initial={{
                            opacity: 0,
                            x: 30,
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
                            duration: 0.7,
                            delay: 0.15,
                        }}
                    >

                        <div className="education-achievement-icon">
                            <FaTrophy />
                        </div>

                        <p className="education-achievement-period">
                            March 2025
                        </p>

                        <h3>
                            GOLD – Gathering of Outstanding Leaders
                            in Various Domains
                        </h3>

                        <h4>
                            1st Place – Reverse Coding Competition
                        </h4>

                        <p className="achievement-organization">
                            RAIT ACM Student Chapter
                        </p>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default EducationAndAchievement;
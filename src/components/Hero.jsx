import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="container">

                {/* Small Introduction */}
                <motion.p
                    className="hero-intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Krushna Wakchaure
                </motion.h1>

                {/* Job Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2
                    }}
                >
                    Java & Full-Stack Developer
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4
                    }}
                >
                    Computer Engineering graduate passionate about building
                    practical and scalable web applications using Java,
                    Spring Boot, MySQL, JavaScript, and React.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6
                    }}
                >

                    <a
                        href="#projects"
                        className="btn btn-primary"
                    >
                        View My Work
                    </a>

                    <a
                        href="/krushna wakchaure Resume.pdf"
                        className="btn btn-outline-light resume-btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download Resume
                    </a>

                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.8
                    }}
                >

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:your-email@gmail.com"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;
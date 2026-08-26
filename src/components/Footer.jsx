import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaArrowRight,
    FaGoogle,
} from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                {/* =========================
                    MAIN CTA
                ========================= */}

                <motion.div
                    className="footer-cta"

                    initial={{
                        opacity: 0,
                        y: 35,
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

                    <p className="footer-label">
                        LET'S BUILD SOMETHING
                    </p>

                    <h2>
                        Together.
                    </h2>

                    <p className="footer-description">
                        Have an idea, opportunity, or just want
                        to start a conversation?
                    </p>


                    {/* CTA Button */}

                    <motion.a
                        href="#contact"
                        className="footer-cta-button"

                        whileHover={{
                            y: -3,
                        }}

                        whileTap={{
                            scale: 0.97,
                        }}
                    >
                        Get in touch
                        <FaArrowRight />
                    </motion.a>

                </motion.div>


                {/* =========================
                    QUOTE
                ========================= */}

                <motion.div
                    className="footer-quote"

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

                    {/*<span className="footer-quote-mark">
                        “
                    </span>

                    <p>
                        Build. Learn. Improve. Repeat.
                    </p>

                    <span className="footer-quote-mark">
                        ”
                    </span>*/}

                </motion.div>


                {/* =========================
                    DIVIDER
                ========================= */}

                <motion.div
                    className="footer-divider"

                    initial={{
                        scaleX: 0,
                    }}

                    whileInView={{
                        scaleX: 1,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                    }}
                />


                {/* =========================
                    FOOTER INFORMATION
                ========================= */}

                <div className="footer-info">

                    <div className="footer-identity">

                        <h3>
                            Krushna Wakchaure
                        </h3>

                        <p>
                            Java and Full Stack Developer
                        </p>

                    </div>


                    {/* Social Links */}

                    <motion.div
                        className="footer-socials"

                        initial={{
                            opacity: 0,
                            y: 10,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        viewport={{
                            once: true,
                        }}

                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                        }}
                    >

                        <a
                            href="https://github.com/krushna694"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krushna-wakchaure-06sept/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="mailto:krushnawakchaure3@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                            <span>Email</span>
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=krushnawakchaure3@gmail.com"
                            aria-label="Gmail"
                        >
                            <FaGoogle />
                            <span>Gmail</span>
                        </a>

                    </motion.div>

                </div>


                {/* =========================
                    BOTTOM
                ========================= */}

                <div className="footer-bottom">

                    <span>
                        © {currentYear} | Krushna Wakchaure
                    </span>

                    <span>
                        Built with React & Vite
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
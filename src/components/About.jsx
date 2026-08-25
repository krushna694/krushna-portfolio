import { motion } from "framer-motion";

function About() {
    const facts = [
        {
            icon: "🎓",
            label: "Education",
            value: "Computer Engineering",
        },
        {
            icon: "💻",
            label: "Primary Focus",
            value: "Java & Spring Boot",
        },
        {
            icon: "🌐",
            label: "Development",
            value: "Full-Stack Web Development",
        },
        {
            icon: "🗄️",
            label: "Database",
            value: "MySQL",
        },
        {
            icon: "🚀",
            label: "Career Goal",
            value: "Software Developer",
        },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">

                <div className="row align-items-center">

                    {/* Left Side */}
                    <motion.div
                        className="col-lg-7"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="section-label">
                            ABOUT ME
                        </p>

                        <h2 className="section-title">
                            A little bit about me
                        </h2>

                        <p className="about-text">
                            I'm a Computer Engineering graduate with a strong interest
                            in Java backend and full-stack web development. I enjoy
                            building practical applications that solve real-world
                            problems and help users in meaningful ways.
                        </p>

                        <p className="about-text">
                            I have hands-on experience working with Java, Spring Boot,
                            MySQL, JavaScript, HTML, CSS, Bootstrap, and React. Through
                            academic projects and internships, I've developed a strong
                            understanding of object-oriented programming, databases,
                            REST APIs, and web application development.
                        </p>

                        <p className="about-text">
                            I'm currently looking for opportunities where I can work
                            on real-world software projects, contribute to a development
                            team, and continue growing as a software developer.
                        </p>

                    </motion.div>


                    {/* Right Side */}
                    <motion.div
                        className="col-lg-5 mt-5 mt-lg-0"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                    >

                        <motion.div
                            className="about-card"
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                        >

                            <h3>
                                Quick Facts
                            </h3>

                            {facts.map((fact, index) => (

                                <motion.div
                                    className="fact-item"
                                    key={fact.label}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + index * 0.1,
                                    }}
                                >

                                    <span className="fact-icon">
                                        {fact.icon}
                                    </span>

                                    <div>

                                        <span className="fact-label">
                                            {fact.label}
                                        </span>

                                        <span className="fact-value">
                                            {fact.value}
                                        </span>

                                    </div>

                                </motion.div>

                            ))}

                        </motion.div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default About;
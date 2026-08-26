import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const scrollPosition = window.scrollY + 180;

            let currentSection = "home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = item.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);

        if (section) {
            setMobileOpen(false);

            setTimeout(() => {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        }
    };

    return (
        <motion.header
            className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
        >

            <div className="navbar-container">

                {/* =========================
                    LOGO
                ========================= */}

                <button
                    className="navbar-logo"
                    onClick={() => handleNavigation("home")}
                    aria-label="Go to home"
                >
                    <span>K</span>
                    <span>W</span>
                </button>


                {/* =========================
                    DESKTOP NAVIGATION
                ========================= */}

                <nav className="navbar-links">

                    {navItems.map((item) => (

                        <button
                            key={item.id}
                            className={`navbar-link ${activeSection === item.id
                                ? "active"
                                : ""
                                }`}
                            onClick={() => handleNavigation(item.id)}
                        >
                            {item.label}

                            {activeSection === item.id && (
                                <motion.span
                                    className="navbar-active-line"
                                    layoutId="navbar-active-line"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </button>

                    ))}

                </nav>

                {/* =========================
                    MOBILE MENU BUTTON
                ========================= */}

                <button
                    className="navbar-menu-button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={
                        mobileOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                >
                    {mobileOpen ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}
                </button>

            </div>


            {/* =========================
                MOBILE MENU
            ========================= */}

            <AnimatePresence>

                {mobileOpen && (

                    <motion.div
                        className="mobile-menu"

                        initial={{
                            opacity: 0,
                            height: 0,
                        }}

                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}

                        exit={{
                            opacity: 0,
                            height: 0,
                        }}

                        transition={{
                            duration: 0.3,
                        }}
                    >

                        <div className="mobile-menu-inner">

                            {navItems.map((item, index) => (

                                <motion.button
                                    key={item.id}

                                    className={`mobile-menu-link ${activeSection === item.id
                                        ? "active"
                                        : ""
                                        }`}

                                    onClick={() =>
                                        handleNavigation(item.id)
                                    }

                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    transition={{
                                        delay: index * 0.04,
                                    }}
                                >
                                    <span>
                                        {item.label}
                                    </span>

                                    {activeSection === item.id && (
                                        <span className="mobile-active-dot"></span>
                                    )}
                                </motion.button>

                            ))}

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </motion.header>
    );
}

export default Navbar;
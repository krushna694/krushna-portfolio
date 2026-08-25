import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand logo" href="#">
                    Krushna.
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#experience">
                                Experience
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>

                        {/* GitHub */}
                        <li className="nav-item ms-lg-3">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub className="social-icon" />
                            </a>
                        </li>

                        {/* LinkedIn */}
                        <li className="nav-item ms-lg-3">
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="social-icon" />
                            </a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;
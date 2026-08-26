import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import EducationAndAchievement from "../components/EducationAndAchievement";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <EducationAndAchievement />
            <Contact />
        </>
    );
}

export default Home;
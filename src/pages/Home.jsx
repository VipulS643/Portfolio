import { AboutSection } from "../component/AboutSection"
import { ContactSection } from "../component/ContactSection"
import { Footer } from "../component/Footer"
import { HeroSection } from "../component/HeroSection"
import { Navbar } from "../component/Navbar"
import { ProjectsSection } from "../component/ProjectSection"
import { SkillsSection } from "../component/SkillsSection"
import { StarBackground } from "../component/StarBackground"
import { ThemeToggle } from "../component/ThemeToggle"

export const Home = () => {
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        <Footer/>
        </div>

    )
}
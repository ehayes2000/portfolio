import MyNavbar from "../components/MyNavbar";
import AboutMe from "../components/about/AboutMe";
import Skills from "../components/about/Skills";
import Experience from "../components/about/Experience";

const AboutPage = () => {
    return (
        <div className="bg">
            <MyNavbar/>
            <div className="lg:mx-40 md:mx-20 sm:mx-10 xs:mx-4">
                <AboutMe/>
                <Skills/>
                <Experience/>
            </div>
        </div>
    )
}

export default AboutPage;
import MyNavbar from "../components/MyNavbar";
import AboutMe from "../components/about/AboutMe";
import Skills from "../components/about/Skills";

const AboutPage = () => {
    return (
        <div>
            <MyNavbar/>
            <div className="lg:mx-40 md:mx-20 sm:mx-10 xs:mx-4">
                <AboutMe/>
                <Skills/>
            </div>
        </div>
    )
}

export default AboutPage;
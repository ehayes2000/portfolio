import Intro from "../components/home/Intro";
import MyNavbar from "../components/MyNavbar";
import backgroundImage from "../assets/forest.webp";

const HomePage = () => (
    <div className="bg-neutral-100">
        <MyNavbar/>
        <Intro/>    
    </div>
    
);

export default HomePage;
import Intro from "../components/home/Intro";
import MyNavbar from "../components/MyNavbar";

const HomePage = () => (
    <div className="w-full h-min-screen bg-white overflow-auto">
        <MyNavbar/>
        <Intro/>    
    </div>
    
);

export default HomePage;

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => (
    <div className="flex transition ease-in duration-150"> 
        <a className="mr-2 transition transform hover:scale-105 hover:-translate-y-1" href="www.linkedin.com/in/erichayes8" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} className="text-stone-950"/>
        </a>
        <a className="transition transform hover:scale-105 hover:-translate-y-1" href="https://github.com/ehayes2000" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} className="text-stone-950"/>
        </a>
       
    </div>
)

export default Social;

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = () => (
    <div className="flex"> 
        <a className="mr-2" href="www.linkedin.com/in/erichayes8" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-neutral-900"/>
        </a>
        <a href="https://github.com/ehayes2000" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-neutral-900"/>
        </a>
       
    </div>
)

export default Social;
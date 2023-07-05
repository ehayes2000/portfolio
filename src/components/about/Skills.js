import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

import {
  SiPostgresql,
} from "react-icons/si";

import {
    FaAws
} from "react-icons/fa";

const Skills = () => (
    <div className="container mx-auto px-4 text-center pt-12">
        <h1 className="text-center font-bold mb-6 text-4xl">
            Professional Skillset
        </h1>
        <div className="flex flex-wrap justify-center mb-4">
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <DiPython size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <CgCPlusPlus size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <DiJavascript1 size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <DiReact size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <DiJava size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <SiPostgresql size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <FaAws size={60} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/6 text-center py-4 flex justify-center">
                <DiGit size={60} />
            </div>
        </div>
    </div>

)

export default Skills;

import { Link } from "react-router-dom";

const Project = ({ title, summary, img, id }) => (
    <div className="p-4 lg:w-1/3 md:w-1/3 transform transition duration-500 ease-in-out group rounded">
        <Link to={`/projects/project-${id}`}>
            <div className="rounded-md overflow-hidden">
                <div className="border-t-4 border-secondary group-hover:border-accent overflow-hidden shadow-lg bg-nuetral dark:bg-charcoalGray
                ">
                    <img className="w-full" src={img}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-darkSlateGray dark:text-lightGray">{title}</div>
                        <p className="text-base text-mediumGray dark:text-blueGray">{summary}</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);
export default Project;

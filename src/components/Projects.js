import Project from "./Project";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project Title 1", 
            summary: "project summary",
            img: ""
        },
        {
            id: 2,
            title: "Project Title 2", 
            summary: "project summary",
            img: ""
        },
        {
            id: 3,
            title: "Project Title 3", 
            summary: "project summary",
            img: ""
        }
    ]
    return (
        <nav className="bg-light_neutral py-4">
            <h1 className="text-center font-bold text-2xl">
                Projects
            </h1>
            <div className="flex flex-wrap justify-around"> 
                {projects.map((e) => (
                    <Project title={e.title} summary={e.summary} id={e.id}/>
                
                ))
            }
            </div>
        </nav>
    );
}

export default Projects;

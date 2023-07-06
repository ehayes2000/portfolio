import ProjectCard from "./ProjectCard";

const Projects = () => (
    <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold text-center">
                My Work
            </h1>
            <p className="text-lg text-center mb-8 mt-4">
                Here are a few projects I've worked on recently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <ProjectCard
                        title="Password Game"
                        summary="summary here"
                        source="https://github.com/ehayes2000/password-game"
                        demo="https://ehayes2000.github.io/password-game/"
                        img="/images/password-game.png"
                    />
                </div>
                <div>
                    <ProjectCard
                        title="Online Chess"
                        summary="summary here"
                        source="https://github.com/ehayes2000/chessv2"
                        demo="http://chessapp-env.eba-ds87phsx.us-west-2.elasticbeanstalk.com/"
                        img="/images/password-game.png"
                    />
                </div>
                <div>
                    <ProjectCard
                        title="Moving Pose"
                        summary="summary here"
                        source="https://github.com/MehmetMHY/moving-pose"
                        img="/images/moving-pose.png"
                    />
                </div>
            </div>
        </div>
    </div>
)
export default Projects;

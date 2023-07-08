import ProjectCard from "./ProjectCard";

const Projects = () => (
    <div className="flex flex-col items-center justify-center px-20">
        <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold text-center">
                My Work
            </h1>
            <p className="text-lg text-center mb-8 mt-4">
                Here are a few projects I've worked on recently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex">
                    <ProjectCard
                        title="Password Game"
                        source="https://github.com/ehayes2000/password-game"
                        demo="https://ehayes2000.github.io/password-game/"
                        img={process.env.PUBLIC_URL + "/images/password-game.png"}
                        subtitle="Infuriatingly secure"
                        summary="A static website that requires increasingly ridiculous rules to be met. 
                                Written with react and tailwind this site was built to practice with react and learn
                                css / tailwind. Live now!"
                    />
                </div>
                <div className="flex">
                    <ProjectCard
                        title="Online Chess"
                        source="https://github.com/ehayes2000/chessv2"
                        demo="http://chessapp-env.eba-ds87phsx.us-west-2.elasticbeanstalk.com/"
                        img={process.env.PUBLIC_URL + "/images/chess-game.png"}
                        subtitle="2ke2!"
                        summary="An online chess game. Play real time live chess with someone online. Built using a react/tailwind frontend and an AWS backend this site 
                        offers quick and easy chess games. This site has no users so if you want to try it out open it in two browers."
                    />
                </div>
                <div className="flex">
                    <ProjectCard
                        title="Moving Pose"
                        source="https://github.com/MehmetMHY/moving-pose"
                        img={process.env.PUBLIC_URL + "/images/moving-pose.png"}
                        subtitle="Categorize action with video and AI"
                        summary="A school project implimenting the work of a research paper to classify human action with a video stream. 
                                This project is able to classify acttions into one of 16 categories where inputs consist of a video stream of 30 to 200 frames. 
                                My main role was data preprocessing, normalization, storage, and visualization."
                    />
                </div>
                <div className="flex justify-center">
                    <ProjectCard
                        title="This website"
                        source="https://github.com/ehayes2000/portfolio"
                        img={process.env.PUBLIC_URL + "/images/this-website.png"}
                        subtitle="A portfolio"  
                    />
                </div>
            </div>
        </div>
    </div>
)
export default Projects;

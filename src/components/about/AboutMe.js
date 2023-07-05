
const AboutMe = () => (
    <div className="flex my-40 space-y-4 mb-8 justify-between">
        <div className="flex-col w-1/2 pt-6">
            <h1 className="text-center">
                About Me
            </h1>
            <p className="mt-10 mb-4 text-lg">
                I'm Eric Hayes, a recent graduate from Colorado School of Mines with a bachelors of computer science.
                I am currently working as a software contractor and looking for a full time position. I live in Oregon, but I am open
                to relocation for the right position.
            </p>
            <div className="text-lg">
                When I'm not coding I like to:
                <ul  className="md:list-disc">
                    <li className="my-1"> Play chess </li>
                    <li className="mb-1"> Rock climb </li>   
                    <li className="mb-1"> Read </li>
                    <li className="mb-1"> Game </li>
                </ul>
            </div>
        </div>
        <div className="flex justify-end w-1/2 pt-16">
            <img
                className="h-80 w-80 rounded-full object-cover shadow-2xl"
                src="/images/me2.jpg"
                alt="My Picture"
            />
        </div>
    </div>
)

export default AboutMe;
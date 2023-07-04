
const AboutMe = () => (
    <div className="flex my-40 space-y-4 mb-2 justify-between">
        <div className="flex-col w-1/2">
            <p>
                I'm Eric Hayes, a recent graduate from Colorado School of Mines with a bachelors of computer science.
                I am currently working as a software contractor and looking for a full time position. I live in Oregon, but I am open
                to relocation for the right position.
            </p>
            <div>
                When I'm not coding I enjoy:
                <ul>
                    <li> playing chess </li>
                    <li> rock climbing </li>
                    <li> reading </li>
                    <li> gaming </li>
                </ul>
            </div>
        </div>
        <div className="flex justify-end w-1/2">
            <img
                className="h-80 w-80 rounded-full object-cover shadow-2xl"
                src="/images/me2.jpg"
                alt="My Picture"
            />
        </div>
    </div>
)

export default AboutMe;
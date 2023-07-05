const AboutMe = () => (
    <div className="container mx-auto px-4 md:px-0">
    <div className="flex flex-col-reverse md:flex-row justify-between">
      <div className="w-full md:w-2/3 pt-20">
        <h1 className="text-center font-bold text-4xl">
          About Me
        </h1>
        <p className="mt-10 mb-4 text-xl">
          I'm Eric Hayes, a recent graduate from Colorado School of Mines with a bachelors of computer science.
          I am currently working as a software contractor and looking for a full time position. I live in Oregon, but I am open
          to relocation for the right position.
        </p>
        <div className="text-xl">
          When I'm not coding I like to:
          <ul className="list-disc ml-5 md:ml-0 text-xl">
            <div className="ml-16">
                <li className="my-1"> Play chess </li>
                <li className="mb-1"> Rock climb </li>   
                <li className="mb-1"> Read </li>
                <li className="mb-1"> Game </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/3 pt-20 flex justify-center md:justify-end">
        <img
          className="h-80 w-80 rounded-full object-cover shadow-2xl"
          src="/images/me2.jpg"
          alt="My Picture"
        />
      </div>
    </div>
  </div>
  
)

export default AboutMe;
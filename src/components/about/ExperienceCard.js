
const ExperienceCard = (props) => (
    <div className="cursor-pointer relative h-full rounded-xl shadow-lg p-4 transition-all ease-in duration-150">
        <details>
            <summary className="flex justify-between items-start">
                <div>
                    <h1 className="font-bold text-lg text-stone-950">
                        {props.org}
                    </h1>
                    <div className="flex">
                        <div className="flex-col w-full">
                            <div className="flex items-center space-x-2">
                                <h2>
                                    {props.title}
                                </h2>
                                <h2>
                                    {props.location}
                                </h2>
                            </div>
                            <h2>
                            {props.date}
                            </h2>
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zm0 6A1.5 1.5 0 013.5 9h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 10.5zm1.5 5a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </summary>

            <div className="absolute z-10 bg-white p-4 rounded-lg shadow-xl top-24 w-full left-0 rounded-t-none border-t-0">
                <p>
                    {props.details}
                </p>
            </div>
        </details>
    </div>
);

export default ExperienceCard;
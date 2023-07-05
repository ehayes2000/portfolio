
const ExperienceCard = (props) => (
    <div className="relative  h-full rounded-xl shadow-lg p-4">
            <details>
                <summary className="flex justify-between items-start">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            {props.org}
                        </h1>

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
                </summary>

                <div className="absolute z-10 bg-white p-4 rounded-lg shadow-xl top-24 w-full left-0 rounded-t-none  border-t-0">
                <p>
                    {props.details}
                </p>
                </div>
            </details>
        </div>
);

export default ExperienceCard;


const Experience = () => (
    <div className="text-stone-700 grid grid-cols-1 md:grid-cols-2 align-content-start gap-4 mb-16">
        <div className="border h-full border-gray-200 rounded-lg shadow-sm p-4">
            <details>
                <summary className="flex justify-between items-start">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            Arizona Optical Metrology
                        </h1>

                        <div className="flex items-center space-x-2">
                            <h2>
                                Software Consultant
                            </h2>
                            <h2>
                                Remote
                            </h2>
                        </div>
                        <h2>
                            June 2023
                        </h2>
                    </div>
                </summary>
                <p>
                    I worked for AOM to meet IT and data analysis needs by setting up a postgres database to store critical data.
                    I was soley responsible for creating and configuring the database as well as defining schemas and relations.
                    I also wrote a python package that provided functionality to easily complete common database operations needed
                    by the team. This python package also provided scafolding for writing future operations that the team may need.
                </p>
            </details>
        </div>
        <div className="border h-full border-gray-200 rounded-lg shadow-sm p-4">
            <details>
                <summary className="flex justify-between items-start">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            Colorado School of Mines
                        </h1>
                        <div className="flex items-center space-x-2">
                            <h2>
                                Operating Systems TA
                            </h2>
                            <h2>
                                Golden, CO
                            </h2>
                        </div>
                        <h2>
                            January 2021 - December 2022
                        </h2>
                    </div>
                </summary>
                <p>
                    I worked closely with faculty to guide students through one of the most challening computer science courses offered.
                    I was required to have a deep understanding of course material and be able to identify and correct student misconceptions and knowledge gaps.
                    My main duty was guiding students through the seven programming projects set by the course. The projects were assigned in either C or C++ and
                    asked students to interface with linux using system calls. Each project focused on a different aspect of the operating system. This Experience
                    greatly increased my ability to identify bugs in unfamiliar code as well teaching me how to effectively communicate with people who are lacking
                    terminology and understanding of underlying concepts.
                </p>
            </details>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-sm p-4">
            <details>
                <summary className="flex justify-between items-start ">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            Helio Home
                        </h1>
                        <div className="flex items-center space-x-2">
                            <h2>
                                Software Engineer - Intern
                            </h2>
                            <h2>
                                Golden, CO
                            </h2>
                        </div>
                        <h2>
                            May 2022 - August 2022
                        </h2>
                    </div>
                </summary>
                <p>
                    I worked with a team of fellow students at the Golden-based startup Helio Home to build a tool that identified customers using public housing data.
                    The project project used Django with an aws DynamoDb connection to store data. The project also interfaced with a complex NREL energy model to predict
                    energy changes in residential addresses.
                </p>
            </details>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-sm p-4">
            <details>
                <summary className="flex justify-between items-start ">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            Kansas City Federal Reserve
                        </h1>
                        <div className="flex items-center space-x-2">
                            <h2>
                                Software Engineer - Intern
                            </h2>
                            <h2>
                                Remote
                            </h2>
                        </div>
                        <h2>
                            May 2021 - August 2021
                        </h2>
                    </div>
                </summary>
                <p>
                    I worked with a team of on site developers to develope a web-based tool to streamline an internal machine learning pipeline.
                </p>
            </details>

        </div>
        <div className="border border-gray-200 rounded-lg shadow-sm p-4">
            <details>
                <summary className="flex justify-between items-start ">
                    <div>
                        <h1 className="font-bold text-lg text-stone-950">
                            IDTech
                        </h1>
                        <div className="flex items-center space-x-2">
                            <h2>
                                Instructor
                            </h2>
                            <h2>
                                Remote
                            </h2>
                        </div>
                        <h2>
                            May 2020 - August 2020
                        </h2>
                    </div>
                </summary>
                <p>
                    I worked over the summer teaching two programming courses to high-school age students. I taught an introductory machine learning course
                    which tackled the basics of using tools like Tensorflow and scikit-learn as well as teaching basic python. I also taught a C++ game building course
                    where students built 2d games using SFML.
                </p>
            </details>
        </div>

    </div>
);

export default Experience;
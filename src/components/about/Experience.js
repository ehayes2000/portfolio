import ExperienceCard from "./ExperienceCard"

const Experience = () => (
    <div className="mb-16 px-24">
        <h1 className="text-center text-4xl font-bold mb-6">
            Professional Experience
        </h1>
        <div className="text-stone-700 grid grid-cols-1 md:grid-cols-2 align-content-start gap-4">
            <ExperienceCard
                org="Arizona Optical Metrology"
                title="Software Consultant"
                location="Remote"
                date="June 2023"
                details="I worked for AOM to meet IT and data analysis needs by setting up a postgres database to store critical data.
            I was soley responsible for creating and configuring the database as well as defining schemas and relations.
            I also wrote a python package that provided functionality to easily complete common database operations needed
            by the team. This python package also provided scafolding for writing future operations that the team may need."/>
            <ExperienceCard
                org="Colorado School of Mines"
                title="Operating Systems TA"
                location="Golden, CO"
                date="January 2021 - December 2022"
                details=" I worked closely with faculty to guide students through one of the most challening computer science courses offered.
            I was required to have a deep understanding of course material and be able to identify and correct student misconceptions and knowledge gaps.
            My main duty was guiding students through the seven programming projects set by the course. The projects were assigned in either C or C++ and
            asked students to interface with linux using system calls. Each project focused on a different aspect of the operating system. This Experience
            greatly increased my ability to identify bugs in unfamiliar code as well teaching me how to effectively communicate with people who are lacking
            terminology and understanding of underlying concepts."
            />
            <ExperienceCard
                org="Helio Home"
                title="Software Engineer - Intern"
                date="May 2022 - August 2022"
                details="I worked with a team of fellow students at the Golden-based startup Helio Home to build a tool that identified customers using public housing data.
            The project project used Django with an aws DynamoDb connection to store data. The project also interfaced with a complex NREL energy model to predict
            energy changes in residential addresses."
            />
            <ExperienceCard
                org="Kansas City Federal Reserve"
                title="Software Engineer - Intern"
                location="Remote"
                date="May 2021 - August 2021"
                details="I worked with a team of on site developers to develope a web-based tool to streamline an internal machine learning pipeline."
            />

            <ExperienceCard
                org="IDTech"
                title="Instructor"
                location="Remote"
                date="May 2020 - August 2020"
                details=" I worked over the summer teaching two programming courses to high-school age students. I taught an introductory machine learning course
            which tackled the basics of using tools like Tensorflow and scikit-learn as well as teaching basic python. I also taught a C++ game building course
            where students built 2d games using SFML."
            />
        </div>
    </div>
);

export default Experience;
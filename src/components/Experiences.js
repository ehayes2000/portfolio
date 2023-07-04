import Experience from "./Experience";

const Experiences = () => {
    const experiences = [
        {
            title: "Operating Systems Teachers Assistant", 
            org: "Colorado School of Mines",
            start: "Jan 2021", 
            end: "Dec 2022",
            summary: "Helped guide students through one of the most challenging computer science courses offered at School of Mines.",
            details: "TOTO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Leo a diam sollicitudin tempor id eu. Condimentum id venenatis a",
            technologies: (
                <div className="flex space-x-6 h-full">
                    <img className="object-contain h-full" src="/images/logos/logo-c++.png" alt="c++ logo" />
                    <img className="object-contain h-full" src="/images/logos/logo-c.png" alt="c logo" />
                    <img className="object-contain h-full" src="/images/logos/logo-cmake.png" alt="cmake logo" />
                    <img className="object-contain h-full" src="/images/logos/logo-linux.png" alt="linux logo" />
                </div>
            ),
        },
        {
            title: "Software Engineer - Intern", 
            org: "Helio Home",  
            start: "May 2022",
            end: "August 2022",
            summary: "Used public housing data to predict which houses may benefit most from energy optimization",
            details: "TOTO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Leo a diam sollicitudin tempor id eu. Condimentum id venenatis a",
            technologies: (
                <div className="flex space-x-6 h-full">
                    <img className="object-contain h-full" src="/images/logos/logo-django.png"/>
                    <img className="object-contain h-full" src="/images/logos/logo-react.png"/>
                    <img className="object-contain h-full" src="/images/logos/logo-aws.png"/>
                </div>
            ),
        },
        {
            title: "Software Engineer - Intern", 
            org: "Kansas City Federal Reserve",  
            start: "May 2022",
            end: "August 2022",
            summary: "Used public housing data to predict which houses may benefit most from energy optimization",
            details: "TOTO Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Leo a diam sollicitudin tempor id eu. Condimentum id venenatis a",
            technologies: (
                <div className="flex space-x-6 h-full">
                    <img className="object-contain h-full" src="/images/logos/logo-django.png"/>
                    <img className="object-contain h-full" src="/images/logos/logo-react.png"/>
                    <img className="object-contain h-full" src="/images/logos/logo-aws.png"/>
                </div>
            ),
        }
        
    ]

    return (
        <div>
            {
                experiences.map(e => (
                    <Experience 
                        title={e.title} 
                        org={e.org}
                        start={e.start}
                        end={e.end}
                        summary={e.summary}
                        details={e.details}
                        technologies={e.technologies}/>
                ))
            }
        </div>
    );
}
 
export default Experiences;

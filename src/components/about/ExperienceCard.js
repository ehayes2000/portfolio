import React, { useState } from 'react';

const ExperienceCard = ({ title, org, start, end, summary, details, technologies }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="ml-4 p-4 mb-4 cursor-pointer" onClick={handleExpand}>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold">{org}</h2>
                    <h3 className="text-lg">{title}</h3>
                    <p>{start} - {end}</p>
                </div>
                <p className="pt-8">
                    {summary}
                </p>
                
            </div>
            {isExpanded && (
                <div className="mt-4">
                    <p>{details}</p>
                    <div className="h-16 mx-auto">
                    {technologies}
                </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceCard;

import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="rounded-lg border-2 border-gray-300 p-4 flex flex-col items-center space-y-4 w-full">
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <img src={props.img} alt={props.title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">
          {props.title}
        </h1>
        <h2 className="text-lg text-gray-500">
          {props.subtitle}
        </h2>
        <p className="text-sm">
          {props.summary}
        </p>
      </div>
      <div className="flex space-x-2">
        {props.demo && (
          <a
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-600 hover:bg-slate-500"
          >
            
            Demo
            <CgWebsite className="w-4 h-4 ml-1" />
          </a>
        )}
        <a
          href={props.source}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-600 hover:bg-slate-500"
        >
         
          Source
          <BsGithub className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
export default ProjectCards;

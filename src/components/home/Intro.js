import React from 'react';
import Social from "./Social";

const Intro = () => (
  <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen">
    <div className="flex flex-col justify-center lg:mr-60 md:mr-4 space-y-4">
      <h1 className="text-left transition-all duration-500 font-bold text-6xl text-stone-950">
        Eric Hayes
      </h1>
      <h2 className="text-left transition-all duration-500 text-4xl text-stone-950">
        Software Developer
      </h2>
      <Social/>
    </div>
    <div>
      <img
        className="h-80 w-80 rounded-full object-cover shadow-2xl"
        src={process.env.PUBLIC_URL + '/images/me.jpg'}
        alt="My Picture"
      />
    </div>
  </div>
);

export default Intro;

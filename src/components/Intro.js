import React from 'react';
import Skills from "./Skills"

const Intro = () => (
  <div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col justify-center lg:mr-60 md:mr-4 space-y-4">
    <h2 className="text-left transition-all duration-500">
      I Am
    </h2>
    <h1 className="text-left transition-all duration-500">
      Eric Hayes
    </h1>
    <h2 className="text-left transition-all duration-500">
      Software Developer
    </h2>
  </div>
  <div>
    <img
      className="h-80 w-80 rounded-full object-cover shadow-2xl"
      src="/images/me.jpg"
      alt="My Picture"
    />
  </div>
</div>
);

export default Intro;

import React from 'react';
import Social from "./Social";
const Intro = () => (
  <div className="flex items-center justify-center min-h-screen text-neutral-900">
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
    <Social/>
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

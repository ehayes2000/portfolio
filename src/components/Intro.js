import React from 'react';
import Skills from "./Skills"

const Intro = () => (
  <div className="my-20 flex items-center">
  <div className="flex-col lg:ml-60 md:ml-4 lg:pl-20 w-1/2">
    <h2 className="font-semibold text-2xl">
      Hello
    </h2>
    <h1 className="font-semibold text-4xl">
      I'm Eric Hayes
    </h1>
    <h2 className="font-semibold text-2xl">
      Software Developer
    </h2>
  </div>
  <div className="lg:mr-60 md:mr-4 lg:pr-20 w-1/2 flex justify-end">
    <img
      className="h-80 w-80 rounded-full object-cover shadow-2xl"
      src="/images/me.jpg"
      alt="My Picture"
    />
  </div>
</div>

  
  // <div className="bg-light_neutral">
  //     <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 items-center">
  //       <div className="sm:col-span-2 text-center sm:text-left lg:ml-60 md:ml-4">
  //         <h1 className="text-4xl font-bold text-primary">Eric Hayes</h1>
  //         <h2 className="text-2xl mt-2 text-secondary">Software Developer</h2>
  //         <p className="text-lg text-primary mt-4">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Leo a diam sollicitudin tempor id eu
  //         </p>  
  //       </div>
  //       <div className="flex justify-center lg:mr-60 sm:mr-4">
  //         <img
  //           className="h-80 w-80 rounded-full object-cover shadow-2xl"
  //           src="/images/me.jpg"
  //           alt="My Picture"
  //         />
  //       </div> 
  //     </div>
  //   </div>
);

export default Intro;

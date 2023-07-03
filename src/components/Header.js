import React from 'react';

const Header = () => (
  <div className="bg-light_neutral py-8 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-primary">Eric Hayes</h1>
          <h2 className="text-2xl mt-2 text-secondary">Software Developer</h2>
          <p className="text-lg text-primary mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque. Dignissim enim sit amet venenatis urna cursus eget nunc. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Leo a diam sollicitudin tempor id eu
          </p>  
        </div>
        <div className="flex justify-center">
          <img
            className="h-80 w-80 rounded-full object-cover"
            src="/images/me.jpg"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Header;



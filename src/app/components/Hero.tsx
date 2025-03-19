import React from 'react';

type propType = {
  name: string;
  genre: string;
  info: string[];
};

const Hero = (props: propType) => {
  const { name, genre, info } = props;
  return (
    <div className="text-center flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <h2 className="text-2xl font-medium">
        {info[0]}. The future is <span className="text-purple-600">{info[1]}</span>
      </h2>
    </div>
  );
};

export default Hero;
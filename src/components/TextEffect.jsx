import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Cloud Engineer.',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Cloud Migration Specialist.',
        1500,
        'DevOps Engineer.',
        1500,
        'Linux System Administrator.',
        1500,
    
    ]}
     
      speed={50}
      className="text-[30px] md:text-[45px] font-bold text-yellow-400"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
// import { Leva } from 'leva';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useMediaQuery } from 'react-responsive';
// import { PerspectiveCamera } from '@react-three/drei';

// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import Target from '../components/Target.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import HeroCamera from '../components/HeroCamera.jsx';
// import { calculateSizes } from '../constants/index.js';
// import { HackerRoom } from '../components/HackerRoom.jsx';

// const Hero = () => {
//   // Use media queries to determine screen size
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative" id="home">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Laeeq <span className="waving-hand">👋</span>
//         </p>
//         {/* <p className="hero_tag text-gray_gradient">Building Products & Brands</p> */}
//       </div>

//       <div className="w-full h-full absolute inset-0">
//         <Canvas className="w-full h-full">
//           <Suspense fallback={<CanvasLoader />}>
//             {/* To hide controller */}
//             <Leva hidden />
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             {/* <HeroCamera isMobile={isMobile}> */}
//               <HackerRoom scale={[15, 15, 15]} position={[0, -25, 0]} rotation={[0.2, -Math.PI/9, 0]} />
//             {/* </HeroCamera> */}

//             <group>
//               <Target position={sizes.targetPosition} />
//               <ReactLogo position={sizes.reactLogoPosition} />
//               <Rings position={sizes.ringPosition} />
//               <Cube position={sizes.cubePosition} />
//             </group>

//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>

//       <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
//         <a href="#about" className="w-fit">
//           <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import { Leva } from 'leva';
// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useMediaQuery } from 'react-responsive';
// import { PerspectiveCamera } from '@react-three/drei';

// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import ProfessionalWalkingCharacter from '../components/Target.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import HeroCamera from '../components/HeroCamera.jsx';
// import { calculateSizes } from '../constants/index.js';
// import { HackerRoom } from '../components/HackerRoom.jsx';

// const Hero = () => {
//   // Use media queries to determine screen size
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <section className="min-h-screen w-full flex flex-col relative" id="home">
//       <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
//         <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
//           Hi, I am Laeeq <span className="waving-hand">👋</span>
//         </p>
//       </div>

//       <div className="w-full h-full absolute inset-0">
//         <Canvas className="w-full h-full">
//           <Suspense fallback={<CanvasLoader />}>
//             {/* To hide controller */}
//             <Leva hidden />
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

//             <HackerRoom 
//               scale={[15, 15, 15]} 
//               position={[0, -25, 0]} 
//               rotation={[0.2, -Math.PI/9, 0]} 
//             />

//             <group>
//               {/* Position the robot higher and closer to be visible */}
//               <ProfessionalWalkingCharacter 
//                 position={[0, -8, 8]} 
//                 scale={[0.5, 0.5, 0.5]}
//               />
//               {/* <ReactLogo position={sizes.reactLogoPosition} />
//               <Rings position={sizes.ringPosition} />
//               <Cube position={sizes.cubePosition} /> */}
//             </group>

//             {/* Add more lighting to make the robot visible */}
//             <ambientLight intensity={0.8} />
//             <directionalLight position={[10, 10, 10]} intensity={0.8} />
//             <directionalLight position={[-10, -10, -10]} intensity={0.3} />
//             <pointLight position={[0, 10, 0]} intensity={0.5} />
//           </Suspense>
//         </Canvas>
//       </div>

//       <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
//         <a href="#about" className="w-fit">
//           <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import ProfessionalWalkingCharacter from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { EarthHologram } from '../components/Earth.jsx';
import AnimatedText from '../components/AnimatedText.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const text = "Hi, I am Laeeq";

  return (
    <section className="min-h-screen w-full grid grid-cols-2 relative"  id="home">
      
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
      {/* <p
      style={{
        transform: 'rotateX(5deg) rotateY(5deg)',
        color: '#ffffff',
        textShadow: `
          0 0 5px #ffffff,
          0 0 10px #ffffff,
          2px 2px 1px #00f6ff,
          4px 4px 1px #00d9ff
        `,
      }}
      className="sm:text-3xl text-xl text-center font-generalsans font-[200px] animated-text"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </p> */}

    <AnimatedText/>


      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            {/* Background Earth Hologram - positioned behind everything */}
            <group>
              <EarthHologram 
                position={isSmall ? [8, 2, -10] : isMobile ? [10, 0, -8] : [15, -2, -5]}
                scale={isSmall ? [0.8, 0.8, 0.8] : isMobile ? [1, 1, 1] : [1.5, 1.5, 1.5]}
                rotation={[0, 0, 0]}
              />
              
              {/* Optional: Add a second smaller earth for depth */}
              <EarthHologram 
                position={isSmall ? [-6, -8, -15] : isMobile ? [-8, -10, -12] : [-12, -8, -10]}
                scale={isSmall ? [0.4, 0.4, 0.4] : isMobile ? [0.6, 0.6, 0.6] : [0.8, 0.8, 0.8]}
                rotation={[0, Math.PI, 0]}
              />
            </group>

            {/* Main scene content */}
            <HackerRoom 
              scale={[17, 17, 17]} 
              position={[0, -25, 0]} 
              rotation={[0.2, -Math.PI/9, 0]} 
            />

            <group>
              {/* Position the robot higher and closer to be visible */}
              {/* <ProfessionalWalkingCharacter 
                position={[0, -8, 8]} 
                scale={[0.5, 0.5, 0.5]}
              /> */}
              {/* Uncomment these if you want to add them back */}
              {/* <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} /> */}
            </group>

            {/* Lighting setup optimized for both models */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
            <directionalLight position={[-10, -10, -10]} intensity={0.3} />
            <pointLight position={[0, 10, 0]} intensity={0.5} />
            
            {/* Additional lighting for Earth hologram */}
            <pointLight position={[15, 0, -5]} intensity={0.3} color="#00ffff" />
            <pointLight position={[-12, -8, -10]} intensity={0.2} color="#0066ff" />
          </Suspense>
        </Canvas>
      </div>

      {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText('lk7715714@gmail.com');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Hi, I’m Laeeq Khan</p>
//               <p className="grid-subtext">
//                 With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
//                 and responsive websites.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                 I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
//                 applications
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-4">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in Rjieka, Croatia and open to remote work worldwide.</p>
//               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">lk7715714@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// import { useRef, useEffect, useState } from "react";
// import Card from "../components/Card";
// import { Globe } from "../components/globe";
// import CopyEmailButton from "../components/CopyEmailButton";
// import { Frameworks } from "../components/Frameworks";

// const About = () => {
//   const grid2Container = useRef();
//   const [containerReady, setContainerReady] = useState(false);

//   useEffect(() => {
//     // Set container ready after component mounts
//     const timer = setTimeout(() => {
//       setContainerReady(true);
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="c-space section-spacing" id="about">
//       <h2 className="text-heading">About Me</h2>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
//         {/* Grid 1 */}
//         <div className="relative flex items-end p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 md:col-span-3 md:row-span-2 overflow-hidden min-h-[20rem] md:min-h-0">
//           <img
//             src="assets/coding-pov.png"
//             alt="Coding"
//             className="absolute scale-[1.2] -right-[3rem] -top-[1rem] sm:scale-[1.75] sm:-right-[5rem] md:scale-[2.5] md:left-50 md:inset-y-10 lg:scale-[2.5] opacity-80"
//           />
//           <div className="z-10">
//             <p className="text-xl sm:text-2xl font-bold text-white mb-2">Hi, I'm Laeeq Khan</p>
//             <p className="text-sm sm:text-base text-gray-300">
//               Over the last 2 years, I developed my frontend and backend dev
//               skills to deliver dynamic and software and web applications.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-500/20" />
//         </div>

//         {/* Grid 2 - Fully Responsive Version */}
        
//         <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 md:col-span-3 md:row-span-2 overflow-hidden min-h-[20rem] md:min-h-0">
//           <div
//             ref={grid2Container}
//             className="relative w-full h-full"
//           >
//             {/* Background Text - Responsive */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-600/30 font-bold text-center px-2">
//                 CODE IS CRAFT
//               </p>
//             </div>
            
//             {/* Cards - Responsive positioning */}
//             <Card
//               style={{ 
//                 rotate: "75deg", 
//                 top: "25%", 
//                 left: "15%"
//               }}
//               text="GRASP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "-30deg", 
//                 top: "60%", 
//                 left: "40%"
//               }}
//               text="SOLID"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "90deg", 
//                 bottom: "25%", 
//                 right: "15%"
//               }}
//               text="Design Patterns"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "-45deg", 
//                 top: "50%", 
//                 left: "5%"
//               }}
//               text="Design Principles"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "20deg", 
//                 top: "15%", 
//                 left: "35%"
//               }}
//               text="SRP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "30deg", 
//                 bottom: "15%", 
//                 right: "20%"
//               }}
//               image="assets/logos/csharp-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "-45deg", 
//                 bottom: "35%", 
//                 left: "20%"
//               }}
//               image="assets/logos/dotnet-pink.png"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ 
//                 rotate: "-45deg", 
//                 top: "8%", 
//                 left: "8%"
//               }}
//               image="assets/logos/blazor-pink.png"
//               containerRef={grid2Container}
//             />
//           </div>
//         </div>

//         {/* Grid 3 - Responsive */}
//         <div className="relative p-4 sm:p-6 rounded-xl bg-black md:col-span-2 md:row-span-1 overflow-hidden min-h-[16rem] md:min-h-0">
//           <div className="z-10 w-full sm:w-[60%] md:w-[50%]">
//             <p className="text-xl sm:text-2xl font-bold text-white mb-2">Time Zone</p>
//             <p className="text-sm sm:text-base text-gray-300">
//               I'm based in Pakistan, and open to remote work worldwide
//             </p>
//           </div>
//           <figure className="absolute right-[10%] top-[10%] sm:left-[30%] sm:right-auto scale-75 sm:scale-100">
//             <Globe />
//           </figure>
//         </div>

//         {/* Grid 4 - Responsive */}
//         <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 md:col-span-2 md:row-span-1 min-h-[16rem] md:min-h-0">
//           <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 size-full text-center">
//             <p className="text-lg sm:text-xl md:text-2xl font-bold text-white px-2">
//               Do you want to start a project together?
//             </p>
//             <CopyEmailButton />
//           </div>
//         </div>

//         {/* Grid 5 - Responsive */}
//         <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 md:col-span-4 md:row-span-1 overflow-hidden min-h-[16rem] md:min-h-0">
//           <div className="z-10 w-full sm:w-[60%] md:w-[50%]">
//             <p className="text-xl sm:text-2xl font-bold text-white mb-2">Tech Stack</p>
//             <p className="text-sm sm:text-base text-gray-300">
//               I specialize in a variety of languages, frameworks, and tools that
//               allow me to build robust and scalable applications
//             </p>
//           </div>
//           <div className="absolute inset-y-0 right-0 sm:inset-y-9 w-full sm:w-1/2 h-full sm:start-[50%] scale-75 sm:scale-100 md:scale-125">
//             <Frameworks />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import { useRef, useEffect, useState } from 'react';
// import Card from '../components/Card';
// import { Globe } from '../components/globe';
// import CopyEmailButton from '../components/CopyEmailButton';
// import { Frameworks } from '../components/Frameworks';

// const About = () => {
//   const grid2Container = useRef();
//   const [containerReady, setContainerReady] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setContainerReady(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto" id="about">
//       <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
      
//       {/* Simplified Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        
//         {/* Grid 1 - Introduction */}
//         <div className="lg:col-span-2 relative flex items-end p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
//           <img
//             src="assets/coding-pov.png"
//             alt="Coding"
//             className="absolute scale-150 -right-12 -top-4 opacity-80"
//           />
//           <div className="z-10">
//             <p className="text-2xl font-bold text-white mb-2">Hi, I'm Laeeq Khan</p>
//             <p className="text-gray-300">
//               Over the last 2 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/3 bg-gradient-to-t from-indigo-500/20" />
//         </div>

//         {/* Grid 2 - Time Zone */}
//         <div className="relative p-6 rounded-xl bg-black overflow-hidden min-h-[300px]">
//           <div className="z-10">
//             <p className="text-xl font-bold text-white mb-2">Time Zone</p>
//             <p className="text-gray-300">
//               I'm based in Pakistan, and open to remote work worldwide
//             </p>
//           </div>
//           <figure className="absolute right-4 top-4 scale-75">
//             <Globe />
//           </figure>
//         </div>

//         {/* Grid 3 - Tech Stack Cards */}
//         <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
//           <div ref={grid2Container} className="relative w-full h-full">
//             {/* Background Text */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p className="text-2xl text-gray-600/30 font-bold text-center">
//                 CODE IS CRAFT
//               </p>
//             </div>

//             {/* Floating Cards - Simplified positioning */}
//             {containerReady && (
//               <>
//                 <Card
//                   style={{ rotate: '15deg', top: '10%', left: '10%' }}
//                   text="SOLID"
//                   containerRef={grid2Container}
//                 />
//                 <Card
//                   style={{ rotate: '-20deg', top: '50%', right: '10%' }}
//                   text="GRASP"
//                   containerRef={grid2Container}
//                 />
//                 <Card
//                   style={{ rotate: '30deg', bottom: '10%', left: '20%' }}
//                   image="assets/logos/csharp-pink.png"
//                   containerRef={grid2Container}
//                 />
//                 <Card
//                   style={{ rotate: '-15deg', top: '30%', left: '50%' }}
//                   image="assets/logos/dotnet-pink.png"
//                   containerRef={grid2Container}
//                 />
//               </>
//             )}
//           </div>
//         </div>

//         {/* Grid 4 - Tech Stack Description */}
//         <div className="lg:col-span-2 relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
//           <div className="z-10 w-full md:w-1/2">
//             <p className="text-xl font-bold text-white mb-2">Tech Stack</p>
//             <p className="text-gray-300">
//               I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
//             </p>
//           </div>
//           <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
//             <Frameworks />
//           </div>
//         </div>

//         {/* Grid 5 - Contact */}
//         <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 w-full min-h-[300px]">
//           <div className="flex flex-col items-center justify-center gap-4 w-full h-full text-center">
//             <p className="text-xl font-bold text-white">
//               Do you want to start a project together?
//             </p>
//             <CopyEmailButton />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { useRef, useEffect, useState } from 'react';
import Card from '../components/Card';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';

const About = () => {
  const grid2Container = useRef();
  const [containerReady, setContainerReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContainerReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
      
      {/* Simplified Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        
        {/* Grid 1 - Introduction */}
        <div className="lg:col-span-2 relative flex items-end p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
          <img
            src="assets/coding-pov.png"
            alt="Coding"
            className="absolute scale-150 -right-12 -top-4 opacity-80"
          />
          <div className="z-10">
            <p className="text-2xl font-bold text-white mb-2">Hi, I'm Laeeq Khan</p>
            <p className="text-gray-300">
              Over the last 2 years, I developed my frontend and backend dev skills to deliver dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/3 bg-gradient-to-t from-indigo-500/20" />
        </div>

        {/* Grid 2 - Time Zone */}
        <div className="relative p-6 rounded-xl bg-black overflow-hidden min-h-[300px]">
          <div className="z-10">
            <p className="text-xl font-bold text-white mb-2">Time Zone</p>
            <p className="text-gray-300">
              I'm based in Pakistan, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-4 top-4 scale-75">
            <Globe />
          </figure>
        </div>

        {/* Grid 3 - Tech Stack Cards */}
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
          <div ref={grid2Container} className="relative w-full h-full">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl text-gray-600/30 font-bold text-center">
                CODE IS CRAFT
              </p>
            </div>

            {/* Floating Cards - Simplified positioning */}
            {containerReady && (
              <>
                <Card
                  style={{ rotate: '15deg', top: '10%', left: '10%' }}
                  text="SOLID"
                  containerRef={grid2Container}
                />
                <Card
                  style={{ rotate: '-20deg', top: '50%', right: '10%' }}
                  text="GRASP"
                  containerRef={grid2Container}
                />
                <Card
                  style={{ rotate: '30deg', bottom: '10%', left: '20%' }}
                  image="assets/logos/csharp-pink.png"
                  containerRef={grid2Container}
                />
                <Card
                  style={{ rotate: '-15deg', top: '30%', left: '50%' }}
                  image="assets/logos/dotnet-pink.png"
                  containerRef={grid2Container}
                />
              </>
            )}
          </div>
        </div>

        {/* Grid 4 - Tech Stack Description */}
        <div className="lg:col-span-2 relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden min-h-[300px]">
          <div className="z-10 w-full md:w-1/2">
            <p className="text-xl font-bold text-white mb-2">Tech Stack</p>
            <p className="text-gray-300">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
            <Frameworks />
          </div>
        </div>

        {/* Grid 5 - Contact - FULL WIDTH */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 relative p-6 rounded-xl border-t-[100px] border-[#ffffff] bg-gradient-to-br  from-[#0c0c0cc0] to-[#0e0d0d21] bg-transparent min-h-[300px] shadow-[#ffffff7a] shadow-sm">
          <div className="flex flex-col items-center justify-center gap-4 h-full text-center">
            <p className="text-xl font-bold text-white">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
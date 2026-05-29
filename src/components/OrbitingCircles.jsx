// import { twMerge } from "tailwind-merge";
// import React from "react";

// export function OrbitingCircles({
//   className,
//   children,
//   reverse,
//   duration = 20,
//   radius = 160,
//   path = true,
//   iconSize = 30,
//   speed = 1,
//   ...props
// }) {
//   const calculatedDuration = duration / speed;
//   return (
//     <>
//       {path && (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           version="1.1"
//           className="absolute inset-0 pointer-events-none size-full"
//         >
//           <circle
//             className="stroke-1 stroke-white/10"
//             cx="50%"
//             cy="50%"
//             r={radius}
//             fill="none"
//           />
//         </svg>
//       )}
//       {React.Children.map(children, (child, index) => {
//         const angle = (360 / React.Children.count(children)) * index;
//         return (
//           <div
//             style={{
//               "--duration": calculatedDuration,
//               "--radius": radius,
//               "--angle": angle,
//               "--icon-size": `${iconSize}px`,
//             }}
//             className={twMerge(
//               `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
//                 reverse ? "[animation-direction:reverse]" : ""
//               }`,
//               className
//             )}
//             {...props}
//           >
//             {child}
//           </div>
//         );
//       })}
//     </>
//   );
// }


import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            key={index}
            style={{
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: `orbit ${calculatedDuration}s linear infinite ${reverse ? 'reverse' : ''}`,
              transformOrigin: 'center center',
            }}
            className={twMerge(
              "rounded-full",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
      
      {/* Add the keyframes directly to the component */}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(calc(var(--angle) * 1deg))
              translateY(calc(var(--radius) * -1.2px)) 
              rotate(calc(var(--angle) * -1deg));
          }
          100% {
            transform: rotate(calc(var(--angle) * 1deg + 360deg))
              translateY(calc(var(--radius) * -1.2px))
              rotate(calc((var(--angle) * -1deg) - 360deg));
          }
        }
      `}</style>
    </>
  );
}
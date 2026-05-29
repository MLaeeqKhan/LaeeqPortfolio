import { OrbitingCircles } from "../components/OrbitingCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  // Create a copy for the second orbit to avoid mutating the original array
  const skillsReversed = [...skills].reverse();

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={`outer-${skill}-${index}`} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skillsReversed.map((skill, index) => (
          <Icon key={`inner-${skill}-${index}`} src={`assets/logos/${skill}.svg`} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, skill }) => (
  <img 
    src={src} 
    alt={skill}
    className="w-8 h-8 duration-200 rounded-sm hover:scale-110 object-contain"
    onError={(e) => {
      console.error(`Failed to load icon: ${src}`);
      e.target.style.display = 'none';
    }}
    onLoad={() => {
      console.log(`Successfully loaded: ${src}`);
    }}
  />
);
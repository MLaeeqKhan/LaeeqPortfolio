import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const AnimatedText = () => {
  const lines = [`I'm Laeeq`];
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative max-w-md mx-auto mt-20 p-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl shadow-2xl border border-cyan-400/40
      before:absolute before:content-[''] before:-bottom-4 before:right-6
      before:w-0 before:h-0
      before:border-l-[12px] before:border-l-transparent
      before:border-r-[12px] before:border-r-transparent
      before:border-t-[16px] before:border-t-[#1e293b]">
      
      {lines.map((line, lineIndex) => (
        <p
          key={`${key}-${lineIndex}`}
          style={{
            transform: 'rotateX(15deg) rotateY(15deg)',
            textShadow: `
              0 0 5px #5a5353,
              0 0 10px #5a5353,
              2px 2px 1px #5a5353,
              4px 4px 1px #5a5353
            `,
          }}
          className="sm:text-3xl text-[#ffffff] text-xs text-center font-generalsans font-bold animated-text leading-relaxed"
        >
          {line.split('').map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1 + lineIndex * 1.2}s` }}
            >
              {char}
            </span>
          ))}
        </p>
      ))}

     
    </div>
     {/* ✨ Floating Balls */}
     <div className="relative h-24 mt-6">
        <div className="floating-ball" style={{ color: '#61dafb' }}>
          <FaReact className="w-6 h-6" />
        </div>
        <div className="floating-ball" style={{ color: '#68a063' }}>
          <FaNodeJs className="w-6 h-6" />
        </div>
        <div className="floating-ball" style={{ color: '#ffd43b' }}>
          <FaPython className="w-6 h-6" />
        </div>
        <div className="floating-ball" style={{ color: '#facc15' }}>
          <FaDatabase className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

export default AnimatedText;

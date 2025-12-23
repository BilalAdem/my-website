import React, { useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- SKILL DATA ---
// Organized by "Orbit" (Ring Index)
const ORBITS = [
  {
    id: "core",
    radius: 0,
    speed: 0,
    skills: [{ name: "AI ENGINEER", type: "Core", icon: "🧠" }],
  },
  {
    id: "inner",
    radius: 120,
    speed: 20,
    tilt: 10,
    skills: [
      { name: "Python", type: "Lang", icon: "🐍" },
      { name: "PyTorch", type: "AI", icon: "🔥" },
      { name: "TensorFlow", type: "AI", icon: "🌊" },
      { name: "OpenCV", type: "AI", icon: "👁️" },
    ],
  },
  {
    id: "middle",
    radius: 220,
    speed: 35,
    tilt: -20,
    skills: [
      { name: "PostgreSQL", type: "Data", icon: "🐘" },
      { name: "Pandas", type: "Data", icon: "🐼" },
      { name: "Docker", type: "DevOps", icon: "🐳" },
      { name: "AWS", type: "Cloud", icon: "☁️" },
      { name: "React", type: "Web", icon: "⚛️" },
    ],
  },
  {
    id: "outer",
    radius: 340,
    speed: 50,
    tilt: 45,
    skills: [
      { name: "LLMs", type: "AI", icon: "🤖" },
      { name: "HuggingFace", type: "AI", icon: "🤗" },
      { name: "ESP32", type: "IoT", icon: "🔌" },
      { name: "C++", type: "Lang", icon: "⚙️" },
      { name: "Scikit-Learn", type: "AI", icon: "📊" },
      { name: "FastAPI", type: "Web", icon: "⚡" },
    ],
  },
];

// --- HELPER: Color Mapping ---
const getColor = (type: string) => {
  switch (type) {
    case "Core":
      return "#64ffda"; // Teal
    case "AI":
      return "#a855f7"; // Purple
    case "Data":
      return "#3b82f6"; // Blue
    case "IoT":
      return "#ef4444"; // Red
    case "DevOps":
      return "#f59e0b"; // Orange
    default:
      return "#ffffff";
  }
};

// --- COMPONENT: THE PLANET ---
// Represents a single skill floating on a ring
const Planet = ({ skill, index, total, radius, duration }) => {
  // Calculate starting angle so they are evenly spaced
  const angle = (index / total) * 360;

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px)`,
        transformOrigin: "center left", // Key to orbital placement
      }}
    >
      {/* COUNTER-ROTATION CONTAINER 
        This spins backwards at the same speed the ring spins forwards.
        Result: The text always stays upright and facing the user.
      */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="relative group cursor-pointer"
      >
        {/* The Glowing Orb */}
        <div className="w-12 h-12 rounded-full border border-white/10 bg-[#112240]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.1)] group-hover:scale-125 group-hover:border-AAsecondary group-hover:shadow-[0_0_30px_#64ffda] transition-all duration-300">
          <span className="text-xl filter drop-shadow-lg">{skill.icon}</span>
        </div>

        {/* The Text Label (Hidden until hover) */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-AAsecondary/90 text-[#0a192f] text-[10px] font-bold font-mono px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {skill.name}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- COMPONENT: ORBITAL RING ---
const OrbitRing = ({ orbit }) => {
  return (
    <div className="absolute flex items-center justify-center">
      {/* The Visual Ring Line */}
      <div
        className="absolute rounded-full border border-AAsecondary/20"
        style={{
          width: orbit.radius * 2,
          height: orbit.radius * 2,
          transform: `rotateX(${90}deg) `, // Flatten it in 3D
          boxShadow: `0 0 40px rgba(100, 255, 218, 0.05)`,
        }}
      />

      {/* The Container for Planets (Spins continuously) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: orbit.speed, repeat: Infinity, ease: "linear" }}
        className="absolute flex items-center justify-center"
        style={{ width: orbit.radius * 2, height: orbit.radius * 2 }}
      >
        {orbit.skills.map((skill, i) => (
          <Planet
            key={i}
            skill={skill}
            index={i}
            total={orbit.skills.length}
            radius={orbit.radius}
            duration={orbit.speed}
          />
        ))}
      </motion.div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function AtomicGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[90vh] min-h-[700px] flex flex-col items-center justify-center bg-AAprimary overflow-hidden perspective-1000 mt-20"
      style={{ perspective: "1000px" }}
    >
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Starfield */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />
      {/* Central Glow */}
      <div className="absolute w-[600px] h-[600px] bg-AAsecondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- TITLE (HUD STYLE) --- */}
      <div className="absolute top-10 left-6 md:left-20 z-20 pointer-events-none">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-AAsecondary font-mono text-sm">
            03. SYSTEM_CORE
          </span>
          <div className="h-[1px] w-12 bg-AAsecondary/50"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 font-Arimo tracking-wide">
          Neural <span className="text-AAsecondary">Galaxy</span>
        </h2>
        <p className="text-gray-400 font-mono text-xs mt-2 max-w-xs leading-relaxed">
          {/* // INTERACTIVE_VISUALIZATION */}
          <br />
          {/* // HOVER NODES TO INSPECT SKILL CLUSTERS */}
        </p>
      </div>

      {/* --- THE GALAXY CONTAINER (Tilts with Mouse) --- */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex items-center justify-center z-10"
      >
        {/* CORE CENTER PIECE */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px #64ffda",
              "0 0 60px #64ffda",
              "0 0 20px #64ffda",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute z-50 w-24 h-24 rounded-full bg-[#112240] border-2 border-AAsecondary flex flex-col items-center justify-center shadow-[0_0_40px_rgba(100,255,218,0.3)]"
        >
          <span className="text-3xl">🧠</span>
          <span className="text-[8px] font-mono text-AAsecondary mt-1 tracking-widest">
            AI CORE
          </span>
        </motion.div>

        {/* RENDER ORBITS */}
        {ORBITS.map((orbit) => {
          if (orbit.id === "core") return null; // handled above
          return (
            <div
              key={orbit.id}
              style={{
                transform: `rotateX(${orbit.tilt || 60}deg) rotateY(${
                  orbit.tilt ? orbit.tilt / 2 : 0
                }deg)`,
                transformStyle: "preserve-3d",
              }}
              className="absolute flex items-center justify-center"
            >
              <OrbitRing orbit={orbit} />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Utility: Random Hex Generator ---
const generateHex = () => {
  const chars = "0123456789ABCDEF";
  let output = "";
  for (let i = 0; i < 8; i++) {
    output += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return output;
};

// --- Component: Side Data Stream ---
const DataStream = ({ align = "left" }) => {
  const [codes, setCodes] = useState(Array(15).fill("00000000"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCodes((prev) => [generateHex(), ...prev.slice(0, 14)]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute top-0 ${
        align === "left" ? "left-2 sm:left-10" : "right-2 sm:right-10"
      } h-full flex flex-col justify-center space-y-2 select-none hidden sm:flex`}
    >
      {codes.map((code, i) => (
        <span
          key={i}
          // Updated: Using your text-AAsecondary with low opacity for the matrix effect
          className="text-xs font-mono text-AAsecondary opacity-20 font-bold"
        >
          0x{code}
        </span>
      ))}
    </div>
  );
};

export default function SciFiLoader() {
  const [loadingStep, setLoadingStep] = useState(0);

  // Simulation Timeline
  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStep(1), 1000); // Rings
    const timer2 = setTimeout(() => setLoadingStep(2), 2500); // Speed
    const timer3 = setTimeout(() => setLoadingStep(3), 4000); // Success

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    // Updated: Main background set to your custom bg-AAprimary
    <div className="relative h-screen w-full bg-AAprimary overflow-hidden flex flex-col items-center justify-center z-50">
      {/* Background Grid - subtle overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-[size:40px_40px] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)",
        }}
      ></div>

      <DataStream align="left" />
      <DataStream align="right" />

      {/* --- THE CORE REACTOR --- */}
      <div className="relative z-10 w-64 h-64 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Ring 1: Outer - Faint border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full border border-AAsecondary rounded-full border-dashed opacity-20"
        />

        {/* Ring 2: Main Accent Ring (Using border-AAsecondary) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: loadingStep >= 1 ? 1 : 0.8,
            opacity: loadingStep >= 1 ? 1 : 0,
            rotate: -360,
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5 },
            opacity: { duration: 0.5 },
          }}
          // Updated: Added shadow with your RGB values (100, 255, 218)
          className="absolute w-[80%] h-[80%] border-2 border-AAsecondary rounded-full border-t-transparent border-l-transparent shadow-[0_0_15px_rgba(100,255,218,0.3)]"
        />

        {/* Ring 3: Inner Fast Ring (White for contrast against AAprimary) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: loadingStep >= 1 ? 1 : 0.5,
            opacity: loadingStep >= 1 ? 1 : 0,
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5, delay: 0.2 },
            opacity: { duration: 0.5, delay: 0.2 },
          }}
          className="absolute w-[60%] h-[60%] border-4 border-white rounded-full border-b-transparent border-r-transparent opacity-30"
        />

        {/* Center Orb */}
        <motion.div
          animate={{
            scale: loadingStep === 2 ? [1, 1.2, 1] : 1,
            // Uses standard CSS var logic for your teal color
            backgroundColor:
              loadingStep === 3
                ? "rgba(100, 255, 218, 1)"
                : "rgba(100, 255, 218, 0.8)",
          }}
          transition={{
            scale: { duration: 0.2, repeat: loadingStep === 2 ? Infinity : 0 },
            backgroundColor: { duration: 0.5 },
          }}
          className="relative w-16 h-16 rounded-full shadow-[0_0_30px_rgba(100,255,218,0.6)] flex items-center justify-center"
        >
          {loadingStep === 3 && (
            <motion.svg
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-8 h-8 text-AAprimary" // Icon color is dark to contrast with the bright orb
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          )}
        </motion.div>
      </div>

      {/* --- TYPOGRAPHY --- */}
      <div className="z-20 mt-10 text-center flex flex-col items-center space-y-2 h-24">
        <div className="overflow-hidden h-8 sm:h-10 relative w-full flex justify-center">
          {/* @ts-expect-error: Suppress React 18 children type conflict */}
          <AnimatePresence mode="wait">
            {loadingStep < 3 ? (
              <motion.h1
                key="loading"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                // Updated: Using font-mono and text-AAsecondary
                className="text-xl sm:text-2xl font-bold font-mono tracking-widest text-AAsecondary uppercase"
              >
                Initializing Neural Net...
              </motion.h1>
            ) : (
              <motion.h1
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                // Updated: Success state uses your theme color + standard white
                className="text-2xl sm:text-3xl font-bold font-mono tracking-widest text-AAsecondary uppercase drop-shadow-[0_0_10px_rgba(100,255,218,0.8)]"
              >
                Access Granted
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <div className="font-mono text-sm text-gray-400 h-6">
          {loadingStep === 0 && (
            <span className="animate-pulse">Loading modules...</span>
          )}
          {loadingStep === 1 && (
            <span className="text-AAsecondary opacity-80">
              Optimizing tensors...
            </span>
          )}
          {loadingStep === 2 && (
            <span className="text-white opacity-80 animate-pulse">
              Converging weights [99%]...
            </span>
          )}
          {loadingStep === 3 && (
            <span className="text-AAsecondary">System Online. Welcome.</span>
          )}
        </div>
      </div>

      {/* --- BUTTON --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: loadingStep === 3 ? 1 : 0,
          y: loadingStep === 3 ? 0 : 20,
        }}
        transition={{ delay: 0.5 }}
        className="mt-8 z-20"
      >
        <button
          // Updated: Button styles to match your Resume button (border-AAsecondary, text-AAsecondary)
          className="px-8 py-3 bg-transparent border border-AAsecondary text-AAsecondary font-mono text-sm tracking-widest uppercase hover:bg-AAsecondary hover:bg-opacity-10 transition-all rounded"
        >
          Enter Portfolio
        </button>
      </motion.div>
    </div>
  );
}

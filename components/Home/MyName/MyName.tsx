import React from "react";
import { motion } from "framer-motion";

interface MyNameProps {
  finishedLoading: boolean;
}

const MyName: React.FC<MyNameProps> = (props) => {
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52 relative"
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Attar Bilal Adem.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Building Intelligence for Real-World Impact.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m an{" "}
        <span className="text-AAsecondary">AI & Data Science Engineer</span>{" "}
        with expertise in{" "}
        <span className="text-AAsecondary">
          Machine Learning, Deep Learning, NLP
        </span>
        , and <span className="text-AAsecondary">IoT</span>. I specialize in
        building intelligent systems, such as{" "}
        <span className="text-AAsecondary">Smart Greenhouse systems</span> that
        leverage computer vision for automated monitoring and control.
        <br className="3xl:block hidden" /> With a strong background in{" "}
        <span className="text-AAsecondary">statistical modeling</span> and{" "}
        <span className="text-AAsecondary">predictive analytics</span>, I am
        passionate about leveraging technology for sustainability.
        <br className="3xl:block hidden" /> Currently, I focus on deploying
        end-to-end intelligent solutions, from{" "}
        <span className="text-AAsecondary">NLP pipelines</span> to{" "}
        <span className="text-AAsecondary">Reinforcement Learning</span>
        for financial optimization.
      </motion.h3>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary transition-transform duration-300 ease-out resume-button-hover font-mono">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default MyName;

import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import { forwardRef } from "react";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    [
      "Python & SQL (Advanced)",
      "TensorFlow & PyTorch",
      "Scikit-learn & Pandas",
      "NLP (Transformers)",
      "Computer Vision (YOLO)",
    ],
    [
      "dbt (Fundamentals)",
      "Snowflake & Firebase",
      "Docker & Git/GitHub",
      "FastAPI & Node.js",
      "Next.js & React",
    ],
  ];

  return (
    <div
      ref={ref}
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      {/* 01. About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m{" "}
              <span className="text-AAsecondary">Bilal</span>, and I&apos;m
              pretty obsessed with turning complex data into intelligent
              solutions. My tech journey reached a major turning point at
              <span className="text-AAsecondary"> ESTIN Béjaïa</span>, where I
              fell down a rabbit hole of AI and Data Science that I&apos;m still
              happily stuck in today. That curiosity led me to graduate with a
              dual Engineering and Research Master&apos;s degree.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              After years of academic rigor and eventually getting my degrees,
              I&apos;ve spent my time honing my skills professionally by
              building cool stuff with code. I&apos;ve built everything from
              <span className="text-AAsecondary">
                {" "}
                autonomous smart greenhouse systems
              </span>{" "}
              at BI Engineering Tech, using{" "}
              <span className="text-AAsecondary">YOLO models</span> to detect
              plant deficiencies in real-time, to working on major internal
              network architecture redesigns for the
              <span className="text-AAsecondary">
                {" "}
                National Bank of Algeria
              </span>
              . Currently, I&apos;m deepening my expertise in{" "}
              <span className="text-AAsecondary">Signal Processing </span>
              at Université Côte d&apos;Opale while constantly exploring how to
              bring complex data to life.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              What I love most is diving into new challenges and picking up
              fresh skills along the way like
              <span className="text-AAsecondary"> fine-tuning LLMs</span> for
              medical QA and exploring
              <span className="text-AAsecondary">
                {" "}
                Reinforcement Learning
              </span>{" "}
              for dynamic portfolio optimization. There&apos;s always something
              new to learn in this field, and I&apos;m here for it.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col space-y-4 sm:text-base text-sm"
                >
                  {techGroup.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon
                        className={"h-3 w-3 text-AAsecondary flex-none"}
                      />
                      <span className="text-gray-400 sm:text-sm text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="font-Header text-gray-400 pt-4 text-justify">
              Whether it&apos;s architecting robust data pipelines, training
              complex neural networks, or developing full-stack applications,
              I&apos;m always up for the next adventure in code.
            </div>
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-80 lg:h-[28rem] md:w-64 md:h-[22rem] md:block hidden">
            {/* The border box behind the image - adjusted to w-full h-full to match the new shape */}
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-full h-full border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>

            <div className="absolute w-full h-full rounded overflow-hidden">
              {/* The green tint layer */}
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/IMG_20251205_171415.png"}
                className={"object-cover w-full h-full rounded-lg"}
                alt="Bilal Adem Attar"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-[24rem] md:hidden flex justify-center items-center">
            <div className="absolute w-64 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-64 h-full rounded overflow-hidden">
              <Img
                src={"/img/IMG_20251205_171415.png"}
                className={"object-cover w-full h-full rounded-lg"}
                alt="Bilal Adem Attar"
              />
            </div>
            <div className="absolute w-64 h-full bg-AAsecondary opacity-10 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;

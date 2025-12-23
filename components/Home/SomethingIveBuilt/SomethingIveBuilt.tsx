import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col  xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project 1 - Smart Greenhouse AI */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://github.com/BilalAdem/Smart-Greenhouse-System"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/greenhouse.jpg"} // Replace with your image
                alt={"Smart Greenhouse Project"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/greenhouse.jpg"} // Replace with your image
                  alt={"Smart Greenhouse Project"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">IoT & AI</span>
                <a
                  href="https://github.com/BilalAdem/Smart-Greenhouse-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Smart Greenhouse AI System
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  Designed an autonomous smart greenhouse system featuring a{" "}
                  <span className="text-AAsecondary">React Native</span> mobile
                  app for real-time control. It leverages{" "}
                  <span className="text-AAsecondary">YOLO deep learning</span>{" "}
                  for fruit detection and achieves{" "}
                  <span className="text-AAsecondary">
                    99.7% accuracy in NPK classification
                  </span>{" "}
                  to diagnose deficiencies. The dashboard visualizes historical
                  sensor data and live camera feeds, while{" "}
                  <span className="text-AAsecondary">ESP32</span> units
                  communicate via{" "}
                  <span className="text-AAsecondary">MQTT and Firebase</span> to
                  automate climate adjustments. This solution optimizes resource
                  usage, detects leaf discoloration, and provides actionable
                  insights for precision agriculture.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">YOLO</span>
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">IoT (ESP32)</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">MQTT</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/BilalAdem/Smart-Greenhouse-System" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - Portfolio Optimization */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://github.com/BilalAdem/Deep-Reinforcement-Learning-PPO-DDPG-SAC-Portfolio-Optimization"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/portfolio-opt.png"} // Replace with your image
                alt={"Portfolio Optimization"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/portfolio-opt.png"} // Replace with your image
                  alt={"Portfolio Optimization"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">FinTech & RL</span>
                <a
                  href="https://github.com/BilalAdem/Deep-Reinforcement-Learning-PPO-DDPG-SAC-Portfolio-Optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    RL Portfolio Optimization
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Implemented{" "}
                  <span className="text-AAsecondary">
                    Reinforcement Learning
                  </span>{" "}
                  algorithms (PPO, DDPG, SAC) for dynamic multi-asset portfolio
                  optimization. Designed a custom trading environment with
                  transaction costs and applied{" "}
                  <span className="text-AAsecondary">Sharpe/Sortino</span>{" "}
                  metrics.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">PPO/DDPG/SAC</span>
                <span className="pr-4 z-10">Gym</span>
                <span className="pr-4 z-10">Finance</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/BilalAdem/Deep-Reinforcement-Learning-PPO-DDPG-SAC-Portfolio-Optimization" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 - CarHub Marketplace */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://github.com/BilalAdem/carhub_2"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/carhub.png"} // Replace with your image
                alt={"CarHub Project"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/carhub.png"} // Replace with your image
                  alt={"CarHub Project"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Full Stack Web
                </span>
                <a
                  href="https://github.com/BilalAdem/carhub_2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CarHub Marketplace
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Developed a full-stack car rental marketplace using{" "}
                  <span className="text-AAsecondary">Next.js</span> and Tailwind
                  CSS. The platform features a robust catalogue with advanced
                  search facets for fuel and year. It enables real-time
                  negotiation through a{" "}
                  <span className="text-AAsecondary">WebSocket</span>-powered
                  chat interface and tracks transactions via an integrated
                  notification system . With intelligent autocomplete and
                  detailed pricing cards , it delivers a seamless user
                  experience.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">WebSockets</span>
                <span className="pr-4 z-10">Tailwind</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/BilalAdem/carhub_2" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 - Medical QA LLM */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href={"https://github.com/BilalAdem/question-answering-task"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/medical-llm.png"} // Replace with your image
                alt={"Medical QA LLM"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/medical-llm.png"} // Replace with your image
                  alt={"Medical QA LLM"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">NLP & GenAI</span>
                <a
                  href={"https://github.com/BilalAdem/question-answering-task"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Medical QA LLM Fine-Tuning
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Fine-tuned{" "}
                  <span className="text-AAsecondary">DistilBERT</span> on a
                  medical QA dataset using{" "}
                  <span className="text-AAsecondary">PEFT methods</span>
                  (Adapter Layers, Prompt Tuning). The system delivers
                  structured clinical answers with source attribution, achieving
                  a{" "}
                  <span className="text-AAsecondary">95% confidence score</span>
                  . Optimized for real-time usage with{" "}
                  <span className="text-AAsecondary">120ms latency</span>, it
                  features semantic tagging for symptoms and treatments,
                  validated by high F1-Score and Exact Match metrics.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">DistilBERT</span>
                <span className="pr-4 z-10">PEFT</span>
                <span className="pr-4 z-10">Transformers</span>
                <span className="pr-4 z-10">Python</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/BilalAdem/question-answering-task" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 5 - Multiclass Video Recognition */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={
                  "https://github.com/BilalAdem/Multiclass-Video-Recognition"
                }
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/video-rec.png"} // Replace with your image
                alt={"Video Recognition Project"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/video-rec.png"} // Replace with your image
                  alt={"Video Recognition Project"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Computer Vision
                </span>
                <a
                  href="https://github.com/BilalAdem/Multiclass-Video-Recognition"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Multiclass Video Recognition
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Trained a Deep Learning model on the{" "}
                  <span className="text-AAsecondary">UCF101 dataset</span>
                  (13,320 videos) for action recognition. The pipeline performs
                  frame extraction and utilizes an{" "}
                  <span className="text-AAsecondary">EfficientNet</span>{" "}
                  backbone wrapped in{" "}
                  <span className="text-AAsecondary">
                    TimeDistributed Layers
                  </span>
                  . This hybrid architecture extracts spatial features from each
                  frame and aggregates them to model temporal dependencies,
                  enabling accurate classification of complex human activities
                  like sports and gestures.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">EfficientNet</span>
                <span className="pr-4 z-10">TensorFlow</span>
                <span className="pr-4 z-10">CV</span>
                <span className="pr-4 z-10">Transfer Learning</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/BilalAdem/Multiclass-Video-Recognition" />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 6 - Stock Prediction */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://github.com/BilalAdem/Stock-Market-Predictions/tree/main"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
            transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/stock-pred.png"} // Replace with your image
                alt={"Stock Prediction"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/stock-pred.png"} // Replace with your image
                  alt={"Stock Prediction"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Data Science</span>
                <a
                  href="https://github.com/BilalAdem/Stock-Market-Predictions/tree/main"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Stock Prediction & Sentiment
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Developed a hybrid forecasting model combining financial
                  time-series data with{" "}
                  <span className="text-AAsecondary">
                    news sentiment analysis
                  </span>
                  . Leveraged numerical data and sentiment signals for more
                  accurate stock price forecasting.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Python</span>
                <span className="pr-4 z-10">Pandas</span>
                <span className="pr-4 z-10">NLP</span>
                <span className="pr-4 z-10">Forecasting</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/BilalAdem/Stock-Market-Predictions/tree/main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

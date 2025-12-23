import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SparksFoundation() {
  const tasks = [
    {
      text: "Developed robust Supervised Learning models (Linear Regression, Decision Trees) to predict continuous and categorical target variables with high precision.",
      keywords: [
        "Supervised Learning",
        "Linear Regression",
        "Decision Trees",
        "high precision",
      ],
    },
    {
      text: "Implemented Unsupervised Learning algorithms like K-Means Clustering to discover optimum clusters and identifying underlying patterns in unlabelled datasets.",
      keywords: [
        "Unsupervised Learning",
        "K-Means Clustering",
        "optimum clusters",
        "underlying patterns",
      ],
    },
    {
      text: "Engineered a Hybrid Model for Stock Price Forecasting, fusing historical numerical data with NLP-based sentiment analysis of news headlines.",
      keywords: [
        "Hybrid Model",
        "Stock Price Forecasting",
        "numerical data",
        "NLP-based sentiment analysis",
      ],
    },
    {
      text: "Executed rigorous Exploratory Data Analysis (EDA) and Feature Engineering pipelines using Pandas to handle outliers and maximize signal-to-noise ratio.",
      keywords: [
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Pandas",
        "outliers",
      ],
    },
    {
      text: "Synthesized complex data findings into actionable insights using Matplotlib and Seaborn, significantly enhancing data storytelling and model interpretability.",
      keywords: [
        "Matplotlib",
        "Seaborn",
        "data storytelling",
        "model interpretability",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Data Scientist{" "}
            <span className="text-AAsecondary">@ The Sparks Foundation</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jun 2024 - Jul 2024
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

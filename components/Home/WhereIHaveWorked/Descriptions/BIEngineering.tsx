import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BiEngineering() {
  const tasks = [
    {
      text: "Architected an IoT-driven AI framework for precise Greenhouse automation, detecting NPK deficiencies using custom-trained YOLO models.",
      keywords: [
        "IoT-driven AI framework",
        "Greenhouse automation",
        "NPK deficiencies",
        "YOLO models",
      ],
    },
    {
      text: "Engineered a scalable data pipeline, collecting and applying synthetic augmentation to plant leaf datasets to overcome class imbalance.",
      keywords: [
        "scalable data pipeline",
        "synthetic augmentation",
        "class imbalance",
        "datasets",
      ],
    },
    {
      text: "Optimized Computer Vision inference speeds for edge deployment, balancing accuracy (mAP) and latency on resource-constrained devices.",
      keywords: [
        "Optimized",
        "Computer Vision",
        "edge deployment",
        "mAP",
        "latency",
      ],
    },
    {
      text: "Developed a cross-platform React Native application integrated with Firebase to visualize sensor telemetry and model predictions in real-time.",
      keywords: ["React Native", "Firebase", "sensor telemetry", "real-time"],
    },
    {
      text: "Programmed ESP32 microcontrollers to autonomously manage irrigation, ventilation, lighting, and automated roof opening/closing actuators using real-time sensor data and AI inference outputs.",
      keywords: [
        "ESP32 microcontrollers",
        "autonomously manage",
        "irrigation",
        "ventilation",
        "lighting",
        "automated roof opening/closing",
        "real-time sensor data",
        "AI inference",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            AI Engineer{" "}
            <span className="text-AAsecondary">@ BI ENGINEERING TECH</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Oct 2024 - Jun 2025
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

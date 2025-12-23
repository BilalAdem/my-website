import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

interface Task {
  text: string;
  keywords: string[];
}

interface JobDescriptionProps {
  title: string;
  company: string;
  date: string;
  tasks: Task[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  company,
  date,
  tasks,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title and Company */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            {title} <span className="text-AAsecondary">@ {company}</span>
          </span>
          {/* Date Range */}
          <span className="font-mono text-xs text-gray-500">{date}</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Mapping through resume tasks */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
};

export default JobDescription;

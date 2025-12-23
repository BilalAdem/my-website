import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BNA() {
  const tasks = [
    {
      text: "Redesigned the Internal Network Architecture by implementing segmented VLANs to reduce broadcast domains and improve organizational security.",
      keywords: [
        "Internal Network Architecture",
        "segmented VLANs",
        "broadcast domains",
        "security",
      ],
    },
    {
      text: "Configured Cisco Layer 2/3 Switches and established Inter-VLAN Routing to facilitate seamless communication between isolated departmental subnets.",
      keywords: [
        "Cisco Layer 2/3 Switches",
        "Inter-VLAN Routing",
        "isolated departmental subnets",
      ],
    },
    {
      text: "Enforced strict network security policies by deploying Access Control Lists (ACLs) and Port Security measures to mitigate unauthorized access.",
      keywords: [
        "network security policies",
        "Access Control Lists (ACLs)",
        "Port Security",
        "unauthorized access",
      ],
    },
    {
      text: "Analyzed network traffic patterns to optimize bandwidth allocation, significantly reducing latency during peak banking transaction hours.",
      keywords: [
        "Analyzed",
        "network traffic patterns",
        "optimize bandwidth",
        "reducing latency",
      ],
    },
    {
      text: "Simulated and validated complex network topologies using Cisco Packet Tracer, ensuring zero-downtime integration during the bank's digital transformation.",
      keywords: [
        "Simulated",
        "Cisco Packet Tracer",
        "zero-downtime",
        "digital transformation",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Network Engineer{" "}
            <span className="text-AAsecondary">@ National Bank of Algeria</span>
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

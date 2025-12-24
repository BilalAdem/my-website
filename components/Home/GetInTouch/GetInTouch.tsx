import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

// --- CONFIGURATION ---
const CONFIG = {
  SERVICE_ID: "service_ksvkb08",
  ADMIN_TEMPLATE: "template_03nqoki",
  AUTO_REPLY_TEMPLATE: "template_7dcy36o",
  PUBLIC_KEY: "Mu9Y-vemtD1-V35p_",
};

// --- REUSABLE ANIMATED INPUT COMPONENT ---
// This handles the "focus glow" interaction automatically
const AnimatedInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  isTextArea = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  isTextArea?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col space-y-2 group">
      <motion.label
        animate={{ color: isFocused ? "#64ffda" : "#94a3b8" }} // AAsecondary vs Gray
        transition={{ duration: 0.2 }}
        className="font-mono text-xs ml-1 uppercase tracking-wider"
      >
        {label}
      </motion.label>

      {isTextArea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-AAprimary/50 border rounded outline-none px-4 py-3 text-gray-300 transition-all duration-300 resize-none text-sm
            ${
              isFocused
                ? "border-AAsecondary shadow-[0_0_10px_rgba(100,255,218,0.1)]"
                : "border-gray-700 hover:border-gray-500"
            }
          `}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-AAprimary/50 border rounded outline-none px-4 py-3 text-gray-300 transition-all duration-300 text-sm
            ${
              isFocused
                ? "border-AAsecondary shadow-[0_0_10px_rgba(100,255,218,0.1)]"
                : "border-gray-700 hover:border-gray-500"
            }
          `}
        />
      )}
    </div>
  );
};

export default function GetInTouch() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    emailjs
      .sendForm(
        CONFIG.SERVICE_ID,
        CONFIG.ADMIN_TEMPLATE,
        formRef.current,
        CONFIG.PUBLIC_KEY
      )
      .then(() => {
        const userEmail = formRef.current?.user_email.value;
        const userName = formRef.current?.user_name.value;
        const userMessage = formRef.current?.message.value;

        return emailjs.send(
          CONFIG.SERVICE_ID,
          CONFIG.AUTO_REPLY_TEMPLATE,
          { user_name: userName, user_email: userEmail, message: userMessage },
          CONFIG.PUBLIC_KEY
        );
      })
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch((error) => {
        console.error(error);
        setIsSending(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      id="GetInTouchSection"
      className="flex flex-col items-center justify-center w-full min-h-[700px] bg-AAprimary py-24 relative overflow-hidden"
    >
      {/* 1. Subtle Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 right-0 md:right-1/4 w-96 h-96 bg-AAsecondary/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col md:flex-row gap-16 items-center md:items-start justify-between">
        {/* --- LEFT SIDE: THE PITCH --- */}
        <div
          data-aos="fade-right"
          className="flex-1 text-center md:text-left pt-6"
        >
          {/* Title */}
          <div className="flex flex-row items-center ">
            <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-AAsecondary font-sans text-sm sm:text-base">
                04.
              </span>
              <span className="font-sans text-AAsecondary text-base">
                What&apos;s Next?
              </span>
            </div>
          </div>
          {/* Heading */}
          <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
            Get In Touch
          </span>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project idea, or just want to say hi, I&apos;ll try my
            best to get back to you!
          </p>
        </div>

        {/* --- RIGHT SIDE: THE INTERACTIVE FORM --- */}
        <div className="w-full md:w-[500px] relative">
          {/* @ts-ignore */}
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#112240] p-6 md:p-8 rounded-2xl shadow-2xl border border-[#233554] flex flex-col space-y-6 relative overflow-hidden"
              >
                {/* Header */}
                <div className="border-b border-gray-700/50 pb-4">
                  <h3 className="text-gray-200 font-bold text-xl tracking-wide">
                    Send a Message
                  </h3>
                </div>

                {/* Inputs Staggered Container */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="flex flex-col space-y-4"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <AnimatedInput
                          label="Name"
                          name="user_name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <AnimatedInput
                          label="Email"
                          name="user_email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <AnimatedInput
                      label="Message"
                      name="message"
                      placeholder="Hello, let's discuss..."
                      isTextArea
                      required
                    />
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(100, 255, 218, 0.9)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  type="submit"
                  className="w-full bg-AAsecondary text-AAprimary font-bold font-mono text-sm py-4 rounded-lg shadow-lg transition-all flex justify-center items-center gap-2 mt-2"
                >
                  {isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-AAprimary border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Shoot Message 🚀"
                  )}
                </motion.button>
              </motion.form>
            ) : (
              // --- SUCCESS STATE (Drawing Checkmark) ---
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#112240] h-[480px] w-full p-8 rounded-2xl shadow-2xl border border-green-500/30 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-100 mb-2"
                >
                  Message Received!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 max-w-xs mx-auto"
                >
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

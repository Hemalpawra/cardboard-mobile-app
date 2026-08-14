import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";
import splashSvgPaths from "../../imports/Splash/svg-1us6v7r7p5";

export function GetStartedScreen() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) setSubmitted(true);
  };

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <StatusBar />

      <div className="flex-1 flex flex-col px-[24px] pb-[40px] pt-[8px] justify-between">
        {/* Top section */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[28px]">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 180, damping: 18 }}
          >
            <svg fill="none" height="64" viewBox="0 0 114 77" width="97">
              <g clipPath="url(#gs-clip)">
                <path d={splashSvgPaths.p36bd5600} fill="white" />
                <path d={splashSvgPaths.p1c391700} fill="white" />
                <path d={splashSvgPaths.p165e9472} fill="white" />
                <path d={splashSvgPaths.p137b4500} fill="white" />
                <path d={splashSvgPaths.p2af6d7c0} fill="white" />
                <path d={splashSvgPaths.p14fb4100} fill="white" />
                <path d={splashSvgPaths.p238a7c40} fill="white" />
                <path d={splashSvgPaths.p37b6e940} fill="white" />
                <path d={splashSvgPaths.p285f9170} fill="white" />
                <path d={splashSvgPaths.p798d100} fill="white" />
              </g>
              <defs>
                <clipPath id="gs-clip">
                  <rect fill="white" height="77" width="114" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[10px] text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2
              className="text-white text-[28px] leading-[38px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Get started with Carboard
            </h2>
            <p
              className="text-[#858590] text-[15px] leading-[22px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Create your account and start editing videos just by talking.
            </p>
          </motion.div>

          {/* Email input */}
          {!submitted ? (
            <motion.div
              className="w-full flex flex-col gap-[10px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="w-full bg-[#18181f] border border-[rgba(255,255,255,0.1)] rounded-[12px] px-[16px] py-[14px] text-white text-[16px] outline-none focus:border-[rgba(255,255,255,0.3)] transition-colors"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    caretColor: "white",
                  }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-[10px]"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-[rgba(31,193,107,0.15)] flex items-center justify-center">
                <svg fill="none" height="22" viewBox="0 0 22 22" width="22">
                  <path
                    d="M4 11L9 16L18 7"
                    stroke="#1fc16b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className="text-[#858590] text-[14px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Check your inbox for a magic link!
              </p>
            </motion.div>
          )}
        </div>

        {/* Bottom CTAs */}
        {!submitted && (
          <motion.div
            className="flex flex-col gap-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-[#0d0d0f] text-[16px] rounded-[12px] py-[14px] text-center"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Create account
            </button>

            <button
              className="w-full bg-transparent border border-[rgba(255,255,255,0.12)] text-white text-[16px] rounded-[12px] py-[14px] text-center"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Sign in
            </button>

            <p
              className="text-center text-[#3d3d45] text-[11px] leading-[16px] mt-[4px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              By continuing you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

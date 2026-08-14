import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

interface Props {
  onBack: () => void;
  onContinue?: () => void;
}

export function SignUpEmailScreen({ onBack, onContinue }: Props) {
  const [email, setEmail] = useState("");

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <StatusBar />

      <div className="flex flex-col flex-1 gap-[32px] p-[24px] min-h-0">
        {/* Back button */}
        <button
          onClick={onBack}
          className="self-start flex items-center gap-[4px] text-[#858590] text-[16px] leading-[24px] active:opacity-70 transition-opacity"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <svg fill="none" height="7.4" viewBox="0 0 12 7.4" width="12" style={{ transform: "rotate(-90deg)" }}>
            <path d="M6 2.8L1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8Z" fill="#858590" />
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="flex flex-col gap-[8px]">
          <p
            className="text-white text-[32px] leading-[44px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            What's your email?
          </p>
          <p
            className="text-[#aeaeb5] text-[20px] leading-[30px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            We'll send you a code to verify your account.
          </p>
        </div>

        {/* Email input */}
        <div
          className="flex items-center w-full h-[61px] rounded-[12px] border border-[#32323a] px-[16px]"
          style={{ background: "rgba(163,163,168,0.05)" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@gmail.com"
            className="flex-1 bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#858590]"
            style={{ fontFamily: "Inter, sans-serif" }}
            autoComplete="email"
            inputMode="email"
          />
        </div>

        {/* Continue button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12 }}
          onClick={onContinue}
          className="w-full h-[54px] bg-white text-[#0d0d0f] text-[16px] leading-[24px] rounded-[12px] flex items-center justify-center"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Continue
        </motion.button>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-center gap-[4px]">
          <span
            className="text-[#858590] text-[16px] leading-[24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Already have an account?
          </span>
          <button
            onClick={() => {}}
            className="text-[#0088ff] text-[16px] leading-[24px] active:opacity-70 transition-opacity"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Log in
          </button>
        </div>
      </div>

      {/* iPhone home indicator */}
      <div className="h-[30px] relative shrink-0 w-full">
        <div className="absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 -translate-x-1/2 rounded-[100px] w-[135px]" />
      </div>
    </motion.div>
  );
}

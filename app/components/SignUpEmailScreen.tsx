import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

interface Props {
  onBack: () => void;
  onContinue?: () => void;
}

export function SignUpEmailScreen({ onBack, onContinue }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address to continue.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email address (e.g. alex@company.com).");
      return;
    }
    setError(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onContinue?.();
    }, 600);
  };

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
          className="self-start flex items-center gap-[4px] text-[#858590] text-[16px] leading-[24px] active:opacity-70 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff] rounded-[6px]"
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
            We'll send you a 6-digit code to verify your account.
          </p>
        </div>

        {/* Email input + error feedback */}
        <div className="flex flex-col gap-[8px] w-full">
          <div
            className={`flex items-center w-full h-[61px] rounded-[12px] border px-[16px] transition-colors ${
              error ? "border-red-500/80 bg-red-500/5" : "border-[#32323a] bg-[rgba(163,163,168,0.05)]"
            }`}
          >
            <input
              type="email"
              value={email}
              disabled={isSubmitting}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="john@gmail.com"
              className="flex-1 bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#858590] disabled:opacity-50"
              style={{ fontFamily: "Inter, sans-serif" }}
              autoComplete="email"
              inputMode="email"
            />
          </div>
          {error && (
            <span className="text-red-400 text-[13px] font-medium leading-[18px]">
              {error}
            </span>
          )}
        </div>

        {/* Continue button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12 }}
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full h-[56px] bg-white hover:bg-white/90 text-[#0d0d0f] text-[16px] leading-[24px] rounded-[12px] flex items-center justify-center font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {isSubmitting ? "Sending verification code..." : "Continue"}
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
            className="text-[#0088ff] text-[16px] leading-[24px] active:opacity-70 transition-opacity font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
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

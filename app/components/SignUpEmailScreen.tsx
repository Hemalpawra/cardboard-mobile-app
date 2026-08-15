import { useState } from "react";
import { motion } from "motion/react";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";

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
      className="absolute top-0 left-0 right-0 h-[100dvh] bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Scrollable content */}
      <div className="flex flex-col flex-1 min-h-0 overflow-y-auto scroll-smooth-ios">
        <div className="flex flex-col gap-[24px] px-[24px] pt-[6px] pb-[8px]">
          {/* Back button */}
          <button
            onClick={onBack}
            className="self-start flex items-center justify-center w-[36px] h-[36px] -ml-[6px] active:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff] rounded-full"
            aria-label="Go back"
          >
            <svg fill="none" height="17" viewBox="0 0 20 17.3333" width="20">
              <path d={BACK_ARROW} fill="#858590" />
            </svg>
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

          {/* Footer */}
          <div className="flex items-center justify-center gap-[4px] pt-[8px]">
            <span
              className="text-[#858590] text-[15px] leading-[24px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Already have an account?
            </span>
            <button
              onClick={() => {}}
              className="text-[#0088ff] text-[15px] leading-[24px] active:opacity-70 transition-opacity font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Log in
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Sticky Continue button floats above keyboard */}
        <div
          className="sticky bottom-0 px-[24px] pt-[16px] pb-[24px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #0d0d0f 40%)",
          }}
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full h-[56px] bg-white hover:bg-white/90 text-[#0d0d0f] text-[16px] leading-[24px] rounded-[12px] flex items-center justify-center font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff] disabled:opacity-70"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {isSubmitting ? "Sending verification code..." : "Continue"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";

interface Props {
  onBack: () => void;
  onVerified: () => void;
  email?: string;
}

export function VerifyCodeScreen({ onBack, onVerified, email = "john@gmail.com" }: Props) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(28);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const t = setTimeout(() => setTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(val);
  };

  const isComplete = code.length === 6;
  const timerStr = `00:${timer.toString().padStart(2, "0")}`;

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Hidden numeric input — captures keyboard */}
      <input
        ref={inputRef}
        type="tel"
        inputMode="numeric"
        value={code}
        onChange={handleChange}
        className="absolute opacity-0 pointer-events-none"
        style={{ top: "-999px", left: 0 }}
        maxLength={6}
        autoComplete="one-time-code"
      />

      {/* Scrollable content area — grows to push button above keyboard */}
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
          <div className="flex flex-col gap-[12px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Enter the code
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              We've sent a 6-digit code to {email}
            </p>
          </div>

          {/* OTP boxes — tappable to focus input */}
          <div className="flex flex-col gap-[12px]">
            <button
              onClick={() => inputRef.current?.focus()}
              className="flex gap-[8px] w-full"
              aria-label="Enter verification code digits"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-[61px] rounded-[12px] border flex items-center justify-center transition-colors ${
                    i === code.length && code.length < 6
                      ? "border-[#0088ff] bg-[rgba(0,136,255,0.06)]"
                      : "border-[#32323a] bg-[rgba(163,163,168,0.05)]"
                  }`}
                >
                  <span
                    className="text-white tabular-nums"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 26 }}
                  >
                    {code[i] ?? ""}
                  </span>
                </div>
              ))}
            </button>

            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16 }}>
              {timer > 0 ? (
                <span className="text-[#aeaeb5] tabular-nums">Resend code in {timerStr}</span>
              ) : (
                <button
                  onClick={() => setTimer(28)}
                  className="text-[#0088ff] active:opacity-70 font-medium"
                >
                  Resend code
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Spacer that pushes button to bottom when no keyboard */}
        <div className="flex-1" />

        {/* Sticky Continue button — floats above virtual keyboard */}
        <div
          className="sticky bottom-0 px-[24px] pt-[16px] pb-[24px]"
          style={{
            background: "linear-gradient(to bottom, transparent, #0d0d0f 40%)",
          }}
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={isComplete ? onVerified : () => inputRef.current?.focus()}
            className="w-full h-[56px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff] font-medium"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              opacity: isComplete ? 1 : 0.5,
            }}
          >
            Continue
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";
const EYE_OUTER = "M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z";
const EYE_PUPIL = "M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z";
const CHECKMARK = "M14.3333 1L5.16667 10.1667L1 6";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export function CreatePasswordScreen({ onBack, onContinue }: Props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const has8Chars = password.length >= 8;
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  const isValid = has8Chars && hasNumber && hasSpecial;

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <StatusBar />

      <div className="flex flex-col flex-1 min-h-0 px-[24px] pt-[6px] pb-[24px] gap-[24px]">
        <button
          onClick={onBack}
          className="self-start flex items-center justify-center w-[30px] h-[30px] active:opacity-60 transition-opacity"
          aria-label="Go back"
        >
          <svg fill="none" height="17" viewBox="0 0 20 17.3333" width="20">
            <path d={BACK_ARROW} fill="#858590" />
          </svg>
        </button>

        <div className="flex flex-col gap-[32px] flex-1 min-h-0">
          <div className="flex flex-col gap-[24px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Create a password
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              At least 8 characters with a number and special character.
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div
              className="flex items-center w-full h-[61px] rounded-[12px] border border-[#32323a] px-[16px] gap-[12px]"
              style={{ background: "rgba(163,163,168,0.05)" }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="flex-1 bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#858590]"
                style={{ fontFamily: "Inter, sans-serif" }}
                autoComplete="new-password"
              />
              <button
                onClick={() => setShowPassword((s) => !s)}
                className="shrink-0 flex items-center justify-center w-[24px] h-[24px] active:opacity-60"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg fill="none" height="17" viewBox="0 0 23 17" width="23" style={{ opacity: showPassword ? 1 : 0.5 }}>
                  <path d={EYE_OUTER} stroke="#858590" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={EYE_PUPIL} stroke="#858590" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-[12px]">
              {[
                { met: has8Chars, label: "8+ Characters" },
                { met: hasNumber, label: "1 number" },
                { met: hasSpecial, label: "1 special character" },
              ].map(({ met, label }) => (
                <div key={label} className="flex items-center gap-[10px]">
                  <div
                    className="flex items-center justify-center w-[20px] h-[20px] rounded-full shrink-0"
                    style={{ background: met ? "rgba(31,193,107,0.15)" : "rgba(163,163,168,0.08)" }}
                  >
                    {met && (
                      <svg fill="none" height="11" viewBox="0 0 15.33 11.17" width="15">
                        <path d={CHECKMARK} stroke="#1FC16B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span
                    className="leading-[24px]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      color: met ? "#1FC16B" : "#858590",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12 }}
          onClick={isValid ? onContinue : undefined}
          className="w-full h-[56px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff] font-medium"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            opacity: isValid ? 1 : 0.5,
          }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
}

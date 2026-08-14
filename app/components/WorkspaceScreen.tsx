import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

const BACK_ARROW = "M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z";
const HELP_CIRCLE = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const HELP_Q = "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13";

const ROLES = [
  "Creator",
  "Marketing Team",
  "Agency",
  "Business",
  "Student",
  "Freelancer",
];

function OptionIcon({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <rect fill="#0088FF" height="24" rx="12" width="24" />
        <circle cx="12" cy="12" fill="white" r="6" />
      </svg>
    );
  }
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
      <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
      <circle cx="12" cy="12" fill="#32323A" r="5" />
    </svg>
  );
}

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export function WorkspaceScreen({ onBack, onContinue }: Props) {
  const [selected, setSelected] = useState("Creator");

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
        <div className="flex items-center justify-between py-[6px]">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[24px] h-[24px] active:opacity-60 transition-opacity"
            aria-label="Go back"
          >
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path d={BACK_ARROW} fill="white" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-[24px] h-[24px]" aria-label="Help">
            <svg fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={HELP_CIRCLE} stroke="#7E7E8F" strokeWidth="2" />
              <path d={HELP_Q} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 17H12.01" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-[32px] flex-1 min-h-0">
          <div className="flex flex-col gap-[8px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              What best describe you?
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              This helps us personalize your experience.
            </p>
          </div>

          <div className="flex flex-col gap-[6px] flex-1 min-h-0 overflow-y-auto">
            {ROLES.map((role) => {
              const isSelected = role === selected;
              return (
                <motion.button
                  key={role}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => setSelected(role)}
                  className="flex items-center justify-between w-full px-[16px] py-[8px] rounded-[12px] text-left shrink-0"
                  style={{ background: "rgba(163,163,168,0.05)" }}
                >
                  <span
                    className="leading-[24px]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: isSelected ? 700 : 600,
                      fontSize: 18,
                      color: isSelected ? "white" : "#858590",
                    }}
                  >
                    {role}
                  </span>
                  <OptionIcon selected={isSelected} />
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12 }}
          onClick={onContinue}
          className="w-full h-[54px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center shrink-0"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16 }}
        >
          Continue
        </motion.button>
      </div>

      <div className="h-[30px] relative shrink-0 w-full">
        <div className="absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 -translate-x-1/2 rounded-[100px] w-[135px]" />
      </div>
    </motion.div>
  );
}

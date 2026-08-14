import { useState } from "react";
import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

const BACK_ARROW = "M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z";
const HELP_CIRCLE = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const HELP_Q = "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

export function WorkspaceNameScreen({ onBack, onContinue }: Props) {
  const [name, setName] = useState("Hemal's Workspace");

  const isValid = name.trim().length > 0;

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
          <div className="flex flex-col gap-[24px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Name your workspace
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              You can change this anytime
            </p>
          </div>

          <div
            className="flex items-center w-full h-[61px] rounded-[12px] border border-[#32323a] px-[16px]"
            style={{ background: "rgba(163,163,168,0.05)" }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Workspace"
              className="flex-1 bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#858590]"
              style={{ fontFamily: "Inter, sans-serif" }}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12 }}
          onClick={isValid ? onContinue : undefined}
          className="w-full h-[54px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center shrink-0 transition-opacity"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            opacity: isValid ? 1 : 0.5,
          }}
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

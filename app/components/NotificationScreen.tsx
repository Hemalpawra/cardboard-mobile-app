import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";
import svgPaths from "../../imports/Notification/svg-fyg5hegok8";

const BACK_ARROW = "M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z";
const HELP_CIRCLE = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const HELP_Q = "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13";

interface Props {
  onBack: () => void;
  onEnable: () => void;
  onSkip: () => void;
}

function BellIcon() {
  return (
    <div className="relative" style={{ width: 100, height: 100 }}>
      <svg fill="none" height="100" viewBox="0 0 100 100" width="100" className="absolute inset-0">
        <defs>
          <filter id="bell_blur" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="9" />
          </filter>
          <linearGradient id="bell_grad1" gradientUnits="userSpaceOnUse" x1="2" x2="54" y1="7" y2="58">
            <stop stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#d0d0d0" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <path d={svgPaths.p137c7bb0} fill="url(#bell_grad1)" />
        <path d={svgPaths.p23603c00} fill="white" fillOpacity="0.8" />
        <g filter="url(#bell_blur)">
          <path d={svgPaths.p19b39000} fill="rgba(80,80,80,0.4)" />
        </g>
        <path d={svgPaths.p1196cf80} fill="white" fillOpacity="0.7" />
        <path d={svgPaths.p3ebbb460} fill="white" fillOpacity="0.5" />
        <path d={svgPaths.p37b13a00} fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

export function NotificationScreen({ onBack, onEnable, onSkip }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <StatusBar />

      <div className="flex flex-col flex-1 min-h-0 px-[24px] pt-[6px] pb-[36px] gap-[24px]">
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
          <div
            className="relative flex items-center justify-center shrink-0"
            style={{ height: 200, borderRadius: 16, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 110,
                height: 110,
                background: "rgba(255,255,255,0.2)",
                filter: "blur(36px)",
              }}
            />
            <BellIcon />
          </div>

          <div className="flex flex-col gap-[16px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Stay in the loop
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              Get notified when your exports are ready and teammates leave feedback.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] shrink-0">
          <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
            onClick={onEnable}
            className="w-full h-[54px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16 }}
          >
            Enable Notifications
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12 }}
            onClick={onSkip}
            className="w-full h-[54px] rounded-[12px] flex items-center justify-center border border-[#32323a]"
            style={{ background: "rgba(163,163,168,0.05)", fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 16, color: "#a9a9b4" }}
          >
            Not now
          </motion.button>
        </div>
      </div>

      <div className="h-[30px] relative shrink-0 w-full">
        <div className="absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 -translate-x-1/2 rounded-[100px] w-[135px]" />
      </div>
    </motion.div>
  );
}

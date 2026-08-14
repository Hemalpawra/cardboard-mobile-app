import { motion } from "motion/react";
import splashSvgPaths from "../../imports/Splash/svg-1us6v7r7p5";
import { StatusBar } from "./StatusBar";

export function SplashScreen() {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col items-center justify-between pb-[80px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <StatusBar />

      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg fill="none" height="77" viewBox="0 0 114 77" width="114">
          <g clipPath="url(#splash-clip)">
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
            <clipPath id="splash-clip">
              <rect fill="white" height="77" width="114" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.p
        className="text-white text-[44px] leading-[66px]"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.55, ease: "easeOut" }}
      >
        Carboard
      </motion.p>
    </motion.div>
  );
}

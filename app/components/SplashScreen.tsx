import { motion } from "motion/react";
import splashSvgPaths from "../../imports/Splash/svg-1us6v7r7p5";
import { StatusBar } from "./StatusBar";

export function SplashScreen() {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo — absolutely centered in screen */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

      {/* "Cardboard" text — near bottom, not too far down */}
      <motion.p
        className="absolute bottom-[56px] left-0 right-0 text-center text-white text-[28px] tracking-tight m-0"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
      >
        Cardboard
      </motion.p>
    </motion.div>
  );
}

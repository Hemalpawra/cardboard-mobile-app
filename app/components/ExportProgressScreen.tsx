import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SUCCESS_ICON = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z";
const MORE_ICON = "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z";

interface Props {
  onHome: () => void;
  onShare: () => void;
}

export function ExportProgressScreen({ onHome, onShare }: Props) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          return 100;
        }
        return prev + 15;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0D0D0F]">
      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col px-[24px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pt-[16px] pb-[40px] shrink-0">
              <div className="w-[24px]" />
              <h1 className="text-white text-[16px] m-0 font-semibold">
                Exporting
              </h1>
              <div className="w-[24px]" />
            </div>

            {/* Progress Container */}
            <div className="flex-1 flex flex-col justify-center items-center gap-[32px] pb-[80px]">
              {/* Circular Progress mimicking iOS/Figma */}
              <div className="relative w-[120px] h-[120px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#1C1C24"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#1FC16B"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "339", strokeDashoffset: "339" }}
                    animate={{ strokeDashoffset: 339 - (339 * progress) / 100 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[24px] font-semibold tabular-nums">
                    {Math.min(100, Math.round(progress))}%
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[8px]">
                <span className="text-white text-[16px] font-medium">Exporting your video...</span>
                <span className="text-[#7E7E8F] text-[13px] text-center px-[40px]">
                  Please don't close the app or lock your screen
                </span>
              </div>
            </div>
            
            <div className="pb-[40px]">
               <button
                 onClick={onHome}
                 className="w-full h-[56px] rounded-[16px] bg-[#1C1C24] text-white text-[16px] font-semibold"
               >
                 Cancel Export
               </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col"
          >
            {/* Success Graphic area */}
            <div className="flex-1 flex flex-col items-center justify-center gap-[24px]">
              <div className="w-[80px] h-[80px] rounded-full bg-[#1FC16B]/20 flex items-center justify-center">
                <div className="w-[56px] h-[56px] rounded-full bg-[#1FC16B] flex items-center justify-center shadow-[0_0_24px_rgba(31,193,107,0.4)]">
                  <svg fill="none" height="32" viewBox="0 0 24 24" width="32">
                    <path d={SUCCESS_ICON} fill="white" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[8px]">
                <span className="text-white text-[24px] font-bold">Saved successfully</span>
                <span className="text-[#7E7E8F] text-[14px]">Your video is saved to Camera Roll</span>
              </div>
            </div>

            {/* Actions */}
            <div className="px-[24px] pb-[40px] flex flex-col gap-[12px]">
              <button
                onClick={onShare}
                className="w-full h-[56px] rounded-[16px] bg-white text-black text-[16px] font-semibold"
              >
                Share Video
              </button>
              <button
                onClick={onHome}
                className="w-full h-[56px] rounded-[16px] bg-[#1C1C24] text-white text-[16px] font-semibold"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

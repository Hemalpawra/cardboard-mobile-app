import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const HELP_ICON = "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z";
const CHECK_ICON = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
const MORE_ICON = "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z";

const VIDEO_THUMB = "https://images.unsplash.com/photo-1506744626753-eda8151a15c7?auto=format&fit=crop&q=80&w=800";

interface Props {
  onCancel: () => void;
  onDone: () => void;
}

export function ExportProgressScreen({ onCancel, onDone }: Props) {
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
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0d0d0f] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[16px] shrink-0 z-20">
        <button onClick={!isDone ? onCancel : onDone} className="active:opacity-60 transition-opacity">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={BACK_ICON} fill="white" />
          </svg>
        </button>
        <button className="active:opacity-60 transition-opacity">
          <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" className="text-[#aeaeb5]">
            <path d={HELP_ICON} />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isDone ? (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col px-[20px]"
          >
            <div className="flex flex-col items-center mt-[40px] mb-[60px]">
              {/* Circular Progress */}
              <div className="relative w-[160px] h-[160px] mb-[40px]">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="74" fill="none" stroke="#1a1a21" strokeWidth="8" />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="74"
                    fill="none"
                    stroke="#0088ff"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "465", strokeDashoffset: "465" }}
                    animate={{ strokeDashoffset: 465 - (465 * progress) / 100 }}
                    transition={{ duration: 0.2 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[32px] font-bold tabular-nums">
                    {Math.min(100, Math.round(progress))}%
                  </span>
                </div>
              </div>

              <h2 className="text-white text-[24px] font-bold mb-[12px]">Exporting...</h2>
              <p className="text-[#aeaeb5] text-[15px] text-center leading-[1.5]">
                Don't close the app.<br/>
                Project is saving in this device.
              </p>
            </div>

            {/* Info Card */}
            <div className="bg-[#1a1a21] rounded-[16px] p-[16px] flex items-center gap-[16px]">
              <div className="w-[64px] h-[48px] rounded-[8px] overflow-hidden shrink-0">
                <img src={VIDEO_THUMB} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[15px] font-semibold mb-[2px]">Product Launch</span>
                <span className="text-[#aeaeb5] text-[13px]">1080p 132 MB</span>
              </div>
            </div>

            {/* Cancel Button */}
            <div className="mt-auto pb-[40px]">
              <button
                onClick={onCancel}
                className="w-full h-[56px] rounded-[12px] bg-white text-black text-[16px] font-semibold active:scale-95 transition-transform"
              >
                Cancel Export
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col px-[20px]"
          >
            <div className="flex flex-col items-center mt-[40px] mb-[60px]">
              {/* Success Icon */}
              <div className="relative w-[120px] h-[120px] mb-[40px] flex items-center justify-center">
                <div className="absolute w-[80px] h-[80px] rounded-[20px] bg-[#22c55e] rotate-12 opacity-50" />
                <div className="absolute w-[80px] h-[80px] rounded-[20px] bg-gradient-to-tr from-[#16a34a] to-[#4ade80] shadow-[0_0_40px_rgba(34,197,94,0.3)] flex items-center justify-center">
                   <svg fill="white" height="40" viewBox="0 0 24 24" width="40">
                     <path d={CHECK_ICON} />
                   </svg>
                </div>
              </div>

              <h2 className="text-white text-[24px] font-bold mb-[12px]">Your project is saved !</h2>
              <p className="text-[#aeaeb5] text-[15px] text-center">
                Your video is ready to share.
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-[20px]">
              <span className="text-white text-[15px] font-semibold mb-[16px] block">Share</span>
              <div className="flex justify-between">
                {[
                  { name: 'LinkedIn', color: '#0a66c2' },
                  { name: 'Instagram', color: '#e1306c' },
                  { name: 'Youtube', color: '#ff0000' },
                  { name: 'Tiktok', color: '#00f2fe' },
                ].map(social => (
                  <div key={social.name} className="flex flex-col items-center gap-[8px]">
                    <div className="w-[56px] h-[56px] rounded-[16px] flex items-center justify-center shadow-lg" style={{ backgroundColor: social.color }}>
                       <span className="text-white font-bold text-[20px]">{social.name[0]}</span>
                    </div>
                    <span className="text-[#aeaeb5] text-[11px]">{social.name}</span>
                  </div>
                ))}
                
                <div className="flex flex-col items-center gap-[8px]">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#2a2a35] flex items-center justify-center">
                     <svg fill="white" height="24" viewBox="0 0 24 24" width="24">
                       <path d={MORE_ICON} />
                     </svg>
                  </div>
                  <span className="text-[#aeaeb5] text-[11px]">More</span>
                </div>
              </div>
            </div>

            {/* Done Button */}
            <div className="mt-auto pb-[40px]">
              <button
                onClick={onDone}
                className="w-full h-[56px] rounded-[12px] bg-white text-black text-[16px] font-semibold active:scale-95 transition-transform"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

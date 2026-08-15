import { motion } from "motion/react";

export type Tool = "trim" | "crop" | "flip" | "speed" | "canvas" | "bg" | null;

const ROTATE_LEFT = "M9 4H7C5.34315 4 4 5.34315 4 7V9M4 7L1 10M4 7L7 10M15 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V15";
const ROTATE_RIGHT = "M15 4H17C18.6569 4 20 5.34315 20 7V9M20 7L17 10M20 7L23 10M9 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V15";
const FLIP_VERTICAL = "M12 10V2M12 2L8 6M12 2L16 6M12 14V22M12 22L8 18M12 22L16 18M4 12H20";
const FLIP_HORIZONTAL = "M10 12H2M2 12L6 8M2 12L6 16M14 12H22M22 12L18 8M22 12L18 16M12 4V20";

const CROP_ORIGINAL = "M4 4h4v2H6v2H4V4zm12 0h4v4h-2V6h-2V4zM4 16h2v2h2v2H4v-4zm14 2h-2v2h4v-4h-2v2z";
const CROP_1_1 = "M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm4.5 4c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5S14.48 8 12 8zm0 2c1.38 0 2.5 1.12 2.5 2.5S13.38 14.5 12 14.5 9.5 13.38 9.5 12 10.62 10 12 10zm4.5-.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z";
const CROP_4_5 = "M6 2C4.34 2 3 3.34 3 5v14c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H6zm0 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm6 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z";
const CROP_16_9 = "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z";
const CROP_9_16 = "M16 2H8C4.69 2 2 4.69 2 8v8c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 13.5v-7l4 2.5-4 2.5z";

interface Props {
  tool: Tool;
  onClose: () => void;
}

export function VideoEditorSubMenu({ tool, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col bg-[#0d0d0f]"
    >
      <div className="flex items-center justify-between px-[20px] h-[56px] border-b border-white/5">
        <span className="text-white text-[14px] font-semibold capitalize">
          {tool}
        </span>
        <button
          onClick={onClose}
          className="w-[32px] h-[32px] rounded-full bg-white/10 flex items-center justify-center active:opacity-60 transition-opacity"
        >
          <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="white" />
          </svg>
        </button>
      </div>

      <div className="p-[20px] min-h-[100px] flex items-center justify-center">
        {tool === "flip" && (
          <div className="flex gap-[24px] overflow-x-auto scrollbar-hide py-[8px] px-[4px]">
            {[
              { icon: ROTATE_LEFT, label: "Left", isStroke: true },
              { icon: ROTATE_RIGHT, label: "Right", isStroke: true },
              { icon: FLIP_HORIZONTAL, label: "Horizontal", isStroke: true },
              { icon: FLIP_VERTICAL, label: "Vertical", isStroke: true },
            ].map((t) => (
              <button key={t.label} className="flex flex-col items-center gap-[8px] active:opacity-60 transition-opacity">
                <div className="w-[48px] h-[48px] rounded-full bg-[#1a1a21] flex items-center justify-center">
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" stroke={t.isStroke ? "white" : "none"} strokeWidth={t.isStroke ? "2" : "0"} strokeLinecap="round" strokeLinejoin="round">
                     <path d={t.icon} fill={t.isStroke ? "none" : "white"} />
                  </svg>
                </div>
                <span className="text-white text-[12px] font-medium">{t.label}</span>
              </button>
            ))}
          </div>
        )}
        {tool === "crop" && (
          <div className="flex gap-[24px] overflow-x-auto scrollbar-hide py-[8px] px-[4px]">
            {[
              { icon: CROP_ORIGINAL, label: "Original" },
              { icon: CROP_9_16, label: "9:16" },
              { icon: CROP_16_9, label: "16:9" },
              { icon: CROP_1_1, label: "1:1" },
              { icon: CROP_4_5, label: "4:5" },
            ].map((t) => (
              <button key={t.label} className="flex flex-col items-center gap-[8px] active:opacity-60 transition-opacity">
                <div className="w-[48px] h-[48px] rounded-full bg-[#1a1a21] flex items-center justify-center">
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                     <path d={t.icon} fill="white" />
                  </svg>
                </div>
                <span className="text-white text-[12px] font-medium">{t.label}</span>
              </button>
            ))}
          </div>
        )}
        {tool === "speed" && (
          <div className="flex flex-col w-full px-[16px] gap-[16px] max-w-[320px]">
            <div className="flex justify-between w-full">
              {['0.1x', '0.5x', '1x', '2x', '5x'].map((s) => (
                <span key={s} className="text-[#aeaeb5] text-[12px] font-medium">{s}</span>
              ))}
            </div>
            <input type="range" min="0.1" max="5" step="0.1" defaultValue="1" className="w-full accent-white h-[4px] bg-[#32323a] rounded-full appearance-none outline-none" />
          </div>
        )}
        {tool === "trim" && <span className="text-[#7e7e8f] text-[14px]">Drag handles on timeline to trim</span>}
        {tool === "canvas" && <span className="text-[#7e7e8f] text-[14px]">Adjust canvas ratio</span>}
        {tool === "bg" && <span className="text-[#7e7e8f] text-[14px]">Change background color</span>}
      </div>
    </motion.div>
  );
}

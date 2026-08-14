import { motion } from "motion/react";

export type Tool = "trim" | "crop" | "flip" | "speed" | "canvas" | "bg" | null;

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
        {/* Placeholder UI for the selected tool */}
        <span className="text-[#7e7e8f] text-[14px]">
          {tool === "trim" && "Drag handles on timeline to trim"}
          {tool === "crop" && "Pinch video preview to crop"}
          {tool === "flip" && "Video horizontally flipped"}
          {tool === "speed" && "Adjust playback speed"}
          {tool === "canvas" && "Adjust canvas ratio"}
          {tool === "bg" && "Change background color"}
        </span>
      </div>
    </motion.div>
  );
}

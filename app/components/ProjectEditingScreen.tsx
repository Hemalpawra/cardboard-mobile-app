import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tool, VideoEditorSubMenu } from "./VideoEditorSubMenu";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const HISTORY_ICON = "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52.75-1.23-3.25-1.93V8z";
const SHARE_ICON = "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 18 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z";
const PLAY_ICON = "M8 5v14l11-7z";
const UNDO_ICON = "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z";
const REDO_ICON = "M11.5 8C6.85 8 2.92 11.03 1.54 15.22l2.37.78C4.95 12.81 7.96 10.5 11.5 10.5c1.96 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6C16.55 8.99 14.15 8 11.5 8z";
const HIDE_ICON = "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z";
const FULLSCREEN_ICON = "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";

const CANVAS_ICON = "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"; // fallback
const BG_ICON = "M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"; // fallback
const TRIM_ICON = "M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z";
const FLIP_ICON = "M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z";
const CROP_ICON = "M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z";
const SPEED_ICON = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.25-12.75L11 13V7h2v4.25l3.66-2.11-.41-.89z";

const SPARKLE_LARGE = "M11.5 21C11.5 21 11.5 13.5 3 12.5C11.5 11.5 11.5 4 11.5 4C11.5 4 11.5 11.5 20 12.5C11.5 13.5 11.5 21 11.5 21Z";
const SPARKLE_SMALL = "M19 10C19 10 19 7 15.5 6.5C19 6 19 3 19 3C19 3 19 6 22.5 6.5C19 7 19 10 19 10Z";
const PENCIL_ICON = "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z";

const VIDEO_THUMB = new URL(
  "../../imports/Home/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href;
const COVER_THUMB = new URL(
  "../../imports/Projects/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href; // placeholder if needed

interface Props {
  onBack: () => void;
  onExport: () => void;
  onNavigateVersionHistory?: () => void;
  onNavigateCollaboration?: () => void;
}

const TOOLS = [
  { id: "canvas", icon: CANVAS_ICON, label: "Canvas" },
  { id: "bg", icon: BG_ICON, label: "BG" },
  { id: "trim", icon: TRIM_ICON, label: "Trim" },
  { id: "flip", icon: FLIP_ICON, label: "Flip" },
  { id: "crop", icon: CROP_ICON, label: "Crop" },
  { id: "speed", icon: SPEED_ICON, label: "Speed" },
];

export function ProjectEditingScreen({ onBack, onExport, onNavigateVersionHistory, onNavigateCollaboration }: Props) {
  const [activeTool, setActiveTool] = useState<Tool>(null);

  // Fake states for Crop and Trim interactions
  const [cropBox, setCropBox] = useState({ x: 10, y: 10, w: 80, h: 80 });
  const [trimHandles, setTrimHandles] = useState({ start: 10, end: 90 });

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0d0d0f] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[16px] shrink-0 z-20">
        <div className="flex items-center gap-[16px]">
          <button onClick={onBack} className="active:opacity-60 transition-opacity">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={BACK_ICON} fill="white" />
            </svg>
          </button>
          <span className="text-white text-[18px] font-semibold">Product Launch</span>
        </div>

        <div className="flex items-center gap-[20px]">
          {onNavigateVersionHistory && (
            <button onClick={onNavigateVersionHistory} className="active:opacity-60 transition-opacity">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d={HISTORY_ICON} fill="#aeaeb5" />
              </svg>
            </button>
          )}

          {onNavigateCollaboration && (
            <button onClick={onNavigateCollaboration} className="active:opacity-60 transition-opacity">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d={SHARE_ICON} fill="#aeaeb5" />
              </svg>
            </button>
          )}

          <button onClick={onExport} className="h-[32px] px-[16px] bg-white text-black font-semibold rounded-[8px] text-[14px] active:scale-95 transition-transform">
            Export
          </button>
        </div>
      </div>

      {/* Video Preview Area */}
      <div className="shrink-0 relative w-full aspect-video bg-black overflow-hidden border-b border-[#1c1c24] rounded-t-[16px] border-t-[1px] border-x-[1px] border-[#0088ff] shadow-[0_-4px_20px_rgba(0,136,255,0.1)]">
        <img src={VIDEO_THUMB} alt="Preview" className="w-full h-full object-cover" />
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between px-[16px] h-[48px] shrink-0 bg-[#0d0d0f]">
        <div className="flex items-center gap-[6px] w-[140px]">
          <span className="text-white text-[14px] font-medium tabular-nums">00:15:08</span>
          <span className="text-[#555560] text-[14px] font-medium tabular-nums">/ 02:15:20</span>
        </div>

        <button className="active:opacity-60 transition-opacity">
          <svg fill="none" height="28" viewBox="0 0 24 24" width="28">
            <path d={PLAY_ICON} fill="white" />
          </svg>
        </button>

        <div className="flex items-center gap-[16px] w-[140px] justify-end">
          <button className="active:opacity-60 transition-opacity">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d={UNDO_ICON} fill="white" />
            </svg>
          </button>
          <button className="active:opacity-60 transition-opacity">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d={REDO_ICON} fill="white" />
            </svg>
          </button>
          <button className="active:opacity-60 transition-opacity">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d={HIDE_ICON} fill="white" />
            </svg>
          </button>
          <button className="active:opacity-60 transition-opacity">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d={FULLSCREEN_ICON} fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Timeline Area */}
      <div className="flex-1 relative bg-[#0d0d0f] overflow-hidden">
        {/* Timeline track container */}
        <div className="absolute inset-0 pt-[8px] pl-[16px] overflow-x-auto scrollbar-hide">
          <div className="flex flex-col gap-[4px] w-[200%] pb-[24px]">
             
             {/* Time Ruler */}
             <div className="h-[20px] flex items-end gap-[40px] pl-[80px] mb-[4px] text-[#7e7e8f] text-[10px] font-medium font-mono">
               <span>00:00</span>
               <span>•</span>
               <span>00:02</span>
               <span>•</span>
               <span>00:04</span>
               <span>•</span>
               <span>00:06</span>
               <span>•</span>
               <span>00:08</span>
             </div>

             {/* Video Track */}
             <div className="flex gap-[4px] h-[60px]">
                {/* Cover block */}
                <div className="relative w-[60px] h-full rounded-[8px] overflow-hidden shrink-0">
                  <img src={VIDEO_THUMB} alt="Cover" className="w-full h-full object-cover filter brightness-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-[4px]">
                    <span className="text-white text-[10px] font-bold">COVER</span>
                  </div>
                  <div className="absolute bottom-[4px] right-[4px]">
                    <svg fill="none" height="12" viewBox="0 0 24 24" width="12">
                      <path d={PENCIL_ICON} fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Main Video clip */}
                <div className="relative flex-1 h-full rounded-[8px] overflow-hidden bg-[#2a2a35] border-[1px] border-[#0088ff]">
                  <div className="absolute inset-0 flex">
                     <img src={VIDEO_THUMB} alt="Frame" className="h-full object-cover flex-1" />
                     <img src={VIDEO_THUMB} alt="Frame" className="h-full object-cover flex-1" />
                     <img src={VIDEO_THUMB} alt="Frame" className="h-full object-cover flex-1" />
                  </div>
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-[14px] font-medium drop-shadow-md">File name</span>
                  </div>
                </div>
             </div>

             {/* Audio Track */}
             <div className="flex gap-[4px] h-[40px] pl-[64px]">
                <div className="relative flex-1 h-full rounded-[8px] overflow-hidden" style={{ background: "linear-gradient(90deg, #10321c 0%, #17542d 100%)" }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                     <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 24" fill="none">
                       <path d="M0 12 Q5 2, 10 12 T20 12 T30 12 T40 12 T50 12 T60 12 T70 12 T80 12 T90 12 T100 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                       <path d="M0 12 Q7 22, 15 12 T30 12 T45 12 T60 12 T75 12 T90 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center px-[12px]">
                    <span className="text-white text-[14px] font-medium drop-shadow-md">Audio</span>
                  </div>
                </div>
             </div>

             {/* Effects Track */}
             <div className="flex gap-[4px] h-[40px] pl-[64px]">
                <div className="relative flex-1 h-full rounded-[8px] overflow-hidden" style={{ background: "#2d2417" }}>
                  <div className="absolute inset-0 flex items-center px-[12px]">
                    <span className="text-white text-[14px] font-medium drop-shadow-md">Effects</span>
                  </div>
                </div>
             </div>

             {/* Add Track Button */}
             <div className="flex gap-[4px] h-[40px] pl-[64px] mt-[4px]">
                <button className="flex-1 h-full rounded-[8px] bg-[#1a1a21] flex items-center px-[16px] gap-[8px] active:bg-[#252530] transition-colors">
                  <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
                  </svg>
                  <span className="text-white text-[14px] font-medium">Add</span>
                </button>
             </div>
          </div>
        </div>

        {/* Playhead (Fixed center line) */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white pointer-events-none z-10" />

        {/* FAB */}
        <button className="absolute right-[24px] bottom-[24px] w-[56px] h-[56px] rounded-[16px] bg-white shadow-[0_4px_16px_rgba(255,255,255,0.2)] flex items-center justify-center z-20 active:scale-95 transition-transform">
           <svg fill="none" height="28" viewBox="0 0 24 24" width="28">
             <path d={SPARKLE_LARGE} fill="#0d0d0f" />
             <path d={SPARKLE_SMALL} fill="#0d0d0f" />
           </svg>
        </button>
      </div>

      {/* Bottom Toolbar Area */}
      <div className="shrink-0 bg-[#0d0d0f]">
        <AnimatePresence mode="wait">
          {activeTool ? (
            <VideoEditorSubMenu
              key="submenu"
              tool={activeTool}
              onClose={() => setActiveTool(null)}
            />
          ) : (
            <motion.div
              key="toolbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center justify-between px-[20px] pt-[16px] pb-[40px]"
            >
              {TOOLS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTool(t.id as Tool)}
                  className="flex flex-col items-center gap-[6px] active:opacity-60 transition-opacity"
                >
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path d={t.icon} fill="#aeaeb5" />
                  </svg>
                  <span className="text-[#aeaeb5] text-[11px] font-medium">{t.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

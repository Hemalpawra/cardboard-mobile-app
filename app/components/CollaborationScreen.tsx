import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Icons
const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const PLAY_ICON = "M8 5v14l11-7z";
const EXPORT_ICON = "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z";
const UNDO_ICON = "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z";
const REDO_ICON = "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.06-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z";
const PLUS_ICON = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
const CURSOR_ICON = "M6.9 19.3333C6.73528 19.3343 6.5746 19.2829 6.44199 19.1866C6.30938 19.0903 6.21199 18.9542 6.16439 18.7981C6.11679 18.642 6.12151 18.4744 6.17799 18.3204L10.378 7.32039L5.27799 6.00039C5.11663 5.95856 4.97341 5.86542 4.87023 5.73516C4.76706 5.6049 4.70976 5.44474 4.70776 5.27926C4.70575 5.11378 4.75919 4.95213 4.8593 4.81907C4.95941 4.686 5.10091 4.5888 5.26399 4.54239L18.264 0.829053C18.4239 0.783457 18.5946 0.789212 18.7514 0.845258C18.9082 0.901305 19.043 1.00465 19.1362 1.14032C19.2294 1.27599 19.276 1.4369 19.269 1.6001C19.262 1.7633 19.2017 1.91978 19.098 2.04639L10.098 13.0464L11.751 17.5464C11.8105 17.7081 11.8172 17.8863 11.77 18.0515C11.7228 18.2166 11.6242 18.3589 11.4907 18.4552C11.3572 18.5515 11.1965 18.596 11.0347 18.5815C10.8729 18.5669 10.7196 18.4942 10.599 18.3754L7.59899 15.3754L6.9 19.3333Z";

const VIDEO_THUMB = require('../../assets/0228c1ba1abcca1af97143dd25085f9b13a73348.png');

interface Props {
  onBack: () => void;
  onShare?: () => void;
  onComment?: () => void;
}

export function CollaborationScreen({ onBack, onShare, onComment }: Props) {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0D0D0F]">
      {/* Top Banner (Collaboration Toggle) */}
      <div className="shrink-0 flex items-center justify-between px-[20px] pt-[16px] pb-[12px] bg-[#1C1C24]/80 backdrop-blur-lg border-b border-white/5 z-20">
        <div className="flex flex-col gap-[2px]">
          <span className="text-white text-[15px] font-semibold">Live Collaboration</span>
          <span className="text-[#1FC16B] text-[12px] font-medium flex items-center gap-[4px]">
             <span className="w-[6px] h-[6px] rounded-full bg-[#1FC16B] shadow-[0_0_8px_#1FC16B]" />
             {isLive ? "3 people viewing" : "Off"}
          </span>
        </div>
        
        {/* Toggle switch */}
        <button
          onClick={() => setIsLive(!isLive)}
          className={`w-[44px] h-[24px] rounded-full p-[2px] transition-colors duration-300 ease-in-out ${
            isLive ? "bg-[#0088FF]" : "bg-[#32323A]"
          }`}
        >
          <motion.div
            layout
            initial={false}
            animate={{ x: isLive ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-[20px] h-[20px] rounded-full bg-white shadow-sm"
          />
        </button>
      </div>

      {/* Editor Header */}
      <div className="flex items-center justify-between px-[20px] py-[12px] shrink-0">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full active:opacity-60 transition-opacity"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={BACK_ICON} fill="white" />
          </svg>
        </button>

        <h1
          className="text-white text-[16px] m-0"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          Project Editing
        </h1>

        <button
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full active:opacity-60 transition-opacity"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={EXPORT_ICON} fill="white" />
          </svg>
        </button>
      </div>

      {/* Video Preview */}
      <div className="shrink-0 relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
        <img
          src={VIDEO_THUMB}
          alt="Video Preview"
          className="w-full h-full object-cover"
        />
        
        <button className="absolute w-[48px] h-[48px] rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center z-10 active:scale-95 transition-transform">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={PLAY_ICON} fill="white" />
          </svg>
        </button>

        {/* Live Collaborator Cursors */}
        <AnimatePresence>
          {isLive && (
            <>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-[30%] left-[25%] flex flex-col items-start z-20 pointer-events-none"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E84A5F">
                  <path d={CURSOR_ICON} />
                </svg>
                <div className="bg-[#E84A5F] text-white text-[10px] font-medium px-[6px] py-[2px] rounded-r-[4px] rounded-bl-[4px] mt-[2px] shadow-sm ml-[8px]">
                  Sarah
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-[60%] right-[35%] flex flex-col items-start z-20 pointer-events-none"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0088FF">
                  <path d={CURSOR_ICON} />
                </svg>
                <div className="bg-[#0088FF] text-white text-[10px] font-medium px-[6px] py-[2px] rounded-r-[4px] rounded-bl-[4px] mt-[2px] shadow-sm ml-[8px]">
                  Alex
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Timeline / Scrubber */}
      <div className="flex-1 flex flex-col px-[20px] pt-[24px]">
        {/* Undo/Redo & Timestamp */}
        <div className="flex items-center justify-between mb-[20px]">
          <span className="text-white text-[14px] font-medium tracking-wide">00:00:00</span>
          <div className="flex items-center gap-[16px]">
            <button className="opacity-50">
              <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d={UNDO_ICON} fill="white" />
              </svg>
            </button>
            <button className="opacity-50">
              <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d={REDO_ICON} fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dummy Timeline Track */}
        <div className="relative h-[80px] bg-[#1C1C24] rounded-[8px] flex items-center overflow-hidden border border-white/10">
          <div className="flex w-full h-full opacity-50">
             <img src={VIDEO_THUMB} className="h-full object-cover min-w-[120px]" alt=""/>
             <img src={VIDEO_THUMB} className="h-full object-cover min-w-[120px]" alt=""/>
             <img src={VIDEO_THUMB} className="h-full object-cover min-w-[120px]" alt=""/>
             <img src={VIDEO_THUMB} className="h-full object-cover min-w-[120px]" alt=""/>
          </div>
          <div className="absolute top-0 bottom-0 left-[30%] w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10" />
        </div>
      </div>

      {/* Collab Actions (Bottom Navbar area) */}
      <div className="shrink-0 flex items-center gap-[12px] px-[20px] pb-[32px] pt-[12px]">
        <button
          onClick={onShare}
          className="flex-1 h-[48px] rounded-[12px] bg-[#1C1C24] text-white text-[15px] font-medium flex items-center justify-center active:scale-95 transition-transform"
        >
          Share link
        </button>
        <button
          onClick={onComment}
          className="flex-1 h-[48px] rounded-[12px] bg-white text-black text-[15px] font-semibold flex items-center justify-center active:scale-95 transition-transform"
        >
          Comments (3)
        </button>
      </div>
    </div>
  );
}

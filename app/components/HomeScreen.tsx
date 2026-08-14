import { motion } from "motion/react";

interface Props {
  onNavigateAi: () => void;
  onNavigateProjects: () => void;
  onSelectCollaboration: () => void;
  onSelectProject: () => void;
  onNotifications?: () => void;
}

const HOME_ICON = "M10 0L20 8.5V20H13V13H7V20H0V8.5L10 0Z";
const FOLDER_ICON = "M2 16C1.45 16 0.979 15.804 0.588 15.413C0.196 15.021 0 14.55 0 14V2C0 1.45 0.196 0.979 0.588 0.588C0.979 0.196 1.45 0 2 0H8L10 2H18C18.55 2 19.021 2.196 19.413 2.588C19.804 2.979 20 3.45 20 4V14C20 14.55 19.804 15.021 19.413 15.413C19.021 15.804 18.55 16 18 16H2Z";
const BELL_ICON = "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z";
const SPARKLE_LARGE = "M11.5 21C11.5 21 11.5 13.5 3 12.5C11.5 11.5 11.5 4 11.5 4C11.5 4 11.5 11.5 20 12.5C11.5 13.5 11.5 21 11.5 21Z";
const SPARKLE_SMALL = "M19 10C19 10 19 7 15.5 6.5C19 6 19 3 19 3C19 3 19 6 22.5 6.5C19 7 19 10 19 10Z";
const SHORTS_ICON = "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 18 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z";
const PLAY_VIDEO_ICON = "M8 5v14l11-7z";
const GLOBE_ICON = "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.07c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z";

const THUMBNAIL_URL = new URL(
  "../../imports/Home/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href;

export function BottomNav({
  active,
  onHome,
  onAi,
  onProjects,
}: {
  active: "home" | "projects";
  onHome?: () => void;
  onAi?: () => void;
  onProjects?: () => void;
}) {
  return (
    <div
      className="shrink-0 w-full relative z-50"
      style={{ background: "#0d0d0f" }}
    >
      <div className="flex items-center justify-between h-[64px] px-[32px]">
        {/* Home */}
        <button
          onClick={onHome}
          className="flex flex-col gap-[4px] items-center pt-[4px] transition-opacity active:opacity-60"
          aria-label="Home"
        >
          <svg fill="none" height="24" viewBox="0 0 20 20" width="24">
            <path d={HOME_ICON} fill={active === "home" ? "#ffffff" : "#7E7E8F"} />
          </svg>
          <span
            className="text-[12px] leading-[14px]"
            style={{ fontFamily: "Inter, sans-serif", color: active === "home" ? "#ffffff" : "#7E7E8F", fontWeight: 600 }}
          >
            Home
          </span>
        </button>

        {/* AI star FAB - Floating above */}
        <button
          onClick={onAi}
          className="absolute left-1/2 bottom-[16px] -translate-x-1/2 flex items-center justify-center w-[64px] h-[64px] rounded-full bg-white border-[5px] border-[#0d0d0f] shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95 transition-transform"
          aria-label="AI Assistant"
        >
          <svg fill="none" height="28" viewBox="0 0 24 24" width="28">
            <path d={SPARKLE_LARGE} fill="#0d0d0f" />
            <path d={SPARKLE_SMALL} fill="#0d0d0f" />
          </svg>
        </button>

        {/* Projects */}
        <button
          onClick={onProjects}
          className="flex flex-col gap-[4px] items-center pt-[4px] transition-opacity active:opacity-60"
          aria-label="Projects"
        >
          <svg fill="none" height="24" viewBox="0 0 20 16" width="24">
            <path d={FOLDER_ICON} fill={active === "projects" ? "#ffffff" : "#7E7E8F"} />
          </svg>
          <span
            className="text-[12px] leading-[14px]"
            style={{ fontFamily: "Inter, sans-serif", color: active === "projects" ? "#ffffff" : "#7E7E8F", fontWeight: 500 }}
          >
            Project
          </span>
        </button>
      </div>
    </div>
  );
}

export function HomeScreen({
  onNavigateAi,
  onNavigateProjects,
  onSelectCollaboration,
  onSelectProject,
  onNotifications,
}: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Scrollable area */}
      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios">
        
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[16px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[44px] h-[44px] rounded-[12px] bg-[#e4e4e7] flex items-center justify-center text-black text-[20px] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
              H
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-[4px]">
                <span className="text-white text-[16px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Hemal Singh</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <span className="text-[#7e7e8f] text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>Dashboard sidebar</span>
            </div>
          </div>
          <button onClick={onNotifications} className="w-[40px] h-[40px] flex items-center justify-center relative active:opacity-60">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={BELL_ICON} fill="white" />
            </svg>
          </button>
        </div>

        {/* Continue Editing */}
        <div className="px-[24px] pt-[16px]">
          <h2 className="text-white text-[18px] font-bold mb-[16px]" style={{ fontFamily: "Inter, sans-serif" }}>Continue Editing</h2>
          <button 
            onClick={onSelectProject}
            className="relative w-full h-[180px] rounded-[16px] overflow-hidden block active:scale-[0.98] transition-transform"
          >
            <img src={THUMBNAIL_URL} alt="Project" className="absolute inset-0 w-full h-full object-cover" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-[24px] left-[16px] right-[16px] flex flex-col items-start gap-[4px]">
              <span className="text-white text-[16px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Product Launch.mp4</span>
              <div className="flex items-center gap-[8px] text-[#A3A3A3] text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>
                <span>1080p</span>
                <span>146 MB</span>
              </div>
            </div>

            <div className="absolute bottom-[36px] right-[16px] text-white text-[12px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              80%
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-[16px] left-[16px] right-[16px] h-[4px] rounded-full bg-white/30 flex gap-[4px]">
               <div className="h-full rounded-full bg-[#0088ff] w-[80%]" />
               <div className="h-full rounded-full bg-white flex-1" />
            </div>
          </button>
        </div>

        {/* Ai Suggestions */}
        <div className="px-[24px] pt-[32px]">
          <h2 className="text-white text-[18px] font-bold mb-[16px]" style={{ fontFamily: "Inter, sans-serif" }}>Ai Suggestions</h2>
          <div className="flex gap-[12px] overflow-x-auto snap-x scrollbar-hide pb-[8px] -mx-[24px] px-[24px]">
            {/* Card 1 */}
            <button className="flex flex-col items-start justify-between w-[120px] h-[120px] rounded-[16px] bg-[#141416] p-[16px] shrink-0 snap-start active:opacity-80">
              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#0088FF] flex items-center justify-center">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                  <path d={SHORTS_ICON} fill="white" />
                </svg>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-white text-[13px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Create Shorts</span>
                <span className="text-[#7e7e8f] text-[11px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>45 sec</span>
              </div>
            </button>

            {/* Card 2 */}
            <button className="flex flex-col items-start justify-between w-[120px] h-[120px] rounded-[16px] bg-[#141416] p-[16px] shrink-0 snap-start active:opacity-80">
              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#1FC16B] flex items-center justify-center">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                  <path d={PLAY_VIDEO_ICON} fill="white" />
                </svg>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-white text-[13px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Find B-roll</span>
                <span className="text-[#7e7e8f] text-[11px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>8 new clips</span>
              </div>
            </button>

            {/* Card 3 */}
            <button className="flex flex-col items-start justify-between w-[120px] h-[120px] rounded-[16px] bg-[#141416] p-[16px] shrink-0 snap-start active:opacity-80">
              <div className="w-[36px] h-[36px] rounded-[8px] bg-[#FACC15] flex items-center justify-center">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                  <path d={GLOBE_ICON} fill="white" />
                </svg>
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-white text-[13px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Translate</span>
                <span className="text-[#7e7e8f] text-[11px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>5 languages</span>
              </div>
            </button>
          </div>
        </div>

        {/* Needs Your Attention */}
        <div className="px-[24px] pt-[24px] pb-[100px]">
          <h2 className="text-white text-[18px] font-bold mb-[16px]" style={{ fontFamily: "Inter, sans-serif" }}>Needs Your Attention</h2>
          <div className="flex flex-col gap-[12px]">
            {/* Item 1 */}
            <button onClick={onSelectCollaboration} className="flex items-center gap-[12px] w-full bg-[#141416] rounded-[16px] p-[16px] active:scale-[0.98] transition-transform text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#E4E4E7] shrink-0" />
              <div className="flex flex-col flex-1">
                <span className="text-white text-[15px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Alex Commented</span>
                <span className="text-[#A3A3A3] text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>Product launch.mp4</span>
              </div>
              <div className="flex flex-col items-end gap-[6px]">
                <span className="text-[#A3A3A3] text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>2m ago</span>
                <div className="w-[8px] h-[8px] rounded-full bg-[#1FC16B]" />
              </div>
            </button>

            {/* Item 2 */}
            <button onClick={onSelectCollaboration} className="flex items-center gap-[12px] w-full bg-[#141416] rounded-[16px] p-[16px] active:scale-[0.98] transition-transform text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#E4E4E7] shrink-0" />
              <div className="flex flex-col flex-1">
                <span className="text-white text-[15px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Jamie Liked</span>
                <span className="text-[#A3A3A3] text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>Design Proposal.docx</span>
              </div>
              <div className="flex flex-col items-end gap-[6px]">
                <span className="text-[#A3A3A3] text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>5m ago</span>
                <div className="w-[8px] h-[8px] rounded-full bg-[#1FC16B]" />
              </div>
            </button>

            {/* Item 3 */}
            <button onClick={onSelectCollaboration} className="flex items-center gap-[12px] w-full bg-[#141416] rounded-[16px] p-[16px] active:scale-[0.98] transition-transform text-left">
              <div className="w-[44px] h-[44px] rounded-full bg-[#E4E4E7] shrink-0" />
              <div className="flex flex-col flex-1">
                <span className="text-white text-[15px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Taylor Assigned</span>
                <span className="text-[#A3A3A3] text-[13px]" style={{ fontFamily: "Inter, sans-serif" }}>Wireframes.png</span>
              </div>
              <div className="flex flex-col items-end gap-[6px]">
                <span className="text-[#A3A3A3] text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>10m ago</span>
                <div className="w-[8px] h-[8px] rounded-full bg-[#1FC16B]" />
              </div>
            </button>
          </div>
        </div>

      </div>

      <BottomNav
        active="home"
        onAi={onNavigateAi}
        onProjects={onNavigateProjects}
      />
    </motion.div>
  );
}

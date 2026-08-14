import { useState } from "react";
import { motion } from "motion/react";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";
const SEARCH_ICON = "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z";

interface Project {
  id: string;
  name: string;
  lastEdited: string;
  duration: string;
}

const RECENT_SEARCHES = ["Brand video", "Tutorial", "Social reel", "Podcast edit"];

const RESULTS: Project[] = [
  { id: "1", name: "Brand Launch Video", lastEdited: "Today, 2:30 PM", duration: "2:45" },
  { id: "2", name: "Product Tutorial", lastEdited: "Yesterday, 11:00 AM", duration: "5:12" },
  { id: "3", name: "Social Reel - Q3", lastEdited: "Aug 12, 4:15 PM", duration: "0:30" },
  { id: "4", name: "Podcast Episode 14", lastEdited: "Aug 10, 9:00 AM", duration: "42:00" },
];

interface Props {
  onBack: () => void;
  onSelectProject?: () => void;
}

export function ProjectsSearchScreen({ onBack, onSelectProject }: Props) {
  const [query, setQuery] = useState("");

  const filteredResults = RESULTS.filter((p) =>
    !query || p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Search bar row */}
      <div className="flex items-center gap-[12px] px-[24px] pt-[16px] pb-[16px] shrink-0">
        <div
          className="flex items-center gap-[12px] flex-1 h-[44px] rounded-[10px] px-[16px]"
          style={{ background: "rgba(163,163,168,0.05)", border: "1px solid #32323A" }}
        >
          <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
            <path d={SEARCH_ICON} fill="#7e7e8f" />
          </svg>
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="flex-1 bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#7e7e8f]"
            style={{ fontFamily: "Inter, sans-serif" }}
            inputMode="search"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-[#7e7e8f] text-[18px] leading-none active:opacity-60">×</button>
          )}
        </div>
        <button
          onClick={onBack}
          className="text-[#0088ff] text-[15px] leading-[24px] shrink-0 active:opacity-60"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Cancel
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[24px]">
        {/* Recent searches — only shown when no query */}
        {!query && (
          <div className="flex flex-col gap-[10px] mb-[24px]">
            <p
              className="text-white text-[16px] leading-[24px] m-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Recent Searches
            </p>
            <div className="flex flex-wrap gap-[8px]">
              {RECENT_SEARCHES.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="flex items-center justify-center h-[32px] px-[12px] rounded-[8px] text-[14px] leading-[20px] transition-all active:opacity-70"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background: "rgba(163,163,168,0.05)",
                    color: "#aeaeb5",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="flex flex-col gap-[10px]">
          <p
            className="text-white text-[16px] leading-[24px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            {query ? `Results for "${query}"` : "All Projects"}
          </p>
          <div className="flex flex-col gap-[6px]">
            {filteredResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-[40px] gap-[8px]">
                <p className="text-[#7e7e8f] text-[16px] m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                  No projects found
                </p>
                <p className="text-[#555560] text-[14px] m-0" style={{ fontFamily: "Inter, sans-serif" }}>
                  Try a different search term
                </p>
              </div>
            ) : (
              filteredResults.map((p) => (
                <motion.button
                  key={p.id}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  onClick={onSelectProject}
                  className="flex items-center justify-between w-full text-left rounded-[12px] px-[16px] py-[14px] transition-all"
                  style={{ background: "rgba(163,163,168,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex flex-col gap-[4px]">
                    <span
                      className="text-white text-[16px] leading-[24px]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {p.name}
                    </span>
                    <span
                      className="text-[#7e7e8f] text-[13px] leading-[18px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {p.lastEdited}
                    </span>
                  </div>
                  <span
                    className="text-[#aeaeb5] text-[13px] leading-[18px] shrink-0 ml-[8px]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {p.duration}
                  </span>
                </motion.button>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

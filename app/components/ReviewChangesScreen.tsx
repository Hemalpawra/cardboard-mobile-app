import { motion } from "motion/react";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";

interface Change {
  type: "remove" | "add" | "caption" | "trim";
  description: string;
  timestamp?: string;
}

const CHANGES: Change[] = [
  { type: "remove", description: "Removed 12 filler words (um, uh, like)", timestamp: "0:04–2:30" },
  { type: "remove", description: "Trimmed 3 long pauses", timestamp: "1:10, 3:22, 5:15" },
  { type: "add", description: "Added auto-captions (English)", timestamp: "Full video" },
  { type: "caption", description: "Styled captions — white bold, bottom third", timestamp: "Full video" },
  { type: "trim", description: "Shortened intro by 8 seconds", timestamp: "0:00–0:08" },
];

const TYPE_COLORS: Record<Change["type"], string> = {
  remove: "#FF5C5C",
  add: "#1FC16B",
  caption: "#0088ff",
  trim: "#f9a825",
};

const TYPE_LABELS: Record<Change["type"], string> = {
  remove: "Removed",
  add: "Added",
  caption: "Caption",
  trim: "Trimmed",
};

interface Props {
  onBack: () => void;
  onApply?: () => void;
  onDiscard?: () => void;
  /** before = show "Before" tab active (92-2587), after = "After" tab active (84-13662) */
  defaultTab?: "before" | "after";
}

export function ReviewChangesScreen({ onBack, onApply, onDiscard, defaultTab = "before" }: Props) {
  const tabs: Array<"before" | "after"> = ["before", "after"];

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header with back button */}
      <div className="flex items-center gap-[12px] px-[24px] pt-[16px] pb-[12px] shrink-0">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-[36px] h-[36px] -ml-[6px] active:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff] rounded-full"
          aria-label="Go back"
        >
          <svg fill="none" height="17" viewBox="0 0 20 17.3333" width="20">
            <path d={BACK_ARROW} fill="#858590" />
          </svg>
        </button>
        <h1
          className="text-white text-[20px] leading-[28px] m-0 flex-1"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        >
          Review Changes
        </h1>
        <button className="active:opacity-60 transition-opacity" aria-label="Share">
          <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 18 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" fill="#aeaeb5" />
          </svg>
        </button>
      </div>

      {/* Before / After tab row */}
      <div className="flex gap-[16px] px-[24px] pb-[16px] shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="flex-1 h-[44px] rounded-[12px] flex items-center justify-center text-[16px] leading-[24px] transition-all font-medium"
            style={{
              fontFamily: "Inter, sans-serif",
              background: tab === defaultTab ? "#ffffff" : "rgba(163,163,168,0.05)",
              color: tab === defaultTab ? "#0d0d0f" : "#aeaeb5",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tab === "before" ? "Before" : "After"}
          </button>
        ))}
      </div>

      {/* Changes list — scrollable */}
      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[24px]">
        <div className="flex flex-col gap-[28px] pb-[16px]">
          {/* Video preview placeholder */}
          <div
            className="w-full h-[180px] rounded-[16px] flex items-center justify-center"
            style={{ background: "rgba(163,163,168,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col items-center gap-[8px]">
              <div
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                  <path d="M8 5v14l11-7z" fill="white" />
                </svg>
              </div>
              <span
                className="text-[#7e7e8f] text-[13px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {defaultTab === "before" ? "Original" : "Edited"} preview
              </span>
            </div>
          </div>

          {/* Change items */}
          <div className="flex flex-col gap-[8px]">
            <p
              className="text-white text-[16px] leading-[24px] m-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              {CHANGES.length} changes applied
            </p>
            <div className="flex flex-col gap-[8px]">
              {CHANGES.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[12px] rounded-[12px] px-[16px] py-[14px]"
                  style={{ background: "rgba(163,163,168,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="shrink-0 mt-[2px] px-[8px] h-[22px] rounded-[6px] flex items-center"
                    style={{ background: `${TYPE_COLORS[c.type]}22` }}
                  >
                    <span
                      className="text-[11px] leading-[16px]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: TYPE_COLORS[c.type] }}
                    >
                      {TYPE_LABELS[c.type]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <span
                      className="text-white text-[14px] leading-[20px]"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                    >
                      {c.description}
                    </span>
                    {c.timestamp && (
                      <span
                        className="text-[#7e7e8f] text-[12px] leading-[18px]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {c.timestamp}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action buttons */}
      <div className="flex flex-col gap-[16px] px-[24px] pt-[16px] pb-[24px] shrink-0">
        <motion.button
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12 }}
          onClick={onApply}
          className="w-full h-[56px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 16 }}
        >
          Apply Changes
        </motion.button>
        {onDiscard && (
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={onDiscard}
            className="w-full h-[48px] rounded-[12px] flex items-center justify-center font-medium transition-all"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 15,
              color: "#FF5C5C",
              background: "rgba(255,92,92,0.08)",
            }}
          >
            Discard Changes
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

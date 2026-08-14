import { motion } from "motion/react";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "comment" | "ai" | "approval" | "edit";
}

const NOTIFICATIONS: Notification[] = [
  { id: "1", title: "Sarah left a comment", message: "Can we shorten this part? The intro feels a bit long.", time: "2m ago", type: "comment" },
  { id: "2", title: "AI suggestion ready", message: "Captions have been added to your video — ready for review.", time: "12m ago", type: "ai" },
  { id: "3", title: "Alex approved changes", message: "The B-roll sequence looks great. Nice work!", time: "1h ago", type: "approval" },
  { id: "4", title: "Jordan made an edit", message: "Trimmed 3 pauses and adjusted the outro music.", time: "3h ago", type: "edit" },
];

const TYPE_COLORS: Record<Notification["type"], string> = {
  comment: "#1FC16B",
  ai: "#0088ff",
  approval: "#1FC16B",
  edit: "#aeaeb5",
};

const TYPE_ICONS: Record<Notification["type"], string> = {
  comment: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10H2l2.71-2.71C3 17.11 2 14.66 2 12zm10 3l6-4-6-4v8z",
  ai: "M12 2l2.4 4.8L20 8l-4 3.9.94 5.51L12 14.77l-4.94 2.64.94-5.51L4 8l5.6-1.2L12 2z",
  approval: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
  edit: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 1.08l9.06-9.06 1.83 1.83-9.06 9.06H5.92v-1.83zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41z",
};

const TAB_LABELS = ["All", "Comments", "AI", "Approvals", "Edits"];

interface Props {
  onBack: () => void;
}

export function NotificationsScreen({ onBack }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[24px] pt-[16px] pb-[12px] shrink-0">
        <div className="flex items-center gap-[8px]">
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
            className="text-white text-[20px] leading-[28px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Notifications
          </h1>
        </div>
        <button
          className="text-[#0088ff] text-[14px] leading-[20px] active:opacity-60"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Mark all read
        </button>
      </div>

      {/* Filter tab bar */}
      <div className="flex gap-[8px] px-[24px] pb-[16px] overflow-x-auto shrink-0">
        {TAB_LABELS.map((tab, i) => (
          <button
            key={tab}
            className="flex items-center justify-center h-[32px] px-[12px] rounded-[8px] shrink-0 text-[14px] leading-[20px] transition-all active:opacity-70"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: i === 0 ? 600 : 400,
              background: i === 0 ? "rgba(255,255,255,0.1)" : "rgba(163,163,168,0.05)",
              color: i === 0 ? "#ffffff" : "#7e7e8f",
              border: i === 0 ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification list — needs your attention */}
      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[24px]">
        <p
          className="text-white text-[16px] leading-[24px] mb-[12px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        >
          Needs Your Attention
        </p>

        <div className="flex flex-col gap-[8px]">
          {NOTIFICATIONS.map((n) => (
            <motion.button
              key={n.id}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.12 }}
              className="flex items-center gap-[12px] w-full text-left rounded-[12px] px-[16px] py-[14px] transition-all active:opacity-80"
              style={{
                background: "rgba(163,163,168,0.05)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon dot */}
              <div
                className="flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-full"
                style={{ background: `${TYPE_COLORS[n.type]}1a` }}
              >
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                  <path d={TYPE_ICONS[n.type]} fill={TYPE_COLORS[n.type]} />
                </svg>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                <div className="flex items-center justify-between gap-[8px]">
                  <span
                    className="text-white text-[14px] leading-[20px] truncate"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {n.title}
                  </span>
                  <span
                    className="text-[#7e7e8f] text-[12px] leading-[18px] shrink-0"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {n.time}
                  </span>
                </div>
                <span
                  className="text-[#aeaeb5] text-[13px] leading-[18px] line-clamp-2 text-left"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {n.message}
                </span>
              </div>

              {/* Unread dot */}
              <div
                className="shrink-0 w-[8px] h-[8px] rounded-full"
                style={{ background: TYPE_COLORS[n.type] }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

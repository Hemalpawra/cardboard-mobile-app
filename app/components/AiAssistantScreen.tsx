import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────
type MessageKind =
  | "user-video"   // user's initial video-context card (left aligned, wide)
  | "user-text"    // follow-up user text (right aligned)
  | "ai-text"      // plain AI response
  | "ai-thinking"  // processing steps card
  | "ai-video";    // AI result video card

interface ProcessingStep {
  id: string;
  label: string;
  done: boolean;
}

interface ChatMessage {
  id: string;
  kind: MessageKind;
  text?: string;
  steps?: ProcessingStep[];
  time: string;
}

interface Props {
  onBack: () => void;
}

// ─────────────────────────────────────────
// Constants
// ─────────────────────────────────────────
const HISTORY_ICON =
  "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z";
const IMAGE_ICON =
  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 11.5L11.5 15 14 12l3 4H7l2-4.5z";
const MIC_ICON =
  "M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z";
const SEND_UP_ICON = "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z";
const PLAY_ICON = "M8 5v14l11-7z";
const CHECK_ICON = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z";

const VIDEO_THUMB = new URL(
  "../../imports/Home/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href;

function fmt(d: Date) {
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

// ─────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────

/** User's video-context card — left aligned, full-width */
function VideoContextCard({ text, time }: { text: string; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-[300px]"
    >
      <div
        className="rounded-[16px] overflow-hidden"
        style={{ background: "rgba(36,36,48,0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Message text */}
        <div className="px-[14px] pt-[12px] pb-[10px]">
          <p
            className="text-white text-[15px] leading-[22px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          >
            {text}
          </p>
        </div>
        {/* Video thumbnail */}
        <div className="relative mx-[10px] mb-[10px] rounded-[10px] overflow-hidden h-[140px]">
          <img
            src={VIDEO_THUMB}
            alt="Project video thumbnail"
            className="w-full h-full object-cover"
            style={{ outline: "1px solid oklch(1 0 0 / 0.08)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center w-[36px] h-[36px] rounded-full"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
            >
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                <path d={PLAY_ICON} fill="white" />
              </svg>
            </div>
          </div>
        </div>
        {/* Timestamp */}
        <p
          className="text-[#5e5e6e] text-[11px] leading-[16px] m-0 pb-[10px] pr-[14px] text-right"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {time}
        </p>
      </div>
    </motion.div>
  );
}

/** AI text response bubble */
function AiBubble({ text, time }: { text: string; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-[290px]"
    >
      <div
        className="rounded-[16px] px-[14px] py-[12px]"
        style={{ background: "rgba(28,28,40,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p
          className="text-white text-[15px] leading-[22px] m-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {text}
        </p>
        <p
          className="text-[#5e5e6e] text-[11px] leading-[16px] m-0 mt-[6px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {time}
        </p>
      </div>
    </motion.div>
  );
}

/** User text-only message bubble — right aligned */
function UserTextBubble({ text, time }: { text: string; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-[260px] self-end"
    >
      <div
        className="rounded-[16px] px-[14px] py-[12px]"
        style={{ background: "rgba(55,55,70,0.95)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p
          className="text-white text-[15px] leading-[22px] m-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {text}
        </p>
        <p
          className="text-[#5e5e6e] text-[11px] leading-[16px] m-0 mt-[6px] text-right"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {time}
        </p>
      </div>
    </motion.div>
  );
}

/** AI "Thinking" card — shows animated processing steps */
function ThinkingCard({ steps }: { steps: ProcessingStep[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="max-w-[290px]"
    >
      <div
        className="rounded-[16px] px-[14px] py-[14px]"
        style={{ background: "rgba(28,28,40,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p
          className="text-[#7e7e8f] text-[13px] leading-[18px] m-0 mb-[10px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Thinking...
        </p>
        <div className="flex flex-col gap-[8px]">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.18, duration: 0.22 }}
              className="flex items-center gap-[10px]"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center shrink-0 w-[18px] h-[18px] rounded-full"
                style={{ background: step.done ? "#1FC16B22" : "rgba(255,255,255,0.06)" }}
              >
                {step.done ? (
                  <svg fill="none" height="12" viewBox="0 0 24 24" width="12">
                    <path d={CHECK_ICON} fill="#1FC16B" />
                  </svg>
                ) : (
                  <motion.div
                    className="w-[6px] h-[6px] rounded-full"
                    style={{ background: "#5e5e6e" }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.15 }}
                  />
                )}
              </div>
              <span
                className="text-[13px] leading-[18px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: step.done ? "#1FC16B" : "#aeaeb5",
                  fontWeight: step.done ? 500 : 400,
                }}
              >
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** AI final video result card */
function AiVideoResult({ caption, time }: { caption: string; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="max-w-[290px]"
    >
      <div
        className="rounded-[16px] overflow-hidden"
        style={{ background: "rgba(28,28,40,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="px-[14px] pt-[12px] pb-[10px]">
          <p
            className="text-white text-[15px] leading-[22px] m-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {caption}
          </p>
        </div>
        {/* Thumbnail */}
        <div className="relative mx-[10px] mb-[10px] rounded-[10px] overflow-hidden h-[130px]">
          <img
            src={VIDEO_THUMB}
            alt="Processed video result"
            className="w-full h-full object-cover"
            style={{ outline: "1px solid oklch(1 0 0 / 0.08)" }}
          />
          {/* Play + "Edited" badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center w-[36px] h-[36px] rounded-full"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
            >
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                <path d={PLAY_ICON} fill="white" />
              </svg>
            </div>
          </div>
          <div
            className="absolute top-[8px] right-[8px] px-[8px] h-[22px] rounded-[6px] flex items-center"
            style={{ background: "#1FC16B" }}
          >
            <span
              className="text-white text-[11px] leading-[16px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Edited
            </span>
          </div>
        </div>
        <p
          className="text-[#5e5e6e] text-[11px] leading-[16px] m-0 pb-[10px] pr-[14px] text-right"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {time}
        </p>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// Processing steps sequence
// ─────────────────────────────────────────
const BASE_STEPS: ProcessingStep[] = [
  { id: "s1", label: "Analyzing timeline", done: false },
  { id: "s2", label: "Detecting filler words", done: false },
  { id: "s3", label: "Processing audio cuts", done: false },
  { id: "s4", label: "Generating final edit", done: false },
];

// ─────────────────────────────────────────
// Main Screen
// ─────────────────────────────────────────
export function AiAssistantScreen({ onBack }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const processingTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => processingTimers.current.forEach(clearTimeout);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    const t = setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    return () => clearTimeout(t);
  }, [messages]);

  const clearTimers = () => {
    processingTimers.current.forEach(clearTimeout);
    processingTimers.current = [];
  };

  const addTimer = (fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms);
    processingTimers.current.push(t);
  };

  const handleSend = useCallback(
    (overrideText?: string) => {
      const text = (overrideText ?? inputVal).trim();
      if (!text || isProcessing) return;

      setInputVal("");
      setIsProcessing(true);
      clearTimers();

      const now = new Date();
      const userMsgId = `user-${Date.now()}`;
      const isFirstMsg = messages.length === 0;

      // Add user message
      setMessages((prev) => [
        ...prev,
        {
          id: userMsgId,
          kind: isFirstMsg ? "user-video" : "user-text",
          text,
          time: fmt(now),
        },
      ]);

      // 800ms → AI text reply arrives
      addTimer(() => {
        const replyTime = fmt(new Date());
        const aiTextId = `ai-text-${Date.now()}`;
        const responses: Array<[string, string]> = [
          ["pause", "Got it! I'll remove all pauses and filler words like 'um', 'uh' and 'you know' to make your video together.*"],
          ["caption", "On it! Generating accurate captions for every spoken line in your video."],
          ["b-roll", "Searching your timeline for the best B-roll insertion points."],
          ["trim", "Trimming the identified segments now — this might take a moment."],
        ];
        const match = responses.find(([k]) => text.toLowerCase().includes(k));
        const aiText = match
          ? match[1]
          : `Got it! Processing "${text}" on your video now.*`;

        setMessages((prev) => [
          ...prev,
          { id: aiTextId, kind: "ai-text", text: aiText, time: replyTime },
        ]);
      }, 800);

      // 1.4s → Thinking card with empty steps
      const thinkingId = `thinking-${Date.now()}`;
      addTimer(() => {
        const steps = BASE_STEPS.map((s) => ({ ...s }));
        setMessages((prev) => [
          ...prev,
          { id: thinkingId, kind: "ai-thinking", steps, time: fmt(new Date()) },
        ]);

        // Tick steps done one by one
        steps.forEach((_, i) => {
          addTimer(() => {
            setMessages((prev) =>
              prev.map((m) => {
                if (m.id !== thinkingId || !m.steps) return m;
                const updated = m.steps.map((s, si) => (si <= i ? { ...s, done: true } : s));
                return { ...m, steps: updated };
              })
            );
          }, (i + 1) * 600);
        });
      }, 1400);

      // After all steps done → remove thinking, add video result
      const totalThinkTime = 1400 + BASE_STEPS.length * 600 + 400;
      addTimer(() => {
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== thinkingId),
          {
            id: `ai-video-${Date.now()}`,
            kind: "ai-video",
            text: "Here is your final Video.",
            time: fmt(new Date()),
          },
        ]);
        setIsProcessing(false);
      }, totalThinkTime);
    },
    [inputVal, isProcessing, messages.length]
  );

  const isEmpty = messages.length === 0 && !isProcessing;
  const hasInput = inputVal.trim().length > 0;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background:
          "radial-gradient(ellipse 140% 60% at 30% 0%, #0B2547 0%, #080C14 55%)",
      }}
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[10px] shrink-0">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full active:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          aria-label="Back"
        >
          <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
            <path
              d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
              fill="rgba(255,255,255,0.5)"
            />
          </svg>
        </button>

        <h1
          className="text-white text-[18px] leading-[26px] m-0"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
        >
          Ai Assistant
        </h1>

        <button
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full active:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          aria-label="Chat history"
        >
          <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
            <path d={HISTORY_ICON} fill="rgba(255,255,255,0.5)" />
          </svg>
        </button>
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[20px] pb-[8px]">
        {/* Empty / greeting state */}
        <AnimatePresence>
          {isEmpty && (
            <motion.div
              key="greeting"
              className="flex flex-col items-center justify-center h-full gap-[10px] pb-[100px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-white text-[30px] leading-[42px] m-0 text-center"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Hi Hemal 👋
              </motion.p>
              <motion.p
                className="text-[#6e6e82] text-[16px] leading-[24px] m-0 text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                What would you like to do{"\n"}with your video today?
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message thread */}
        <div className="flex flex-col gap-[10px] pt-[8px]">
          <AnimatePresence initial={false}>
            {messages.map((msg) => {
              if (msg.kind === "user-video") {
                return (
                  <div key={msg.id} className="flex justify-start">
                    <VideoContextCard text={msg.text!} time={msg.time} />
                  </div>
                );
              }
              if (msg.kind === "user-text") {
                return (
                  <div key={msg.id} className="flex justify-end">
                    <UserTextBubble text={msg.text!} time={msg.time} />
                  </div>
                );
              }
              if (msg.kind === "ai-text") {
                return (
                  <div key={msg.id} className="flex justify-start">
                    <AiBubble text={msg.text!} time={msg.time} />
                  </div>
                );
              }
              if (msg.kind === "ai-thinking") {
                return (
                  <div key={msg.id} className="flex justify-start">
                    <ThinkingCard steps={msg.steps!} />
                  </div>
                );
              }
              if (msg.kind === "ai-video") {
                return (
                  <div key={msg.id} className="flex justify-start">
                    <AiVideoResult caption={msg.text!} time={msg.time} />
                  </div>
                );
              }
              return null;
            })}
          </AnimatePresence>

          <div ref={bottomRef} className="h-[1px]" />
        </div>
      </div>

      {/* ── Input Bar ── */}
      <div className="shrink-0 px-[14px] pb-[28px] pt-[6px]">
        <div
          className="flex flex-col rounded-[22px] overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.055)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Text row */}
          <div className="px-[16px] pt-[14px] pb-[10px]">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="What would you like to know?"
              disabled={isProcessing}
              className="w-full bg-transparent text-white text-[16px] leading-[24px] outline-none placeholder:text-[#5e5e70] disabled:opacity-40"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Toolbar row: icons left, send right */}
          <div className="flex items-center justify-between px-[12px] pb-[10px]">
            <div className="flex items-center gap-[14px]">
              {/* Gallery */}
              <button
                className="flex items-center justify-center w-[36px] h-[36px] rounded-full transition-opacity active:opacity-50 focus-visible:ring-2 focus-visible:ring-[#0088ff]"
                aria-label="Attach image or video"
              >
                <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
                  <path d={IMAGE_ICON} fill="rgba(255,255,255,0.35)" />
                </svg>
              </button>
              {/* Mic */}
              <button
                className="flex items-center justify-center w-[36px] h-[36px] rounded-full transition-opacity active:opacity-50 focus-visible:ring-2 focus-visible:ring-[#0088ff]"
                aria-label="Voice input"
              >
                <svg fill="none" height="22" viewBox="0 0 24 24" width="22">
                  <path d={MIC_ICON} fill="rgba(255,255,255,0.35)" />
                </svg>
              </button>
            </div>

            {/* Send button */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              onClick={() => handleSend()}
              disabled={isProcessing || !hasInput}
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white"
              style={{
                background:
                  hasInput && !isProcessing
                    ? "rgba(255,255,255,0.92)"
                    : "rgba(255,255,255,0.1)",
              }}
              aria-label="Send message"
            >
              <svg fill="none" height="18" viewBox="0 0 24 24" width="18">
                <path
                  d={SEND_UP_ICON}
                  fill={hasInput && !isProcessing ? "#0d0d0f" : "rgba(255,255,255,0.3)"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

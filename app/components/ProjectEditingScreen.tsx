import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tool, VideoEditorSubMenu } from "./VideoEditorSubMenu";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const HISTORY_ICON = "M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52.75-1.23-3.25-1.93V8z";
const SHARE_ICON = "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 18 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.99 2.99 0 0 0 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z";
const PLAY_ICON = "M8 5v14l11-7z";
const UNDO_ICON = "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z";
const REDO_ICON = "M11.5 8C6.85 8 2.92 11.03 1.54 15.22l2.37.78C4.95 12.81 7.96 10.5 11.5 10.5c1.96 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6C16.55 8.99 14.15 8 11.5 8z";
const CHAT_DISABLE_ICON = "M1.39 4.22l2.27 2.27A2 2 0 003 8v8c0 1.1.9 2 2 2h14v3l-2.6-2.6 1.41-1.41L21.19 21.19zM5 16V8.12l7.88 7.88H5zM20 2H4.17l2 2H20v11.83l2 2V4c0-1.1-.9-2-2-2z";
const CHAT_ICON = "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z";
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

const ROTATE_LEFT = "M9 4H7C5.34315 4 4 5.34315 4 7V9M4 7L1 10M4 7L7 10M15 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V15";
const ROTATE_RIGHT = "M15 4H17C18.6569 4 20 5.34315 20 7V9M20 7L17 10M20 7L23 10M9 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V15";
const FLIP_VERTICAL = "M12 10V2M12 2L8 6M12 2L16 6M12 14V22M12 22L8 18M12 22L16 18M4 12H20";
const FLIP_HORIZONTAL = "M10 12H2M2 12L6 8M2 12L6 16M14 12H22M22 12L18 8M22 12L18 16M12 4V20";

const CLOSE_ICON = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
const CHECK_ICON = "M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";
const UPLOAD_ICON = "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z";

const CROP_ORIGINAL = "M4 4h4v2H6v2H4V4zm12 0h4v4h-2V6h-2V4zM4 16h2v2h2v2H4v-4zm14 2h-2v2h4v-4h-2v2z";
const CROP_1_1 = "M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zm0 2h9c1.93 0 3.5 1.57 3.5 3.5v9c0 1.93-1.57 3.5-3.5 3.5h-9C5.57 20 4 18.43 4 16.5v-9C4 5.57 5.57 4 7.5 4zm4.5 4c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5S14.48 8 12 8zm0 2c1.38 0 2.5 1.12 2.5 2.5S13.38 14.5 12 14.5 9.5 13.38 9.5 12 10.62 10 12 10zm4.5-.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z";
const CROP_4_5 = "M6 2C4.34 2 3 3.34 3 5v14c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H6zm0 2h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zm6 4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z";
const CROP_16_9 = "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z";
const CROP_9_16 = "M16 2H8C4.69 2 2 4.69 2 8v8c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6zm-4 13.5v-7l4 2.5-4 2.5z";

const VIDEO_THUMB = new URL(
  "../../imports/Home/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href;
const COVER_THUMB = new URL(
  "../../imports/Projects/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href; // placeholder if needed

const AVATAR_1 = "https://randomuser.me/api/portraits/women/44.jpg";
const AVATAR_2 = "https://randomuser.me/api/portraits/men/32.jpg";

interface Props {
  onBack: () => void;
  onExport: () => void;
  onNavigateVersionHistory?: () => void;
  onNavigateCollaboration?: () => void;
  onNavigateAi?: () => void;
  onShareProject?: () => void;
  onOpenCommentThread?: () => void;
}


const TOOLS = [
  { id: "canvas", icon: CANVAS_ICON, label: "Canvas" },
  { id: "bg", icon: BG_ICON, label: "BG" },
  { id: "trim", icon: TRIM_ICON, label: "Trim" },
  { id: "flip", icon: FLIP_ICON, label: "Flip" },
  { id: "crop", icon: CROP_ICON, label: "Crop" },
  { id: "speed", icon: SPEED_ICON, label: "Speed" },
];

export function ProjectEditingScreen({ onBack, onExport, onNavigateVersionHistory, onNavigateCollaboration, onNavigateAi, onShareProject, onOpenCommentThread }: Props) {
  const [activeTool, setActiveTool] = useState<Tool>(null);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);
  const dialRef = useRef<HTMLDivElement>(null);
  const cropAreaRef = useRef<HTMLDivElement>(null);
  const [cropBox, setCropBox] = useState({ x: 10, y: 10, w: 80, h: 80 });
  const [activeCropDrag, setActiveCropDrag] = useState<"pan" | "tl" | "tr" | "bl" | "br" | null>(null);
  const [cropStart, setCropStart] = useState({ x: 0, y: 0, box: cropBox });
  const [selectedRatio, setSelectedRatio] = useState("Original");
  const trimTrackRef = useRef<HTMLDivElement>(null);
  const [trimHandles, setTrimHandles] = useState({ start: 10, end: 90 });
  const [activeDrag, setActiveDrag] = useState<"start" | "end" | null>(null);
  const speedDialRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(1);
  const [showComments, setShowComments] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(null);
  const [comments, setComments] = useState([
    { id: 1, avatar: AVATAR_1, position: 28, text: "Let's make this Transition smoother", time: "00:36:14" },
    { id: 2, avatar: AVATAR_2, position: 38, text: "Audio is a bit too loud here", time: "00:45:00" },
    { id: 3, avatar: AVATAR_1, position: 52, text: "Perfect timing", time: "01:05:22" },
    { id: 4, avatar: AVATAR_1, position: 65, text: "Maybe add a filter?", time: "01:20:10" }
  ]);

  const handleDialScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!dialRef.current) return;
    const scrollLeft = dialRef.current.scrollLeft;
    const maxScroll = dialRef.current.scrollWidth - dialRef.current.clientWidth;
    const center = maxScroll / 2;
    const normalized = (scrollLeft - center) / center;
    setRotation(Math.round(normalized * 45));
  };

  const handleCropRatioSelect = (id: string, ratio: number | null) => {
    setSelectedRatio(id);
    if (!ratio) {
      setCropBox({ x: 10, y: 10, w: 80, h: 80 });
      return;
    }
    let w = 80;
    let h = 80;
    if (ratio > 1) { w = 90; h = 90 / ratio; }
    else { h = 90; w = 90 * ratio; }
    w = Math.min(90, Math.max(10, w));
    h = Math.min(90, Math.max(10, h));
    setCropBox({ x: (100 - w) / 2, y: (100 - h) / 2, w, h });
  };

  const handleSpeedDialScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!speedDialRef.current) return;
    const scrollLeft = speedDialRef.current.scrollLeft;
    const maxScroll = speedDialRef.current.scrollWidth - speedDialRef.current.clientWidth;
    if (maxScroll <= 0) return;
    const normalized = Math.max(0, Math.min(1, scrollLeft / maxScroll));
    const newSpeed = 0.1 + (normalized * 3.9);
    setSpeed(Math.round(newSpeed * 10) / 10);
  };

  const formatSpeed = (val: number) => {
    const s = val.toString();
    return s.startsWith("0.") ? s.replace("0.", ".") + "x" : s + "x";
  };

  const handleAddComment = () => {
    if (!replyText.trim()) return;
    setComments([...comments, { id: Date.now(), avatar: AVATAR_1, position: 50, text: replyText, time: "Just now" }]);
    setReplyText("");
  };

  useEffect(() => {
    if (!activeCropDrag) return;
    const handlePointerMove = (e: PointerEvent) => {
      if (!cropAreaRef.current) return;
      const rect = cropAreaRef.current.getBoundingClientRect();
      const dx = ((e.clientX - cropStart.x) / rect.width) * 100;
      const dy = ((e.clientY - cropStart.y) / rect.height) * 100;
      setCropBox(prev => {
        let newBox = { ...cropStart.box };
        if (activeCropDrag === "pan") {
          newBox.x = Math.max(0, Math.min(100 - newBox.w, newBox.x + dx));
          newBox.y = Math.max(0, Math.min(100 - newBox.h, newBox.y + dy));
        } else {
          if (activeCropDrag.includes("l")) {
             const maxW = cropStart.box.x + cropStart.box.w;
             newBox.w = Math.max(10, Math.min(maxW, cropStart.box.w - dx));
             newBox.x = cropStart.box.x + (cropStart.box.w - newBox.w);
          }
          if (activeCropDrag.includes("r")) newBox.w = Math.max(10, Math.min(100 - cropStart.box.x, cropStart.box.w + dx));
          if (activeCropDrag.includes("t")) {
             const maxH = cropStart.box.y + cropStart.box.h;
             newBox.h = Math.max(10, Math.min(maxH, cropStart.box.h - dy));
             newBox.y = cropStart.box.y + (cropStart.box.h - newBox.h);
          }
          if (activeCropDrag.includes("b")) newBox.h = Math.max(10, Math.min(100 - cropStart.box.y, cropStart.box.h + dy));
        }
        return newBox;
      });
    };
    const handlePointerUp = () => setActiveCropDrag(null);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [activeCropDrag, cropStart]);

  useEffect(() => {
    if (!activeDrag) return;
    const handlePointerMove = (e: PointerEvent) => {
        if (!trimTrackRef.current) return;
        const rect = trimTrackRef.current.getBoundingClientRect();
        const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        setTrimHandles(prev => activeDrag === "start" ? { ...prev, start: Math.min(pct, prev.end - 1) } : { ...prev, end: Math.max(pct, prev.start + 1) });
    };
    const handlePointerUp = () => setActiveDrag(null);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [activeDrag]);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0d0d0f] font-['Inter',sans-serif]">
      <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[16px] shrink-0 z-20">
        <div className="flex items-center gap-[16px] overflow-hidden">
          <button onClick={onBack} className="active:opacity-60 transition-opacity shrink-0">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d={BACK_ICON} fill="white" /></svg>
          </button>
          <span className="text-white text-[18px] font-semibold whitespace-nowrap truncate">Product Launch</span>
        </div>
        <div className="flex items-center gap-[20px]">
          {onNavigateVersionHistory && <button onClick={onNavigateVersionHistory} className="active:opacity-60 transition-opacity"><svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d={HISTORY_ICON} fill="#aeaeb5" /></svg></button>}
          {onNavigateCollaboration && <button onClick={onNavigateCollaboration} className="active:opacity-60 transition-opacity"><svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d={SHARE_ICON} fill="#aeaeb5" /></svg></button>}
          <button onClick={onExport} className="h-[32px] px-[16px] bg-white text-black font-semibold rounded-[8px] text-[14px] active:scale-95 transition-transform">Export</button>
        </div>
      </div>

      <div ref={cropAreaRef} className={`shrink-0 relative w-full aspect-video bg-black overflow-hidden border-b border-[#1c1c24] ${activeTool === "flip" || activeTool === "trim" ? "rounded-t-[16px] border-t-[1px] border-x-[1px] border-[#0088ff] shadow-[0_-4px_20px_rgba(0,136,255,0.1)]" : ""}`}>
        <img src={VIDEO_THUMB} alt="Preview" className="w-full h-full object-cover transition-transform" style={{ transform: `rotate(${rotation}deg) scaleX(${flipX}) scaleY(${flipY})` }} />
        {activeTool === "crop" && (
          <>
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute border border-white flex cursor-move pointer-events-auto" style={{ left: `${cropBox.x}%`, top: `${cropBox.y}%`, width: `${cropBox.w}%`, height: `${cropBox.h}%` }} onPointerDown={(e) => { e.stopPropagation(); setActiveCropDrag("pan"); setCropStart({ x: e.clientX, y: e.clientY, box: cropBox }); }}>
              <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/50" /><div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/50" /><div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/50" /><div className="absolute top-2/3 left-0 right-0 h-[1px] bg-white/50" />
              <div className="absolute -top-[2px] -left-[2px] w-[16px] h-[16px] border-t-[3px] border-l-[3px] border-white cursor-nwse-resize" onPointerDown={(e) => { e.stopPropagation(); setActiveCropDrag("tl"); setCropStart({ x: e.clientX, y: e.clientY, box: cropBox }); }}/>
              <div className="absolute -top-[2px] -right-[2px] w-[16px] h-[16px] border-t-[3px] border-r-[3px] border-white cursor-nesw-resize" onPointerDown={(e) => { e.stopPropagation(); setActiveCropDrag("tr"); setCropStart({ x: e.clientX, y: e.clientY, box: cropBox }); }}/>
              <div className="absolute -bottom-[2px] -left-[2px] w-[16px] h-[16px] border-b-[3px] border-l-[3px] border-white cursor-nesw-resize" onPointerDown={(e) => { e.stopPropagation(); setActiveCropDrag("bl"); setCropStart({ x: e.clientX, y: e.clientY, box: cropBox }); }}/>
              <div className="absolute -bottom-[2px] -right-[2px] w-[16px] h-[16px] border-b-[3px] border-r-[3px] border-white cursor-nwse-resize" onPointerDown={(e) => { e.stopPropagation(); setActiveCropDrag("br"); setCropStart({ x: e.clientX, y: e.clientY, box: cropBox }); }}/>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-between px-[16px] h-[48px] shrink-0 bg-[#0d0d0f]">
        <div className="flex items-center gap-[6px] w-[140px]"><span className="text-white text-[14px] font-medium tabular-nums">00:15:08</span><span className="text-[#555560] text-[14px] font-medium tabular-nums">/ 02:15:20</span></div>
        <button className="active:opacity-60 transition-opacity"><svg fill="none" height="28" viewBox="0 0 24 24" width="28"><path d={PLAY_ICON} fill="white" /></svg></button>
        <div className="flex items-center gap-[16px] w-[140px] justify-end">
          <button onClick={onShareProject} className="w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 active:opacity-60 transition-opacity"><svg fill="none" height="24" viewBox="0 0 24 24" width="24"><path d={SHARE_ICON} fill="white" /></svg></button>
          <button className="active:opacity-60 transition-opacity"><svg fill="none" height="20" viewBox="0 0 24 24" width="20"><path d={UNDO_ICON} fill="white" /></svg></button>
          <button className="active:opacity-60 transition-opacity"><svg fill="none" height="20" viewBox="0 0 24 24" width="20"><path d={REDO_ICON} fill="white" /></svg></button>
          <button className="active:opacity-60 transition-opacity" onClick={() => setShowComments(!showComments)}><svg fill="none" height="20" viewBox="0 0 24 24" width="20"><path d={showComments ? CHAT_ICON : CHAT_DISABLE_ICON} fill="white" /></svg></button>
          <button className="active:opacity-60 transition-opacity"><svg fill="none" height="20" viewBox="0 0 24 24" width="20"><path d={FULLSCREEN_ICON} fill="white" /></svg></button>
        </div>
      </div>

      <div className="flex-1 relative bg-[#0d0d0f] overflow-hidden">
        <div className="absolute inset-0 pt-[8px] pl-[16px] overflow-x-auto scrollbar-hide">
          <div className="flex flex-col gap-[4px] w-[200%] pb-[24px]">
             <div className="h-[20px] flex items-end gap-[40px] pl-[80px] mb-[4px] text-[#7e7e8f] text-[10px] font-medium font-mono"><span>00:00</span><span>•</span><span>00:02</span><span>•</span><span>00:04</span><span>•</span><span>00:06</span><span>•</span><span>00:08</span></div>
             <div className="flex gap-[4px] h-[60px]">
                {activeTool !== "flip" && activeTool !== "crop" && activeTool !== "speed" && (
                  <div className="relative w-[60px] h-full rounded-[8px] overflow-hidden shrink-0"><img src={VIDEO_THUMB} alt="Cover" className="w-full h-full object-cover filter brightness-75" /><div className="absolute inset-0 flex flex-col items-center justify-center gap-[4px]"><span className="text-white text-[10px] font-bold">COVER</span></div><div className="absolute bottom-[4px] right-[4px]"><svg fill="none" height="12" viewBox="0 0 24 24" width="12"><path d={PENCIL_ICON} fill="white" /></svg></div></div>
                )}
                <div ref={trimTrackRef} className={`relative flex-1 h-full rounded-[8px] overflow-hidden bg-[#2a2a35] ${activeTool !== "trim" ? "border-[1px] border-[#0088ff]" : ""}`}>
                  <div className="absolute inset-0 flex"><img src={VIDEO_THUMB} alt="Clip" className="w-1/4 h-full object-cover" /><img src={VIDEO_THUMB} alt="Clip" className="w-1/4 h-full object-cover" /><img src={VIDEO_THUMB} alt="Clip" className="w-1/4 h-full object-cover" /><img src={VIDEO_THUMB} alt="Clip" className="w-1/4 h-full object-cover" /></div>
                  {activeTool === "trim" && (
                    <div className="absolute inset-0 z-20 flex pointer-events-none">
                      <div style={{ width: `${trimHandles.start}%` }} className="h-full bg-black/60 backdrop-blur-[1px]" />
                      <div style={{ width: `${trimHandles.end - trimHandles.start}%` }} className="relative h-full border-y-[3px] border-[#00E5FF]">
                        <div className="absolute top-0 bottom-0 left-0 w-[14px] bg-white rounded-l-[4px] flex items-center justify-center pointer-events-auto cursor-ew-resize" style={{ transform: 'translateX(-100%)' }} onPointerDown={(e) => { e.stopPropagation(); setActiveDrag("start"); }}><svg fill="none" height="12" viewBox="0 0 24 24" width="12"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="black" /></svg></div>
                        <div className="absolute top-0 bottom-0 right-0 w-[14px] bg-white rounded-r-[4px] flex items-center justify-center pointer-events-auto cursor-ew-resize" style={{ transform: 'translateX(100%)' }} onPointerDown={(e) => { e.stopPropagation(); setActiveDrag("end"); }}><svg fill="none" height="12" viewBox="0 0 24 24" width="12"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="black" /></svg></div>
                      </div>
                      <div style={{ width: `${100 - trimHandles.end}%` }} className="h-full bg-black/60 backdrop-blur-[1px]" />
                    </div>
                  )}
                </div>
             </div>
          </div>
        </div>

        <div className="absolute top-[8px] h-[100px] left-1/2 w-[2px] bg-white pointer-events-none z-10" />

        {showComments && (
           <div className="absolute top-[16px] left-[64px] right-0 h-[24px] pointer-events-none z-10">
             {comments.map(c => (
               <div key={c.id} className="absolute flex flex-col items-center cursor-pointer pointer-events-auto transition-transform hover:scale-110 active:scale-95" style={{ left: `${c.position}%`, transform: 'translateX(-50%)' }} onClick={() => setSelectedCommentId(c.id)}>
                  <img src={c.avatar} className="w-[16px] h-[16px] rounded-full border-[1.5px] border-white bg-[#0d0d0f]" alt="avatar" />
                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-white -mt-[1px]" />
               </div>
             ))}
           </div>
        )}

        {activeTool !== "flip" && activeTool !== "crop" && activeTool !== "speed" && !selectedCommentId && (
          <button onClick={onNavigateAi} className="absolute right-[24px] bottom-[24px] w-[56px] h-[56px] rounded-[16px] bg-white shadow-[0_4px_16px_rgba(255,255,255,0.2)] flex items-center justify-center z-20 active:scale-95 transition-transform">
             <svg fill="none" height="32" viewBox="0 0 24 24" width="32"><path d={SPARKLE_SMALL} fill="black" /></svg>
          </button>
        )}

        <AnimatePresence>
          {selectedCommentId && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="absolute bottom-[24px] left-[20px] right-[20px] bg-[#1a1a21] rounded-[16px] p-[20px] z-50 shadow-2xl">
              <button onClick={() => setSelectedCommentId(null)} className="absolute top-[16px] right-[16px] w-[24px] h-[24px] flex items-center justify-center active:opacity-60"><svg fill="none" height="16" viewBox="0 0 24 24" width="16"><path d={CLOSE_ICON} fill="#7e7e8f" /></svg></button>
              <div className="text-[#81a1c1] text-[13px] font-medium mb-[8px]">{comments.find(c => c.id === selectedCommentId)?.time}</div>
              <div className="text-white text-[16px] font-medium leading-[1.4] mb-[20px] pr-[24px]">{comments.find(c => c.id === selectedCommentId)?.text}</div>
              <div className="flex gap-[12px]">
                <button onClick={() => setSelectedCommentId(null)} className="flex-1 h-[48px] rounded-[24px] bg-[#2a2a35] text-white font-medium flex items-center justify-center active:bg-[#353540] transition-colors">Cancel</button>
                <button onClick={() => { setSelectedCommentId(null); onOpenCommentThread?.(); }} className="flex-1 h-[48px] rounded-[24px] bg-white text-black font-semibold flex items-center justify-center active:bg-gray-200 transition-colors">Comment</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 bg-[#0d0d0f]">
        <AnimatePresence mode="wait">
          {activeTool === "flip" || activeTool === "trim" || activeTool === "crop" || activeTool === "speed" ? (
            <motion.div
              key={`${activeTool}-toolbar`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center justify-between px-[20px] pt-[16px] pb-[40px] relative z-30 bg-[#0d0d0f]"
            >
              <button 
                onClick={() => {
                  if (activeTool === "flip") {
                    setRotation(0);
                    setFlipX(1);
                    setFlipY(1);
                  }
                  if (activeTool === "speed") {
                    setSpeed(1);
                  }
                  setActiveTool(null);
                }}
                className="w-[44px] h-[44px] rounded-[12px] bg-[#1a1a21] flex items-center justify-center active:opacity-60 transition-colors"
              >
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                  <path d={CLOSE_ICON} fill="#7e7e8f" />
                </svg>
              </button>
              
              <span className="text-white text-[16px] font-medium capitalize">{activeTool}</span>

              <button 
                onClick={() => setActiveTool(null)}
                className="w-[44px] h-[44px] rounded-[12px] bg-[#1a1a21] flex items-center justify-center active:opacity-60 transition-colors"
              >
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                  <path d={CHECK_ICON} fill="#7e7e8f" />
                </svg>
              </button>
            </motion.div>
          ) : showComments ? (
            <motion.div
              key="comments-toolbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex items-center justify-between px-[20px] pt-[16px] pb-[40px] relative z-30 bg-[#0d0d0f]"
            >
              <div className="w-full h-[48px] bg-[#1a1a21] rounded-[24px] flex items-center px-[16px] border border-[#32323a]">
                <input 
                  type="text" 
                  placeholder="Reply" 
                  className="flex-1 bg-transparent text-white outline-none placeholder-[#7e7e8f] text-[15px]" 
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  onKeyDown={e => {
                     if (e.key === 'Enter') handleAddComment();
                  }}
                />
                <button 
                  onClick={handleAddComment} 
                  className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-all ml-[8px] ${replyText.trim() ? 'bg-white/20 active:opacity-60' : 'opacity-30'}`}
                >
                   <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                     <path d={UPLOAD_ICON} fill="white" />
                   </svg>
                </button>
              </div>
            </motion.div>
          ) : activeTool ? (
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

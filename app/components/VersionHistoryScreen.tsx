import { motion } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const CHEVRON_RIGHT = "M9 18l6-6-6-6-1.41 1.41L12.17 12l-4.58 4.59L9 18z";

const THUMBNAIL_URL = require('../../assets/122c10752004e8759762513f65ca6d9cfb3c6e06.png');

interface Props {
  onBack: () => void;
  onSelectVersion: () => void;
}

const VERSIONS = [
  { id: "09", title: "Checkpoint 09", time: "Today, 1:30 PM", current: true },
  { id: "08", title: "Checkpoint 08", time: "Today, 12:00 PM" },
  { id: "07", title: "Checkpoint 07", time: "Today, 11:15 AM" },
  { id: "06", title: "Checkpoint 06", time: "Today, 10:41 AM" },
  { id: "05", title: "Checkpoint 05", time: "Today, 10:41 AM" },
  { id: "04", title: "Checkpoint 04", time: "Today, 10:41 AM" },
  { id: "03", title: "Checkpoint 03", time: "Today, 10:41 AM" },
];

export function VersionHistoryScreen({ onBack, onSelectVersion }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0d0d0f] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center gap-[12px] px-[20px] pt-[20px] pb-[16px] shrink-0">
        <button
          onClick={onBack}
          className="active:opacity-60 transition-opacity"
          aria-label="Back"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={BACK_ICON} fill="white" />
          </svg>
        </button>
        <span className="text-white text-[18px] font-semibold">Versions</span>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[20px] pb-[100px]">
        <div className="flex flex-col gap-[12px] pt-[12px]">
          {VERSIONS.map((v) => (
            <button
              key={v.id}
              onClick={onSelectVersion}
              className={`flex items-center justify-between p-[12px] rounded-[16px] w-full text-left active:scale-[0.98] transition-transform ${
                v.current
                  ? "bg-[#0A1A2F] border-[1px] border-[#0088FF]"
                  : "bg-[#141416] border-[1px] border-transparent"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div className="w-[80px] h-[56px] rounded-[8px] overflow-hidden shrink-0">
                  <img src={THUMBNAIL_URL} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-white text-[16px] font-semibold leading-[20px]">{v.title}</span>
                  <span className="text-[#7e7e8f] text-[13px] font-medium leading-[18px]">{v.time}</span>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                {v.current && (
                  <span className="text-[#0088FF] text-[14px] font-semibold">Current</span>
                )}
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                  <path d={CHEVRON_RIGHT} fill={v.current ? "#0088FF" : "#aeaeb5"} />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

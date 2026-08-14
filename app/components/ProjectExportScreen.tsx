import { motion } from "motion/react";
import { useState } from "react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";

interface Props {
  onBack: () => void;
  onExportStart: () => void;
}

export function ProjectExportScreen({ onBack, onExportStart }: Props) {
  const [resolution, setResolution] = useState("1080p");
  const [fps, setFps] = useState("60");
  const [format, setFormat] = useState("MP4");

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0D0D0F]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[20px] shrink-0">
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
          Export Settings
        </h1>
        <div className="w-[40px]" /> {/* balance */}
      </div>

      <div className="flex-1 overflow-y-auto px-[20px]">
        {/* Settings Card */}
        <div className="bg-[#1C1C24] rounded-[16px] p-[20px] border border-white/5 flex flex-col gap-[24px]">
          
          {/* Resolution */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[#7E7E8F] text-[13px] font-medium">Resolution</span>
            <div className="flex gap-[8px]">
              {["720p", "1080p", "4K"].map(res => (
                <button
                  key={res}
                  onClick={() => setResolution(res)}
                  className={`flex-1 h-[44px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    resolution === res ? "bg-white text-black" : "bg-[#2A2A35] text-white"
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Frame Rate */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[#7E7E8F] text-[13px] font-medium">Frame Rate</span>
            <div className="flex gap-[8px]">
              {["24", "30", "60"].map(f => (
                <button
                  key={f}
                  onClick={() => setFps(f)}
                  className={`flex-1 h-[44px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    fps === f ? "bg-white text-black" : "bg-[#2A2A35] text-white"
                  }`}
                >
                  {f} fps
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-[#7E7E8F] text-[13px] font-medium">Format</span>
            <div className="flex gap-[8px]">
              {["MP4", "MOV", "GIF"].map(fmt => (
                <button
                  key={fmt}
                  onClick={() => setFormat(fmt)}
                  className={`flex-1 h-[44px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    format === fmt ? "bg-white text-black" : "bg-[#2A2A35] text-white"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Info */}
        <div className="mt-[24px] flex justify-between items-center px-[8px]">
          <span className="text-[#7E7E8F] text-[13px]">Estimated File Size</span>
          <span className="text-white text-[15px] font-medium">124 MB</span>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-[20px] pb-[32px] pt-[12px] bg-[#0D0D0F]">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onExportStart}
          className="w-full h-[56px] rounded-[16px] bg-white text-black text-[16px] font-semibold flex items-center justify-center gap-[8px]"
        >
          Export Video
        </motion.button>
      </div>
    </div>
  );
}

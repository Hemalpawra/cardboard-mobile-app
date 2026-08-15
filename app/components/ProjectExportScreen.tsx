import { motion } from "motion/react";
import { useState } from "react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const PLAY_ICON = "M8 5v14l11-7z";
const VIDEO_THUMB = require('../../assets/0228c1ba1abcca1af97143dd25085f9b13a73348.png');

interface Props {
  onBack: () => void;
  onExportStart: () => void;
}

export function ProjectExportScreen({ onBack, onExportStart }: Props) {
  const [resolution, setResolution] = useState("1080p");
  const [fps, setFps] = useState("50");
  const [codeRate, setCodeRate] = useState("Medium");

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0d0d0f] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[16px] shrink-0 z-20">
        <div className="flex items-center gap-[16px] overflow-hidden">
          <button onClick={onBack} className="active:opacity-60 transition-opacity shrink-0">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
              <path d={BACK_ICON} fill="white" />
            </svg>
          </button>
          <span className="text-white text-[16px] font-medium whitespace-nowrap truncate">Product Launch</span>
        </div>
        <button onClick={onExportStart} className="h-[32px] px-[16px] bg-white text-black font-semibold rounded-[8px] text-[14px] active:scale-95 transition-transform">
          Export
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px] scrollbar-hide">
        {/* Video Thumbnail */}
        <div className="w-full px-[16px] mb-[24px]">
          <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-black">
             <img src={VIDEO_THUMB} alt="Preview" className="w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-[48px] h-[48px] bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center active:scale-95 transition-transform">
                   <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" className="ml-[4px]">
                     <path d={PLAY_ICON} fill="white" />
                   </svg>
                </button>
             </div>
          </div>
        </div>

        <div className="px-[20px] flex flex-col gap-[24px]">
          {/* Resolution */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-white text-[14px] font-semibold">Resolution</span>
            <div className="flex gap-[12px]">
              {["720p", "1080p", "4K"].map(res => (
                <button
                  key={res}
                  onClick={() => setResolution(res)}
                  className={`flex-1 h-[40px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    resolution === res ? "bg-white text-black" : "bg-[#1a1a21] text-[#aeaeb5]"
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Frame Rate */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-white text-[14px] font-semibold">Frame Rate</span>
            <div className="flex gap-[12px]">
              {["25", "30", "50", "60"].map(f => (
                <button
                  key={f}
                  onClick={() => setFps(f)}
                  className={`flex-1 h-[40px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    fps === f ? "bg-white text-black" : "bg-[#1a1a21] text-[#aeaeb5]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Code Rate */}
          <div className="flex flex-col gap-[12px]">
            <span className="text-white text-[14px] font-semibold">Code Rate</span>
            <div className="flex gap-[12px]">
              {["Low", "Medium", "High"].map(cr => (
                <button
                  key={cr}
                  onClick={() => setCodeRate(cr)}
                  className={`flex-1 h-[40px] rounded-[8px] text-[14px] font-medium transition-colors ${
                    codeRate === cr ? "bg-white text-black" : "bg-[#1a1a21] text-[#aeaeb5]"
                  }`}
                >
                  {cr}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-[20px] bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f] to-transparent z-20 flex flex-col items-center">
        <span className="text-[#7e7e8f] text-[13px] font-medium mb-[16px]">Estimated size : 132 MB</span>
        <button 
          onClick={onExportStart}
          className="w-full h-[56px] rounded-[12px] bg-white text-black font-semibold text-[16px] flex items-center justify-center active:scale-95 transition-transform"
        >
          Export Video
        </button>
      </div>
    </div>
  );
}

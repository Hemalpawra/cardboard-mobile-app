import { motion } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const PLAY_ICON = "M8 5v14l11-7z";

const VIDEO_THUMB = new URL(
  "../../imports/Home/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png",
  import.meta.url
).href;

interface Props {
  onBack: () => void;
  onRestore: () => void;
}

export function VersionDetailsScreen({ onBack, onRestore }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0D0D0F]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[16px] shrink-0 bg-[#0D0D0F] z-20">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-[40px] h-[40px] rounded-full active:opacity-60 transition-opacity"
        >
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={BACK_ICON} fill="white" />
          </svg>
        </button>

        <div className="flex flex-col items-center gap-[2px]">
          <h1
            className="text-white text-[16px] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Color graded
          </h1>
          <span className="text-[#7E7E8F] text-[12px] font-medium">Yesterday, 4:15 PM</span>
        </div>

        <div className="w-[40px]" /> {/* balance */}
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
      </div>

      {/* Change Log */}
      <div className="flex-1 px-[20px] py-[24px] overflow-y-auto">
         <span className="text-white text-[18px] font-semibold block mb-[16px]">Changes in this version</span>
         
         <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="w-[8px] h-[8px] rounded-full bg-white mt-[6px]" />
              <div className="flex flex-col flex-1 pb-[16px] border-b border-white/10">
                 <span className="text-white text-[15px] font-medium">Applied Cinematic Filter</span>
                 <span className="text-[#7E7E8F] text-[13px] mt-[4px]">Adjusted contrast and saturation to give a warmer tone.</span>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="w-[8px] h-[8px] rounded-full bg-white mt-[6px]" />
              <div className="flex flex-col flex-1 pb-[16px] border-b border-white/10">
                 <span className="text-white text-[15px] font-medium">Trimmed intro</span>
                 <span className="text-[#7E7E8F] text-[13px] mt-[4px]">Removed the first 3 seconds of the clip.</span>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="w-[8px] h-[8px] rounded-full bg-white mt-[6px]" />
              <div className="flex flex-col flex-1 pb-[16px]">
                 <span className="text-white text-[15px] font-medium">Author</span>
                 <div className="flex items-center gap-[8px] mt-[8px]">
                   <div className="w-[24px] h-[24px] rounded-full bg-[#0088FF] flex items-center justify-center text-[10px] font-bold text-white">A</div>
                   <span className="text-[#AEAEB5] text-[14px]">Alex</span>
                 </div>
              </div>
            </div>
         </div>
      </div>

      {/* Action */}
      <div className="shrink-0 px-[20px] pb-[32px] pt-[12px] border-t border-white/5 bg-[#0D0D0F]">
         <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onRestore}
            className="w-full h-[56px] rounded-[16px] bg-white text-black text-[16px] font-semibold flex items-center justify-center"
         >
            Restore this version
         </motion.button>
      </div>

    </div>
  );
}

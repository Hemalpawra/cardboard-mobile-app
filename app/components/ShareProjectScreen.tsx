import { useState } from "react";
import { motion } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const LINK_ICON = "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z";
const EMAIL_ICON = "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z";

interface Props {
  onBack: () => void;
}

export function ShareProjectScreen({ onBack }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0D0D0F]">
      {/* Header */}
      <div className="flex items-center justify-between px-[20px] pt-[16px] pb-[20px] shrink-0 border-b border-white/5">
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
          Share Project
        </h1>
        <div className="w-[40px]" /> {/* balance */}
      </div>

      <div className="flex-1 overflow-y-auto px-[20px] py-[24px] space-y-[32px]">
        
        {/* Collaborators List */}
        <div className="flex flex-col gap-[16px]">
          <span className="text-white text-[18px] font-semibold">Who has access</span>
          
          <div className="bg-[#1C1C24] rounded-[16px] p-[8px] flex flex-col gap-[2px]">
            {/* Owner */}
            <div className="flex items-center justify-between p-[12px] rounded-[12px] bg-white/5">
              <div className="flex items-center gap-[12px]">
                 <div className="w-[40px] h-[40px] rounded-full bg-[#1FC16B] flex items-center justify-center text-white font-bold text-[16px]">
                   H
                 </div>
                 <div className="flex flex-col gap-[2px]">
                   <span className="text-white text-[15px] font-medium">Hemal (You)</span>
                   <span className="text-[#7E7E8F] text-[13px]">hemal@example.com</span>
                 </div>
              </div>
              <span className="text-[#7E7E8F] text-[13px] font-medium pr-[8px]">Owner</span>
            </div>

            {/* Collaborator 1 */}
            <div className="flex items-center justify-between p-[12px] rounded-[12px]">
              <div className="flex items-center gap-[12px]">
                 <div className="w-[40px] h-[40px] rounded-full bg-[#E84A5F] flex items-center justify-center text-white font-bold text-[16px]">
                   S
                 </div>
                 <div className="flex flex-col gap-[2px]">
                   <span className="text-white text-[15px] font-medium">Sarah</span>
                   <span className="text-[#7E7E8F] text-[13px]">sarah@example.com</span>
                 </div>
              </div>
              <select className="bg-transparent text-[#0088FF] text-[13px] font-medium outline-none pr-[8px] text-right appearance-none">
                <option>Editor</option>
                <option>Viewer</option>
                <option>Remove</option>
              </select>
            </div>

            {/* Collaborator 2 */}
            <div className="flex items-center justify-between p-[12px] rounded-[12px]">
              <div className="flex items-center gap-[12px]">
                 <div className="w-[40px] h-[40px] rounded-full bg-[#0088FF] flex items-center justify-center text-white font-bold text-[16px]">
                   A
                 </div>
                 <div className="flex flex-col gap-[2px]">
                   <span className="text-white text-[15px] font-medium">Alex</span>
                   <span className="text-[#7E7E8F] text-[13px]">alex@example.com</span>
                 </div>
              </div>
              <select className="bg-transparent text-[#0088FF] text-[13px] font-medium outline-none pr-[8px] text-right appearance-none">
                <option>Editor</option>
                <option>Viewer</option>
                <option>Remove</option>
              </select>
            </div>
          </div>
        </div>

        {/* Share Actions */}
        <div className="flex flex-col gap-[12px]">
          <button 
             onClick={handleCopy}
             className="w-full h-[56px] rounded-[16px] bg-[#1C1C24] text-white text-[16px] font-medium flex items-center justify-center gap-[10px] active:scale-95 transition-transform"
          >
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
              <path d={LINK_ICON} />
            </svg>
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
          
          <button className="w-full h-[56px] rounded-[16px] bg-[#1C1C24] text-white text-[16px] font-medium flex items-center justify-center gap-[10px] active:scale-95 transition-transform">
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
              <path d={EMAIL_ICON} />
            </svg>
            Invite via Email
          </button>
        </div>

      </div>
    </div>
  );
}

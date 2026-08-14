import { motion } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const HEART_OUTLINE = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z";
const HEART_FILLED = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
const UP_ARROW = "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z";

interface Props {
  onBack: () => void;
}

export function CommentThreadScreen({ onBack }: Props) {
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
        <span className="text-white text-[18px] font-semibold">Comment</span>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios px-[20px] pb-[100px]">
        {/* Top Context Card */}
        <div className="bg-[#141416] rounded-[16px] p-[20px] mb-[24px]">
          <span className="text-[#7e7e8f] text-[15px] font-medium block mb-[12px]">00:36:14</span>
          <p className="text-white text-[20px] font-semibold leading-[28px] m-0">
            Let's make this Transition smoother
          </p>
        </div>

        <span className="text-[#7e7e8f] text-[15px] font-bold block mb-[16px]">3 replies</span>

        <div className="flex flex-col gap-[16px]">
          {/* Reply 1 */}
          <div className="bg-[#141416] rounded-[16px] p-[16px]">
            <div className="flex justify-between items-start mb-[12px]">
              <div className="flex gap-[12px] items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E4E4E7]" />
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold">Alex Dawson</span>
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="text-[#7e7e8f] text-[13px] font-medium">2m ago</span>
                <div className="w-[10px] h-[10px] rounded-full bg-[#1FC16B]" />
              </div>
            </div>
            <p className="text-white text-[15px] font-normal leading-[22px] ml-[52px] mb-[16px] m-0">
              I Agree, maybe try a fade instead?
            </p>
            <div className="flex justify-between items-center ml-[52px]">
              <button className="text-[#white] text-[14px] font-medium active:opacity-60 transition-opacity">
                Reply
              </button>
              <div className="flex items-center gap-[6px]">
                <button className="active:opacity-60 transition-opacity">
                  <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                    <path d={HEART_OUTLINE} fill="#FF3B30" />
                  </svg>
                </button>
                <span className="text-white text-[15px] font-medium">2</span>
              </div>
            </div>
          </div>

          {/* Reply 2 */}
          <div className="bg-[#141416] rounded-[16px] p-[16px]">
            <div className="flex justify-between items-start mb-[12px]">
              <div className="flex gap-[12px] items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E4E4E7]" />
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold">Jordan Lee</span>
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="text-[#7e7e8f] text-[13px] font-medium">5m ago</span>
                <div className="w-[10px] h-[10px] rounded-full bg-[#1FC16B]" />
              </div>
            </div>
            <p className="text-white text-[15px] font-normal leading-[22px] ml-[52px] mb-[16px] m-0">
              That sounds interesting, I like the idea!
            </p>
            <div className="flex justify-between items-center ml-[52px]">
              <button className="text-[#white] text-[14px] font-medium active:opacity-60 transition-opacity">
                Reply
              </button>
              <div className="flex items-center gap-[6px]">
                <button className="active:opacity-60 transition-opacity">
                  <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                    <path d={HEART_OUTLINE} fill="#FF3B30" />
                  </svg>
                </button>
                <span className="text-white text-[15px] font-medium">3</span>
              </div>
            </div>
          </div>

          {/* Reply 3 */}
          <div className="bg-[#141416] rounded-[16px] p-[16px]">
            <div className="flex justify-between items-start mb-[12px]">
              <div className="flex gap-[12px] items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E4E4E7]" />
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold">Taylor Smith</span>
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="text-[#7e7e8f] text-[13px] font-medium">10m ago</span>
                <div className="w-[10px] h-[10px] rounded-full bg-[#1FC16B]" />
              </div>
            </div>
            <p className="text-white text-[15px] font-normal leading-[22px] ml-[52px] mb-[16px] m-0">
              Could we also consider a slide animation?
            </p>
            <div className="flex justify-between items-center ml-[52px]">
              <button className="text-[#white] text-[14px] font-medium active:opacity-60 transition-opacity">
                Reply
              </button>
              <div className="flex items-center gap-[6px]">
                <button className="active:opacity-60 transition-opacity">
                  <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                    <path d={HEART_OUTLINE} fill="#FF3B30" />
                  </svg>
                </button>
                <span className="text-white text-[15px] font-medium">1</span>
              </div>
            </div>
          </div>

          {/* Reply 4 */}
          <div className="bg-[#141416] rounded-[16px] p-[16px]">
            <div className="flex justify-between items-start mb-[12px]">
              <div className="flex gap-[12px] items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E4E4E7]" />
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-bold">Morgan Reed</span>
                </div>
              </div>
              <div className="flex items-center gap-[6px]">
                <span className="text-[#7e7e8f] text-[13px] font-medium">15m ago</span>
                <div className="w-[10px] h-[10px] rounded-full bg-[#1FC16B]" />
              </div>
            </div>
            <p className="text-white text-[15px] font-normal leading-[22px] ml-[52px] mb-[16px] m-0">
              I'm on board with the fade, let's test it!
            </p>
            <div className="flex justify-between items-center ml-[52px]">
              <button className="text-[#white] text-[14px] font-medium active:opacity-60 transition-opacity">
                Reply
              </button>
              <div className="flex items-center gap-[6px]">
                <button className="active:opacity-60 transition-opacity">
                  <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                    <path d={HEART_OUTLINE} fill="#7e7e8f" />
                  </svg>
                </button>
                <span className="text-[#7e7e8f] text-[15px] font-medium">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Input */}
      <div className="shrink-0 px-[20px] pb-[32px] pt-[16px] bg-[#0d0d0f] border-t border-[#1c1c24]">
        <div className="flex items-center gap-[12px] h-[52px] rounded-[16px] border-[1px] border-[#32323a] bg-[#141416] px-[16px]">
          <input
            type="text"
            placeholder="Reply"
            className="flex-1 bg-transparent text-white text-[16px] placeholder:text-[#7e7e8f] outline-none"
          />
          <button className="w-[32px] h-[32px] rounded-full border border-[#32323a] flex items-center justify-center active:opacity-60 transition-opacity bg-transparent shrink-0">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
              <path d={UP_ARROW} fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

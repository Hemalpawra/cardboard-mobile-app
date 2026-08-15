import imgCheckmark from "./checkmark_success.jpg";

const HELP_CIRCLE_1 = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const HELP_CIRCLE_2 = "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13";

interface ProjectReadyProps {
  onOpenProject?: () => void;
  onBack?: () => void;
}

export default function ProjectReady({ onOpenProject, onBack }: ProjectReadyProps) {
  return (
    <div
      className="bg-[#0d0d0f] flex flex-col items-center justify-between overflow-clip relative w-full h-full"
      data-name="Project Ready"
    >
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[24px] items-center justify-center px-[24px] pb-[24px] w-full min-h-0">
        {/* Top bar: Back + Help */}
        <div className="w-full shrink-0">
          <div className="flex items-center justify-between py-[6px] w-full">
            {/* Back arrow */}
            <button
              onClick={onBack}
              className="flex gap-[8px] items-center shrink-0 w-[36px] h-[36px] items-center justify-center active:opacity-60 transition-opacity"
              aria-label="Go back"
            >
              <div className="w-[24px] h-[24px] relative">
                <svg fill="none" height="16" viewBox="0 0 16 16" width="16" className="absolute inset-[4px]">
                  <path
                    d="M15 8H1M1 8L8 15M1 8L8 1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
            {/* Help icon */}
            <div className="flex gap-[12px] items-center shrink-0">
              <div className="w-[24px] h-[24px] relative">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                  <path d={HELP_CIRCLE_1} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={HELP_CIRCLE_2} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M12 17H12.01" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col gap-[56px] items-start w-full min-h-0">
          {/* Icon Container with glow */}
          <div className="flex flex-col gap-[10px] items-center justify-center py-[55px] rounded-[12px] w-full shrink-0 relative">
            {/* Green glow behind icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[300px] h-[300px] rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, #1FC16B 0%, transparent 70%)",
                }}
              />
            </div>
            {/* Checkmark image */}
            <img
              src={imgCheckmark}
              alt="Project ready checkmark"
              className="relative w-[120px] h-[120px] object-contain z-10"
            />
          </div>

          {/* Text Container */}
          <div className="flex flex-col gap-[16px] items-start w-full">
            <h1 className="font-['Inter',sans-serif] font-semibold text-[32px] leading-[44px] text-white w-[316px]">
              Your project is ready!
            </h1>
            <div className="font-['Inter',sans-serif] font-medium text-[20px] text-[#aeaeb5] w-full">
              <p className="leading-[30px] mb-0">Ai created a first draft for you.</p>
              <p className="leading-[30px]">Let's review it.</p>
            </div>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
          <button
            onClick={onOpenProject}
            className="bg-white flex items-center justify-center overflow-clip px-[16px] py-[14px] rounded-[12px] w-full active:scale-[0.98] transition-transform cursor-pointer"
          >
            <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[24px] text-[#0d0d0f] text-center whitespace-nowrap">
              Open Project
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
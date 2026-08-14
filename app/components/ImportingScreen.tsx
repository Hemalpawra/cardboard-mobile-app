import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";
import svgPaths from "../../imports/Importing/svg-ot7w2e6jgi";

const BACK_ARROW = "M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z";
const HELP_CIRCLE = "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z";
const HELP_Q = "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13";

function GalleryOptionIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[24px]" style={{ transform: "rotate(90deg)" }}>
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d={svgPaths.p36159b00} stroke="#858590" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function VideoOptionIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[24px]">
      <svg fill="none" height="16" viewBox="0 0 24 16" width="24">
        <path d="M23 3L16 8L23 13V3Z" stroke="#858590" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p5f37b00} stroke="#858590" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function AIOptionIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[24px]">
      <svg fill="none" height="20" viewBox="0 0 22 20" width="22">
        <path d={svgPaths.p1d171680} stroke="#858590" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="flex items-center justify-center shrink-0 size-[30px]" style={{ transform: "rotate(90deg)" }}>
      <svg fill="none" height="9.25" viewBox="0 0 15 9.25" width="15">
        <path d={svgPaths.p20227000} fill="#858590" />
      </svg>
    </div>
  );
}

interface OptionRowProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  onClick: () => void;
}

function OptionRow({ icon, label, badge, onClick }: OptionRowProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      className="flex items-center justify-between w-full px-[16px] py-[16px] rounded-[12px] text-left"
      style={{ background: "rgba(163,163,168,0.05)" }}
    >
      <div className="flex items-center gap-[8px]">
        {icon}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            color: "#858590",
            lineHeight: "24px",
          }}
        >
          {label}
        </span>
      </div>
      <div className="flex items-center gap-[8px]">
        {badge && (
          <div
            className="flex items-center px-[10px] rounded-[12px]"
            style={{ background: "#0088FF", height: 30 }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: "white",
                lineHeight: "18px",
              }}
            >
              {badge}
            </span>
          </div>
        )}
        <ChevronRight />
      </div>
    </motion.button>
  );
}

interface Props {
  onBack: () => void;
  onGallery: () => void;
  onRecord: () => void;
  onAI: () => void;
  onSkip: () => void;
}

export function ImportingScreen({ onBack, onGallery, onRecord, onAI, onSkip }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <StatusBar />

      <div className="flex flex-col flex-1 min-h-0 px-[24px] pt-[6px] pb-[24px] gap-[24px]">
        <div className="flex items-center justify-between py-[6px]">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[24px] h-[24px] active:opacity-60 transition-opacity"
            aria-label="Go back"
          >
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path d={BACK_ARROW} fill="white" />
            </svg>
          </button>
          <button className="flex items-center justify-center w-[24px] h-[24px]" aria-label="Help">
            <svg fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={HELP_CIRCLE} stroke="#7E7E8F" strokeWidth="2" />
              <path d={HELP_Q} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 17H12.01" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-[32px] flex-1 min-h-0">
          <div className="flex flex-col gap-[8px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Import your first video
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              Let's create something amazing
            </p>
          </div>

          <div className="flex flex-col gap-[6px]">
            <OptionRow
              icon={<GalleryOptionIcon />}
              label="Import from gallery"
              onClick={onGallery}
            />
            <OptionRow
              icon={<VideoOptionIcon />}
              label="Record a new video"
              onClick={onRecord}
            />
            <OptionRow
              icon={<AIOptionIcon />}
              label="Start with Ai"
              badge="Beta"
              onClick={onAI}
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12 }}
          onClick={onSkip}
          className="w-full h-[54px] rounded-[12px] flex items-center justify-center border border-[#32323a] shrink-0"
          style={{
            background: "rgba(163,163,168,0.05)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            color: "#a9a9b4",
          }}
        >
          Not now
        </motion.button>
      </div>

      <div className="h-[30px] relative shrink-0 w-full">
        <div className="absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 -translate-x-1/2 rounded-[100px] w-[135px]" />
      </div>
    </motion.div>
  );
}

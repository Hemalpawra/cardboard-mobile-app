import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StatusBar } from "./StatusBar";

// Welcome-1 images
import imgLandscape from "figma:asset/241d465635db6796da8cdec309b5098fe1243602.png";
import imgPortrait from "figma:asset/0228c1ba1abcca1af97143dd25085f9b13a73348.png";
import imgMain from "figma:asset/d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

// Collaboration avatars
import imgSarah from "figma:asset/7fabba66b3b4dcbc5062c03ace505e17670046e6.png";
import imgAlex from "figma:asset/b4b21f97534ca6e1f6b6d44331abf2c568065fa3.png";
import imgJordan from "figma:asset/e2f54ea377360597461fe5b2f652e40c6e0eb2e5.png";
import imgTaylor from "figma:asset/9c3fb3ab933ec3fcc1824cb87148aca51753330c.png";

// AiBRoll images
import imgBroll0 from "figma:asset/377151205f4bf6fb72d05bc867fbb9fd68b8cb5b.png";
import imgBroll1 from "figma:asset/1a96c9030a85cf3cebd58284eaadfeb1b710f90c.png";
import imgBroll2 from "figma:asset/122c10752004e8759762513f65ca6d9cfb3c6e06.png";
import imgBroll3 from "figma:asset/0228c1ba1abcca1af97143dd25085f9b13a73348.png";
import imgBroll4 from "figma:asset/994380c74aa5b5ae60fb4cefa21fc7272d1e5b68.png";

// Shared skip chevron path
const SKIP_CHEVRON = "M6 2.8L1.4 7.4L0 6L6 0L12 6L10.6 7.4L6 2.8Z";
// Play icon path
const PLAY_ICON = "M0 31.6994V0L24.9067 15.8497L0 31.6994Z";
// Checkmark path
const CHECK_PATH = "M14.3333 1L5.16667 10.1667L1 6";

interface Props {
  onComplete: () => void;
  onSkip: () => void;
}

const SLIDE_COUNT = 4;

export function OnboardingScreen({ onComplete, onSkip }: Props) {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (slide < SLIDE_COUNT - 1) {
      setDirection(1);
      setSlide(slide + 1);
    } else {
      onComplete();
    }
  };

  const goPrev = () => {
    if (slide > 0) {
      setDirection(-1);
      setSlide(slide - 1);
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <StatusBar />

      <div className="flex flex-col flex-1 min-h-0">
        {/* Slide area */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={slide}
            custom={direction}
            className="flex flex-col flex-1 min-h-0"
            initial={{ opacity: 0, x: direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 32 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) goNext();
              else if (info.offset.x > 50) goPrev();
            }}
          >
            <div className="flex flex-col flex-1 gap-[24px] min-h-0 p-[24px]">
              {/* Skip */}
              <button
                onClick={onSkip}
                className="self-end flex items-center gap-[2px] text-[#858590] text-[16px] leading-[24px] active:opacity-70 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif" }}
                aria-label="Skip onboarding"
              >
                Skip
                <div className="flex items-center justify-center w-[24px] h-[24px]" style={{ containerType: "size" }}>
                  <div style={{ transform: "rotate(90deg)" }}>
                    <svg fill="none" height="7.4" viewBox="0 0 12 7.4" width="12">
                      <path d={SKIP_CHEVRON} fill="#858590" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Slide visual + text */}
              {slide === 0 && <Slide0 />}
              {slide === 1 && <Slide1 />}
              {slide === 2 && <Slide2 />}
              {slide === 3 && <Slide3 />}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom controls — outside AnimatePresence so they don't animate */}
        <div className="flex flex-col gap-[24px] px-[24px] pb-[0px] shrink-0">
          {/* Pagination */}
          <div className="flex gap-[8px] justify-center">
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > slide ? 1 : -1);
                  setSlide(i);
                }}
                animate={{ width: i === slide ? 24 : 10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-[6px] rounded-[16px]"
                style={{ background: i === slide ? "#ffffff" : "#32323a" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Continue button */}
          <motion.button
            onClick={goNext}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="w-full bg-white text-[#0d0d0f] text-[16px] rounded-[12px] py-[10px] px-[16px] text-center leading-[24px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Continue
          </motion.button>
        </div>

        {/* iPhone home indicator */}
        <div className="h-[30px] relative shrink-0 w-full" data-name="Iphone Indicator">
          <div className="absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 -translate-x-1/2 rounded-[100px] w-[135px]" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Slide 0: Edit Videos by talking ─────────────────────────────────────────
function Slide0() {
  return (
    <>
      <div className="flex flex-col gap-[24px] shrink-0">
        <div className="flex flex-col text-white text-[32px] leading-[44px] whitespace-pre-wrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
          <p className="m-0">Edit Videos by </p>
          <p className="m-0">talking</p>
        </div>
        <p className="text-[#aeaeb5] text-[20px] leading-[30px] m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          Your AI Editor can trim, caption, find B-roll and prepare videos for every platform.
        </p>
      </div>

      {/* CommentsContainer visual */}
      <div className="flex-1 min-h-0 relative opacity-90 overflow-hidden rounded-[12px]">
        {/* Landscape image top right */}
        <div className="absolute flex items-center justify-center" style={{ left: 201, top: 26, width: 141.194, height: 136.506 }}>
          <div style={{ transform: "rotate(3.8deg)" }}>
            <div className="relative rounded-[25px] overflow-hidden" style={{ width: 133, height: 127.968 }}>
              <img
                alt=""
                src={imgLandscape}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[25px] outline outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </div>
        </div>

        {/* Small portrait bottom left */}
        <div className="absolute flex items-center justify-center" style={{ left: 14.16, top: 67.11, width: 97.537, height: 97.541 }}>
          <div style={{ transform: "rotate(-17.03deg)" }}>
            <div className="relative rounded-[16px] overflow-hidden" style={{ width: 78.089, height: 78.096 }}>
              <img
                alt=""
                src={imgPortrait}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[16px] outline outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          </div>
        </div>

        {/* Main image center with play button */}
        <div className="absolute flex items-center justify-center" style={{ left: 91.93, top: 56.45, width: 142.854, height: 161.483 }}>
          <div style={{ transform: "rotate(3.8deg)" }}>
            <div className="flex items-center justify-center overflow-hidden relative rounded-[25px]" style={{ width: 133, height: 153 }}>
              <img
                alt=""
                src={imgMain}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[25px] outline outline-1 -outline-offset-1 outline-white/10"
              />
              <div className="bg-[#0d0d0f] overflow-hidden relative rounded-[40px] shrink-0" style={{ width: 54.342, height: 54.342 }}>
                <div className="absolute" style={{ inset: "20.83% 20.83% 20.83% 33.33%" }}>
                  <svg fill="none" height="31.6994" viewBox="0 0 24.9067 31.6994" width="24.9067" className="absolute inset-0 w-full h-full">
                    <path d={PLAY_ICON} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio label */}
        <div className="absolute overflow-hidden rounded-[14px]" style={{ left: 14, top: 203.02, width: 262 }}>
          <div className="bg-[rgba(31,193,107,0.1)] flex items-center px-[24px] py-[16px]" style={{ width: 633 }}>
            <span
              className="text-white text-[14px] leading-[20px] tracking-[0.1px] whitespace-nowrap"
              style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
            >
              Audio
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Slide 1: One prompt Multiple edits (AiFeatures) ─────────────────────────
function Slide1() {
  return (
    <>
      {/* Card visual comes first in Figma */}
      <div className="flex-1 min-h-0 flex flex-col gap-[8px] items-start justify-center opacity-90 overflow-hidden px-[24px] py-[24px] rounded-[12px]">
        {/* Instruction bubble (right-aligned) */}
        <div className="flex flex-col items-end w-full shrink-0">
          <div className="bg-[#32323a] rounded-[12px] p-[10px]" style={{ width: 262 }}>
            <p className="text-white text-[16px] leading-[24px] m-0" style={{ fontFamily: "Inter, sans-serif" }}>
              Remove all Pauses and ums from this video, add captions
            </p>
          </div>
        </div>

        {/* Thinking */}
        <div className="shrink-0">
          <p className="text-white text-[16px] leading-[24px] m-0" style={{ fontFamily: "Inter, sans-serif" }}>
            Thinking....
          </p>
        </div>

        {/* Blurred loading bar */}
        <div
          className="shrink-0 w-full rounded-[4px]"
          style={{
            height: 50,
            background: "rgba(31, 193, 107, 0.35)",
            filter: "blur(12.85px)",
          }}
        />

        {/* Results */}
        <div className="flex flex-col gap-[20px] w-full shrink-0">
          <CheckResult label="Removed 12 pauses" />
          <CheckResult label="Added captions" />
        </div>
      </div>

      {/* Title + subtitle below */}
      <div className="flex flex-col gap-[24px] shrink-0">
        <div className="flex flex-col text-white text-[32px] leading-[44px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
          <p className="m-0">One prompt</p>
          <p className="m-0">Multiple edits.</p>
        </div>
        <div className="flex flex-col text-[#aeaeb5] text-[20px] leading-[30px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          <p className="m-0">Let AI handle the boring work</p>
          <p className="m-0">so you can focus on your story.</p>
        </div>
      </div>
    </>
  );
}

function CheckResult({ label }: { label: string }) {
  return (
    <div className="flex gap-[8px] items-center w-full">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 w-[20px] h-[20px]">
        <div className="overflow-hidden relative rounded-[inherit] w-full h-full">
          <div className="absolute" style={{ bottom: "29.17%", left: "16.67%", right: "16.67%", top: "25%" }}>
            <div className="absolute" style={{ inset: "-10.91% -7.5%" }}>
              <svg fill="none" height="11.1667" viewBox="0 0 15.3333 11.1667" width="15.3333" className="block w-full h-full">
                <path d={CHECK_PATH} stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid pointer-events-none rounded-[21px]" style={{ inset: -1 }} />
      </div>
      <span className="text-[#aeaeb5] text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

// ─── Slide 2: Built for teams (Collaboration) ─────────────────────────────────
function Slide2() {
  const comments = [
    { img: imgSarah, name: "Sarah", text: "Can we Shorten this part?", time: "2m ago" },
    { img: imgAlex, name: "Alex", text: "AI suggestion applied", time: "5m ago" },
    { img: imgJordan, name: "Jordan", text: "Feedback received", time: "10m ago" },
    { img: imgTaylor, name: "Taylor", text: "Design revision sent", time: "15m ago" },
  ];

  return (
    <>
      {/* Comments visual */}
      <div className="flex flex-1 min-h-0 items-center opacity-80 overflow-hidden p-[16px] rounded-[12px] w-full">
        <div className="flex flex-col gap-[6px] flex-1 min-h-0 overflow-hidden h-full">
          {comments.map((c) => (
            <div
              key={c.name}
              className="bg-[rgba(163,163,168,0.05)] flex items-center justify-between overflow-hidden p-[10px] rounded-[12px] shrink-0 w-full"
              style={{ minHeight: 88 }}
            >
              <div className="flex flex-1 gap-[10px] items-start min-w-0">
                <img
                  alt={c.name}
                  src={c.img}
                  className="shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-white/10"
                  style={{ width: 47, height: 47 }}
                />
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-white text-[20px] leading-[30px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                    {c.name}
                  </span>
                  <span className="text-white text-[16px] leading-[24px]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {c.text}
                  </span>
                </div>
              </div>
              <div className="flex gap-[4px] items-center shrink-0 ml-2">
                <span className="text-white text-[12px] leading-[18px] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>
                  {c.time}
                </span>
                <svg fill="none" height="10" viewBox="0 0 10 10" width="10">
                  <circle cx="5" cy="5" fill="#84EBB4" r="5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Title + subtitle */}
      <div className="flex flex-col gap-[24px] shrink-0">
        <p className="text-white text-[32px] leading-[44px] m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
          Built for teams
        </p>
        <div className="flex flex-col text-[#aeaeb5] text-[20px] leading-[30px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          <p className="m-0">Comment, suggest, and approve</p>
          <p className="m-0">videos together — just like Figma.</p>
        </div>
      </div>
    </>
  );
}

// ─── Slide 3: Ai finds the Perfect B-roll ─────────────────────────────────────
function Slide3() {
  const gridImages = [imgBroll0, imgBroll1, imgBroll2, imgBroll3, imgBroll1, imgBroll0, imgBroll4, imgBroll2];

  return (
    <>
      {/* Title */}
      <div className="flex flex-col gap-[24px] shrink-0">
        <div className="flex flex-col text-white text-[32px] leading-[44px] whitespace-pre-wrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
          <p className="m-0">Ai finds the </p>
          <p className="m-0">Perfect B-roll.</p>
        </div>
        <p className="text-[#aeaeb5] text-[20px] leading-[30px] m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          Save hours searching. Ai understands your video and finds what it needs.
        </p>
      </div>

      {/* Card with image grid */}
      <div className="flex-1 min-h-0 bg-[rgba(163,163,168,0.05)] relative overflow-hidden rounded-[12px] w-full">
        {/* Image grid — offset to right, partially clipped */}
        <div
          className="absolute gap-[10px] grid opacity-70"
          style={{
            left: 88,
            top: 26,
            width: 205,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gridTemplateRows: "repeat(4, fit-content(100%))",
            gap: 10,
          }}
        >
          {gridImages.map((src, i) => {
            const isTall = i === 0 || i === 4;
            return (
              <div
                key={i}
                className="relative rounded-[16px] overflow-hidden"
                style={isTall ? { gridRow: "span 1", height: 78 } : { width: 101, height: 78 }}
              >
                <img
                  alt=""
                  src={src}
                  className="absolute inset-0 w-full h-full object-cover rounded-[16px] outline outline-1 -outline-offset-1 outline-white/10"
                />
              </div>
            );
          })}
        </div>

        {/* Search card overlay */}
        <div className="absolute flex flex-col gap-[2px] items-start" style={{ left: 17, top: 46, width: 216 }}>
          <div className="bg-[rgba(21,21,23,0.85)] flex flex-col items-center justify-center p-[10px] rounded-[12px] w-full">
            <p className="text-white text-[20px] leading-[30px] m-0 w-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              Find B-roll of office presentation
            </p>
          </div>
          <div className="bg-[rgba(21,21,23,0.85)] flex flex-col items-center justify-center p-[10px] rounded-[12px] w-full">
            <p className="text-[#7cc2ff] text-[16px] leading-[24px] m-0 w-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
              12 matches found
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

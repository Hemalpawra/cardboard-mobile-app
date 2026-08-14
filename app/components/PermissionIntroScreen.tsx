import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";
import svgPaths from "../../imports/PermissionIntro/svg-h9u4p2eg8o";

interface Props {
  onBack: () => void;
  onContinue: () => void;
}

// Gallery glass icon (photo/image icon)
function GalleryIcon() {
  return (
    <div className="h-[77.805px] relative w-[80.554px]">
      {/* Background shape */}
      <div className="absolute inset-[0_12.15%_7%_0]">
        <div className="absolute inset-[-4.75%_-7.58%_-5.46%_-6.93%]">
          <svg className="block size-full" fill="none" height="79.7487" preserveAspectRatio="none" viewBox="0 0 81.0334 79.7487" width="81.0334">
            <path d={svgPaths.p11213400} fill="url(#pig_bg_paint0)" />
            <g filter="url(#pig_bg_filter0)">
              <path d={svgPaths.p1ce5c200} fill="#7E7E8F" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="79.7487" id="pig_bg_filter0" width="81.0334" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_pig" stdDeviation="9.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="pig_bg_paint0" x1="8.86173" x2="78.9204" y1="17.2067" y2="40.7714">
                <stop stopColor="white" />
                <stop offset="1" stopColor="#7E7E8F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Icon shape */}
      <div className="absolute inset-[21.67%_0_0_24.35%]">
        <div className="absolute inset-[-1.64%]">
          <svg className="block size-full" fill="none" height="62.9425" preserveAspectRatio="none" viewBox="0 0 62.9425 62.9425" width="62.9425">
            <mask fill="black" height="63" id="pig_icon_mask1" maskUnits="userSpaceOnUse" width="63" x="0" y="0">
              <rect fill="white" height="63" width="63" />
              <path d={svgPaths.p15eef300} />
            </mask>
            <path d={svgPaths.p15eef300} fill="white" fillOpacity="0.3" />
            <path d={svgPaths.p118f8100} fill="url(#pig_icon_paint1)" mask="url(#pig_icon_mask1)" />
            <mask fill="white" id="pig_icon_mask2">
              <path d={svgPaths.p1bc34600} />
            </mask>
            <path d={svgPaths.p1bc34600} fill="url(#pig_icon_paint2)" />
            <path d={svgPaths.pd50c180} fill="url(#pig_icon_paint3)" fillOpacity="0.5" mask="url(#pig_icon_mask2)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="pig_icon_paint1" x1="10.701" x2="49.5759" y1="8.09988" y2="56.2473">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="pig_icon_paint2" x1="52.8181" x2="1.7059" y1="20.9721" y2="22.7576">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="pig_icon_paint3" x1="15.1227" x2="54.0919" y1="27.6059" y2="27.8363">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Mic/voice shape inside the arrow glass icon
function VoiceShape() {
  return (
    <svg className="block size-full" fill="none" height="36.667" preserveAspectRatio="none" viewBox="0 0 31.167 36.667" width="31.167">
      <mask fill="white" id="piv_mask1">
        <path d={svgPaths.p1d73b600} />
      </mask>
      <path d={svgPaths.p1d73b600} fill="url(#piv_paint0)" />
      <path d={svgPaths.p1b4d9580} fill="url(#piv_paint1)" fillOpacity="0.5" mask="url(#piv_mask1)" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="piv_paint0" x1="28.9573" x2="-5.77003" y1="6.62132" y2="7.58375">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="piv_paint1" x1="29.8316" x2="-0.484206" y1="19.1091" y2="20.1826">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Arrow/mic glass icon
function ArrowIcon() {
  return (
    <div className="h-[87.982px] relative w-[87.165px]">
      {/* Background blob */}
      <div className="absolute inset-[0_6.22%_7.1%_0]">
        <div className="absolute inset-[-1.82%_0_0_-2.82%]">
          <svg className="block size-full" fill="none" height="83.2272" preserveAspectRatio="none" viewBox="0 0 84.0468 83.2272" width="84.0468">
            <path d={svgPaths.p2439cb80} fill="url(#pia_paint0)" />
            <g filter="url(#pia_filter1)">
              <path d={svgPaths.p15978200} fill="white" fillOpacity="0.32" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80.837" id="pia_filter1" width="83.51" x="0" y="-1.19209e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_pia" stdDeviation="8" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="pia_paint0" x1="49.0793" x2="-0.185316" y1="45.4041" y2="88.1269">
                <stop stopColor="#7E7E8F" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Glass shape fill */}
      <div className="absolute inset-[24.15%_0_0_23.44%]">
        <div className="absolute inset-[-1.5%]">
          <svg className="block size-full" fill="none" height="68.7358" preserveAspectRatio="none" viewBox="0 0 68.7358 68.7358" width="68.7358">
            <mask fill="black" height="69" id="pia_mask1" maskUnits="userSpaceOnUse" width="69" x="0" y="0">
              <rect fill="white" height="69" width="69" />
              <path d={svgPaths.p3d4b1640} />
            </mask>
            <path d={svgPaths.p3d4b1640} fill="white" fillOpacity="0.05" />
            <path d={svgPaths.p22ff1180} fill="url(#pia_paint1)" mask="url(#pia_mask1)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="pia_paint1" x1="11.6233" x2="54.1936" y1="8.77481" y2="61.4992">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Voice/mic icon positioned at lower right of shape */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 size-[44px]"
        style={{ left: "calc(50% + 13.42px)", top: "calc(50% + 13.01px)" }}
      >
        <div className="absolute inset-[8.33%_14.58%]">
          <VoiceShape />
        </div>
      </div>
    </div>
  );
}

// Notification glass icon
function NotifIcon() {
  return (
    <div className="h-[77.394px] relative w-[87.547px]">
      {/* Background blob — rotated using container queries */}
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: "17.59% 39.34% 6.9% 0", containerType: "size" } as React.CSSProperties}
      >
        <div
          className="flex-none"
          style={{
            transform: "rotate(15deg)",
            width: "hypot(75.9687cqw, 18.4982cqh)",
            height: "hypot(24.0313cqw, 81.5018cqh)",
          }}
        >
          <div className="relative size-full">
            <div className="absolute inset-[-17.28%_-12.17%_0_-6.13%]">
              <svg className="block size-full" fill="none" height="57.8301" preserveAspectRatio="none" viewBox="0 0 49.4119 57.8301" width="49.4119">
                <path d={svgPaths.p321c7d00} fill="url(#pin_paint0)" />
                <path d={svgPaths.p3875f480} fill="url(#pin_paint1)" />
                <g filter="url(#pin_filter0)" opacity="0.5">
                  <path d={svgPaths.p21005600} fill="#0D0D0F" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.9974" id="pin_filter0" width="49.4119" x="0" y="-4.76837e-07">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_pin" stdDeviation="7.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="pin_paint0" x1="44.4979" x2="0.899341" y1="8.51994" y2="46.1594">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#B7B6B6" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="pin_paint1" x1="30.6221" x2="23.6736" y1="50.8236" y2="62.3513">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#B7B6B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Bell / notification icon */}
      <div className="absolute inset-[0_0_0_19.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="77.3945" preserveAspectRatio="none" viewBox="0 0 70.1407 77.3945" width="70.1407">
          <mask fill="black" height="70.5195" id="pini_mask1" maskUnits="userSpaceOnUse" width="72.8362" x="-1.18476" y="-1.22203">
            <rect fill="white" height="70.5195" width="72.8362" x="-1.18476" y="-1.22203" />
            <path d={svgPaths.p2e2be100} />
          </mask>
          <path d={svgPaths.p2e2be100} fill="white" fillOpacity="0.47" />
          <path d={svgPaths.p1abdd800} fill="url(#pini_paint0)" mask="url(#pini_mask1)" />
          <mask fill="black" height="17.4644" id="pini_mask2" maskUnits="userSpaceOnUse" width="25.1868" x="30.5003" y="62.0595">
            <rect fill="white" height="17.4644" width="25.1868" x="30.5003" y="62.0595" />
            <path d={svgPaths.p27c55e00} />
          </mask>
          <path d={svgPaths.p27c55e00} fill="white" fillOpacity="0.47" />
          <path d={svgPaths.p385cd000} fill="url(#pini_paint1)" mask="url(#pini_mask2)" />
          <path d={svgPaths.p1461c0c0} fill="url(#pini_paint2)" />
          <path d={svgPaths.p26e6180} stroke="url(#pini_paint3)" strokeOpacity="0.5" strokeWidth="0.2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="pini_paint0" x1="10.6698" x2="54.8929" y1="16.7896" y2="55.065">
              <stop stopColor="white" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="pini_paint1" x1="35.1188" x2="41.8357" y1="68.0466" y2="78.206">
              <stop stopColor="white" stopOpacity="0.25" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="pini_paint2" x1="48.2105" x2="44.8784" y1="18.2161" y2="28.3669">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="pini_paint3" x1="44.1101" x2="46.4189" y1="25.2039" y2="17.3998">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Folder glass icon
function FolderIcon({ className }: { className?: string }) {
  return (
    <div className={className || "h-[94.177px] relative w-[100.158px]"}>
      {/* Background blob */}
      <div className="absolute inset-[0_0_9.01%_23.1%]">
        <div className="absolute inset-[-3.29%_-4.49%_-3.31%_-4.49%]">
          <svg className="block size-full" fill="none" height="72.7025" preserveAspectRatio="none" viewBox="0 0 69.9388 72.7025" width="69.9388">
            <path d={svgPaths.p3edac200} fill="url(#pif_paint0)" />
            <g filter="url(#pif_filter0)" opacity="0.5">
              <path d={svgPaths.p15c97b00} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72.7025" id="pif_filter0" width="69.9388" x="-2.38419e-07" y="-2.38419e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_pif" stdDeviation="7.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="pif_paint0" x1="18.8964" x2="40.8794" y1="18.6814" y2="97.3182">
                <stop stopColor="#A9A9B4" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Folder icon shape */}
      <div className="absolute inset-[12.68%_21.57%_0_0]">
        <div className="absolute inset-[-1.53%]">
          <svg className="block size-full" fill="none" height="67.4528" preserveAspectRatio="none" viewBox="0 0 67.4561 67.4528" width="67.4561">
            <mask fill="black" height="68" id="pif_mask1" maskUnits="userSpaceOnUse" width="68" x="0" y="2.98097e-07">
              <rect fill="white" height="68" width="68" y="2.98097e-07" />
              <path d={svgPaths.p2384c300} />
            </mask>
            <path d={svgPaths.p2384c300} fill="white" fillOpacity="0.4" />
            <path d={svgPaths.pb593900} fill="url(#pif_paint1)" mask="url(#pif_mask1)" />
            <path d={svgPaths.p25309500} fill="url(#pif_paint2)" stroke="url(#pif_paint3)" strokeWidth="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="pif_paint1" x1="11.4195" x2="53.171" y1="8.62533" y2="60.3381">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="pif_paint2" x1="50.4254" x2="9.66172" y1="47.6163" y2="57.0931">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="pif_paint3" x1="20.7588" x2="21.5473" y1="47.27" y2="54.2334">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function PermissionIntroScreen({ onBack, onContinue }: Props) {
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
        {/* Navigation */}
        <div className="flex items-start justify-between py-[6px] w-full">
          <button
            onClick={onBack}
            className="flex items-center justify-center size-[24px] active:opacity-60 transition-opacity"
            aria-label="Go back"
          >
            <div className="-scale-y-100">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path d={svgPaths.p3573eb00} fill="white" />
              </svg>
            </div>
          </button>
          <div className="size-[24px] flex items-center justify-center">
            <svg fill="none" height="22" viewBox="0 0 22 22" width="22">
              <path d={svgPaths.pace200} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.pbc79d00} stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M12 17H12.01" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Form: title + card */}
        <div className="flex flex-col gap-[56px] flex-1 min-h-0 w-full">
          {/* Title section */}
          <div className="flex flex-col gap-[24px]">
            <p
              className="text-white m-0 leading-[44px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 32 }}
            >
              Let's set things up for you
            </p>
            <p
              className="text-[#aeaeb5] m-0 leading-[30px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 20 }}
            >
              We need a few permissions to help you edit faster.
            </p>
          </div>

          {/* Card with 4 floating glass icons */}
          <div className="h-[324px] relative rounded-[12px] shrink-0 w-full overflow-visible">
            {/* Gallery icon — top left, rotated */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 46, top: 44.87, width: 106.401, height: 105.124 }}
            >
              <div style={{ transform: "rotate(-25.82deg)" }}>
                <GalleryIcon />
              </div>
            </div>

            {/* Arrow/Mic icon — top right, rotated */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 192.69, top: 22, width: 110.269, height: 110.789 }}
            >
              <div style={{ transform: "rotate(-18.18deg)" }}>
                <ArrowIcon />
              </div>
            </div>

            {/* Notification icon — bottom left, rotated */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 48.92, top: 170.99, width: 114.483, height: 110.747 }}
            >
              <div style={{ transform: "rotate(-29.92deg)" }}>
                <NotifIcon />
              </div>
            </div>

            {/* Folder icon — bottom right */}
            <div className="absolute" style={{ left: 190.87, top: 155.17, width: 100.158, height: 94.177 }}>
              <FolderIcon className="relative h-full w-full" />
            </div>

            {/* Central white radial glow */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 size-[97px] pointer-events-none"
              style={{ left: "calc(50% - 0.5px)", top: "calc(50% - 16.5px)" }}
            >
              <div className="absolute inset-[-175.88%]">
                <svg className="block size-full" fill="none" height="438.2" preserveAspectRatio="none" viewBox="0 0 438.2 438.2" width="438.2">
                  <g filter="url(#pi_glow_f)">
                    <circle cx="219.1" cy="219.1" fill="white" r="48.5" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="438.2" id="pi_glow_f" width="438.2" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="85.3" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12 }}
          onClick={onContinue}
          className="w-full h-[56px] bg-white text-[#0d0d0f] rounded-[12px] flex items-center justify-center shrink-0 font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 16 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
}

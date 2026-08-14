import svgPaths from "./svg-g23jft7rri";
import imgFrame5 from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";
type AiChatBoxProps = {
  className?: string;
  property1?: "Default";
};

function AiChatBox({ className, property1 = "Default" }: AiChatBoxProps) {
  return (
    <div className={className || "bg-[rgba(163,163,168,0.05)] min-h-[80px] min-w-[240px] relative rounded-[16px] w-[398px]"}>
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start min-h-[inherit] min-w-[inherit] p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal h-[22px] leading-[1.4] not-italic relative shrink-0 text-[#585865] text-[16px] w-full">What would you like to know?</p>
          <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="block">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Block">
              <div className="relative rounded-[32px] shrink-0" data-name="Icon Button">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Image">
                      <div className="absolute inset-[12.5%]" data-name="Icon">
                        <div className="absolute inset-[-6.67%]">
                          <svg className="block size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                            <path d={svgPaths.p28dbe600} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[32px] shrink-0" data-name="Icon Button">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Mic">
                      <div className="absolute inset-[4.17%_20.83%]" data-name="Icon">
                        <div className="absolute inset-[-5.45%_-8.57%]">
                          <svg className="block size-full" fill="none" height="20.3333" preserveAspectRatio="none" viewBox="0 0 13.6667 20.3333" width="13.6667">
                            <path d={svgPaths.p236ed200} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(21,21,23,0.1)] relative rounded-[32px] shrink-0" data-name="Icon Button">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow up">
                    <div className="absolute inset-[20.83%]" data-name="Icon">
                      <div className="absolute inset-[-8.57%]">
                        <svg className="block size-full" fill="none" height="13.6667" preserveAspectRatio="none" viewBox="0 0 13.6667 13.6667" width="13.6667">
                          <path d={svgPaths.p3d198500} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[32px]" />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41
      </p>
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] h-[13px] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[6px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[85.329px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 85.3291 13" width="85.3291">
        <g id="Frame">
          <path d={svgPaths.p9888ec0} fill="white" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p246ea700} fill="white" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.p1b665d80} fill="white" fillRule="evenodd" id="Battery" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] h-[13px] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-px relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[39px] not-italic relative shrink-0 text-[26px] text-center text-white whitespace-nowrap">Ai Assistant</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full">
      <Frame13 />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="li:clock">
        <div className="absolute inset-[4.17%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
            <path clipRule="evenodd" d={svgPaths.p2b793800} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[20.83%_29.17%_37.5%_45.83%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.0002" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002" width="6.00022">
            <path clipRule="evenodd" d={svgPaths.p5206480} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[111px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgFrame5} />
      <div className="bg-[#0d0d0f] overflow-clip relative rounded-[40px] shrink-0 size-[24px]" data-name="play_arrow_filled">
        <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 11 14" width="11">
            <path d="M0 14V0L11 7L0 14Z" fill="white" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#32323a] content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[262px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full">Remove all Pauses and ums from this video</p>
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-right text-white w-full">9:21 AM</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[80px] relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] bg-[rgba(21,21,23,0.1)] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-center justify-center not-italic p-[10px] relative rounded-[12px] shrink-0 text-white w-full">
      <p className="leading-[24px] relative shrink-0 text-[16px] w-full">Got it! I’ll remove all pauses and filler words like “um”, “uh” and “you know to make your video together.”</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] w-full">9:21 AM</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[12px]" data-name="Check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 9 6.5" width="9">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#84ebb4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Transcribing audio</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[12px]" data-name="Check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 9 6.5" width="9">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#84ebb4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Detecting speakers</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[12px]" data-name="Check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 9 6.5" width="9">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#84ebb4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Finding highlights</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[12px]" data-name="Check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" height="6.5" preserveAspectRatio="none" viewBox="0 0 9 6.5" width="9">
                <path d="M8.5 0.5L3 6L0.5 3.5" id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border-[#84ebb4] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Searching for B-roll</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pr-[56px] relative shrink-0 w-full">
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Thinking....</p>
      <Frame3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[24px] px-[24px] relative w-full">
      <Frame11 />
      <Frame14 />
      <AiChatBox className="bg-[rgba(163,163,168,0.05)] min-h-[80px] min-w-[240px] relative rounded-[16px] shrink-0 w-full" />
    </div>
  );
}

function IphoneIndicator() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Iphone Indicator">
      <div className="-translate-x-1/2 absolute bg-[#32323a] bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[135px]" data-name="Line" />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="iPhone 13 & 14 - 49">
      <div className="h-[62px] relative shrink-0 w-full" data-name="Status Bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pt-[2.333px] px-[9px] relative size-full">
            <Time />
            <div className="bg-black h-[37px] opacity-0 relative rounded-[100px] shrink-0 w-[125px]" data-name="Dynamic Island" />
            <Levels />
          </div>
        </div>
      </div>
      <Frame2 />
      <IphoneIndicator />
    </div>
  );
}
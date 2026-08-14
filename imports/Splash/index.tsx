import svgPaths from "./svg-1us6v7r7p5";

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

function Download() {
  return (
    <div className="h-[77px] relative shrink-0 w-[114px]" data-name="download 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="77" preserveAspectRatio="none" viewBox="0 0 114 77" width="114">
        <g clipPath="url(#clip0_0_25)" id="download 1">
          <path d={svgPaths.p36bd5600} fill="white" id="Vector" />
          <path d={svgPaths.p1c391700} fill="white" id="Vector_2" />
          <path d={svgPaths.p165e9472} fill="white" id="Vector_3" />
          <path d={svgPaths.p137b4500} fill="white" id="Vector_4" />
          <path d={svgPaths.p2af6d7c0} fill="white" id="Vector_5" />
          <path d={svgPaths.p14fb4100} fill="white" id="Vector_6" />
          <path d={svgPaths.p238a7c40} fill="white" id="Vector_7" />
          <path d={svgPaths.p37b6e940} fill="white" id="Vector_8" />
          <path d={svgPaths.p285f9170} fill="white" id="Vector_9" />
          <path d={svgPaths.p798d100} fill="white" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_0_25">
            <rect fill="white" height="77" width="114" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Splash() {
  return (
    <div className="bg-[#0d0d0f] border border-[#a9a9b4] border-solid content-stretch flex flex-col items-center justify-between overflow-clip pb-[80px] relative rounded-[30px] size-full" data-name="Splash">
      <div className="h-[62px] relative shrink-0 w-full" data-name="Status Bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pt-[2.333px] px-[9px] relative size-full">
            <Time />
            <div className="bg-black h-[37px] relative rounded-[100px] shrink-0 w-[125px]" data-name="Dynamic Island" />
            <Levels />
          </div>
        </div>
      </div>
      <Download />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[66px] not-italic relative shrink-0 text-[44px] text-white whitespace-nowrap">Carboard</p>
    </div>
  );
}
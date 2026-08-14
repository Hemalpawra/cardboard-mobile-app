import svgPaths from "./svg-gk22tokca6";
import imgImage from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

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

function VideoInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px not-italic relative" data-name="Video Info">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[26px] text-white w-full">
        <p className="leading-[39px]">Product Launch.mp4</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#aeaeb5] text-[16px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">{`1080p  146 MB`}</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex h-[315px] items-end overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(163,163,168,0.05)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover opacity-20 rounded-[12px] size-full" src={imgImage} />
      </div>
      <VideoInfo />
    </div>
  );
}

function UploadProgressContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[20px] w-full whitespace-nowrap" data-name="Upload Progress Container">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[30px]">Upload...</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[30px]">20%</p>
      </div>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_80.2%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-4px_-10%]">
            <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 48 8" width="48">
              <path d="M4 4H14H34H44" id="wave-increment" stroke="#0088FF" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-4px_-14.81%]">
            <svg className="block size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 35 8" width="35">
              <path d="M4 4H10.75H24.25H31" id="wave-increment" stroke="#0088FF" strokeLinecap="round" strokeWidth="8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_19.8%] items-start pl-[8px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#e8def8] h-[8px] left-0 right-0 rounded-[4px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute right-[-0.21px] size-[8px] top-1/2" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#08f] h-[4px] left-[2px] right-[2px] rounded-[3px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator />
      <TrackAndStop />
    </div>
  );
}

function UploadInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Upload Info">
      <UploadProgressContainer />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start pl-[4px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Icon Container">
      <UploadInfo />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[20px] w-full whitespace-pre-wrap">
        <p className="leading-[30px] mb-0">{`You can close the app. `}</p>
        <p className="leading-[30px]">We’ll notify you when it’s ready.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Container">
      <Image />
      <IconContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[36px] px-[24px] relative w-full" data-name="Content">
      <Container />
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

export default function Uploading() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Uploading">
      <div className="h-[62px] relative shrink-0 w-full" data-name="Status Bar">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pt-[2.333px] px-[9px] relative size-full">
            <Time />
            <div className="bg-black h-[37px] opacity-0 relative rounded-[100px] shrink-0 w-[125px]" data-name="Dynamic Island" />
            <Levels />
          </div>
        </div>
      </div>
      <Content />
      <IphoneIndicator />
    </div>
  );
}
import svgPaths from "./svg-pa537bhp5y";
import imgImage from "./241d465635db6796da8cdec309b5098fe1243602.png";
import imgImage1 from "./0228c1ba1abcca1af97143dd25085f9b13a73348.png";
import imgMainImage from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

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

function TopBar() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Top bar">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Skip</p>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-[24px]" style={{ containerType: "size" }}>
          <div className="flex-none rotate-90 w-[100cqh]">
            <div className="aspect-[24/24] relative size-full" data-name="Skip icon">
              <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
                  <path d={svgPaths.p23227880} fill="#858590" id="icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full whitespace-pre-wrap">
        <p className="leading-[44px] mb-0">{`Edit Videos by `}</p>
        <p className="leading-[44px]">talking</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px]">Your Ai Editor can trim, caption, find B-roll and prepare videos for every platform.</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute flex h-[136.506px] items-center justify-center left-[199px] top-[77.98px] w-[141.194px]">
      <div className="flex-none rotate-[3.8deg]">
        <div className="h-[127.968px] relative rounded-[25px] w-[133px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[25px] size-full" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute flex h-[97.541px] items-center justify-center left-[12.16px] top-[119.09px] w-[97.537px]">
      <div className="flex-none rotate-[-17.03deg]">
        <div className="h-[78.096px] relative rounded-[16px] w-[78.089px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function MainImage() {
  return (
    <div className="absolute flex h-[161.483px] items-center justify-center left-[89.93px] top-[108.43px] w-[142.854px]">
      <div className="flex-none rotate-[3.8deg]">
        <div className="content-stretch flex h-[153px] items-center justify-center overflow-clip relative rounded-[25px] w-[133px]" data-name="Main Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[25px] size-full" src={imgMainImage} />
          <div className="bg-[#0d0d0f] overflow-clip relative rounded-[40px] shrink-0 size-[54.342px]" data-name="Play Icon">
            <div className="absolute inset-[20.83%_20.83%_20.83%_33.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="31.6994" preserveAspectRatio="none" viewBox="0 0 24.9067 31.6994" width="24.9067">
                <path d={svgPaths.p20d2bd00} fill="white" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudioTextContainer() {
  return (
    <div className="bg-[rgba(31,193,107,0.1)] content-stretch flex items-center overflow-x-auto overflow-y-clip px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[633px]" data-name="Audio Text Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-center text-white tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Audio
      </p>
    </div>
  );
}

function AudioContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-x-auto overflow-y-clip rounded-[14px] top-[255px] w-[262px]" data-name="Audio Container">
      <AudioTextContainer />
    </div>
  );
}

function CommentsContainer() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-h-px opacity-45 overflow-clip relative rounded-[12px] w-full" data-name="Comments container">
      <Image />
      <Image1 />
      <MainImage />
      <AudioContainer />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Form">
      <TitleContainer />
      <CommentsContainer />
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Pagination Container">
      <div className="bg-white h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Continue</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px p-[24px] relative w-full" data-name="Content">
      <TopBar />
      <Form />
      <PaginationContainer />
      <Button />
    </div>
  );
}

export default function Welcome() {
  return (
    <div className="bg-[#0d0d0f] relative rounded-[30px] size-full" data-name="Welcome">
      <div className="content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[62px] relative shrink-0 w-full" data-name="Status Bar">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center pt-[2.333px] px-[9px] relative size-full">
              <Time />
              <div className="bg-black h-[37px] relative rounded-[100px] shrink-0 w-[125px]" data-name="Dynamic Island" />
              <Levels />
            </div>
          </div>
        </div>
        <Content />
      </div>
      <div aria-hidden className="absolute border border-[#a9a9b4] border-solid inset-[-1px] pointer-events-none rounded-[31px]" />
    </div>
  );
}
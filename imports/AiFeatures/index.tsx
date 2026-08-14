import svgPaths from "./svg-pccuez8opp";

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

function InstructionTextWrapper() {
  return (
    <div className="bg-[#32323a] content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-[262px]" data-name="Instruction text wrapper">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full">Remove all Pauses and ums from this video, add captions</p>
    </div>
  );
}

function InstructionTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[80px] relative shrink-0 w-full" data-name="Instruction text container">
      <InstructionTextWrapper />
    </div>
  );
}

function ThinkingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pr-[56px] relative shrink-0 w-[340px]" data-name="Thinking container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Thinking....</p>
    </div>
  );
}

function FirstResult() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="First result">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[20px]" data-name="First result check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10.91%_-7.5%]">
              <svg className="block size-full" fill="none" height="11.1667" preserveAspectRatio="none" viewBox="0 0 15.3333 11.1667" width="15.3333">
                <path d={svgPaths.p936be40} id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Removed 12 pauses</p>
      </div>
    </div>
  );
}

function SecondResult() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Second result">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[20px]" data-name="Second result check">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10.91%_-7.5%]">
              <svg className="block size-full" fill="none" height="11.1667" preserveAspectRatio="none" viewBox="0 0 15.3333 11.1667" width="15.3333">
                <path d={svgPaths.p936be40} id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Added captions</p>
      </div>
    </div>
  );
}

function ResultsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Results container">
      <FirstResult />
      <SecondResult />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start justify-center min-h-px opacity-90 overflow-clip px-[24px] py-[25px] relative rounded-[12px] w-full" data-name="Card">
      <InstructionTextContainer />
      <ThinkingContainer />
      <div className="blur-[12.85px] h-[50px] relative shrink-0 w-full" data-name="Loading bar" />
      <ResultsContainer />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[44px] mb-0">One prompt</p>
        <p className="leading-[44px]">Multiple edits.</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px] mb-0">Let Ai handle the boring work</p>
        <p className="leading-[30px]">so you can focus on your story.</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Form">
      <Card />
      <TitleContainer />
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Pagination Container">
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-white h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
    </div>
  );
}

function Button() {
  return (
    <a className="bg-white content-stretch cursor-pointer flex items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Continue</p>
      </div>
    </a>
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

function IphoneIndicator() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Iphone Indicator">
      <div className="-translate-x-1/2 absolute bg-[#32323a] bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[135px]" data-name="Line" />
    </div>
  );
}

export default function AiFeatures() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Ai Features">
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
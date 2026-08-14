import svgPaths from "./svg-13ledasbo6";

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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[24px]" data-name="arrow_back">
            <div className="absolute inset-[16.67%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
                <path d={svgPaths.p3573eb00} fill="white" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Frame">
          <path d={svgPaths.pace200} id="Vector" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pbc79d00} id="Vector_2" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="#7E7E8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-[316px]">
        <p className="leading-[44px]">What best describe you?</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[#aeaeb5] text-[20px] w-[min-content]">
        <p className="leading-[30px]">This helps us personalize your experience.</p>
      </div>
    </div>
  );
}

function OptionIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0088FF" height="24" rx="12" width="24" />
          <circle cx="12" cy="12" fill="white" id="Ellipse 2" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Option() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[30px]">Creator</p>
      </div>
      <OptionIcon />
    </div>
  );
}

function OptionIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
          <circle cx="12" cy="12" fill="#32323A" id="Ellipse 2" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[18px] whitespace-nowrap">
        <p className="leading-[30px]">Marketing Team</p>
      </div>
      <OptionIcon1 />
    </div>
  );
}

function OptionIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
          <circle cx="12" cy="12" fill="#32323A" id="Ellipse 2" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Option2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[18px] whitespace-nowrap">
        <p className="leading-[30px]">Agency</p>
      </div>
      <OptionIcon2 />
    </div>
  );
}

function OptionIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
          <circle cx="12" cy="12" fill="#32323A" id="Ellipse 2" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Option3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[18px] whitespace-nowrap">
        <p className="leading-[30px]">Business</p>
      </div>
      <OptionIcon3 />
    </div>
  );
}

function OptionIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
          <circle cx="12" cy="12" fill="#32323A" id="Ellipse 2" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Option4() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[18px] whitespace-nowrap">
        <p className="leading-[30px]">Student</p>
      </div>
      <OptionIcon4 />
    </div>
  );
}

function OptionIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Option Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Option Icon">
          <rect fill="#0D0D0F" height="23" rx="11.5" width="23" x="0.5" y="0.5" />
          <rect height="23" rx="11.5" stroke="#32323A" width="23" x="0.5" y="0.5" />
          <circle cx="12" cy="12" fill="#32323A" id="Ellipse 2" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Option5() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Option">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[18px] whitespace-nowrap">
        <p className="leading-[30px]">Freelancer</p>
      </div>
      <OptionIcon5 />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Options Container">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Form">
      <TitleContainer />
      <OptionsContainer />
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

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Button container">
      <Button />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[24px] px-[24px] relative w-full" data-name="Content">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between py-[6px] relative size-full">
            <Frame3 />
            <Frame4 />
          </div>
        </div>
      </div>
      <Form />
      <ButtonContainer />
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

export default function Workspace() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Workspace">
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
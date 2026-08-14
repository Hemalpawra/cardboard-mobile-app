import svgPaths from "./svg-2s7fo8bboe";

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

function Header() {
  return (
    <div className="content-stretch flex h-[30px] items-center pt-[4px] relative shrink-0 w-full" data-name="Header">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full">
          <div className="h-full relative w-[30px]" data-name="Back arrow">
            <div className="absolute inset-[16.67%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.3333" preserveAspectRatio="none" viewBox="0 0 20 17.3333" width="20">
                <path d={svgPaths.p349c2180} fill="#858590" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Instructions() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Instructions">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[44px]">Enter the code</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px]">We’ve send a 6-digit code to john@gmail.com</p>
      </div>
    </div>
  );
}

function DigitContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer1 />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DigitContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer3 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DigitContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer5 />
    </div>
  );
}

function InputField3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DigitContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer7 />
    </div>
  );
}

function InputField4() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer6 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DigitContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer9 />
    </div>
  );
}

function InputField5() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer8 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DigitContainer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Digit container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis text-left whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">{` `}</p>
      </div>
    </div>
  );
}

function DigitContainer10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Digit container">
      <DigitContainer11 />
    </div>
  );
}

function InputField6() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input field">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <DigitContainer10 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function InputField() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[8px] h-[61px] items-start justify-center relative shrink-0 w-full" data-name="Input field">
      <InputField1 />
      <InputField2 />
      <InputField3 />
      <InputField4 />
      <InputField5 />
      <InputField6 />
    </a>
  );
}

function InputFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Input fields container">
      <InputField />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Resend code in 00:28</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Content">
      <Instructions />
      <InputFieldsContainer />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center opacity-50 overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Continue</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[24px] px-[24px] relative w-full" data-name="Content">
      <Header />
      <Content1 />
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

export default function VerifyCode() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Verify code">
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
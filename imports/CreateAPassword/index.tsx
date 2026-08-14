import svgPaths from "./svg-46ei5xjack";

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
    <div className="content-stretch flex h-[30px] items-center pt-[4px] relative shrink-0 w-full" data-name="Top bar">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full">
          <a className="block cursor-pointer h-full relative w-[30px]" data-name="Back button">
            <div className="absolute inset-[16.67%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.3333" preserveAspectRatio="none" viewBox="0 0 20 17.3333" width="20">
                <path d={svgPaths.p349c2180} fill="#858590" id="icon" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function PasswordInstructions() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Password instructions">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[44px]">Create a password</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px]">Use 8 characters or more with a mix of letters</p>
      </div>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Password field">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Instrument_Sans:Medium',sans-serif] font-medium h-[17px] leading-[36px] min-w-px overflow-hidden relative text-[36px] text-ellipsis text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        ***********
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Show password icon">
        <div className="absolute inset-[16.67%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-4.55%]">
            <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 24 18" width="24">
              <g id="Icon">
                <path d={svgPaths.p28aa9640} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p3fdb1f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function PasswordContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Password container">
      <PasswordField />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] h-[61px] relative rounded-[12px] shrink-0 w-full" data-name="Input container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <PasswordContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61px] items-center relative shrink-0 w-full" data-name="Input field">
      <InputContainer />
    </div>
  );
}

function Component8CharactersContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="8+ Characters container">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[20px]" data-name="Checkmark icon 8+ Characters">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10.91%_-7.5%]">
              <svg className="block size-full" fill="none" height="11.1667" preserveAspectRatio="none" viewBox="0 0 15.3333 11.1667" width="15.3333">
                <path d={svgPaths.p936be40} id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">8+ Characters</p>
      </div>
    </div>
  );
}

function Component1NumberContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="1 number container">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[20px]" data-name="Checkmark icon 1 number">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10.91%_-7.5%]">
              <svg className="block size-full" fill="none" height="11.1667" preserveAspectRatio="none" viewBox="0 0 15.3333 11.1667" width="15.3333">
                <path d={svgPaths.p936be40} id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">1 number</p>
      </div>
    </div>
  );
}

function Component1SpecialCharacterContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="1 special character container">
      <div className="bg-[rgba(31,193,107,0.1)] relative rounded-[20px] shrink-0 size-[20px]" data-name="Checkmark icon 1 special character">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10.91%_-7.5%]">
              <svg className="block size-full" fill="none" height="11.1667" preserveAspectRatio="none" viewBox="0 0 15.3333 11.1667" width="15.3333">
                <path d={svgPaths.p936be40} id="Icon" stroke="#1FC16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#84ebb4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">1 special character</p>
      </div>
    </div>
  );
}

function PasswordCriteria() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Password criteria">
      <Component8CharactersContainer />
      <Component1NumberContainer />
      <Component1SpecialCharacterContainer />
    </div>
  );
}

function PasswordInputAndCriteria() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-full" data-name="Password input and criteria">
      <InputField />
      <PasswordCriteria />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px relative w-full" data-name="Content container">
      <PasswordInstructions />
      <PasswordInputAndCriteria />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px pb-[24px] px-[24px] relative w-full" data-name="Content">
      <TopBar />
      <ContentContainer />
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

export default function CreateAPassword() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Create a password">
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
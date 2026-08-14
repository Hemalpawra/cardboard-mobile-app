import svgPaths from "./svg-66i5cm7hot";

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

function BackButtonContainer() {
  return (
    <div className="content-stretch flex h-[30px] items-center pt-[4px] relative shrink-0 w-full" data-name="Back button container">
      <div className="flex h-full items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none h-full">
          <a className="block cursor-pointer h-full relative w-[30px]" data-name="Back button icon">
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

function CodeDigitBackground() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">3</p>
      </div>
    </div>
  );
}

function CodeDigitContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground />
    </div>
  );
}

function CodeInput() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CodeDigitBackground1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">2</p>
      </div>
    </div>
  );
}

function CodeDigitContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground1 />
    </div>
  );
}

function CodeInput1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CodeDigitBackground2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">2</p>
      </div>
    </div>
  );
}

function CodeDigitContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground2 />
    </div>
  );
}

function CodeInput2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CodeDigitBackground3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">5</p>
      </div>
    </div>
  );
}

function CodeDigitContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground3 />
    </div>
  );
}

function CodeInput3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CodeDigitBackground4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">9</p>
      </div>
    </div>
  );
}

function CodeDigitContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground4 />
    </div>
  );
}

function CodeInput4() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CodeDigitBackground5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Code digit background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#a9a9b4] text-[26px] text-ellipsis whitespace-nowrap">
        <p className="leading-[39px] overflow-hidden text-ellipsis">5</p>
      </div>
    </div>
  );
}

function CodeDigitContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[41px] items-center justify-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Code digit container">
      <CodeDigitBackground5 />
    </div>
  );
}

function CodeInput5() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Code input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <CodeDigitContainer5 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex gap-[8px] h-[61px] items-start justify-center relative shrink-0 w-full" data-name="Input field">
      <CodeInput />
      <CodeInput1 />
      <CodeInput2 />
      <CodeInput3 />
      <CodeInput4 />
      <CodeInput5 />
    </div>
  );
}

function CodeInputContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Code input container">
      <InputField />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Resend code in 00:28</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-name="Header">
      <Instructions />
      <CodeInputContainer />
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">1</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">{` `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">2</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">ABC</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">3</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">DEF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">4</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">GHI</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">5</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">JKL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">6</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">MNO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">7</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">PQRS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">8</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">TUV</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="flex flex-col items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-between leading-[0] pb-[4px] pt-[3px] relative size-full text-black text-center whitespace-nowrap">
            <div className="flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center mb-[-2px] relative shrink-0 text-[23px]">
              <p className="leading-[28px]">9</p>
            </div>
            <div className="flex flex-col font-['SF_Compact:Medium',sans-serif] font-[556] justify-center relative shrink-0 text-[13px] tracking-[2px]">
              <p className="leading-[15px]">WXYZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] h-[48px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Space" />
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8.5px]">
          <div className="absolute bg-[#191919] inset-0 mix-blend-plus-lighter rounded-[8.5px]" />
          <div className="absolute bg-[rgba(255,255,255,0.67)] inset-0 rounded-[8.5px]" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] justify-center leading-[0] left-1/2 text-[23px] text-black text-center top-[calc(50%-0.5px)] whitespace-nowrap">
          <p className="leading-[28px]">0</p>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[8.5px]" data-name="Key">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.8999938964844] h-[65px] justify-center leading-[0] left-1/2 text-[23px] text-black text-center top-1/2 w-[125px]">
          <p className="leading-[28px]">{`\u{10019B}`}</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px pb-[36px] px-[24px] relative w-full" data-name="Content">
      <BackButtonContainer />
      <Header />
      <Button />
      <div className="absolute bottom-0 left-0 right-0 rounded-tl-[27px] rounded-tr-[27px]" data-name="Keyboard">
        <div className="content-stretch flex flex-col gap-[6px] items-start pb-[74px] pl-[7.667px] pr-[7.67px] pt-[24px] relative size-full">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[rgba(212,212,212,0.74)] inset-0 mix-blend-luminosity" />
            <div className="absolute bg-[#1b1b1b] inset-0 mix-blend-plus-lighter" />
            <div className="absolute bg-[#e6e9ed] inset-0" />
          </div>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="relative size-full" />
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.05)]" />
          <Frame2 />
          <Frame3 />
          <Frame4 />
          <Frame5 />
        </div>
      </div>
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

export default function VerifyCodeEnter() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Verify code Enter">
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
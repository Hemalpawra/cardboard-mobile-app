import svgPaths from "./svg-7e8hizq1ml";

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

function EmailContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Email container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[44px]">What’s your email?</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px]">We’ll send you a code to verify your account.</p>
      </div>
    </div>
  );
}

function EmailInputField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Email input field">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[20px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] overflow-hidden text-ellipsis">john@gmail.com</p>
      </div>
    </div>
  );
}

function EmailInputFieldContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip py-[12px] relative rounded-[8px]" data-name="Email input field container">
      <EmailInputField />
    </div>
  );
}

function EmailInputContainer() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] h-[61px] relative rounded-[12px] shrink-0 w-full" data-name="Email input container">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
          <EmailInputFieldContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Input field">
      <EmailInputContainer />
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

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px py-[32px] relative w-full" data-name="Form">
      <EmailContainer />
      <InputField />
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-[16px] whitespace-nowrap" data-name="Footer">
      <div className="flex flex-col justify-center relative shrink-0 text-[#858590]">
        <p className="leading-[normal]">Already have an account?</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#08f]">
        <p className="leading-[normal]">Log in</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-center justify-center min-h-px p-[24px] relative w-full" data-name="Content">
      <Form />
      <Footer />
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

export default function SignUpEmail() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Sign up- Email">
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
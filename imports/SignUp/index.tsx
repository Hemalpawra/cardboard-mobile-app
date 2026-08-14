import svgPaths from "./svg-5asuz52qoe";

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

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white w-full whitespace-pre-wrap">
        <p className="leading-[44px] mb-0">{`Create your `}</p>
        <p className="leading-[44px]">account</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="aspect-[12.040862083435059/14.787307739257812] h-full relative shrink-0" data-name="Group">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 19.5425 24" width="19.5425">
          <g id="Group">
            <path d={svgPaths.p13dbaf00} fill="#1D1D1F" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Group />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Continue with Apple</p>
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="aspect-[256/262] h-full overflow-clip relative shrink-0" data-name="google logo">
        <div className="absolute inset-[40.75%_0.05%_12.41%_51%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.2413" preserveAspectRatio="none" viewBox="0 0 11.4804 11.2413" width="11.4804">
            <path d={svgPaths.p2da9f500} fill="#4285F4" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.68%_15.23%_0.34%_5.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.59359" preserveAspectRatio="none" viewBox="0 0 18.6026 9.59359" width="18.6026">
            <path d={svgPaths.p39cf4500} fill="#34A853" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[27.22%_78.02%_27.8%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.7945" preserveAspectRatio="none" viewBox="0 0 5.15551 10.7945" width="5.15551">
            <path d={svgPaths.p1daa4000} fill="#FBBC05" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_14.89%_60.03%_5.44%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.59359" preserveAspectRatio="none" viewBox="0 0 18.6823 9.59359" width="18.6823">
            <path d={svgPaths.p7398c00} fill="#EB4335" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <GoogleLogo />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0f] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Continue with Google</p>
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Buttons Container">
      <Button />
      <Button1 />
    </div>
  );
}

function SeparatorContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Separator Container">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 143 1" width="143">
            <line id="Line 1" stroke="#3A3A40" x2="143" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858590] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Or</p>
      </div>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 143 1" width="143">
            <line id="Line 1" stroke="#3A3A40" x2="143" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mail Icon">
          <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
            <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
              <path d={svgPaths.pb499780} fill="#DADADA" id="icon" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[24px]">Continue with Google</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#32323a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px py-[32px] relative w-full" data-name="Form">
      <TitleContainer />
      <ButtonsContainer />
      <SeparatorContainer />
      <Button2 />
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

export default function SignUp() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Sign up">
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
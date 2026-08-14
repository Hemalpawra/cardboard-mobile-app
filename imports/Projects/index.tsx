import svgPaths from "./svg-6p8a99yvf";
import imgFrame48 from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

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
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[39px] not-italic relative shrink-0 text-[26px] text-center text-white whitespace-nowrap">Projects</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame2 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Button Container">
      <Frame7 />
      <a className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Search">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.94%]">
            <svg className="block size-full" fill="none" height="20.5" preserveAspectRatio="none" viewBox="0 0 20.5 20.5" width="20.5">
              <path d={svgPaths.p18bde480} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#151517] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">All</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#a9a9b4] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Edit</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#a9a9b4] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">View</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#a9a9b4] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Comment</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[32px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Text3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white w-[min-content]">Saas Explaier</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#7e7e8f] text-[10px] text-center">04:04m • 2h ago</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white w-[min-content]">Customer story</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#7e7e8f] text-[10px] text-center">04:04m • 2h ago</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white w-[min-content]">Podcast Ep 12</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#7e7e8f] text-[10px] text-center">04:04m • 2h ago</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-ellipsis text-white w-[min-content]">Product Launch</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#7e7e8f] text-[10px] text-center">04:04m • 2h ago</p>
    </div>
  );
}

function Section() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[705px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-[rgba(163,163,168,0.05)] col-1 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
            <div className="bg-white overflow-clip relative rounded-[8px] shrink-0 size-[31px]" data-name="add">
              <div className="absolute inset-[20.83%]" data-name="icon">
                <svg className="absolute block inset-0 size-full" fill="none" height="18.0833" preserveAspectRatio="none" viewBox="0 0 18.0833 18.0833" width="18.0833">
                  <path d={svgPaths.pec19d80} fill="#0D0D0F" id="icon" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-w-full not-italic overflow-hidden relative shrink-0 text-[16px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap">New Project</p>
          </div>
        </div>
      </div>
      <div className="col-2 cursor-pointer justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[rgba(163,163,168,0.05)] inset-0 rounded-[12px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame48} />
          <div className="absolute bg-gradient-to-b from-[22.617%] from-[rgba(255,255,255,0)] inset-0 rounded-[12px] to-black" />
        </div>
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-end p-[12px] relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
      <div className="col-1 cursor-pointer justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[rgba(163,163,168,0.05)] inset-0 rounded-[12px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame48} />
          <div className="absolute bg-gradient-to-b from-[22.617%] from-[rgba(255,255,255,0)] inset-0 rounded-[12px] to-black" />
        </div>
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-end p-[12px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
      <div className="col-2 cursor-pointer justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[rgba(163,163,168,0.05)] inset-0 rounded-[12px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame48} />
          <div className="absolute bg-gradient-to-b from-[22.617%] from-[rgba(255,255,255,0)] inset-0 rounded-[12px] to-black" />
        </div>
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-end p-[12px] relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <div className="col-1 cursor-pointer justify-self-stretch relative rounded-[12px] row-3 self-stretch shrink-0">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
          <div className="absolute bg-[rgba(163,163,168,0.05)] inset-0 rounded-[12px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgFrame48} />
          <div className="absolute bg-gradient-to-b from-[22.617%] from-[rgba(255,255,255,0)] inset-0 rounded-[12px] to-black" />
        </div>
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-end p-[12px] relative size-full">
            <Frame8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px overflow-x-clip overflow-y-auto relative w-full" data-name="Container">
      <Frame9 />
      <Section />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px px-[24px] relative w-full" data-name="Content">
      <ButtonContainer />
      <Container />
    </div>
  );
}

function Menu() {
  return (
    <a className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px relative" data-name="Menu 1">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="li:home">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 20 22" width="20">
            <path clipRule="evenodd" d={svgPaths.p394b7300} fill="#7E7E8F" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_33.33%_4.17%_33.33%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 8 12" width="8">
            <path clipRule="evenodd" d={svgPaths.p378bbd80} fill="#7E7E8F" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7e7e8f] text-[12px] text-center whitespace-nowrap">Home</p>
    </a>
  );
}

function Container1() {
  return (
    <a className="bg-white content-stretch cursor-pointer drop-shadow-[0px_-2px_1px_#585865] flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-3 border-[#0d0d0f] border-solid inset-[-3px] pointer-events-none rounded-[103px]" />
      <div className="relative shrink-0 size-[32px]" data-name="Iconly/Sharp/Bold/Star">
        <div className="absolute inset-[3.11%_3.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="30.0067" preserveAspectRatio="none" viewBox="0 0 30.0053 30.0067" width="30.0053">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p201b0400} fill="#0D0D0F" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3227100} fill="#0D0D0F" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </a>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px pb-[18px] relative" data-name="Menu 3">
      <Container1 />
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px relative" data-name="Menu 2">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="folder">
        <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
            <path d={svgPaths.p3e1ce00} fill="white" id="icon" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Project</p>
    </div>
  );
}

function MenuList() {
  return (
    <div className="content-stretch flex h-[54px] items-end justify-center px-[12px] relative shrink-0 w-full" data-name="Menu List">
      <Menu />
      <Menu2 />
      <Menu1 />
    </div>
  );
}

function IphoneIndicator() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Iphone Indicator">
      <div className="-translate-x-1/2 absolute bg-[#32323a] bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[135px]" data-name="Line" />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Projects">
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
      <div className="bg-[rgba(163,163,168,0.05)] relative shrink-0 w-full" data-name="Bottom Navigation">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <MenuList />
          <IphoneIndicator />
        </div>
      </div>
    </div>
  );
}
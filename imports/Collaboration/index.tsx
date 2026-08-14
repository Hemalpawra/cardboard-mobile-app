import svgPaths from "./svg-op1dlc2zzd";
import imgEllipse3 from "./7fabba66b3b4dcbc5062c03ace505e17670046e6.png";
import imgEllipse4 from "./b4b21f97534ca6e1f6b6d44331abf2c568065fa3.png";
import imgEllipse5 from "./e2f54ea377360597461fe5b2f652e40c6e0eb2e5.png";
import imgEllipse6 from "./9c3fb3ab933ec3fcc1824cb87148aca51753330c.png";

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

function TextContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[20px] text-center whitespace-nowrap">Sarah</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Can we Shorten this part?</p>
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Avatar and text">
      <div className="relative shrink-0 size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="47" src={imgEllipse3} width="47" />
      </div>
      <TextContainer />
    </div>
  );
}

function TimestampContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Timestamp container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function CommentHeader() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[98px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="Comment header">
      <AvatarAndText />
      <TimestampContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[20px] text-center whitespace-nowrap">Alex</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">{`Ai suggestion applied `}</p>
    </div>
  );
}

function AvatarAndText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Avatar and text">
      <div className="relative shrink-0 size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="47" src={imgEllipse4} width="47" />
      </div>
      <TextContainer1 />
    </div>
  );
}

function TimestampContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Timestamp container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">5m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function CommentHeader1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[86px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="Comment header">
      <AvatarAndText1 />
      <TimestampContainer1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-center whitespace-nowrap">Jordan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Feedback received</p>
    </div>
  );
}

function AvatarAndText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Avatar and text">
      <div className="relative shrink-0 size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="47" src={imgEllipse5} width="47" />
      </div>
      <TextContainer2 />
    </div>
  );
}

function TimestampContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Timestamp container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">10m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function CommentHeader2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[86px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="Comment header">
      <AvatarAndText2 />
      <TimestampContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text container">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-center whitespace-nowrap">Taylor</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Design revision sent</p>
    </div>
  );
}

function AvatarAndText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-w-px relative" data-name="Avatar and text">
      <div className="relative shrink-0 size-[47px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="47" src={imgEllipse6} width="47" />
      </div>
      <TextContainer3 />
    </div>
  );
}

function TimestampContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Timestamp container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">15m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function CommentHeader3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[86px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="Comment header">
      <AvatarAndText3 />
      <TimestampContainer3 />
    </div>
  );
}

function CommentItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] h-full items-start min-w-px overflow-clip relative" data-name="Comment item">
      <CommentHeader />
      <CommentHeader1 />
      <CommentHeader2 />
      <CommentHeader3 />
    </div>
  );
}

function CommentsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px opacity-80 overflow-clip p-[16px] relative rounded-[12px] w-full" data-name="Comments container">
      <CommentItem />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[44px]">Built for teams</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px] mb-0">Comment, suggests and approve</p>
        <p className="leading-[30px]">videos together. just like figma.</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Form">
      <CommentsContainer />
      <TitleContainer />
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Pagination Container">
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-white h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
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

function IphoneIndicator() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Iphone Indicator">
      <div className="-translate-x-1/2 absolute bg-[#32323a] bottom-[8px] h-[5px] left-[calc(50%-0.5px)] rounded-[100px] w-[135px]" data-name="Line" />
    </div>
  );
}

export default function Collaboration() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Collaboration">
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
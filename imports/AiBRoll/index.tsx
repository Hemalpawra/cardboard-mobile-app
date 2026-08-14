import svgPaths from "./svg-m4dmnyzkx2";
import imgImage from "./377151205f4bf6fb72d05bc867fbb9fd68b8cb5b.png";
import imgImage1 from "./1a96c9030a85cf3cebd58284eaadfeb1b710f90c.png";
import imgImage2 from "./122c10752004e8759762513f65ca6d9cfb3c6e06.png";
import imgImage3 from "./0228c1ba1abcca1af97143dd25085f9b13a73348.png";
import imgImage4 from "./994380c74aa5b5ae60fb4cefa21fc7272d1e5b68.png";

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
        <p className="leading-[44px] mb-0">{`Ai finds the `}</p>
        <p className="leading-[44px]">Perfect B-roil.</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#aeaeb5] text-[20px] w-full">
        <p className="leading-[30px]">Save hours searching Ai understands your video and what needs.</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="col-2 h-[78px] relative rounded-[16px] row-1 shrink-0 w-[101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="col-1 h-[78px] relative rounded-[16px] row-2 shrink-0 w-[101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
    </div>
  );
}

function Image3() {
  return (
    <div className="col-2 h-[78px] relative rounded-[16px] row-2 shrink-0 w-[101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
    </div>
  );
}

function Image4() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[16px] row-3 self-stretch shrink-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
    </div>
  );
}

function Image5() {
  return (
    <div className="col-2 h-[78px] relative rounded-[16px] row-3 shrink-0 w-[101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
    </div>
  );
}

function Image6() {
  return (
    <div className="col-1 h-[78px] relative rounded-[16px] row-4 shrink-0 w-[101px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
    </div>
  );
}

function Image7() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[16px] row-4 self-stretch shrink-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
    </div>
  );
}

function ImageGrid() {
  return (
    <div className="absolute gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] left-[88px] opacity-70 top-[26px] w-[205px]" data-name="Image grid">
      <Image />
      <Image1 />
      <Image2 />
      <Image3 />
      <Image4 />
      <Image5 />
      <Image6 />
      <Image7 />
    </div>
  );
}

function TitleArea() {
  return (
    <div className="bg-[rgba(21,21,23,0.1)] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Title area">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[20px] text-white w-full">Find B-roll of office presentation</p>
    </div>
  );
}

function SubtitleArea() {
  return (
    <div className="bg-[rgba(21,21,23,0.1)] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[12px] shrink-0 w-full" data-name="Subtitle area">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#7cc2ff] text-[16px] w-full">12 matches found</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[17px] top-[46px] w-[216px]" data-name="Card content">
      <TitleArea />
      <SubtitleArea />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] flex-[1_0_0] min-h-px overflow-clip relative rounded-[12px] w-full" data-name="Card">
      <ImageGrid />
      <CardContent />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px relative w-full" data-name="Form">
      <TitleContainer />
      <Card />
    </div>
  );
}

function PaginationContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Pagination Container">
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-[#32323a] h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
      <div className="bg-white h-[6px] relative rounded-[16px] shrink-0 w-[10px]" data-name="Pagination Dot" />
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

export default function AiBRoll() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Ai B-roll">
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
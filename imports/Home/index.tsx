import svgPaths from "./svg-cakeq14hzg";
import imgVideoThumbnail from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

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

function ProfileIcon() {
  return (
    <div className="bg-[#dadada] content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Profile Icon">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[16px]">H</p>
    </div>
  );
}

function FeaturedIcons() {
  return (
    <div className="content-stretch drop-shadow-[0px_2px_2px_rgba(27,28,29,0.04)] flex items-center relative rounded-[8px] shrink-0" data-name="Featured icons">
      <div aria-hidden className="absolute border border-[#dadada] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <ProfileIcon />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Header Content">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Hemal Singh</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[24px]" data-name="Dropdown Arrow">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" height="7.4" preserveAspectRatio="none" viewBox="0 0 12 7.4" width="12">
                <path d={svgPaths.p23227880} fill="white" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Header">
      <HeaderContent />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7e7e8f] text-[12px] text-center whitespace-nowrap">Dashboard sidebar</p>
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Profile Container">
      <FeaturedIcons />
      <Header />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-name="Footer">
      <ProfileContainer />
      <a className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="Bell">
        <div className="absolute inset-[8.33%_12.5%_8.35%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-6.94%]">
            <svg className="block size-full" fill="none" height="22.4965" preserveAspectRatio="none" viewBox="0 0 20.5002 22.4965" width="20.5002">
              <path d={svgPaths.p31dc4b00} id="Icon" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section title">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Continue Editing</p>
    </div>
  );
}

function VideoDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-px items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Video details">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">Product Launch.mp4</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#aeaeb5] text-[12px] w-full">
        <p className="leading-[18px] whitespace-pre-wrap">{`1080p  146 MB`}</p>
      </div>
    </div>
  );
}

function ProgressTextContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full" data-name="Progress text container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeb5] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">80%</p>
      </div>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_21.18%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#0088FF" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-0.99%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 207 4" width="207">
              <path d="M2 2H52.75H154.25H205" id="wave-increment" stroke="#0088FF" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_78.82%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#e8def8] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[0.15px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#08f] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator />
      <TrackAndStop />
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Progress container">
      <ProgressTextContainer />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start pl-[2px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function VideoThumbnail() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-start justify-end overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Video thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgVideoThumbnail} />
        <div className="absolute bg-gradient-to-b from-[rgba(102,102,102,0)] inset-0 rounded-[12px] to-[rgba(21,21,23,0.85)]" />
      </div>
      <VideoDetails />
      <ProgressContainer />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section">
      <SectionTitle />
      <VideoThumbnail />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section title">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Ai Suggestions</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 25 24" width="25">
        <g id="Frame">
          <rect fill="#0088FF" height="24" rx="4" width="25" />
          <path d={svgPaths.pea433c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function SuggestionDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-center text-white whitespace-nowrap" data-name="Suggestion details">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[10px]">Create Shorts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[8px]">45 sec</p>
    </div>
  );
}

function Suggestion() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)]" data-name="Suggestion">
      <Frame2 />
      <SuggestionDetails />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Group">
      <div className="absolute inset-[-6.25%]">
        <svg className="block size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
          <g id="Group">
            <path d={svgPaths.pb4da180} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3c148cc0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#1fc16b] content-stretch flex flex-col items-start overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <Group />
    </div>
  );
}

function SuggestionDetails1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-center text-white whitespace-nowrap" data-name="Suggestion details">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[10px]">Find B-roll</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[8px]">8 new clips</p>
    </div>
  );
}

function Suggestion1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)]" data-name="Suggestion">
      <Frame3 />
      <SuggestionDetails1 />
    </div>
  );
}

function SuggestionDetails2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Suggestion details">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
          <g id="Suggestion details">
            <path d={svgPaths.pa9eda80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pa1b600} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#dfb400] content-stretch flex flex-col items-start overflow-clip p-[6px] relative rounded-[4px] shrink-0" data-name="Frame">
      <SuggestionDetails2 />
    </div>
  );
}

function SuggestionDetails3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 text-center text-white whitespace-nowrap" data-name="Suggestion details">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[10px]">Translate</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[8px]">5 languages</p>
    </div>
  );
}

function Suggestion2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px overflow-clip p-[8px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)]" data-name="Suggestion">
      <Frame4 />
      <SuggestionDetails3 />
    </div>
  );
}

function SuggestionsContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[77px] items-start relative shrink-0 w-full" data-name="Suggestions container">
      <Suggestion />
      <Suggestion1 />
      <Suggestion2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section">
      <SectionTitle1 />
      <SuggestionsContainer />
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Section title">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Needs Your Attention</p>
    </div>
  );
}

function NotificationMessage() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-center text-white whitespace-nowrap" data-name="Notification message">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Alex Commented
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px]">Product launch.mp4</p>
    </div>
  );
}

function ListItemDetails() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="List item details">
      <div className="relative shrink-0 size-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <circle cx="20" cy="20" fill="#D9D9D9" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <NotificationMessage />
    </div>
  );
}

function NotificationTimeContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notification time container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">2m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[60px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="List item">
      <ListItemDetails />
      <NotificationTimeContainer />
    </div>
  );
}

function NotificationMessage1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-center text-white whitespace-nowrap" data-name="Notification message">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Jamie Liked
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px]">Design Proposal.docx</p>
    </div>
  );
}

function ListItemDetails1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="List item details">
      <div className="relative shrink-0 size-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <circle cx="20" cy="20" fill="#D9D9D9" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <NotificationMessage1 />
    </div>
  );
}

function NotificationTimeContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notification time container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">5m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[60px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="List item">
      <ListItemDetails1 />
      <NotificationTimeContainer1 />
    </div>
  );
}

function NotificationMessage2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-center text-white whitespace-nowrap" data-name="Notification message">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Taylor Assigned
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px]">Wireframes.png</p>
    </div>
  );
}

function ListItemDetails2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="List item details">
      <div className="relative shrink-0 size-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <circle cx="20" cy="20" fill="#D9D9D9" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <NotificationMessage2 />
    </div>
  );
}

function NotificationTimeContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notification time container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">10m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[60px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="List item">
      <ListItemDetails2 />
      <NotificationTimeContainer2 />
    </div>
  );
}

function NotificationMessage3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-center text-white whitespace-nowrap" data-name="Notification message">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] tracking-[0.1px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Morgan Edited
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px]">User Journey.pdf</p>
    </div>
  );
}

function ListItemDetails3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="List item details">
      <div className="relative shrink-0 size-[40px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <circle cx="20" cy="20" fill="#D9D9D9" id="Ellipse 3" r="20" />
        </svg>
      </div>
      <NotificationMessage3 />
    </div>
  );
}

function NotificationTimeContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Notification time container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">15m ago</p>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#84EBB4" id="Ellipse 3" r="5" />
        </svg>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="bg-[rgba(163,163,168,0.05)] content-stretch flex h-[60px] items-center justify-between overflow-clip p-[10px] relative rounded-[12px] shadow-[0px_0px_0px_0px_rgba(27,28,29,0)] shrink-0 w-full" data-name="List item">
      <ListItemDetails3 />
      <NotificationTimeContainer3 />
    </div>
  );
}

function ListContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="List container">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Section">
      <SectionTitle2 />
      <ListContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px overflow-x-clip overflow-y-auto relative w-full" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px px-[24px] relative w-full" data-name="Content">
      <Footer />
      <Container />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px relative" data-name="Menu 1">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="li:home">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 20 22" width="20">
            <path clipRule="evenodd" d={svgPaths.p394b7300} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_33.33%_4.17%_33.33%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 8 12" width="8">
            <path clipRule="evenodd" d={svgPaths.p378bbd80} fill="white" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Home</p>
    </div>
  );
}

function Container2() {
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
      <Container2 />
    </div>
  );
}

function Menu1() {
  return (
    <a className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-center min-w-px relative" data-name="Menu 2">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="folder">
        <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 20 16" width="20">
            <path d={svgPaths.p3e1ce00} fill="#7E7E8F" id="icon" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#7e7e8f] text-[12px] text-center whitespace-nowrap">Project</p>
    </a>
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

export default function Home() {
  return (
    <div className="bg-[#0d0d0f] content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[30px] size-full" data-name="Home">
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
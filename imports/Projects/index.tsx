import { useState } from "react";
import imgFrame48 from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

const SEARCH_ICON = "M19.25 19.25L14.9 14.9M17.25 9.25C17.25 13.6683 13.6683 17.25 9.25 17.25C4.83172 17.25 1.25 13.6683 1.25 9.25C1.25 4.83172 4.83172 1.25 9.25 1.25C13.6683 1.25 17.25 4.83172 17.25 9.25Z";
const PLUS_ICON = "M7.75 10.3333H0V7.75H7.75V0H10.3333V7.75H18.0833V10.3333H10.3333V18.0833H7.75V10.3333Z";

interface FilterTabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function FilterTab({ label, active = false, onClick }: FilterTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[32px] items-center justify-center px-[16px] py-[8px] rounded-[8px] shrink-0 transition-colors ${
        active
          ? "bg-white text-[#151517]"
          : "bg-[rgba(163,163,168,0.05)] text-[#a9a9b4] hover:text-white"
      }`}
    >
      <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[16px] whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function ProjectCard({ title, subtitle, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[12px] overflow-hidden aspect-[1/1.1] text-left cursor-pointer active:scale-[0.98] transition-transform w-full"
    >
      {/* Background image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        src={imgFrame48}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-[12px] flex flex-col items-start z-10">
        <p className="font-['Inter',sans-serif] font-bold text-[12px] leading-[18px] text-white w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Inter',sans-serif] font-normal text-[10px] leading-[15px] text-[#7e7e8f]">
          {subtitle}
        </p>
      </div>
    </button>
  );
}

function NewProjectCard({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(163,163,168,0.05)] rounded-[12px] flex flex-col items-center justify-center gap-[8px] aspect-[1/1.1] active:scale-[0.98] transition-transform cursor-pointer w-full"
    >
      <div className="bg-white rounded-[8px] w-[31px] h-[31px] flex items-center justify-center">
        <svg fill="none" height="18" viewBox="0 0 18.0833 18.0833" width="18">
          <path d={PLUS_ICON} fill="#0D0D0F" />
        </svg>
      </div>
      <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[24px] text-white text-center">
        New Project
      </p>
    </button>
  );
}

interface ProjectsProps {
  onNewProject?: () => void;
  onSelectProject?: () => void;
  onSearch?: () => void;
}

export default function Projects({ onNewProject, onSelectProject, onSearch }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div
      className="bg-[#0d0d0f] flex flex-col items-center overflow-clip relative w-full h-full"
      data-name="Projects"
    >
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[24px] px-[24px] pt-[16px] w-full overflow-y-auto min-h-0">
        {/* Header: Title + Search */}
        <div className="flex items-center justify-between pt-[4px] w-full shrink-0">
          <h1 className="font-['Inter',sans-serif] font-bold text-[26px] leading-[39px] text-white">
            Projects
          </h1>
          <button
            onClick={onSearch}
            className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer active:opacity-60 transition-opacity"
            aria-label="Search"
          >
            <svg fill="none" height="20.5" viewBox="0 0 20.5 20.5" width="20.5">
              <path
                d={SEARCH_ICON}
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-[8px] items-start w-full shrink-0">
          {["All", "Edit", "View", "Comment"].map((tab) => (
            <FilterTab
              key={tab}
              label={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-2 gap-[8px] w-full pb-[24px]">
          <NewProjectCard onClick={onNewProject} />
          <ProjectCard
            title="Saas Explaier"
            subtitle="04:04m • 2h ago"
            onClick={onSelectProject}
          />
          <ProjectCard
            title="Customer story"
            subtitle="04:04m • 2h ago"
            onClick={onSelectProject}
          />
          <ProjectCard
            title="Podcast Ep 12"
            subtitle="04:04m • 2h ago"
            onClick={onSelectProject}
          />
          <ProjectCard
            title="Product Launch"
            subtitle="04:04m • 2h ago"
            onClick={onSelectProject}
          />
        </div>
      </div>
    </div>
  );
}
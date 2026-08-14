import { motion } from "motion/react";
import ProjectsImport from "../../imports/Projects";
import { BottomNav } from "./HomeScreen";

interface Props {
  onNavigateHome: () => void;
  onNavigateAi: () => void;
  onNewProject: () => void;
  onSelectProject: () => void;
  onSearch: () => void;
  onBack?: () => void;
}

export function ProjectsScreen({
  onNavigateHome,
  onNavigateAi,
  onNewProject,
  onSelectProject,
  onSearch,
}: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Scrollable content area (bottom nav NOT inside scroll) */}
      <div className="flex-1 min-h-0 overflow-y-auto scroll-smooth-ios relative">
        <ProjectsImport />

        {/* Click overlay for "New Project" card */}
        <button
          onClick={onNewProject}
          className="absolute top-[200px] left-[24px] w-[calc(50%-28px)] h-[160px] z-20 opacity-0 cursor-pointer"
          aria-label="Create New Project"
        />

        {/* Click overlay for existing projects (first row right) */}
        <button
          onClick={onSelectProject}
          className="absolute top-[200px] right-[24px] w-[calc(50%-28px)] h-[160px] z-20 opacity-0 cursor-pointer"
          aria-label="Select Project"
        />

        {/* Click overlay for existing projects (second row) */}
        <button
          onClick={onSelectProject}
          className="absolute top-[380px] left-[24px] right-[24px] h-[160px] z-20 opacity-0 cursor-pointer"
          aria-label="Select Project"
        />

        {/* Click overlay for Search icon/bar */}
        <button
          onClick={onSearch}
          className="absolute top-[80px] right-[24px] w-[24px] h-[24px] z-20 opacity-0 cursor-pointer"
          aria-label="Search Projects"
        />
      </div>

      {/* Fixed bottom nav — always visible, never scrolls */}
      <BottomNav
        active="projects"
        onHome={onNavigateHome}
        onAi={onNavigateAi}
      />
    </motion.div>
  );
}

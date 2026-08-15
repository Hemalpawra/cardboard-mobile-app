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
        <ProjectsImport
          onNewProject={onNewProject}
          onSelectProject={onSelectProject}
          onSearch={onSearch}
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

import { motion } from "motion/react";
import ProjectsImport from "../../imports/Projects";

interface Props {
  onNavigateHome: () => void;
  onNavigateAi: () => void;
  onNewProject: () => void;
  onSelectProject: () => void;
}

export function ProjectsScreen({
  onNavigateHome,
  onNavigateAi,
  onNewProject,
  onSelectProject,
}: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative size-full overflow-hidden">
        <ProjectsImport />

        {/* Bottom Navigation overlays */}
        {/* Left Tab: Home */}
        <button
          onClick={onNavigateHome}
          className="absolute bottom-[30px] left-[24px] w-[90px] h-[54px] z-20 opacity-0 cursor-pointer"
          aria-label="Navigate Home"
        />

        {/* Center Tab: AI Star */}
        <button
          onClick={onNavigateAi}
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[70px] h-[54px] z-20 opacity-0 cursor-pointer"
          aria-label="Open AI Assistant"
        />

        {/* Click overlay for "New Project" card */}
        <button
          onClick={onNewProject}
          className="absolute top-[200px] left-[24px] w-[calc(50%-28px)] h-[160px] z-20 opacity-0 cursor-pointer"
          aria-label="Create New Project"
        />

        {/* Click overlay for existing project cards */}
        <button
          onClick={onSelectProject}
          className="absolute top-[200px] right-[24px] w-[calc(50%-28px)] h-[160px] z-20 opacity-0 cursor-pointer"
          aria-label="Select Project"
        />
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";
import ProjectReadyImport from "../../imports/ProjectReady";

interface Props {
  onOpenProject: () => void;
  onBack: () => void;
}

export function ProjectReadyScreen({ onOpenProject, onBack }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative size-full overflow-hidden">
        <ProjectReadyImport />

        {/* Back button overlay */}
        <button
          onClick={onBack}
          className="absolute top-[68px] left-[24px] w-[36px] h-[36px] z-20 opacity-0 cursor-pointer"
          aria-label="Go back"
        />

        {/* Open Project CTA Button overlay */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onOpenProject}
          className="absolute bottom-[60px] left-[24px] right-[24px] h-[54px] z-20 opacity-0 cursor-pointer"
          aria-label="Open Project"
        />
      </div>
    </motion.div>
  );
}

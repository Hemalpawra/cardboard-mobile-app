import { motion } from "motion/react";
import HomeImport from "../../imports/Home";

interface Props {
  onNavigateAi: () => void;
  onNavigateProjects: () => void;
  onSelectCollaboration: () => void;
  onSelectProject: () => void;
}

export function HomeScreen({
  onNavigateAi,
  onNavigateProjects,
  onSelectCollaboration,
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
        <HomeImport />

        {/* Interactive click overlays over imports/Home elements */}
        {/* Bottom Tab: AI Assistant Star (center) */}
        <button
          onClick={onNavigateAi}
          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[70px] h-[54px] z-20 opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#0088FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f] rounded-[24px] cursor-pointer"
          aria-label="Open AI Assistant"
        />

        {/* Bottom Tab: Projects (right) */}
        <button
          onClick={onNavigateProjects}
          className="absolute bottom-[30px] right-[24px] w-[90px] h-[54px] z-20 opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#0088FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f] rounded-[12px] cursor-pointer"
          aria-label="Open Projects"
        />

        {/* Click overlay for "Continue Editing" Video Card */}
        <button
          onClick={onSelectProject}
          className="absolute top-[130px] left-[24px] right-[24px] h-[200px] z-20 opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#0088FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f] rounded-[12px] cursor-pointer"
          aria-label="Continue editing project"
        />

        {/* Click overlay for "Needs Your Attention" Notifications list */}
        <button
          onClick={onSelectCollaboration}
          className="absolute top-[520px] left-[24px] right-[24px] h-[180px] z-20 opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#0088FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f] rounded-[12px] cursor-pointer"
          aria-label="Open Team Collaboration"
        />
      </div>
    </motion.div>
  );
}

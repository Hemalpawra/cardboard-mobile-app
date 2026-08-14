import { motion } from "motion/react";
import CollaborationImport from "../../imports/Collaboration";

interface Props {
  onBack: () => void;
}

export function CollaborationScreen({ onBack }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative size-full overflow-hidden">
        <CollaborationImport />

        {/* Back / Skip button overlay */}
        <button
          onClick={onBack}
          className="absolute top-[68px] right-[24px] w-[80px] h-[36px] z-20 opacity-0 cursor-pointer"
          aria-label="Back to home"
        />

        {/* Continue / Done CTA Button overlay */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          className="absolute bottom-[60px] left-[24px] right-[24px] h-[54px] z-20 opacity-0 cursor-pointer"
          aria-label="Back"
        />
      </div>
    </motion.div>
  );
}

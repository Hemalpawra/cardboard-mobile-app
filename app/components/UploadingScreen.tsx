import { useEffect, useState } from "react";
import { motion } from "motion/react";
import UploadingImport from "../../imports/Uploading";

interface Props {
  onComplete: () => void;
}

export function UploadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative size-full overflow-hidden">
        <UploadingImport />

        {/* Dynamic progress overlay */}
        <div className="absolute top-[415px] left-[24px] right-[24px] z-20 flex flex-col gap-[8px]">
          <div className="flex justify-between text-[#aeaeb5] text-[20px] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            <span>Uploading...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-[8px] bg-[#32323a] rounded-[4px] overflow-hidden w-full">
            <motion.div
              className="h-full bg-[#0088FF] rounded-[4px]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

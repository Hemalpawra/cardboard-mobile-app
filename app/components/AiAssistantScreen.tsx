import { useState } from "react";
import { motion } from "motion/react";
import AiNewChatImport from "../../imports/AiNewChat";

interface Props {
  onBack: () => void;
}

export function AiAssistantScreen({ onBack }: Props) {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = () => {
    if (!inputVal.trim()) return;
    setMessages((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative size-full overflow-hidden flex flex-col justify-between">
        <AiNewChatImport />

        {/* Header navigation overlay — Back to Home */}
        <button
          onClick={onBack}
          className="absolute top-[68px] left-[24px] w-[40px] h-[40px] z-30 opacity-0 cursor-pointer"
          aria-label="Back to home"
        />

        {/* Live interactive overlay input over the AI Chat box at the bottom */}
        <div className="absolute bottom-[60px] left-[24px] right-[24px] z-30 flex flex-col gap-[12px] bg-[#151517] p-[16px] rounded-[16px] border border-[#32323a]">
          {messages.length > 0 && (
            <div className="max-h-[140px] overflow-y-auto flex flex-col gap-[8px] mb-[8px]">
              {messages.map((msg, idx) => (
                <div key={idx} className="self-end bg-[#0088FF] text-white px-[12px] py-[8px] rounded-[12px] text-[14px]">
                  {msg}
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-[8px] w-full">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask AI to trim, add captions, find B-roll..."
              className="flex-1 bg-transparent text-white placeholder-[#585865] text-[15px] focus:outline-none"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              onClick={handleSend}
              className="bg-[#0088FF] hover:bg-[#0077EE] text-white text-[14px] px-[14px] py-[6px] rounded-[20px] font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

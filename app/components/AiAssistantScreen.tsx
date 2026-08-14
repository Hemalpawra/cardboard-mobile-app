import { useState } from "react";
import { motion } from "motion/react";
import AiNewChatImport from "../../imports/AiNewChat";

interface Props {
  onBack: () => void;
}

export function AiAssistantScreen({ onBack }: Props) {
  const [messages, setMessages] = useState<{ sender: "user" | "ai"; text: string; status?: "sending" | "error" }[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  const handleSend = (textToSend?: string) => {
    const prompt = (textToSend || inputVal).trim();
    if (!prompt || isThinking) return;

    setErrorBanner(null);
    const newMsg = { sender: "user" as const, text: prompt };
    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputVal("");
    setIsThinking(true);

    // Simulate AI response & processing
    setTimeout(() => {
      if (prompt.toLowerCase().includes("fail") || prompt.toLowerCase().includes("error")) {
        setIsThinking(false);
        setErrorBanner("AI Server connection timeout. Tap to retry.");
        return;
      }
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: `Applied: "${prompt}". 2 clips updated.` },
      ]);
    }, 1200);
  };

  const handleChipClick = (chipText: string) => {
    handleSend(chipText);
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
          className="absolute top-[68px] left-[24px] w-[40px] h-[40px] z-30 opacity-0 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[#0088FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0f] rounded-[8px]"
          aria-label="Back to home"
        />

        {/* Live interactive overlay input & state engine over AI Chat box */}
        <div className="absolute bottom-[60px] left-[24px] right-[24px] z-30 flex flex-col gap-[12px] bg-[#151517] p-[16px] rounded-[16px] border border-[#32323a] shadow-xl">
          {/* Error Recovery Banner */}
          {errorBanner && (
            <div className="flex items-center justify-between bg-red-500/10 border border-red-500/30 text-red-400 px-[12px] py-[8px] rounded-[10px] text-[13px]">
              <span>{errorBanner}</span>
              <button
                onClick={() => handleSend("Trim 10s pauses")}
                className="underline font-semibold hover:text-white transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Starter Prompt Chips for Empty Data State */}
          {messages.length === 0 && !isThinking && (
            <div className="flex items-center gap-[8px] overflow-x-auto pb-[4px] scrollbar-none">
              {["✂️ Trim pauses", "💬 Add captions", "🎬 Find B-roll"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleChipClick(chip.replace(/^[^\s]+\s/, ""))}
                  className="bg-[#222228] hover:bg-[#2c2c34] text-white/80 hover:text-white text-[12px] px-[10px] py-[5px] rounded-[16px] whitespace-nowrap transition-colors border border-white/10"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Active Message History */}
          {messages.length > 0 && (
            <div className="max-h-[140px] overflow-y-auto flex flex-col gap-[8px] mb-[4px] pr-[4px]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] px-[12px] py-[8px] rounded-[12px] text-[14px] ${
                    msg.sender === "user"
                      ? "self-end bg-[#0088FF] text-white"
                      : "self-start bg-[#222228] text-white/90 border border-white/10"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {/* AI Thinking State */}
              {isThinking && (
                <div className="self-start bg-[#222228] text-[#0088FF] px-[12px] py-[8px] rounded-[12px] text-[13px] flex items-center gap-[6px] border border-[#0088FF]/30">
                  <span className="animate-spin text-[12px]">⚡</span>
                  <span>AI is analyzing timeline & generating edits...</span>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-[8px] w-full">
            <input
              type="text"
              value={inputVal}
              disabled={isThinking}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={isThinking ? "AI is processing..." : "Ask AI to trim, add captions, find B-roll..."}
              className="flex-1 bg-transparent text-white placeholder-[#8e8e9a] text-[15px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0088FF] rounded-[6px] disabled:opacity-50"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              onClick={() => handleSend()}
              disabled={isThinking || !inputVal.trim()}
              className="bg-[#0088FF] hover:bg-[#0077EE] disabled:bg-[#32323a] text-white disabled:text-white/40 text-[14px] px-[14px] py-[6px] rounded-[20px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white"
            >
              {isThinking ? "Editing" : "Send"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

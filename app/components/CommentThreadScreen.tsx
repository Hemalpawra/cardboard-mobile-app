import { useState } from "react";
import { motion } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const HEART_OUTLINE = "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z";
const HEART_FILLED = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
const UPLOAD_ICON = "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z";

const DUMMY_AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg"
];

interface Reply {
  id: string;
  name: string;
  avatar: string;
  time: string;
  text: string;
  likes: number;
  likedByMe: boolean;
  isOnline: boolean;
}

interface Props {
  onBack: () => void;
}

export const CommentThreadScreen = ({ onBack }: Props) => {
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<Reply[]>([
    { id: "1", name: "Alex Dawson", avatar: DUMMY_AVATARS[0], time: "2m ago", text: "I Agree, maybe try a fade instead?", likes: 2, likedByMe: false, isOnline: true },
    { id: "2", name: "Jordan Lee", avatar: DUMMY_AVATARS[1], time: "5m ago", text: "That sounds interesting, I like the idea!", likes: 3, likedByMe: true, isOnline: true },
    { id: "3", name: "Taylor Smith", avatar: DUMMY_AVATARS[2], time: "10m ago", text: "Could we also consider a slide animation?", likes: 1, likedByMe: false, isOnline: true },
    { id: "4", name: "Morgan Reed", avatar: DUMMY_AVATARS[3], time: "15m ago", text: "I'm on board with the fade, let's test it out", likes: 0, likedByMe: false, isOnline: true }
  ]);

  const toggleLike = (id: string) => {
    setReplies(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, likedByMe: !r.likedByMe, likes: r.likedByMe ? r.likes - 1 : r.likes + 1 };
      }
      return r;
    }));
  };

  const handleReplyClick = (name: string) => {
    // Extract first name or just use full name without spaces
    const mention = `@${name.replace(/\s+/g, '')} `;
    setReplyText(prev => prev + mention);
  };

  const handleSubmit = () => {
    if (!replyText.trim()) return;
    setReplies([...replies, {
      id: Date.now().toString(),
      name: "You",
      avatar: DUMMY_AVATARS[0], // using first avatar as self for demo
      time: "Just now",
      text: replyText,
      likes: 0,
      likedByMe: false,
      isOnline: true
    }]);
    setReplyText("");
  };

  return (
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-[#0d0d0f] font-['Inter',sans-serif] flex flex-col z-50"
    >
      {/* Header */}
      <div className="flex items-center px-[20px] pt-[20px] pb-[16px] shrink-0 border-b border-[#1c1c24]">
        <button onClick={onBack} className="active:opacity-60 transition-opacity mr-[16px]">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
            <path d={BACK_ICON} fill="white" />
          </svg>
        </button>
        <span className="text-white text-[16px] font-medium">Comment</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px] scrollbar-hide">
        {/* Original Comment Area */}
        <div className="px-[20px] py-[24px]">
          <div className="bg-[#1a1a21] rounded-[16px] p-[20px]">
            <div className="text-[#81a1c1] text-[13px] font-medium mb-[8px]">00:36:14</div>
            <div className="text-white text-[18px] font-semibold leading-[1.4]">Let's make this Transition smoother</div>
          </div>
        </div>

        <div className="px-[20px]">
           <div className="text-white font-semibold text-[15px] mb-[16px]">{replies.length} replies</div>
           
           <div className="flex flex-col gap-[16px]">
             {replies.map((reply) => (
               <div key={reply.id} className="bg-[#1a1a21] rounded-[16px] p-[16px] flex gap-[12px]">
                 <div className="relative shrink-0 w-[40px] h-[40px]">
                   <img src={reply.avatar} alt={reply.name} className="w-full h-full rounded-full object-cover bg-white/10" />
                 </div>
                 
                 <div className="flex-1">
                   <div className="flex justify-between items-start mb-[4px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-white font-semibold text-[15px]">{reply.name}</span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[#aeaeb5] text-[12px]">{reply.time}</span>
                        {reply.isOnline && <div className="w-[8px] h-[8px] bg-[#34c759] rounded-full" />}
                      </div>
                   </div>
                   
                   <p className="text-[#aeaeb5] text-[14px] leading-[1.4] mb-[12px] pr-[16px]">
                     {reply.text}
                   </p>
                   
                   <div className="flex items-center justify-between">
                     <button 
                       onClick={() => handleReplyClick(reply.name)}
                       className="text-[#aeaeb5] text-[13px] font-medium active:opacity-60 transition-opacity"
                     >
                       Reply
                     </button>
                     <button 
                       onClick={() => toggleLike(reply.id)}
                       className="flex items-center gap-[4px] active:scale-90 transition-transform"
                     >
                       <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                         <path d={reply.likedByMe ? HEART_FILLED : HEART_OUTLINE} fill={reply.likedByMe ? "#ff3b30" : "#aeaeb5"} />
                       </svg>
                       {reply.likes > 0 && (
                         <span className={`text-[13px] font-medium ${reply.likedByMe ? 'text-[#ff3b30]' : 'text-[#aeaeb5]'}`}>
                           {reply.likes}
                         </span>
                       )}
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Reply Input Toolbar */}
      <div className="absolute bottom-0 left-0 right-0 px-[20px] pt-[16px] pb-[40px] bg-[#0d0d0f]">
        <div className="w-full h-[48px] bg-[#1a1a21] rounded-[24px] flex items-center px-[16px] border border-[#32323a]">
          <input 
            type="text" 
            placeholder="Reply" 
            className="flex-1 bg-transparent text-white outline-none placeholder-[#7e7e8f] text-[15px]" 
            value={replyText}
            onChange={e => setReplyText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
          <button 
            onClick={handleSubmit}
            className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-all ml-[8px] ${replyText.trim() ? 'bg-white/20 active:opacity-60' : 'opacity-30'}`}
          >
             <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
               <path d={UPLOAD_ICON} fill="white" />
             </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

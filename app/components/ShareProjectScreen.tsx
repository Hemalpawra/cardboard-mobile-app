import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const BACK_ICON = "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z";
const LOCK_ICON = "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z";
const DOWN_ICON = "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z";
const CHECK_ICON = "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z";

const DUMMY_AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
];

interface Props {
  onBack: () => void;
}

export const ShareProjectScreen = ({ onBack }: Props) => {
  const [toastMessage, setToastMessage] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const people = [
    { id: "1", name: "Hemal Singh", role: "Owner", access: "Editor", avatar: DUMMY_AVATARS[0] },
    { id: "2", name: "Aisha Patel", role: "last seen 2hours ago", access: "Viewer", avatar: DUMMY_AVATARS[1] },
    { id: "3", name: "Rajiv Kumar", role: "last seen 2hours ago", access: "Commenter", avatar: DUMMY_AVATARS[2] },
    { id: "4", name: "Sofia Lopez", role: "last seen 3 sec ago", access: "Editor", avatar: DUMMY_AVATARS[3] },
    { id: "5", name: "Marcus Lee", role: "Online", access: "Viewer", avatar: DUMMY_AVATARS[4] },
  ];

  const handleCopyLink = () => {
    setToastMessage("Link Copied");
    setTimeout(() => setToastMessage(""), 2000);
  };

  const handleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const selectAccess = (id: string, newAccess: string) => {
    // In a real app we'd update state here. For UI demo we just close.
    setActiveDropdown(null);
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
        <span className="text-white text-[16px] font-medium">Share Project</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px] scrollbar-hide px-[20px] pt-[24px]">
        {/* People with access */}
        <h2 className="text-white text-[16px] font-semibold mb-[16px]">People with access</h2>
        
        {/* Invite Input */}
        <div className="bg-[#1a1a21] rounded-[12px] h-[52px] flex items-center justify-between px-[16px] mb-[24px]">
          <input 
            type="text" 
            placeholder="Invite people or team" 
            className="bg-transparent text-white placeholder-[#7e7e8f] outline-none flex-1 text-[15px]" 
          />
          <button className="flex items-center gap-[4px] text-[#aeaeb5] text-[14px] font-medium ml-[12px]">
            Editor
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
              <path d={DOWN_ICON} fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* People List */}
        <div className="flex flex-col">
          {people.map(person => (
            <div key={person.id} className="flex items-center justify-between py-[12px] relative">
              <div className="flex items-center gap-[12px]">
                <img src={person.avatar} className="w-[40px] h-[40px] rounded-full object-cover bg-[#2a2a35]" alt="" />
                <div className="flex flex-col">
                  <span className="text-white text-[15px] font-medium">{person.name}</span>
                  <span className={`text-[13px] ${person.role === 'Online' ? 'text-[#34c759]' : 'text-[#7e7e8f]'}`}>
                    {person.role}
                  </span>
                </div>
              </div>

              <div className="relative">
                <button 
                  onClick={() => handleDropdown(person.id)}
                  className="flex items-center gap-[4px] text-[#aeaeb5] text-[14px] font-medium active:opacity-60"
                >
                  {person.access}
                  <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                    <path d={DOWN_ICON} fill="currentColor" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === person.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 top-[24px] bg-[#2a2a35] rounded-[8px] border border-[#32323a] shadow-lg w-[140px] py-[4px] z-20"
                    >
                      {['Viewer', 'Commenter', 'Editor'].map(role => (
                        <button 
                          key={role}
                          onClick={() => selectAccess(person.id, role)}
                          className="w-full px-[12px] py-[10px] flex items-center justify-between text-left text-white text-[14px] hover:bg-[#32323a] transition-colors"
                        >
                          {role}
                          {person.access === role && (
                            <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                              <path d={CHECK_ICON} fill="white" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* General Access */}
        <h2 className="text-white text-[16px] font-semibold mt-[32px] mb-[16px]">General Access</h2>
        <div className="bg-[#1a1a21] rounded-[16px] p-[16px] flex items-start gap-[16px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#2a2a35] flex items-center justify-center shrink-0">
             <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
               <path d={LOCK_ICON} fill="white" />
             </svg>
          </div>
          <div className="flex flex-col flex-1">
             <span className="text-white text-[15px] font-medium mb-[4px]">Restricted</span>
             <span className="text-[#7e7e8f] text-[13px] leading-[1.4] mb-[8px]">Only People added can open the project</span>
          </div>
          <div className="relative pt-[4px]">
            <button 
              onClick={() => handleDropdown("general")}
              className="flex items-center gap-[4px] text-[#aeaeb5] text-[14px] font-medium active:opacity-60"
            >
              Change
              <svg fill="none" height="16" viewBox="0 0 24 24" width="16">
                <path d={DOWN_ICON} fill="currentColor" />
              </svg>
            </button>
            <AnimatePresence>
              {activeDropdown === "general" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 top-[28px] bg-[#2a2a35] rounded-[8px] border border-[#32323a] shadow-lg w-[160px] py-[4px] z-20"
                >
                  <button onClick={() => selectAccess("general", "Restricted")} className="w-full px-[12px] py-[10px] text-left text-white text-[14px] hover:bg-[#32323a]">Restricted</button>
                  <button onClick={() => selectAccess("general", "Anyone with link")} className="w-full px-[12px] py-[10px] text-left text-white text-[14px] hover:bg-[#32323a]">Anyone with link</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-[20px] bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f] to-transparent pointer-events-none z-10">
        <button 
          onClick={handleCopyLink}
          className="w-full h-[56px] rounded-[28px] bg-white text-black font-semibold text-[16px] flex items-center justify-center active:scale-95 transition-transform pointer-events-auto"
        >
          Copy link
        </button>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-[100px] left-1/2 -translate-x-1/2 bg-[#34c759] text-white px-[20px] py-[12px] rounded-full text-[14px] font-medium shadow-lg z-50 pointer-events-none whitespace-nowrap"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

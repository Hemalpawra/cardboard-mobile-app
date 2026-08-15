import { motion } from "motion/react";
import { StatusBar } from "./StatusBar";

const APPLE_PATH =
  "M18.9148 8.18319C18.8008 8.25346 16.2935 9.71324 16.322 12.7501C16.3535 16.3826 19.5063 17.5922 19.5425 17.6059C19.5142 17.6924 19.0384 19.3287 17.8806 21.0187C16.88 22.4828 15.8434 23.9386 14.2074 23.969C12.6002 23.9984 12.0822 23.0153 10.2461 23.0153C8.40881 23.0153 7.83375 23.9386 6.31383 23.9984C4.73477 24.0582 3.53257 22.4174 2.52457 20.9614C0.463933 17.9816 -1.11158 12.5403 1.00397 8.86825C2.05425 7.04457 3.93149 5.8892 5.96835 5.85936C7.51957 5.83004 8.9825 6.90218 9.93135 6.90218C10.8666 6.90218 12.5429 5.65236 14.5188 5.79854C15.2932 5.85593 17.4915 6.08706 18.9148 8.18319ZM13.2996 3.83148C14.1388 2.81729 14.7034 1.40486 14.5479 1.19209e-05C13.3401 0.0479087 11.8794 0.804518 11.0131 1.81806C10.2373 2.7159 9.55604 4.1539 9.74102 5.53007C11.0872 5.63409 12.4612 4.84629 13.2996 3.83148Z";

// Google logo paths
const GOOGLE_BLUE =
  "M11.4804 2.44489C11.4804 1.46162 11.4006 0.744092 11.228 0H0V4.43798H6.59056C6.45774 5.54089 5.74021 7.20183 4.14568 8.31792L4.12333 8.4665L7.6734 11.2167L7.91936 11.2413C10.1782 9.15508 11.4804 6.08565 11.4804 2.44489Z";
const GOOGLE_GREEN =
  "M10.6832 9.59359C13.912 9.59359 16.6227 8.53053 18.6026 6.69692L14.8289 3.77359C13.8191 4.47783 12.4637 4.96947 10.6832 4.96947C7.52079 4.96947 4.83673 2.88339 3.87994 0L3.73969 0.0119088L0.0482748 2.86873L0 3.00293C1.96653 6.90944 6.00595 9.59359 10.6832 9.59359Z";
const GOOGLE_YELLOW =
  "M5.15551 7.79157C4.90305 7.04748 4.75695 6.25017 4.75695 5.42638C4.75695 4.6025 4.90305 3.80528 5.14223 3.06119L5.13554 2.90272L1.39786 0L1.27557 0.0581681C0.465069 1.67927 0 3.49969 0 5.42638C0 7.35307 0.465069 9.1734 1.27557 10.7945L5.15551 7.79157Z";
const GOOGLE_RED =
  "M10.6832 4.62403C12.9288 4.62403 14.4435 5.59401 15.3072 6.40461L18.6823 3.10928C16.6095 1.1826 13.912 0 10.6832 0C6.00595 0 1.96653 2.68406 0 6.59056L3.86666 9.59359C4.83673 6.7102 7.52079 4.62403 10.6832 4.62403Z";

const MAIL_PATH =
  "M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z";

const BACK_ARROW = "M4.78125 9.75L11.7813 15.8167L10 17.3333L0 8.66667L10 0L11.7813 1.51667L4.78125 7.58333H20V9.75H4.78125Z";

interface Props {
  onEmailSignUp: () => void;
  onBack?: () => void;
}

export function SignUpScreen({ onEmailSignUp, onBack }: Props) {
  return (
    <motion.div
      className="absolute inset-0 bg-[#0d0d0f] flex flex-col justify-center items-center p-[24px] overflow-y-auto"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="w-full max-w-[380px] flex-none">
        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center justify-center w-[36px] h-[36px] -ml-[6px] active:opacity-60 transition-opacity focus-visible:ring-2 focus-visible:ring-[#0088ff] rounded-full"
            aria-label="Go back"
          >
            <svg fill="none" height="17" viewBox="0 0 20 17.3333" width="20">
              <path d={BACK_ARROW} fill="#858590" />
            </svg>
          </button>
        )}
      </div>
      <div className="flex flex-col w-full max-w-[380px] gap-[32px] my-auto py-[16px]">
        {/* Header */}
        <div className="flex flex-col gap-[4px] text-left">
          <p
            className="text-white text-[28px] sm:text-[32px] leading-[1.2] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Create your account
          </p>
          <p
            className="text-[#aeaeb5] text-[18px] sm:text-[20px] leading-[1.4] m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Join thousands of video creators.
          </p>
        </div>

        {/* Auth buttons */}
        <div className="flex flex-col gap-[12px]">
          {/* Apple */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={() => {}}
            className="flex items-center justify-center gap-[8px] w-full h-[54px] bg-white hover:bg-white/90 rounded-[12px] transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          >
            <svg fill="none" height="24" viewBox="0 0 19.5425 24.0582" width="19.5425">
              <path d={APPLE_PATH} fill="#0d0d0f" />
            </svg>
            <span
              className="text-[#0d0d0f] text-[16px] leading-[24px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Continue with Apple
            </span>
          </motion.button>

          {/* Google */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={() => {}}
            className="flex items-center justify-center gap-[8px] w-full h-[54px] bg-white hover:bg-white/90 rounded-[12px] transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
          >
            <svg fill="none" height="20" viewBox="0 0 21.6826 20" width="21.6826">
              <g transform="translate(2.08, 5.20638)">
                <path d={GOOGLE_BLUE} fill="#4285F4" transform="translate(9.2, -5.2)" />
                <path d={GOOGLE_GREEN} fill="#34A853" transform="translate(1.08, 4.21)" />
                <path d={GOOGLE_YELLOW} fill="#FBBC05" transform="translate(0, 0)" />
                <path d={GOOGLE_RED} fill="#EA4335" transform="translate(1.08, -5.2)" />
              </g>
            </svg>
            <span
              className="text-[#0d0d0f] text-[16px] leading-[24px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Continue with Google
            </span>
          </motion.button>

          {/* Or divider */}
          <div className="flex items-center gap-[16px] my-[4px]">
            <div className="flex-1 h-px" style={{ background: "#3A3A40" }} />
            <span
              className="text-[#858590] text-[14px] leading-[20px] shrink-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Or
            </span>
            <div className="flex-1 h-px" style={{ background: "#3A3A40" }} />
          </div>

          {/* Email */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            onClick={onEmailSignUp}
            className="flex items-center justify-center gap-[8px] w-full h-[54px] rounded-[12px] border border-[#32323a] hover:border-[#0088ff]/50 transition-all focus-visible:ring-2 focus-visible:ring-[#0088ff]"
            style={{ background: "rgba(163,163,168,0.05)" }}
          >
            <svg fill="none" height="16" viewBox="0 0 20 16" width="20">
              <path d={MAIL_PATH} fill="#aeaeb5" />
            </svg>
            <span
              className="text-white text-[16px] leading-[24px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Continue with Email
            </span>
          </motion.button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-[4px] pt-[8px]">
          <span
            className="text-[#858590] text-[15px] sm:text-[16px] leading-[24px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Already have an account?
          </span>
          <button
            onClick={() => {}}
            className="text-[#0088ff] text-[15px] sm:text-[16px] leading-[24px] active:opacity-70 transition-opacity font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Log in
          </button>
        </div>
      </div>
    </motion.div>
  );
}

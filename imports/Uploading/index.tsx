import imgImage from "./d16ed43e9a26a54b90aa8c6689570826e50d93c4.png";

interface UploadingProps {
  progress?: number;
}

export default function Uploading({ progress = 20 }: UploadingProps) {
  return (
    <div
      className="bg-[#0d0d0f] flex flex-col items-center justify-between overflow-clip relative w-full h-full"
      data-name="Uploading"
    >
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[24px] items-center justify-center px-[24px] pb-[36px] w-full min-h-0">
        {/* Main container */}
        <div className="flex-1 flex flex-col gap-[56px] items-start w-full min-h-0">
          {/* Video thumbnail card */}
          <div className="relative flex items-end overflow-clip p-[16px] rounded-[12px] w-full h-[315px] shrink-0">
            {/* Background layers */}
            <div className="absolute inset-0 pointer-events-none rounded-[12px]">
              <div className="absolute inset-0 bg-[rgba(163,163,168,0.05)] rounded-[12px]" />
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                src={imgImage}
              />
              {/* Dark overlay matching design */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 rounded-[12px]" />
            </div>
            {/* Video Info text */}
            <div className="relative z-10 flex flex-col gap-[4px] items-start flex-1 min-w-0">
              <p className="font-['Inter',sans-serif] font-bold text-[26px] leading-[39px] text-white w-full">
                Product Launch.mp4
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] text-[#aeaeb5] w-full whitespace-pre-wrap">
                {`1080p  146 MB`}
              </p>
            </div>
          </div>

          {/* Upload info section */}
          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            {/* Upload progress */}
            <div className="flex flex-col gap-[6px] items-start w-full">
              {/* Upload... / progress header */}
              <div className="flex items-center justify-between w-full">
                <span className="font-['Inter',sans-serif] font-medium text-[20px] leading-[30px] text-[#aeaeb5] whitespace-nowrap">
                  Upload...
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[20px] leading-[30px] text-[#aeaeb5] whitespace-nowrap tabular-nums">
                  {progress}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-[8px] bg-[#32323a] rounded-[4px] overflow-hidden">
                <div
                  className="h-full bg-[#0088FF] rounded-[4px] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Close app message */}
            <div className="font-['Inter',sans-serif] font-medium text-[20px] text-[#aeaeb5] w-full">
              <p className="leading-[30px] mb-0">{`You can close the app. `}</p>
              <p className="leading-[30px]">We'll notify you when it's ready.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { memo, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { toast } from "react-toastify";

const CaptionLogs = memo(({ captionLogs }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  if (captionLogs.length === 0) {
    return (
      <div className="mt-[2rem] text-center ">
        <p className="text-xl font-medium">
          You haven't generated any captions yet!
        </p>
        <p className="text-sm mt-1 text-[var(--secondary-text-color)]">
          Let your creativity flow — try generating one now 🥰
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mt-[2rem]">
      <div
        className={`grid ${captionLogs.length > 1 && "grid-cols-2"} gap-[1rem]`}
      >
        {captionLogs.map((caption, index) => {
          return (
            <div
              key={index}
              className="border-[.1rem] border-[var(--secondary-text-color)] min-h-[3rem] rounded-xl flex items-center justify-between px-4 py-2"
            >
              <p className="w-[90%]">{caption}</p>
              <span className="cursor-pointer text-lg">
                <MdContentCopy
                  onClick={() => handleCopy(caption)}
                  title="Copy"
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CaptionLogs;

import { useEffect, useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const messages = [
  "Loading, please wait...",
  "Still loading...",
  "Almost there...",
  "This is taking longer than expected...",
];

export function LoadingSpinner({ msgInterval = 5000, ...props }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => {
        if (prevIndex < messages.length - 1) {
          return prevIndex + 1;
        }

        // Last message, clear interval
        clearInterval(interval);
        return prevIndex;
      });
    }, msgInterval);

    return () => clearInterval(interval);
  }, [msgInterval]);

  const message = messages[messageIndex];

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <LoaderCircleIcon
        size={46}
        {...props}
        className={twMerge("animate-spin text-spillover-700", props.className)}
      />

      <p className="text-slate-400 animate-pulse">{message}</p>
    </div>
  );
}

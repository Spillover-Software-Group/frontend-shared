import { useEffect } from "react";
import { LoaderIcon, RefreshCwIcon } from "lucide-react";

import { useGenerateAIReply } from "./useAI";
import { Button } from "@/ui/Button";
import Option from "./Option";

function Helper({
  type,
  text,
  onOptionSelected,
  loadingMsg,
  children,
  autoRun = true,
  retry = true,
  n = 1,
}) {
  const [generateAIReply, { generatedOptions, loading }] = useGenerateAIReply();

  const run = () => {
    if (text && text.trim().length > 0) {
      generateAIReply(type, text, { n });
    }
  };

  useEffect(() => {
    if (autoRun) run();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4 py-2 px-4 box-border">
      {children}

      {loading ? (
        <div className="text-gray-700 flex flex-row items-center gap-2">
          <LoaderIcon className="animate-spin" />
          {loadingMsg || "Loading..."}
        </div>
      ) : (
        retry && (
          <Button variant="secondary" Icon={RefreshCwIcon} onPress={run}>
            Retry
          </Button>
        )
      )}

      {generatedOptions?.map((option, index) => (
        <Option
          key={index}
          type={type}
          option={option}
          onClick={onOptionSelected}
        />
      ))}
    </div>
  );
}

export default Helper;

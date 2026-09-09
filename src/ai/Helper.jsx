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

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally run once
  useEffect(() => {
    if (autoRun) run();
  }, []);

  return (
    <div className="box-border flex w-full flex-col gap-4 px-4 py-2">
      {children}

      {loading ? (
        <div className="flex flex-row items-center gap-2 text-gray-700">
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
          // biome-ignore lint/suspicious/noArrayIndexKey: list is stable
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

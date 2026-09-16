import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WandSparklesIcon } from "lucide-react";
import * as z from "zod";

import { useGenerateAIReply } from "./useAI";
import { Button } from "@/ui/Button";
import Option from "./Option";

const schema = z.object({
  context: z.string().min(5, "Please provide some more context"),
});

function GenerateCaption({ onOptionSelected }) {
  const [generateAIReply, { generatedOptions, loading }] = useGenerateAIReply();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const contextId = useId();

  const onSubmit = ({ context }) =>
    generateAIReply("post_caption", context, { n: 3 });

  const options = generatedOptions || [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="box-border flex w-full flex-col gap-4 px-4 py-2"
    >
      <div className="flex w-full flex-col gap-1">
        <label className="text-gray-700 text-sm" htmlFor={contextId}>
          Give us some context...
        </label>
        <div className="flex w-full flex-col gap-4">
          <textarea
            id={contextId}
            className="box-border h-20 w-full rounded-md border border-gray-300 p-2"
            {...register("context")}
            // biome-ignore lint/a11y/noAutofocus: intentional
            autoFocus
          />
        </div>
        {errors.context && (
          <div className="text-red-500 text-sm">{errors.context.message}</div>
        )}
      </div>

      <Button
        isLoading={loading}
        isDisabled={loading}
        Icon={WandSparklesIcon}
        onPress={handleSubmit(onSubmit)}
      >
        Generate Caption
      </Button>

      {options.length > 0 && (
        <div className="mt-4 flex w-full flex-col gap-4">
          <div className="text-gray-700">
            Pick an option or try again for new options
          </div>

          {options.map((option, index) => (
            <Option
              // biome-ignore lint/suspicious/noArrayIndexKey: list is stable
              key={index}
              option={option}
              type="post_caption"
              onClick={onOptionSelected}
            />
          ))}
        </div>
      )}
    </form>
  );
}

export default GenerateCaption;

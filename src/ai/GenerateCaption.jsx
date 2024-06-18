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

  const onSubmit = ({ context }) =>
    generateAIReply("post_caption", context, { n: 3 });

  const options = generatedOptions || [];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 py-2 px-4 w-full box-border"
    >
      <div className="w-full flex flex-col gap-1">
        <label className="text-sm text-gray-700">Give us some context...</label>
        <div className="w-full flex flex-col gap-4">
          <textarea
            className="box-border w-full h-20 border border-gray-300 rounded-md p-2"
            {...register("context")}
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
        <div className="w-full flex flex-col gap-4 mt-4">
          <div className="text-gray-700">
            Pick an option or try again for new options
          </div>

          {options.map((option, index) => (
            <Option
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

import { WandSparklesIcon } from "lucide-react";
import { DialogTrigger } from "react-aria-components";

import { Button } from "@/ui/Button";
import { Dialog } from "@/ui/Dialog";
import { Popover } from "@/ui/Popover";
import { AITextHelpers } from "./AITextHelpers";

export function AITextHelpersButton({
  message,
  text,
  onOptionSelected,
  className,
  children,
  tools,
}) {
  return (
    <DialogTrigger>
      <Button
        circle
        Icon={WandSparklesIcon}
        aria-label="AI Text Helpers"
        className={className}
      >
        {children}
      </Button>
      <Popover
        showArrow
        shouldCloseOnInteractOutside={() => false}
        className="w-[340px]"
      >
        <Dialog
          className="p-0 [[data-placement]>&]:p-0"
          aria-label="AI Text Helpers"
        >
          {({ close }) => (
            <AITextHelpers
              tools={tools}
              message={message}
              text={text}
              onOptionSelected={onOptionSelected}
              onCloseButtonClick={close}
            />
          )}
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}

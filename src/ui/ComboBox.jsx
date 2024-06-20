import { useContext } from "react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import {
  ComboBox as AriaComboBox,
  ComboBoxStateContext,
  ListBox,
} from "react-aria-components";

import { Button } from "./Button";
import { Description, FieldError, FieldGroup, Input, Label } from "./Field";
import { DropdownItem, DropdownSection } from "./ListBox";
import { Popover } from "./Popover";
import { composeTailwindRenderProps } from "@/utils";

function ClearButton() {
  const state = useContext(ComboBoxStateContext);

  return (
    state?.selectedKey && (
      <Button
        variant="icon"
        Icon={(props) => <XIcon {...props} size={16} />}
        onPress={() => state?.setSelectedKey(null)}
      />
    )
  );
}

export function ComboBox({
  label,
  description,
  isClearable,
  errorMessage,
  children,
  items,
  ...props
}) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group flex flex-col gap-1",
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup>
        <Input />
        {isClearable && <ClearButton />}
        <Button variant="icon" Icon={ChevronDownIcon} />
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="w-[--trigger-width]">
        <ListBox
          items={items}
          className="outline-0 p-1 max-h-[inherit] overflow-auto [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
}

export function ComboBoxItem(props) {
  return <DropdownItem {...props} />;
}

export function ComboBoxSection(props) {
  return <DropdownSection {...props} />;
}

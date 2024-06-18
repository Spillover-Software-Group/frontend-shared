import { FileDownIcon } from "lucide-react";

import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive"],
    },
  },
  args: {
    isDisabled: false,
    isLoading: false,
    children: "Button",
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const Destructive = {
  args: {
    variant: "destructive",
  },
};

export const Icon = {
  args: {
    variant: "primary",
    Icon: FileDownIcon,
  },
};

export const IconAndText = {
  args: {
    variant: "primary",
    Icon: FileDownIcon,
    children: "Download",
  },
};

export const IconAndLoading = {
  args: {
    variant: "primary",
    Icon: FileDownIcon,
    children: "Download",
    isLoading: true,
  },
};

export const IconAndTextReverse = {
  args: {
    variant: "primary",
    reverse: true,
    Icon: FileDownIcon,
    children: "Download",
  },
};

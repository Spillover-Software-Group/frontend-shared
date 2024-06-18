import { useState } from "react";

import Provider from "@/Provider";
import { AITextHelpers } from "./AITextHelpers";

export default {
  component: AITextHelpers,
  args: {},
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => {
      return (
        <Provider
          mode="development"
          ownerId="1"
          spilloverBusinessId="Z2lkOi8vYWNjb3VudHMvQnVzaW5lc3MvMQ"
        >
          <Story />
        </Provider>
      );
    },
  ],
};

export const Example = (args) => {
  const message = "I love this restaurant!";
  const [text, setText] = useState("Welcome to our restaurant!");

  const onOptionSelected = (option) => {
    setText(option);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg bg-gray-100 rounded-lg p-4">{message}</div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-20 border border-gray-300 rounded-md p-2"
      />

      <AITextHelpers
        {...args}
        message={message}
        text={text}
        onOptionSelected={onOptionSelected}
      />
    </div>
  );
};

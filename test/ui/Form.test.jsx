import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "react-aria-components";

import { Form } from "@/components/ui/Form";
import { TextField } from "@/components/ui/TextField";

describe("Form", () => {
  it("submits the values of the fields it wraps", async () => {
    let submitted = null;

    render(
      <Form
        aria-label="Business"
        onSubmit={(event) => {
          event.preventDefault();
          submitted = Object.fromEntries(new FormData(event.currentTarget));
        }}
      >
        <TextField label="Business name" name="name" />
        <Button type="submit">Save</Button>
      </Form>,
    );

    await userEvent.type(screen.getByLabelText("Business name"), "Cafe Rio");
    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(submitted).toEqual({ name: "Cafe Rio" });
  });

  it("does not submit while a required field is empty", async () => {
    const onSubmit = vi.fn((event) => event.preventDefault());

    render(
      <Form aria-label="Business" onSubmit={onSubmit}>
        <TextField label="Business name" name="name" isRequired />
        <Button type="submit">Save</Button>
      </Form>,
    );

    await userEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(onSubmit).not.toHaveBeenCalled();
  });
});

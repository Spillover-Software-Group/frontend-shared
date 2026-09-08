import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "react-aria-components";

import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
} from "@/components/ui/Field";

describe("Label", () => {
  it("labels the input it is rendered with", () => {
    render(
      <TextField>
        <Label>Business name</Label>
        <Input />
      </TextField>,
    );

    expect(screen.getByLabelText("Business name")).toHaveRole("textbox");
  });
});

describe("Description", () => {
  it("describes the input it is rendered with", () => {
    render(
      <TextField>
        <Label>Business name</Label>
        <Input />
        <Description>Shown on your public page.</Description>
      </TextField>,
    );

    expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
      "Shown on your public page.",
    );
  });
});

describe("FieldError", () => {
  it("shows the error message once the field is invalid", () => {
    render(
      <TextField isInvalid>
        <Label>Business name</Label>
        <Input />
        <FieldError>Enter a business name.</FieldError>
      </TextField>,
    );

    expect(screen.getByText("Enter a business name.")).toBeInTheDocument();
  });

  it("stays out of the document while the field is valid", () => {
    render(
      <TextField>
        <Label>Business name</Label>
        <Input />
        <FieldError>Enter a business name.</FieldError>
      </TextField>,
    );

    expect(
      screen.queryByText("Enter a business name."),
    ).not.toBeInTheDocument();
  });
});

describe("Input", () => {
  it("records what the user types", async () => {
    render(
      <TextField>
        <Label>Business name</Label>
        <Input />
      </TextField>,
    );

    await userEvent.type(screen.getByLabelText("Business name"), "Cafe Rio");

    expect(screen.getByLabelText("Business name")).toHaveValue("Cafe Rio");
  });

  it("is disabled when its field is disabled", () => {
    render(
      <TextField isDisabled>
        <Label>Business name</Label>
        <Input />
      </TextField>,
    );

    expect(screen.getByLabelText("Business name")).toBeDisabled();
  });
});

describe("FieldGroup", () => {
  it("exposes the controls it wraps as one named group", () => {
    render(
      <TextField>
        <Label>Business name</Label>
        <FieldGroup aria-label="Business name">
          <Input />
        </FieldGroup>
      </TextField>,
    );

    expect(
      screen.getByRole("group", { name: "Business name" }),
    ).toContainElement(screen.getByRole("textbox"));
  });
});

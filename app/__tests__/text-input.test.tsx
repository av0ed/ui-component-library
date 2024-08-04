import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TextInput from "../_components/text-input";

describe("Text Input", () => {
  it("renders the badge with the correct text", () => {
    render(<TextInput />);
    const textInputElement = screen.getByText("Label");
    expect(textInputElement).toBeInTheDocument();
  });

  it("applies the correct class", () => {
    render(<TextInput />);
    const textInputElement = screen.getByText("Label");
    expect(textInputElement).toHaveClass("badge--sm badge--danger");
  });
});

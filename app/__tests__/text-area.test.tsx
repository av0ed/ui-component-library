import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TextArea from "../_components/text-area";

describe("Text Area", () => {
  it("renders the text area with the correct text", () => {
    render(<TextArea label="Comment" />);
    const el = screen.getByText("Comment");
    expect(el).toBeInTheDocument();
  });
});

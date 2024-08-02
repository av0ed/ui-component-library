import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Badge from "../_components/badge";

describe("Badge Component", () => {
  it("renders the badge with the correct text", () => {
    render(<Badge classes="badge--sm badge--primary" text="Label" />);
    const badgeElement = screen.getByText("Label");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies the correct class", () => {
    render(<Badge classes="badge--sm badge--danger" text="Label" />);
    const badgeElement = screen.getByText("Label");
    expect(badgeElement).toHaveClass("badge--sm badge--danger");
  });
});

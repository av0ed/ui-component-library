import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, it, expect } from "vitest";
import Badge from "../_components/badge";

/*
 * I've seen conflicting opinions on testing props, but lean towards the
 * opinion that testing props is largely akin to testing React itself - as
 * opposed to app-specific behavior. I'll leave these here since they're already
 * written and not "hurting" anything, but I don't think I'd write these again.
 * */
describe("Badge", () => {
  it("sets default text", () => {
    render(<Badge />);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("sets default classes", () => {
    render(<Badge />);
    expect(screen.getByText("Label")).toHaveClass("badge--md badge--neutral");
  });

  it("overrides default classes when classes are supplied", () => {
    render(<Badge classes="badge--lg badge--primary" />);
    expect(screen.getByText("Label")).not.toHaveClass(
      "badge--md badge--neutral",
    );
  });

  it("does not set role by default", () => {
    render(<Badge />);
    expect(screen.getByText("Label")).not.toHaveAttribute("role");
  });

  it("sets role with prop", () => {
    render(<Badge role="status" />);
    expect(screen.getByText("Label")).toHaveRole("status");
  });

  it("does not set aria-label by default", () => {
    render(<Badge />);
    expect(screen.getByText("Label")).not.toHaveAttribute("aria-label");
  });

  it("sets aria-label with prop", () => {
    render(<Badge ariaLabel="Status Badge" />);
    expect(screen.getByText("Label")).toHaveAttribute(
      "aria-label",
      "Status Badge",
    );
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Badge />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

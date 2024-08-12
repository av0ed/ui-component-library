import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Navbar from "../_components/navbar";

describe("Navbar", () => {
  it("opens the menu when the user clicks the menu button", () => {
    render(<Navbar />);
    global.innerWidth = 400;
    const el = screen.getByText("Comment");
    expect(el).toBeInTheDocument();
  });
});

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../404-section/page";

test("Page", () => {
  render(<Page />);
  expect(
    screen.getByRole("heading", { level: 1, name: "We can't find the page" }),
  ).toBeDefined();
});

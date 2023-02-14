import { render, screen, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { describe, it } from "vitest";
import JoinedPage from "../JoinedPage";
import userEvent from "@testing-library/user-event";

describe("JoinedPage", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the JoinedPage", () => {
    render(<JoinedPage />);
  });

  it("should render buttons handler stories", () => {
    render(<JoinedPage />);

    screen.getByText("Gérer les Stories");
  });
  it("should create new stories", () => {
    render(<JoinedPage />);

    screen.getByText("Gérer les Stories").click();
    userEvent.type(screen.getByText("Gérer les Stories"), "test1");
    screen.getByText("Ajouter Story").click();
  });
});

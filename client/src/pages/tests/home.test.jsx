import { render, screen, cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { describe, it } from "vitest";
import CreationPartieForm from "../../components/CreationPartieForm";
import JoinPartieForm from "../../components/JoinPartieForm";
import Home from "../Home";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the home page", () => {
    render(<Home />);
  });

  it("should render buttons join and create", () => {
    render(<Home />);

    screen.getByText("Créer partie");
    screen.getByText("Rejoindre une partie");
  });

  it("should render the modal when clicking on create", () => {
    render(<Home />);

    screen.getByText("Créer partie").click();
    render(<CreationPartieForm />);
  });

  it("should render the modal when clicking on join", () => {
    render(<Home />);

    screen.getByText("Créer partie").click();
    render(<JoinPartieForm />);
  });
});

import { render, cleanup, screen } from "@testing-library/react";
import { beforeEach, afterEach, describe, expect, it } from "vitest";

import { default as userEvent } from "@testing-library/user-event";

// import JoinedPage from "../JoinedPage";
import Home from "../Home";
// import userEvent from "@testing-library/user-event";

describe("JoinedPage", () => {
  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  it("should create new stories", async () => {
    const test = render(<Home />);
    const createBtn = screen.getAllByRole("button", {
      Name: "creer partie",
    })[0];
    // screen.debug(createBtn);
    await userEvent.click(createBtn);
    const namePartie = screen.getByText("Nom de partie");
    const pseudo = screen.getByText("votre Pseudo");
    // const createBtn2 = screen.getByText("Créer");
    const createBtn2 = screen.getByRole("button", { Name: "Créer" });

    // screen.debug(pseudo);
    await userEvent.type(namePartie, "partie 1 tee");
    await userEvent.type(pseudo, "user 1");
    await userEvent.click(createBtn2);
    // screen.debug(createBtn2);

    // screen.getByText("Gérer les Story").click();
    // screen.getByPlaceholderText("Ajouter Story").type("story 1");
    // screen.getByText("AJOUTER STORY").click();
  });

  // it("should delete stories", () => {
  //   const { screen } = render(<JoinedPage />);

  //   screen.getByPlaceholderText("Ajouter Story").type("story 1");
  //   screen.getByText("AJOUTER STORY").click();
  //   screen.getByText("Supprimer").click();
  // });
});

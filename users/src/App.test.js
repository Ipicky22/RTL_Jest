import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", () => {
    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });

    user.click(nameInput);
    user.keyboard("John Doe");

    user.click(emailInput);
    user.keyboard("johndoe@example.com");

    const button = screen.getByRole("button");

    user.click(button);

    const name = screen.getByRole("cell", { name: "John Doe" });
    const email = screen.getByRole("cell", { name: "johndoe@example.com" });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});

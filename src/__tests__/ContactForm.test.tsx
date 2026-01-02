import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("render the contact form", () => {
  render(<Contact />);
  const contactForm = screen.getByText("Contact Me");
  expect(contactForm).toBeInTheDocument();

  const firstNameInput = screen.getByPlaceholderText("FirstName");
  expect(firstNameInput).toBeInTheDocument();
});

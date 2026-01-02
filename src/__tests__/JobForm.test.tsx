import { render, screen } from "@testing-library/react";
import JobForm from "../components/JobForm";

test("render the job form", () => {
  render(<JobForm />);
  const firstNameInput = screen.getByPlaceholderText("FirstName");
  expect(firstNameInput).toBeInTheDocument();
});

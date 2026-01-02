//my-react-app/src/ __tests__/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} children="Click Me" />);

  const btn = screen.getByText("Click Me");
  fireEvent.click(btn);

  expect(handleClick).toHaveBeenCalledTimes(1);
});



     

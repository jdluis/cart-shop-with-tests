import  React  from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "../App.jsx";

describe("App tests", () => {
  const title = "Cart Shop Component with testing"
  test("should contains the heading 1", () => {
    render(<App />);
    expect(screen.getByText(title)).toBeInTheDocument();
    cleanup()
  });

});

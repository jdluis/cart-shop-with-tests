import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import CartShop from "../components/CartShop";
import productsMock from "../../mocks/productsMock.js";

describe("Cart Tests", () => {
  const mockHandler = jest.fn();

  test("Component without data", () => {
    const titleNoProduct = "Add a Product from the List";
    const component = render(<CartShop productsInCart={[]} />);
    
    expect(component.getByText(titleNoProduct));
  });

  test("Component with data", () => {
    const component = render(
      <CartShop productsInCart={productsMock} />
    );

    expect(
      productsMock.forEach((product) => {
        component.getByText(product.title).toBeInTheDocument;
      })
    );
  });

  test(" Click event to Pay Btn", () => {
    const component = render(<CartShop productsInCart={productsMock} />);
    const button = component.getByText("Process To Pay");

    fireEvent.click(button);

    //Here will check if the modal is open
    //expect(console.log("All By"))

    cleanup();
  });
});

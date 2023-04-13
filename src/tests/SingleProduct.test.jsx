import React from "react";
import { cleanup, fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import SingleProduct from "../components/SingleProduct";
import productsInCartMock from "../../mocks/productsInCartMock.js";

describe("Single Product", () => {
  const productMock = productsInCartMock[0];
  /* const handleAddMock = () => {}; */

  test("Rending component", () => {
    const addToCartBtn = "Add to Cart";
    render(<SingleProduct product={productMock} />);
    expect(
      screen.getByText(productMock.title, productMock.description, addToCartBtn)
    ).toBeInTheDocument();
    cleanup();
  });

  test("Clik Btn", () => {
    const mockHandler = jest.fn()

    const productComponent = render(
      <SingleProduct product={productMock} handleAdd={mockHandler} />
    );

    const Addbtn = productComponent.container.querySelector("button");
    const productName = productMock.title;

    productComponent.debug(); //check what is in the components
    console.log(prettyDOM(Addbtn)); // If we want to check it

    //test click
    fireEvent.click(Addbtn)

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(productComponent.getByText(productName)).toBeInTheDocument();

    cleanup();
  });
});

import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import ListOfProducts from "../components/ListOfProducts";
import productsMock from "../../mocks/productsMock.js";

describe("List Of Products", () => {
  test("Renderizando component", () => {
    const component = render(
      <ListOfProducts products={productsMock} handleAdd={() => {}} />
    );
    component.debug();
    expect(
      productsMock.forEach((product) => {
        screen.getByText(product.title).toBeInTheDocument;
      })
    );

    cleanup();
  });
});

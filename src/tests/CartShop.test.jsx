import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import CartShop from "../components/CartShop";
import productsInCartMock from "../../mocks/productsInCartMock.js"


describe("Cart Tests", () => {
    test("Renderizando component", () => {
        //Tengo que simular que le llega algun dato, ya que length esta como undefined y por ello no me pasa el test
        render(<CartShop productsInCart={productsInCartMock} />)
        cleanup()
    })
})



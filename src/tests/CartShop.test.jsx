import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import CartShop from "../components/CartShop";

describe("Cart Tests", () => {
    test("Renderizando component", () => {
        render(<CartShop />)
    })
})



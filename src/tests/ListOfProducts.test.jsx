import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import ListOfProducts from "../components/ListOfProducts";


describe("List Of Products", () => {
    test("Renderizando component", () => {
        render(<ListOfProducts  />)
        cleanup()
    })
})



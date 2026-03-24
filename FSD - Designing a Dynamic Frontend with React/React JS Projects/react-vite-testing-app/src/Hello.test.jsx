import { render,screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Hello from "./Hello";

describe("Hello Component testing - Suite ",()=> {

    test("Hello component render jsx code ",()=> {
        render(<Hello/>)        // load Hello component in memory 

        let output = screen.getByText("Hello, Vite With JEST!")
        expect(output).toBeInTheDocument();
    })

})
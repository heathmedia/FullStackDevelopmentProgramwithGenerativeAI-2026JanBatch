import { render,screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Login Component testing - Suite ",()=> {

    test("Login component render Login Header ",()=> {
        render(<Login/>)        // load Hello component in memory 

        let output = screen.getByText("Login Page")
        expect(output).toBeInTheDocument();
    })

    test("Login component with validation",async ()=> {
        render(<Login/>)        // load Hello component in memory 

        await userEvent.click(
            screen.getByRole("button",{name:"Login"})
        )

        expect(screen.getByText("All field required")).toBeInTheDocument();
    })

    test("Login component with InValid EmailId or Password",async ()=> {
        render(<Login/>)        // load Hello component in memory 

        let emailIdField = screen.getByPlaceholderText("Enter emailId")    // get reference of email field 
        let passwordField = screen.getByPlaceholderText("Enter password");

        await userEvent.type(emailIdField,"wrong@gmail.com");       // using test we type the email field.
        await userEvent.type(passwordField,"wrong@password");
        
        await userEvent.click(
            screen.getByRole("button",{name:"Login"})
        )

        expect(screen.getByText("InValid EmailId or Password")).toBeInTheDocument();
    })

    test("Login component with Valid EmailId and Password",async ()=> {
        render(<Login/>)        // load Hello component in memory 

        let emailIdField = screen.getByPlaceholderText("Enter emailId")    // get reference of email field 
        let passwordField = screen.getByPlaceholderText("Enter password");

        await userEvent.type(emailIdField,"admin@gmail.com");       // using test we type the email field.
        await userEvent.type(passwordField,"admin@123");
        
        await userEvent.click(
            screen.getByRole("button",{name:"Login"})
        )

        expect(screen.getByText("successfully login")).toBeInTheDocument();
    })
})
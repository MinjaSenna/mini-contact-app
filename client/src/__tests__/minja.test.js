import React from "react"; 
import ReactDOM from "react-dom"; 
import { render, cleanup} from 'react-testing-library'; 
import Register from "../components/auth/Register";  


describe("This is just a test test", () => { 
    test("renders message", () => {
        const {getByText} = render(<Register email="email" /> )

        expect(getByText("email")).toBeInTheDocument()
    })
})
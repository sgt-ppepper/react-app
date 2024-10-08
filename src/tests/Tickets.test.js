/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render } from "@testing-library/react";
 import { MemoryRouter } from "react-router-dom";
 import '@testing-library/jest-dom'
 import Tickets from "../components/Tickets"

 describe("Login", () => {
    test("renders form", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={["/tickets"]}>
                <Tickets />
            </MemoryRouter>
        );

        const filmsComponent = getByText("Buy Tickets");
        expect(filmsComponent).toBeInTheDocument();
    });

    // test("renders soon films", () => {
    //     const { getByText } = render(
    //         <MemoryRouter initialEntries={["/films"]}>
    //             <Films />
    //         </MemoryRouter>
    //     );

        
    //     const soonfilmsComponent = getByText("Скоро на екранах");
    //     expect(soonfilmsComponent).toBeInTheDocument();
    // });

});
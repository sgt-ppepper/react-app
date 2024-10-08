/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render } from "@testing-library/react";
 import { MemoryRouter } from "react-router-dom";
 import '@testing-library/jest-dom'
 import Films from "../components/Films";

 describe("Login", () => {
    test("renders films", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={["/films"]}>
                <Films />
            </MemoryRouter>
        );

        const filmsComponent = getByText("Зараз на екранах кінотеатру");
        expect(filmsComponent).toBeInTheDocument();
        const soonfilmsComponent = getByText("Скоро на екранах");
        expect(soonfilmsComponent).toBeInTheDocument();
    });

    test("renders soon films", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={["/films"]}>
                <Films />
            </MemoryRouter>
        );

        
        const soonfilmsComponent = getByText("Скоро на екранах");
        expect(soonfilmsComponent).toBeInTheDocument();
    });

});
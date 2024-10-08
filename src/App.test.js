/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import '@testing-library/jest-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';

describe("App component", () => {
    test("renders header and footer", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const headerElement = getByTestId("header");
        const footerElement = getByTestId("footer");

        expect(headerElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
    });

    test("renders home page component when the path is /home", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={["/"]}>
                <Main />
            </MemoryRouter>
        );

    });

    test("renders account component when the path is /account", () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={["/user"]}>
                <Account />
            </MemoryRouter>
        );

        const accountComponent = getByText("User Info");
        expect(accountComponent).toBeInTheDocument();
    });

    // test("renders booking component when the path is /booking", () => {
    //     const { getByTestId } = render(
    //         <MemoryRouter initialEntries={["/booking"]}>
    //             <Booking />
    //         </MemoryRouter>
    //     );

    //     const bookingComponent = getByTestId("booking");
    //     expect(bookingComponent).toBeInTheDocument();
    // });

    // test("renders contact-us component when the path is /contact-us", () => {
    //     const { getByTestId } = render(
    //         <MemoryRouter initialEntries={["/contact-us"]}>
    //             <ContactUs />
    //         </MemoryRouter>
    //     );

    //     const contactUsComponent = getByTestId("contact-us");
    //     expect(contactUsComponent).toBeInTheDocument();
    // });

    // test("renders edit user component when the path is /edit-user", () => {
    //     const { getByTestId } = render(
    //         <MemoryRouter initialEntries={["/edit-user"]}>
    //             <EditUser />
    //         </MemoryRouter>
    //     );

    //     const editUserComponent = getByTestId("edit-user");
    //     expect(editUserComponent).toBeInTheDocument();
    // });

    test("renders login component when the path is /login", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/login"]}>
                <Login />
            </MemoryRouter>
        );

        const loginComponent = getByTestId("login");
        expect(loginComponent).toBeInTheDocument();
    });

    // Add more tests for other routes/components as needed
});
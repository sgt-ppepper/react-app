/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../components/Login";

jest.mock("axios");

describe("Login", () => {
    
    test("submit login form successfuly", async () => {
        // const mockedResponse = {
        //     data: {
        //         message: "You successfully signed in",
        //     },
        // };
        // axios.get.mockResolvedValue(mockedResponse);
        const mockFn = jest.fn();
        const { getByLabelText, getByText } = render(
            <Router>
                <Login handleSumbit={mockFn} />
            </Router>
        );

        const usernameInput = getByLabelText("Email");
        const passwordInput = getByLabelText("Password");
        const submitButton = getByText("Login");

        fireEvent.change(usernameInput, { target: { value: "testtest@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "123456" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(
                "http://localhost:5000/api/v1/user/login",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "Authorization": "Basic dGVzdHRlc3RAZ21haWwuY29tOjEyMzQ1Ng==",
                    },
                }
            );
        });
    });
});
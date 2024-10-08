/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import axios from "axios";
import Register from "../components/Register";


// function sendFormData(formData) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', "http://localhost:5000/api/v1/user"); // Замініть '/api/endpoint' на ваш URL для відправки даних на бекенд
//         XHR.setRequestHeader('Content-Type', 'application/json');

//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(new Error(`Request failed with status ${xhr.status}`));
//             }
//         };

//         xhr.onerror = () => {
//             reject(new Error('Request failed'));
//         };

//         xhr.send(formData);
//     });
// }

// jest.mock("sendFormData");
jest.mock("axios")

describe("Register", () => {
    it("should handle form submission and display success message", async () => {
        const mockedResponse = {
            data: {
                message: "User successfully created",
            },
        };
        axios.post.mockResolvedValue(mockedResponse);

        const { getByLabelText, getByText, getByTestId } = render(<Register />);

        // Fill in the form fields

        fireEvent.change(getByLabelText("Enter your first name"), {
            target: { value: "testuser" },
        });

        fireEvent.change(getByLabelText("Enter your last name"), {
            target: { value: "testuser" },
        });

        fireEvent.change(getByLabelText("Enter your email"), {
            target: { value: "testuser@gmail.com" },
        });

        fireEvent.change(getByLabelText("Create password"), {
            target: { value: "testuser" },
        });

        fireEvent.change(getByLabelText("Confirm password"), {
            target: { value: "testuser" },
        });

        fireEvent.change(getByTestId('select-option'), { target: { value: 2 } })

        // Submit the form
        fireEvent.click(getByText("Register Now"));

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(
                "http://localhost:5000/api/v1/user",
                expect.any(Object),
                expect.any(Object)
            );
        });
    });  
});      
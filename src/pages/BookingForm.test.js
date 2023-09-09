import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// TODO: increase code coverage
describe("BookingForm", () => {
  it("should render the form and handle form submission", () => {
    const tree = render(<BookingForm />);
    expect(tree).toMatchSnapshot();

    // Find form elements
    const firstNameInput = tree.getByLabelText(/first name/i);
    const lastNameInput = tree.getByLabelText(/last name/i);
    const emailInput = tree.getByLabelText(/email/i);
    const dateInput = tree.getByLabelText(/date/i);
    const timeSelect = tree.getByLabelText(/time/i);
    const guestsInput = tree.getByLabelText(/guests/i);
    const occasionSelect = tree.getByLabelText(/occasion/i);
    const submitButton = tree.getByText(/confirm reservation/i);

    // Fill in form fields
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(dateInput, { target: { value: "2023-06-01" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    // Expected form field values
    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("johndoe@example.com");
    expect(dateInput.value).toBe("2023-06-01");
    expect(timeSelect.value).toBe("17:00");
    expect(guestsInput.value).toBe("2");
    expect(occasionSelect.value).toBe("birthday");

    // Submit the form
    fireEvent.click(submitButton);
  });
});

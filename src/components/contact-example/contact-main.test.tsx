import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Contacts from "./index";

describe("Contact Main", () => {
	beforeEach(() => {
		render(<Contacts />);
	});

	test("Contact List title", () => {
		const contactsElement = screen.queryByText("Contact List");

		expect(contactsElement).toBeInTheDocument();
		expect(contactsElement).toBeVisible();
	});

	test("Contact List add contact", () => {
		const nameStep1 = "chiva";
		const nameStep2 = "lrous";
		const phone = "0 555 444 33 22";

		const inputName = screen.queryByPlaceholderText("Cantact Name");
		inputName && UserEvent.type(inputName, nameStep1);
		inputName && UserEvent.type(inputName, nameStep2);

		const inputPhone = screen.queryByPlaceholderText("Phone Number");
		inputPhone && UserEvent.type(inputPhone, phone);

		const addButton = screen.queryByText("Add");
		addButton && UserEvent.click(addButton);

		const nameDisplayElement = screen.queryByText(nameStep1 + nameStep2);
		const phoneDisplayElement = screen.queryByText(phone);

		expect(inputName).toBeInTheDocument();
		expect(inputName).toBeVisible();

		expect(inputPhone).toBeInTheDocument();
		expect(inputPhone).toBeVisible();

		expect(addButton).toBeInTheDocument();
		expect(addButton).toBeVisible();

		expect(nameDisplayElement).toBeInTheDocument();
		expect(nameDisplayElement).toBeVisible();

		expect(phoneDisplayElement).toBeInTheDocument();
		expect(phoneDisplayElement).toBeVisible();

		expect(inputName?.innerHTML).toEqual("");
		expect(inputPhone?.innerHTML).toEqual("");
	});

	test("Contact List filter", () => {
		const nameStep1 = "chiva";
		const nameStep2 = "lrous";
		const phone = "0 555 444 33 22";

		const inputName = screen.queryByPlaceholderText("Cantact Name");
		inputName && UserEvent.type(inputName, nameStep1);
		inputName && UserEvent.type(inputName, nameStep2);

		const inputPhone = screen.queryByPlaceholderText("Phone Number");
		inputPhone && UserEvent.type(inputPhone, phone);

		const addButton = screen.queryByText("Add");
		addButton && UserEvent.click(addButton);

		const filterInput = screen.queryByPlaceholderText("Cantact Filter");
		filterInput && UserEvent.type(filterInput, nameStep1);

		const nameDisplayElement = screen.queryByText(nameStep1 + nameStep2);
		const phoneDisplayElement = screen.queryByText(phone);

		expect(inputName).toBeInTheDocument();
		expect(inputName).toBeVisible();

		expect(inputPhone).toBeInTheDocument();
		expect(inputPhone).toBeVisible();

		expect(addButton).toBeInTheDocument();
		expect(addButton).toBeVisible();

		expect(nameDisplayElement).toBeInTheDocument();
		expect(nameDisplayElement).toBeVisible();

		expect(phoneDisplayElement).toBeInTheDocument();
		expect(phoneDisplayElement).toBeVisible();

		expect(inputName?.innerHTML).toEqual("");
		expect(inputPhone?.innerHTML).toEqual("");
	});
});

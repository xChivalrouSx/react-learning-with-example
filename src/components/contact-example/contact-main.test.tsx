import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Contacts from "./index";

describe("Contact Main", () => {
	beforeEach(() => {
		render(<Contacts />);
	});

	test("Contact List title", () => {
		var contactsElement = screen.queryByText("Contact List");

		expect(contactsElement).toBeInTheDocument();
		expect(contactsElement).toBeVisible();
	});
});

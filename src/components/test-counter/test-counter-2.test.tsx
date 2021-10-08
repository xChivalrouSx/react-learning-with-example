import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestCounter from "./index";

describe("Counter Tests", () => {
	var dom;
	var numberElement: HTMLElement | null;

	var number = 1;

	beforeAll(() => {
		console.log("Tests are running...");
	});

	afterAll(() => {
		console.log("Tests are done...");
	});

	beforeEach(() => {
		console.log("Test-" + number + " is running...");

		dom = render(<TestCounter />);
		numberElement = dom.container.querySelector("#numberValue");
	});

	afterEach(() => {
		console.log("Test-" + number++ + " is done...");
	});

	test("increase btn", () => {
		const increaseBtn = screen.getByText("Increase");
		userEvent.click(increaseBtn);

		expect(numberElement?.textContent).toBe("1");
	});

	test("Decrease btn", () => {
		const decreaseBtn = screen.getByText("Decrease");
		userEvent.click(decreaseBtn);

		expect(numberElement?.textContent).toBe("-1");
	});
});

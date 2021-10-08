import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestCounter from "./index";

test("increase btn", () => {
	render(<TestCounter />);

	const numberElement = screen.getByText("0");
	const increaseBtn = screen.getByText("Increase");

	userEvent.click(increaseBtn);

	expect(numberElement.textContent).toBe("1");
});

test("Decrease btn", () => {
	const dom = render(<TestCounter />);

	const numberElement = dom.container.querySelector("#numberValue");
	const decreaseBtn = screen.getByText("Decrease");

	userEvent.click(decreaseBtn);

	expect(numberElement?.textContent).toBe("-1");
});

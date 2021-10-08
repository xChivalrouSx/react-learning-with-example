import { useState } from "react";

const TestComponent = () => {
	const [number, setNumber] = useState(0);

	return (
		<div>
			<div
				id="numberValue"
				style={{ textAlign: "center", marginTop: "20px" }}
			>
				{number}
			</div>
			<hr />
			<button onClick={() => setNumber(number + 1)}>Increase</button>
			<button onClick={() => setNumber(number - 1)}>Decrease</button>
		</div>
	);
};

export default TestComponent;

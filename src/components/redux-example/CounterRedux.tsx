import React from "react";
import { useSelector } from "react-redux";

const CounterRedux = () => {
	const counterValue = useSelector((state: any) => state.counter.value);

	return (
		<div>
			<h1>{counterValue}</h1>
		</div>
	);
};

export default CounterRedux;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	customIncrement,
	decrement,
	increment,
} from "../../redux/counter/counterSlice";

const CounterRedux = () => {
	const counterValue = useSelector((state: any) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{counterValue}</h1>

			<hr />
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				Decreasing
			</button>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				Increasing
			</button>
			<button
				onClick={() => {
					dispatch(customIncrement(2));
				}}
			>
				Increasing (2)
			</button>
		</div>
	);
};

export default CounterRedux;

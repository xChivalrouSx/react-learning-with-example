import { useTheme } from "../../context/ThemeContext";

const ContexTestButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<button
				onClick={() => {
					setTheme(theme === "Light" ? "Dark" : "Light");
				}}
			>
				Change Theme
			</button>
			<br />
			<br />
			<div>Button Theme ({theme})</div>
		</div>
	);
};

export default ContexTestButton;

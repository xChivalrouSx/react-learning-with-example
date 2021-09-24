import { ThemeProvider } from "../../context/ThemeContext";
import Container from "./Container";

const ContextTest = () => {
	return (
		<ThemeProvider>
			<Container />
		</ThemeProvider>
	);
};

export default ContextTest;

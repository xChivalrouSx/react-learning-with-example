import { useTheme } from "../../context/ThemeContext";
import ContextTestButton from "./ContexTestButton";
import ContextTestHeader from "./ContextTestHeader";

const Container = () => {
	const { theme } = useTheme();

	return (
		<div className={theme}>
			<br />
			<br />
			<ContextTestHeader />
			<hr />
			<br />
			<ContextTestButton />
		</div>
	);
};

export default Container;

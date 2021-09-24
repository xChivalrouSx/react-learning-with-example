import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ContextTestButton from "./ContexTestButton";
import ContextTestHeader from "./ContextTestHeader";

const Container = () => {
	const { theme } = useContext(ThemeContext);

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

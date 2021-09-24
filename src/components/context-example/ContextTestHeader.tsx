import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const ContextTestHeader = () => {
	const context = useContext(ThemeContext);

	return <div>Header Theme : {context.theme}</div>;
};

export default ContextTestHeader;

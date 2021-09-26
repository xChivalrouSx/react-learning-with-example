import { useTheme } from "../../context/ThemeContext";

const ContextTestHeader = () => {
	const { theme } = useTheme();

	return <div>Header Theme : {theme}</div>;
};

export default ContextTestHeader;

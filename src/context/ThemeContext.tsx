import { createContext, useEffect, useState } from "react";

interface ContextValue {
	theme: string;
	setTheme: (theme: string) => void;
}

const defaultContextValues: ContextValue = {
	theme: "Dark",
	setTheme: (theme: string) => {
		console.log(theme);
	},
};

const ThemeContext = createContext(defaultContextValues);

export const ThemeProvider = (props: { children: any }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "Dark");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);
	const values: ContextValue = {
		theme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={values}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;

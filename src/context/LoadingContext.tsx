import { createContext, useContext, useState } from "react";

interface ContextValue {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

const defaultContextValues: ContextValue = {
	isLoading: false,
	setIsLoading: (isLoading: boolean) => {},
};

const LoadingContext = createContext(defaultContextValues);

const LoadingProvider = (props: { children: any }) => {
	const [isLoading, setIsLoading] = useState(false);

	const values: ContextValue = {
		isLoading,
		setIsLoading,
	};

	return (
		<LoadingContext.Provider value={values}>
			{isLoading && (
				<div
					className="d-flex justify-content-center"
					style={{
						zIndex: 5000,
						display: "flex",
						position: "absolute",
						top: "50%",
						left: "50%",
						marginTop: -20 / 2,
						marginLeft: -20 / 2,
					}}
				>
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
			{props.children}
		</LoadingContext.Provider>
	);
};

const useLoading = () => useContext(LoadingContext);

export { useLoading, LoadingProvider };

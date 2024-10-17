import { createContext, useState } from "react";

// Type Definition for the actual Context
interface ThemeContextType {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

// Create the actual context (and set the context's initial/default values)
export const ThemeContext = createContext<ThemeContextType|null>(null);

interface ThemeContextProviderProps {
	children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;

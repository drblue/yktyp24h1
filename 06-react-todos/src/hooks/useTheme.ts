import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) {
		throw new Error("🚔 Trying to use Theme Context outside of provider");
	}

	return themeContext;
}

export default useTheme;

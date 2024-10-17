import Button from "react-bootstrap/Button";
import useTheme from "../hooks/useTheme";

const HomePage = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<>
			<h1>Welcome to Better Todos!</h1>

			{isDarkMode ? "🌙 Nighttime!" : "🌞 Daytime!!"}

			<p>Because when you're life is on fire 🔥, you need a todo list 📝.</p>

			<Button onClick={toggleTheme} variant="primary">
				Toggle theme
			</Button>
		</>
	)
}

export default HomePage

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</BrowserRouter>
	</StrictMode>,
)

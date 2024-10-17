import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext.tsx'
import App from './App.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>,
)

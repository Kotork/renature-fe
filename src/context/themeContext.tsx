import React from 'react'

export const ThemeContext = React.createContext({ theme: "light" })

export const ThemeContextProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = React.useState('light')
	const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

	return (
		<ThemeContext.Provider value={{ theme/*, toggleTheme*/ }} >
			{children}
		</ThemeContext.Provider>
	)
}

//Custom hook
export const useThemeContext = () => {
	const context = React.useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useThemeContext must be used within a ThemeProvider')
	}

	return context
}